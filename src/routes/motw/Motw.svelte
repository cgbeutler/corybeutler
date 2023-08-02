<script lang="ts">
    import { characters } from "../../lib/stores";
    import { navigate } from "svelte-routing";
    import { derived, get } from "svelte/store";
    import { NIL } from "uuid";
    import MotwCharacter from "./character/MotwCharacter.svelte";

    //characters.subscribe(...) // subscribe to changes
    //characters.update(...) // update value
    //characters.set(...) // set value

    // get(characters) // read value
    let charList = $characters; // read value with automatic subscription
    // $: names = charList.map((c) => c.name);
    // $: charList = derived(Object.values($characters), (n) => n);
    // $: names = $charList.map((c) => c.name);

    let charName = "";

    function goToNewCharacter() {
        var id = characters.create();
        if (id == NIL) {
            console.log("Got nil from create character");
            return;
        }
        console.log("Navigating to '/motw/character/" + id + "'");
        navigate("/motw/character/" + id);
    }
</script>

<div class="page">
    <h1>Monster of the Week Characters</h1>

    {#if Object.keys(charList).length == 0}
        No characters exist yet.
        <button class="button-outlined" on:click={goToNewCharacter}>
            Create New Character
        </button>
    {:else}
        <br />
        <button class="button-outlined" on:click={goToNewCharacter}>
            Create New Character
        </button>
        <br /><br />
        {#each Object.entries(charList) as [id, character]}
            <li>{get(character).name}</li>
        {/each}
    {/if}
</div>

<style>
</style>
