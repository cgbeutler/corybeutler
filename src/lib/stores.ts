// import { persisted } from 'svelte-local-storage-store'
import { MotwCharacter } from './MotwCharacter'
import { validate, v4 as uuidv4, NIL } from 'uuid';
import { get, writable, type Writable } from 'svelte/store'

const MotwKeyPrefix = "MotwCharacters/"


function loadMotwCharacter(id: string) {
  const key = MotwKeyPrefix + id
  const store = writable(new MotwCharacter(id));
  const { subscribe, set, update } = store;
  const isBrowser = typeof window !== 'undefined';
  console.log("IsBrowser: " + isBrowser)

  if (isBrowser) {
    const raw = localStorage.getItem(key)
    if (raw !== null) {
      console.log( "Loading char " + raw )
      set(JSON.parse(raw) as MotwCharacter)
    }
    else {
      console.log( "New char" )
      localStorage.setItem(key, JSON.stringify(get(store)))
    }
  }

  return {
    subscribe,
    set: newChar => {
      console.log( "Set char" )
      if (isBrowser) { localStorage.setItem(key, JSON.stringify(newChar)) }
      set(newChar);
    },
    update: updater => {
      console.log( "Update char" )
      const updatedStore = updater(get(store));
  
      if (isBrowser) { localStorage.setItem(key, JSON.stringify(updatedStore)) }
      set(updatedStore);
    },
  };
}


function loadMotwCharacters() {
  var characters: { [id: string]: Writable<MotwCharacter> } = {};

  // Iterate over localStorage for characters
  for (var i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (!key.startsWith(MotwKeyPrefix)) { continue }

    const id = key.substring(MotwKeyPrefix.length)
    characters[id] = loadMotwCharacter(id)
  }

  const { subscribe, set, update } = writable(characters)

  return {
    subscribe,
    refresh: () => {
      // Remove old, dead values
      for (const id of Object.keys(characters)) {
        const key = MotwKeyPrefix + id
        if (localStorage.getItem(key) === null) { characters[id] = undefined }
      }
      // Add any missing
      for (var i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (!key.startsWith(MotwKeyPrefix)) { continue }

        let id = key.substring(MotwKeyPrefix.length)
        let character = characters[id]
        if (character === undefined) { characters[id] = loadMotwCharacter(id) }
      }
    },
    create: () => {
      let newId: string = uuidv4();
      update(chars => {
        for (let i = 0; i < 100; i++) {
          if (!chars.hasOwnProperty(newId)) break;
          newId = String(uuidv4());
        }
        const key = MotwKeyPrefix + newId;
        if (chars.hasOwnProperty(newId)) { console.error("Could not find spare id"); newId = NIL }
        if (localStorage.getItem(key) !== null) { console.error("Was in store, but not dict"); newId = NIL; }
        else { chars[newId] = loadMotwCharacter(newId) }
        return chars;
      })
      return newId;
    },
    findById: (id: string): Writable<MotwCharacter> => {
      var character = characters[id]
      if (character === undefined) { console.log("No character found at '" + id + "'"); return null }
      return character
    },
    delete: (id: string) => {
      let key = MotwKeyPrefix + id;
      if (localStorage.getItem(key) === null) { console.log("No character found at '" + key + "'") }
      else { localStorage.removeItem(key); console.log("Character deleted from local store '" + key + "'") }

      update(chars => {
        if (!chars.hasOwnProperty(id)) { console.error("Character store did not have id '" + id + "'") }
        else { delete chars[id]; }
        return chars;
      })
    }
  };
}

export const characters = loadMotwCharacters();

// // Key 'characters' and initial value
// export const characters: Writable<{[id: string]: MotwCharacter}> = persisted( 'characters', {} )

// export function createCharacter(): string {
//     let newId = uuidv4();
//     characters.update( chars => {
//         for (let i = 0; i < 100; i++) {
//             if (!chars.hasOwnProperty( newId )) break;
//             newId = String( uuidv4() );
//         }
//         if (chars.hasOwnProperty(newId)) { newId = NIL; return; }
//         let newChar = new MotwCharacter( newId );
//         chars[newId] = newChar;
//         newId = newId
//         return chars;
//     } )
//     return newId;
// }
// export function deleteCharacter(id: string): boolean {
//     let result = false;
//     characters.update( chars => {
//         if (chars.hasOwnProperty(id)) { delete chars[id]; result = true; }
//         return chars;
//     } )
//     return result;
// }

