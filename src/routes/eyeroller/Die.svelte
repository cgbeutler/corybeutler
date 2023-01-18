<script lang="ts">
    export let state = "blank"
    export let active = false

    let die

    function restartAnimation() {
        die.style.animation = 'none';
        die.offsetHeight;
        die.style.animation = null;
    }
    $: { state; restartAnimation(); }
</script>

<button bind:this={die} type="button" class="die" class:die-slot={state === ""} class:active={active} on:click={() => {state = state !== "" ? state : "blank"; active = !active}}>
    {#if state !== ""}
    <span class="{state}-eye"></span>
    {:else}
    +
    {/if}
</button>

<style>
    .die {
        display: inline-flex;
        background-color: white;
        color: black;
        width: 50px;
        height: 50px;
        border-radius: 10%;
        margin: 5px;
        padding: 5px;
        align-items: center;
        justify-content: center;
        animation-name: shake;
        animation-duration: 0.2s;
        transform-origin: 50% 50%;
        animation-iteration-count: 1;
    }
    .die.die-slot {
        background-color: transparent;
        color: white;
        border: 2px solid white;
    }
    .die.active {
        animation-name: shake;
        animation-duration: 0.4s;
        transform-origin: 50% 50%;
        animation-iteration-count: infinite;
    }

    .die-display {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background-color: #eee;
        margin: 2px;
        border-radius: 10%;
        padding: 0;
    }

    .blank-eye {
        height: 20px;
        width: 20px;
        visibility: hidden;
        display: inline-block;
    }

    .bat-eye {
        display: inline-block;
        height: 22px;
        width: 22px;
        margin: 0;
        border: 4px solid #111;
        padding: 0;
        border-radius: 50%;
    }
    .snake-eye {
        display: inline-block;
        height: 16px;
        width: 16px;
        background-color: #111;
        margin: 0;
        border-radius: 50%;
        padding: 0;
    }
    .fish-eye {
        display: inline-block;
        height: 24px;
        width: 24px;
        background-color: #111;
        margin: 0;
        border: 4px solid #eee;
        border-radius: 50%;
        outline: 4px solid #111;
        padding: 0;
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