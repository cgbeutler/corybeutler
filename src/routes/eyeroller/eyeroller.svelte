<script lang="ts">
    import DieCountRadio from './DieCountRadio.svelte'
    import Die from './Die.svelte'

    let rollCount = 4
    let dice = [
        "blank", "blank", "blank", "blank",
        "", "", "", ""
    ]
    let selectedDice = [
        false, false, false, false,
        false, false, false, false
    ]

    function resetDice( rc :number ) {
        let i = 0
        for (; i < rc && i < 8; i++) { dice[i] = "blank" }
        for (; i < 8; i++) { dice[i] = "" }
    }
    $: resetDice( rollCount );

    let resultText :string = "";
    function showResults( dice ) {
        let snakes = 0
        let fish = 0
        let bats = 0
        dice.foreach( d => {
            if (d == "snake") { snakes++; }
            else if (d == "fish") { fish++; }
            else if (d == "bat") { bats++; }
        } )
        var parts = [];
        if (snakes > 0) { parts.push( `${snakes}\xa0snake${snakes == 1? "":"s"}` ); }
        if (fish > 0) { parts.push( `${fish}\xa0fish` ); }
        if (bats > 0) { parts.push( `${bats}\xa0bat${bats == 1? "":"s"}` ); }
        var whole = [ parts.join( "\xa0\xa0" ) ];
        parts = [];
        var pips = snakes+fish;
        var rings = bats+fish;
        if (pips > 0) { parts.push( `${pips}\xa0pip${pips == 1? "":"s"}` ); }
        if (rings > 0) { parts.push( `${rings}\xa0ring${rings == 1? "":"s"}` ); }
        whole.push( parts.join( "\xa0\xa0" ) );
        resultText = whole.join( "\r\n" );
    }

    function roll() {
        // Roll each die
        for (var i = 0; i < dice.length; i++) {
            // Deselect any rerolls selected
            selectedDice = [
                false, false, false, false,
                false, false, false, false
            ]

            // Reroll within the selected #
            if (i < rollCount) {
                switch (Math.floor( Math.random() * 6 )) {
                    case 0:
                    dice[i] = "snake"
                    break;
                    case 1: case 2:
                    dice[i] = "bat"
                    break;
                    case 3: case 4: case 5:
                    dice[i] = "fish"
                    break;
                }
            }
            else {
                dice[i] = ""
            }
        }
        showResults( dice );
    }

    function reroll() {
        // roll each die
        for (var i = 0; i < dice.length; i++) {
            if (selectedDice[i]) {
                selectedDice[i] = false;
                // Set a new random value
                switch (Math.floor(Math.random() * 6)) {
                    case 0:
                    dice[i] = "snake"
                    break;
                    case 1:
                    case 2:
                    dice[i] = "bat"
                    break;
                    case 3:
                    case 4:
                    case 5:
                    dice[i] = "fish"
                    break;
                }
            }
        }
        showResults( dice );
    }
</script>


