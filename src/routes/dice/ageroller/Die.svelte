<script lang="ts">
    export let isStunt :boolean = false;
    export let result :number = 0;
    export let active :boolean = false;

    let die;

    function _roll() {
        return Math.floor( Math.random() * 6 ) + 1;
    }
    function _restartAnimation() {
        if (!die) return;
        die.style.animation = 'none';
        die.offsetHeight;
        die.style.animation = null;
    }

    export function roll() {
        result = _roll();
        active = false;
        _restartAnimation();
    }
    export function rollIfActive() {
        if (!active) return;
        result = _roll();
        active = false;
        _restartAnimation();
    }

    // $: result = _roll()
</script>

<button bind:this={die} type="button" class="die" class:stunt={isStunt} class:active={active} on:click={() => {active = !active}}
    style="background-image: url('/img/dice/d6{isStunt ? "-inverted" : ""}.svg');">
    {#if result > 0}
      {result}
    {:else}
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
.die.stunt {
    color: rgb(210, 210, 210);
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