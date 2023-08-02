<script lang="ts">
    import { characters } from '../../../lib/stores'
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
    import { NIL, validate } from 'uuid';
    import { get } from 'svelte/store';
    import type { MotwCharacter } from '../../../lib/MotwCharacter';

    export let id: string = NIL;
    $: console.log( "id = '" + id + "'" )

    // let chars = $characters // read value with automatic subscription
    $: characterStore = $characters[id]
    $: character = $characterStore
    let displayName = "Unnamed Character"
    $: character.name && (displayName = character.DisplayName)
    // characters.subscribe( chars => {
    //     character = chars[id]
    //     if (!validate(id) || id == NIL || !chars.hasOwnProperty(id)) {
    //         console.log( "Failed to load character with id '" + id + "' or character was deleted" );
    //         navigate( "/motw", { replace: true } );
    //         return;
    //     }
    //     console.log( "Updated char '" + character + "' that has id '" + character.id + "' and name '" + character.name + "'" )
    // })

    // $: character = chars[id]
    $: console.log( "character = '" + character + "'" )
    $: console.log( "name = '" + character?.name + "'" )

    onMount(async () => {
        if (!validate(id) || id == NIL) {
            console.log( "Failed to load character with id '" + id + "'" );
            navigate( "/motw" );
            return;
        }
        if (!(character) || !(get(characters)[id])) {
            console.log( "Failed to load character with id '" + id + "' or character was deleted" );
            navigate( "/motw", { replace: true } );
        }


        // character = get(characters)[id];
        // console.log( "Updated char '" + character + "'" )
        // // if (!validate(id) || id == NIL || !chars.hasOwnProperty(id)) {
        // //     console.log( "Failed to load character with id '" + id + "'" );
        // //     navigate( "/motw" );
        // //     return;
        // // }
    });
</script>


<div class="page">
    <h1>{(character.name == null || character.name == "") ? "Unnamed Character" : character.name }</h1>
    <input bind:value={character.name}>
</div>

<style>


</style>