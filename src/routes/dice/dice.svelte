<script lang="ts">
    import D6 from './d6.svelte'

    let nextId = 0
    let diceIds = []
    let diceComps = []
    function addDie( sides :number ) {
        diceIds = diceIds.concat({
            id: nextId++,
            sides: sides,
            result: 0,
            active: false
        })
    }
    function removeActive() { diceIds = diceIds.filter( d => !d.active ) }
    // Handle die removal with null scan
	$: diceComps = diceComps.filter( c => c );


    let activeCount = 0
    $: activeCount = diceIds.reduce( (prev,curr) => prev + (curr.active?1:0), 0 )

    let resultText :string = "";
    function updateResults() {
    //     dice.foreach( d => {
    //         if (d == "snake") { snakes++; }
    //         else if (d == "fish") { fish++; }
    //         else if (d == "bat") { bats++; }
    //     } )
    //     var parts = [];
    //     if (snakes > 0) { parts.push( `${snakes}\xa0snake${snakes == 1? "":"s"}` ); }
    //     if (fish > 0) { parts.push( `${fish}\xa0fish` ); }
    //     if (bats > 0) { parts.push( `${bats}\xa0bat${bats == 1? "":"s"}` ); }
    //     var whole = [ parts.join( "\xa0\xa0" ) ];
    //     parts = [];
    //     var pips = snakes+fish;
    //     var rings = bats+fish;
    //     if (pips > 0) { parts.push( `${pips}\xa0pip${pips == 1? "":"s"}` ); }
    //     if (rings > 0) { parts.push( `${rings}\xa0ring${rings == 1? "":"s"}` ); }
    //     whole.push( parts.join( "\xa0\xa0" ) );
    //     resultText = whole.join( "\r\n" );
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
    <div id="main-title" class="mb-4">Dice Roller</div>
    
    <div class="d-flex justify-content-center mb-4 gap-2">
        <button type="button" class="d2-slot" on:click={()=>addDie(2)}> d2 </button>
        <button type="button" class="d4-slot" on:click={()=>addDie(4)}> d4 </button>
        <button type="button" class="d6-slot" on:click={()=>addDie(6)}> d6 </button>
        <button type="button" class="d8-slot" on:click={()=>addDie(8)}> d8 </button>
        <button type="button" class="d10-slot" on:click={()=>addDie(10)}> d10 </button>
        <button type="button" class="d12-slot" on:click={()=>addDie(12)}> d12 </button>
        <button type="button" class="d20-slot" on:click={()=>addDie(20)}> d20 </button>
        <button type="button" class="dF-slot" on:click={()=>addDie(-1)}> dF </button>
    </div>
    
    <div class="d-flex justify-content-center mb-4 gap-2">
        {#each diceIds as die, i (die.id)}
            {#if die.sides === 2}
                <!-- <D2 bind:this={diceComps[i]} /> -->
            {:else if die.sides === 4}
                <!-- <D4 bind:this={diceComps[i]} /> -->
            {:else if die.sides === 6}
                <D6 bind:this={diceComps[i]} bind:result={die.result} bind:active={die.active} />
            {:else if die.sides === 8}
                <!-- <D8 bind:this={diceComps[i]} /> -->
            {:else if die.sides === 10}
                <!-- <D10 bind:this={diceComps[i]} /> -->
            {:else if die.sides === 12}
                <!-- <D12 bind:this={diceComps[i]} /> -->
            {:else if die.sides === 20}
                <!-- <D20 bind:this={diceComps[i]} /> -->
            {:else if die.sides === -1}
                <!-- <DF bind:this={diceComps[i]} /> -->
            {/if}
        {/each}
    </div>

    <div class="d-flex justify-content-center mb-4">
        <button class="btn btn-outline-info btn-lg fw-bold" disabled={diceIds.length <= 0} on:click={rollAll}> Roll All </button>
        <button class="btn btn-outline-info btn-lg fw-bold" disabled={activeCount <= 0} on:click={rollActive}> Roll {activeCount} </button>
        <button class="btn btn-outline-info btn-lg fw-bold" disabled={activeCount <= 0} on:click={removeActive}> Remove {activeCount} </button>
    </div>

    <div class="text-center" style="font-size: small; white-space: pre;" id="result-view"> {resultText} </div>
</div>

<style>

.d4-slot {
    display: inline-flex;
    background-color: transparent;
    color: white;
    width: 50px;
    height: 50px;
    border: 2px solid white;
    border-radius: 10%;
    margin: 5px;
    padding: 5px;
    align-items: center;
    justify-content: center;
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
}

.d6-slot {
    display: inline-flex;
    background-color: transparent;
    color: white;
    width: 50px;
    height: 50px;
    border: 2px solid white;
    border-radius: 10%;
    margin: 5px;
    padding: 5px;
    align-items: center;
    justify-content: center;
}
    
</style>