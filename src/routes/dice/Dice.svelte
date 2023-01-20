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
    }
    // Handle die removal with null scan
	$: diceComps = diceComps.filter( c => c );


    // Aggregate the current selection whenever it changes
    let totalDice = { active: 0, sum: 0, activeSum: 0 }
    $: totalDice = diceData.reduce( (prev,curr) => {
        if (prev.hasOwnProperty( curr.sides )) prev[curr.sides] = prev[curr.sides] + 1;
        else prev[curr.sides] = 1;
        prev.sum += curr.result;
        if (curr.active) {
            prev.active = prev.active +1;
            prev.activeSum += curr.result;
        }
        return prev;
    }, { active: 0, sum: 0, activeSum: 0 } )

    function toggleAll() {
        if (totalDice.active == diceData.length) {
            diceData.forEach( d => d.active = false );
        }
        else {
            diceData.forEach( d => d.active = true );
        }
        diceData = diceData;
    }

    function rollActive() {
        diceComps.filter( d => d ).forEach( d => d.rollIfActive() )
    }

    function removeActive() { diceData = diceData.filter( d => !d.active ); }
</script>


<div class="content-box">
    <h1>Dice Roller</h1>
    
    <div class="dice-box">
        {#each [2,4,6,8,10,12,20] as s}
            <button type="button" class="die-slot" on:click={()=>addDie(s)}
                style="background: url('/img/dice/d{s}-outline.svg') no-repeat left top;">
                {#if (totalDice[s] ?? 0) == 0} 0d{s}
                {:else if (totalDice[s] > 9)} {totalDice[s]}
                {:else} {totalDice[s]}d{s}
                {/if}
            </button>
        {/each}
        <button type="button" class="die-slot" on:click={()=>addDie(-1)}
            style="background: url('/img/dice/dF-outline.svg') no-repeat left top;">
            {#if (totalDice[-1] ?? 0) == 0} 0dF
            {:else if (totalDice[-1] > 9)} {totalDice[-1]}
            {:else} {totalDice[-1]}dF
            {/if}
        </button>
    </div>

    <div style="display: grid; grid-template-columns: 32% 32% 32%; justify-content: center;">
        <button class="button-outlined" disabled={totalDice.active <= 0} on:click={removeActive}> Remove {totalDice.active} </button>
        <button class="button-outlined" disabled={diceData.length <= 0} on:click={toggleAll}> {totalDice.active == diceData.length ? "Clear Selection" : "Select All"} </button>
        <button class="button-outlined" disabled={totalDice.active <= 0} on:click={rollActive}> Reroll {totalDice.active} </button>
    </div>
    
    <div class="dice-box">
        {#each diceData as die, i (die.id)}
            <Die bind:this={diceComps[i]} sides={die.sides} bind:result={die.result} bind:active={die.active} />
        {/each}
    </div>

    <h2 class="text-center" style="margin-bottom:0;">
        {#if totalDice.active == 0}
        Total Sum
        {:else}
        Selection Sum
        {/if}
    </h2>
    <h3 class="result" style="width: 200px; margin: 0 auto 0 auto;">
        {#if totalDice.active == 0}
          {totalDice.sum}
        {:else}
          {totalDice.activeSum}
        {/if}
    </h3>
    <h3 class="text-center" style="margin: 10px auto 2px auto;"> Modifiers </h3>
    <div class="result-grid-c2">
        {#each {length: 5} as _, i}
            <h4 class="result-label">{-i-1}</h4>  <h4 class="result">{(totalDice.active == 0 ? totalDice.sum : totalDice.activeSum)-i-1}</h4>
            <h4 class="result-label">+{i+1}</h4>  <h4 class="result">{(totalDice.active == 0 ? totalDice.sum : totalDice.activeSum)+i+1}</h4>
        {/each}
    </div>
    <div class="result-grid-c2">
        {#each {length: 5} as _, i}
            <h4 class="result-label">{-i-6}</h4>  <h4 class="result">{(totalDice.active == 0 ? totalDice.sum : totalDice.activeSum)-i-6}</h4>
            <h4 class="result-label">+{i+6}</h4>  <h4 class="result">{(totalDice.active == 0 ? totalDice.sum : totalDice.activeSum)+i+6}</h4>
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

.button-outlined:disabled {
    color: rgba(204, 204, 204, 0.59);
    border: 2px solid rgba(204, 204, 204, 0.59);
}

.dice-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 60px;
    margin: 10px;
}

.die-slot {
    display: inline-flex;
    background-color: transparent;
    color: rgb(210, 210, 210);
    font-size: 16px;
    width: 64px;
    height: 64px;
    align-items: center;
    justify-content: center;
}

.result-grid-c2 {
    display: grid;
    margin: 1em 0 1em 0;
    grid-template-columns: repeat(4, auto);
}

.result-label {
    color: rgba(204, 204, 204, 0.59);
    width: 2.5em;
    margin: 0;
    padding: 0;
    border: 1px solid rgba(204, 204, 204, 0.59);
    justify-self: end;
}
.result {
    color: rgb(204, 204, 204);
    width: 4.2em;
    margin: 0;
    padding: 0;
    border: 1px solid rgb(204, 204, 204);
    justify-self: start;
}

</style>