<div class="content-box">
    <div id="main-title" class="mb-4">Eye Roller</div>
    <div class="text-center">
    Number of dice
    </div>
    <form name="numdice" class="btn-group btn-group-toggle d-flex justify-content-center mb-4" data-bs-toggle="buttons">
        {#each {length:8} as _,i}
        <DieCountRadio bind:group={rollCount} value={i+1}/>
        {/each}
    </form>
    <div class="d-flex justify-content-center mb-4">
    <button class="btn btn-outline-info btn-lg fw-bold" on:click={roll}> ROLL! </button>
    </div>
    
    <div class="d-flex justify-content-center mb-4 gap-2">
        {#each [0,1,2,3] as i}
            <Die bind:state={dice[i]} bind:active={selectedDice[i]} />
        {/each}
    </div>
    <div class="d-flex justify-content-center mb-4 gap-2">
        {#each [4,5,6,7] as i}
            <Die bind:state={dice[i]} bind:active={selectedDice[i]} />
        {/each}
    </div>

    <div class="text-center" style="font-size: small; white-space: pre;" id="result-view"> {resultText} </div>
    <div class="text-center" style="font-size: small;">
    Select dice above to
    </div>
    <div class="d-flex justify-content-center mb-4">
    <button class="btn btn-outline-info btn-lg fw-bold" on:click={reroll}> REROLL! </button>
    </div>
</div>
<div class="content-box">
    <div id="main-title" class="mb-4">What are Eye Dice?</div>
    <div class="text-center">
    Eye dice are 6-sided dice that have one circle side, two pip sides, and three pip-in-circle sides.
    </div>

    <div style="display: flex; justify-content: space-evenly; flex-wrap: nowrap; width: 212px; height: 50px; margin: auto; padding: 0px">
    <div class="die-display" style="visibility: hidden;"> </div>
    <div class="die-display"> <span class="bat-eye"></span> </div>
    <div class="die-display" style="visibility: hidden;"> </div>
    <div class="die-display" style="visibility: hidden;"> </div>
    </div>
    <div style="display: flex; justify-content: space-evenly; flex-wrap: nowrap; width: 212px; height: 50px; margin: 4px auto; padding: 0px">
    <div class="die-display"> <span class="fish-eye"></span> </div>
    <div class="die-display"> <span class="snake-eye"></span> </div>
    <div class="die-display"> <span class="fish-eye"></span> </div>
    <div class="die-display"> <span class="fish-eye"></span> </div>
    </div>
    <div style="display: flex; justify-content: space-evenly; flex-wrap: nowrap; width: 212px; height: 50px; margin: auto; padding: 0px">
    <div class="die-display" style="visibility: hidden;"> </div>
    <div class="die-display"> <span class="bat-eye"></span> </div>
    <div class="die-display" style="visibility: hidden;"> </div>
    <div class="die-display" style="visibility: hidden;"> </div>
    </div>
    <br>
    <p>
    Each side type can be referred to individually or in groups.<br>
    This allows for a bunch of different stat rolls using the same set of dice:
    </p>
    
    <div style="display: flex; flex-wrap: nowrap; align-items: center; justify-content: center; width: 212px; height: 50px; margin: 10px auto; padding: 0px">
    <div class="die-display" style="display: inline-flex"> <span class="snake-eye"></span> </div> &frac16; Snake
    </div>
    <div style="display: flex; flex-wrap: nowrap; align-items: center; justify-content: center; width: 212px; height: 50px; margin: 10px auto; padding: 0px">
    <div class="die-display" style="display: inline-flex"> <span class="bat-eye"></span> </div> &frac13; Bat
    </div>
    <div style="display: flex; flex-wrap: nowrap; align-items: center; justify-content: center; width: 212px; height: 50px; margin: 10px auto; padding: 0px">
    <div class="die-display" style="display: inline-flex"> <span class="fish-eye"></span> </div> &frac12; Fish
    </div>
    <div style="display: flex; flex-wrap: nowrap; align-items: center; justify-content: center; width: 212px; height: 50px; margin: 10px auto; padding: 0px">
    <div class="die-display" style="display: inline-flex"> <span class="snake-eye"></span> </div>
    <div class="die-display" style="display: inline-flex"> <span class="fish-eye"></span> </div> &frac23; Pips
    </div>
    <div style="display: flex; flex-wrap: nowrap; align-items: center; justify-content: center; width: 212px; height: 50px; margin: 10px auto; padding: 0px">
    <div class="die-display" style="display: inline-flex"> <span class="bat-eye"></span> </div>
    <div class="die-display" style="display: inline-flex"> <span class="fish-eye"></span> </div> &frac56; Rings
    </div>
    
    <br><br>
    <p>
    Example:<br><br>
    If you were asked to "Roll 2dEye for Snakes" you'd roll 2 eye dice and count the snake-eyes shown.<br><br>
    If you were asked to "Roll 4dEye for Rings" you'd roll 4 eye dice and count the rings shown.
    </p>
</div>
