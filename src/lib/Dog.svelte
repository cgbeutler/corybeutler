<script lang="ts">
  import dog from '/img/Dog.png';

  let pets = 0;
  let walk = false;
  function pet() {
    if (++pets >= 3) walk = true;
    else start_heartfly();
  }
  let heart: HTMLDivElement;
  let playHeartFly = false;
  function start_heartfly() {
    playHeartFly = false;
    setTimeout(function() {
        playHeartFly = true;
    }, 80);
  }
</script>

<div id="doghouse">
  <div id="dog" class:animation_dogwalk_exit={walk} on:click={pet}>
    <img id="dog-sprite" src={dog} class:animation_dogwalk={walk}/>
  </div>
  <div id="heart" class:animation_heartfly={playHeartFly} bind:this={heart}>♥️</div>
</div>

<style lang="css">

  #doghouse {
    position: relative;
    width: 100%;
    max-height: 128px;
    overflow: hidden;
  }
  #heart {
    position: absolute;
    visibility: hidden;
    color: red;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    animation-duration: 2.2s;
  }
  #dog {
    position: relative;
    width: 60px;
    height: 120px;
    left: 50%;
    margin-right: -50%;
    overflow: hidden;
    transform: translate(-50%);
  }
  #dog-sprite {
    --start-x: calc((130px - 60px) / 2 * -1);
    --start-y: calc((130px - 120px) / 2 * -1);
    --dogwalk-dur: 0.917s;
    --dogwag-dur: 0.417s;
    position: relative;
    left: calc(var(--start-x) - (130px * 3));
    top: calc(var(--start-y) - (130px * 3));
  }

  .animation_dogwalk {
    animation: dogwalk var(--dogwalk-dur) steps(1, end) infinite;
  }
  .animation_dogwalk_exit {
    animation: dogwalk-exit 50s linear forwards;
  }
  .animation_heartfly {
    animation: heart-fly 2.2s ease-out forwards;
    animation-timing-function: ease-in-out;
  }

  @keyframes heart-fly {
    0% { visibility: visible; top: 50%; transform: translate(-50%,-50%); }
    10% { transform: translate(-50%,-50%) translateX(2px); }
    20% { transform: translate(-50%,-50%) translateX(-8px); }
    30% { transform: translate(-50%,-50%) translateX(8px); }
    40% { transform: translate(-50%,-50%) translateX(-6px); }
    50% { transform: translate(-50%,-50%) translateX(5px); }
    100% { visibility: hidden; top: -50%; }
  }

  @keyframes dogwalk-exit {
    from { transform: translateX(-50%) translateX(0px) rotate(90deg); }
    to { transform: translateX(-50%) translateX(5000px) rotate(90deg); }
  }

  @keyframes dogwalk {
    /* 0 9.09~ 18.18~ 27.27~ 36.36~ 45.45~ 54.54~ 63.63~ 72.72~ 81.81~ 90.90~ 100*/
    0% {
      left: calc(var(--start-x) - (130px * 0));
      top: calc(var(--start-y) - (130px * 1));
    }
    9.09% {
      left: calc(var(--start-x) - (130px * 1));
    }
    18.18% {
      left: calc(var(--start-x) - (130px * 2));
    }
    27.27% {
      left: calc(var(--start-x) - (130px * 3));
    }
    36.36% {
      left: calc(var(--start-x) - (130px * 4));
      top: calc(var(--start-y) - (130px * 1));
    }
    45.45% {
      left: calc(var(--start-x) - (130px * 0));
      top: calc(var(--start-y) - (130px * 2));
    }
    54.54% {
      left: calc(var(--start-x) - (130px * 1));
    }
    63.63% {
      left: calc(var(--start-x) - (130px * 2));
    }
    72.72% {
      left: calc(var(--start-x) - (130px * 3));
    }
    81.81% {
      left: calc(var(--start-x) - (130px * 4));
      top: calc(var(--start-y) - (130px * 2));
    }
    90.90% {
      left: calc(var(--start-x) - (130px * 0));
      top: calc(var(--start-y) - (130px * 3));
    }
  }
  @keyframes dogwag {
    /* 0 9.09~ 18.18~ 27.27~ 36.36~ 45.45~ 54.54~ 63.63~ 72.72~ 81.81~ 90.90~ 100*/
    0% {
      left: calc(var(--start-x));
      top: calc(var(--start-y));
    }
    20% {
      left: calc(var(--start-x) - (130px * 1));
    }
    40% {
      left: calc(var(--start-x) - (130px * 2));
    }
    60% {
      left: calc(var(--start-x) - (130px * 3));
    }
    80% {
      left: calc(var(--start-x) - (130px * 4));
    }
  }
</style>