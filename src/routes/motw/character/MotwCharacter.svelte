<script lang="ts">
    import { characters } from '../../../lib/stores'
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
    import { NIL, validate } from 'uuid';
    import { get } from 'svelte/store';
    import type { MotwCharacter } from '../../../lib/MotwCharacter';

    export let id: string = NIL;
    $: console.log( "id = '" + id + "'" )

    let charList = $characters
    $: character = charList[id]
    // characters.subscribe( chars => {
    //     character = chars[id]
    //     if (!validate(id) || id == NIL || !chars.hasOwnProperty(id)) {
    //         console.log( "Failed to load character with id '" + id + "' or character was deleted" );
    //         navigate( "/motw", { replace: true } );
    //         return;
    //     }
    //     console.log( "Updated char '" + character + "' that has id '" + character.id + "' and name '" + character.name + "'" )
    // })

    // TODO: Figure out how to nav back when in invalid id
    // onMount(async () => {
    //     if (!validate(id) || id == NIL) {
    //         console.log( "Failed to load character with id '" + id + "'" );
    //         navigate( "/motw" );
    //         return;
    //     }
    //     if (!(get(character)) || !(get(characters)[id])) {
    //         console.log( "Failed to load character with id '" + id + "' or character was deleted" );
    //         navigate( "/motw", { replace: true } );
    //     }


    //     // character = get(characters)[id];
    //     // console.log( "Updated char '" + character + "'" )
    //     // // if (!validate(id) || id == NIL || !chars.hasOwnProperty(id)) {
    //     // //     console.log( "Failed to load character with id '" + id + "'" );
    //     // //     navigate( "/motw" );
    //     // //     return;
    //     // // }
    // });
    let nameInput;
    $: if (nameInput) nameInput.style.width = $character.name.length + "ch";
</script>


<div class="page">
    <input id="name-input" bind:this={nameInput} bind:value={$character.name}><button class="edit-button" on:click={()=>nameInput.focus()}></button>
</div>

<style>

#name-input {
    font-size: x-large;
    text-align: center;
    min-width: 10px;
    border: 0;
    background-color: transparent;
}
#name-input {
    font-size: x-large;
    min-width: 10px;
}

.edit-button {
    width: 1em;
    height: 1em;
    padding: 0;
    background-color: transparent;
    background-image: url("/img/pencil.svg");
    background-repeat: no-repeat;
    background-position: center;
}

</style>