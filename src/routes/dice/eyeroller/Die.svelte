<script lang="ts">
    export let result :number = 0
    export let active :boolean = false
    export let enabled :boolean = true

    let die

    function _roll() {
        var sixes = Math.floor( Math.random() * 6 ) + 1;
        if (sixes == 1) return 1
        if (sixes == 2) return 2
        if (sixes == 3) return 2
        if (sixes == 4) return 3
        if (sixes == 5) return 3
        if (sixes == 6) return 3
    }
    function _restartAnimation() {
        if (!die) return;
        die.style.animation = 'none';
        die.offsetHeight;
        die.style.animation = null;
    }

    export function roll() {
        if (!enabled) return;
        result = _roll();
        active = false;
        _restartAnimation();
    }
    export function rollIfActive() {
        if (!active || !enabled) return;
        result = _roll();
        active = false;
        _restartAnimation();
    }

    $: result = enabled ? _roll() : result
</script>

<button bind:this={die} type="button" class="die" class:die-slot={result == 0} class:active={active} on:click={() => {active = !enabled ? false : !active}}
    style="background-image: url('/img/dice/d6{result == 1 ? "-snake" : result == 2 ? "-bat" : result == 3 ? "-fish" : "" }.svg');">
    {#if result == 0}
    ?
    {/if}
</button>

<style>
    
.die {
    display: inline-flex;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: black;
    width: 48px;
    height: 48px;
    margin: 0px;
    border: 0px;
    padding: 0px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    animation-name: shake;
    animation-duration: 0.2s;
    transform-origin: 50% 50%;
    animation-iteration-count: 1;
}
.die.active {
    animation-name: shake;
    animation-duration: 0.4s;
    transform-origin: 50% 50%;
    animation-iteration-count: infinite;
}


@keyframes shake {
    0% { -webkit-transform: translate(1px, 1px) rotate(0deg); } 
    10% { -webkit-transform: translate(-1px, -1px) rotate(-1deg); }
    20% { -webkit-transform: translate(-1px, 0px) rotate(1deg); }
    30% { -webkit-transform: translate(0px, 1px) rotate(0deg); }
    40% { -webkit-transform: translate(1px, -1px) rotate(1deg); }
    50% { -webkit-transform: translate(-1px, 1px) rotate(-1deg); }
    60% { -webkit-transform: translate(-1px, 1px) rotate(0deg); }
    70% { -webkit-transform: translate(1px, 1px) rotate(-1deg); }
    80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); }
    90% { -webkit-transform: translate(1px, 1px) rotate(0deg); }
    100% { -webkit-transform: translate(1px, -1px) rotate(-1deg); }
}

</style>