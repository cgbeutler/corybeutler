<script lang="ts">
    import type { SvelteComponent } from 'svelte';
    import Die from './Die.svelte'

    let nextId = 0
    let diceData :Array<{id :number, sides :number, result :number, active :boolean}> = []
    let diceComps :Array<SvelteComponent> = []
    function addDie( sides :number ) {
        diceData = diceData.concat({
            id: nextId++,
            sides: sides,
            result: 0,
            active: false
        })
        updateResults();
    }
    function removeAll() { diceData = []; updateResults(); }
    function removeActive() { diceData = diceData.filter( d => !d.active ); updateResults(); }
    // Handle die removal with null scan
	$: diceComps = diceComps.filter( c => c );


    // Aggregate the current selection whenever it changes
    let activeDice = { all: 0 }
    $: activeDice = diceData.reduce( (prev,curr) => {
        if (!curr.active) return prev;
        prev.all = prev.all +1;
        if (prev.hasOwnProperty( curr.sides )) prev[curr.sides] = prev[curr.sides] + 1;
        else prev[curr.sides] = 1;
    }, { all: 0 } )

    let rollSum :number = 0;
    function updateResults() {
        rollSum = diceData.reduce( (prev,curr) => {
            return prev + curr.result ?? 0;
        }, 0 );
    }

    function rollAll() {
        diceComps.filter( d => d ).forEach( d => d.roll() )
        updateResults();
    }

    function rollActive() {
        diceComps.filter( d => d ).forEach( d => d.rollIfActive() )
        updateResults();
    }
</script>


<div class="content-box">
    <h1>Dice Roller</h1>
    <p>Note: Work in progress. Will look prettier eventually.</p>
    
    <div class="dice-box">
        {#each [2,4,6,8,10,12,20] as s}
            <button type="button" class="button-outlined die d{s}-slot" on:click={()=>addDie(s)}> {activeDice[s] ?? 0}d{s} </button>
        {/each}
        <button type="button" class="button-outlined die dF-slot" on:click={()=>addDie(-1)}> {activeDice[-1] ?? 0}dF </button>
    </div>
    
    <div class="dice-box">
        {#each diceData as die, i (die.id)}
            <Die bind:this={diceComps[i]} sides={die.sides} bind:result={die.result} bind:active={die.active} />
        {/each}
    </div>

    <div class="d-flex justify-content-center mb-4">
        <button class="button-outlined" disabled={diceData.length <= 0} on:click={rollAll}> Roll All </button>
        <button class="button-outlined" disabled={(activeDice.all ?? 0) <= 0} on:click={rollActive}> Roll {activeDice.all ?? 0} </button>
    </div>
    <div class="d-flex justify-content-center mb-4">
        <button class="button-outlined" disabled={diceData.length <= 0} on:click={removeAll}> Remove All </button>
        <button class="button-outlined" disabled={(activeDice.all ?? 0) <= 0} on:click={removeActive}> Remove {activeDice.all ?? 0} </button>
    </div>

    <h2 class="text-center"> Total: {rollSum} </h2>
    <div class="grid-c4">
        {#each {length: 5} as _, i}
            <h4 class="grid-item"> [{-(i+1)}]:&nbsp;&nbsp;{rollSum-(i+1)} </h4>
            <h4 class="grid-item"> [+{i+1}]:&nbsp;&nbsp;{rollSum+i+1} </h4>
            <h4 class="grid-item"> [+{i+6}]:&nbsp;&nbsp;{rollSum+i+6} </h4>
        {/each}
    </div>
</div>

<style>

.button-outlined {
    display: inline-flex;
    background-color: transparent;
    color: rgb(204, 204, 204);
    border: 2px solid rgb(204, 204, 204);
    border-radius: 10%;
    margin: 5px;
    padding: 5px;
    align-items: center;
    justify-content: center;
}

.dice-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 60px;
    margin: 10px;
}

.die {
    width: 50px;
    height: 50px;
}

.grid-c4 {
    display: grid;
    grid-template-columns: auto auto auto;
}
.grid-item {
    margin: 0;
    padding: 0;
}

</style>