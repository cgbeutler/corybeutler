<script lang="ts">
  import { link } from "svelte-routing";
  import { tweened } from 'svelte/motion';
  import Dog from "../lib/Dog.svelte";

  export let location;
  $: console.log(location);


  let poemWords = [ "pretty as a flower", "deep as the ocean", "grand as a piano", "lovely as a summer's day", "deep as the Mariana Trench", "deep as this poem" ]
  let original = 3;
  let timer = tweened(original)
  let wordNum = 0;
  let poemWord = poemWords[0];
  let crossout = false;

  setInterval(() => {
    if ($timer > 0) $timer--;
    else {
      $timer += 3;
      wordNum++;
      if (wordNum > poemWords.length) wordNum = 0;
      poemWord = poemWords[wordNum];
    }
    crossout = $timer < 1;
  }, 1000);

  let dogSeen = false;
  const scroll_observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        dogSeen = true;
      }
    });
  });
  let doghouse: Element;
  $: if (doghouse != null) scroll_observer.observe(doghouse);

</script>


<div id="banner-image">
</div>
<div id="profile-image-box">
  <img src="/img/DressedUp.jpg" class="profile-image" alt="me"/>
  <!-- <img src="/img/LaserMan.jpg" class="profile-image" alt="me"/> -->
</div>

<div class="page">
  <h1>Cory Beutler</h1>

  <p> I am currently looking for work as a software developer.</p>
  <div style="margin: 20px">
    <a href="/resume" class="button-outlined" use:link>Online Resume</a>
    <a href="https://www.linkedin.com/in/cory-beutler/" class="button-outlined" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
  </div>
  <br>
  <p style="margin: 0pt 10pt"> Personal Projects:</p>
  <p>
    <a class="ext-link-big" href="http://proper.monster" target="_blank" rel="noopener noreferrer"><img src="/img/ProperMonster.png" alt="proper monster"/></a>
    <a class="ext-link-big" href="https://monstervial.itch.io/minescroller" target="_blank" rel="noopener noreferrer"><img src="/img/Minescroller.png" alt="minescroller"/></a>
  </p>
  <!--
  <hr>
  <div style="margin: 20px">
    <p style="margin: 0pt 10pt"> I am also an amateur artist. </p>
    <br>
    <p style="margin: 0pt 10pt"> See my art at: </p>
    <a href="https://m.soundcloud.com/aristonaut">
      <img src="/img/soundcloud_logo.png" alt="m.soundcloud.com/aristonaut">
    </a>
    <a class="ext-link" href="https://aristonaut.itch.io/">
      <img src="/img/itchio_logo.svg" alt="aristonaut.itch.io">
    </a>
  </div>
  <p>
    Here is a haiku for you:<br/>
  </p>
  <div class="poem">
    I wish I could bake<br>
    I would bake you a nice cake<br>
    here, have a raw egg
  </div>
  <p>
    I hope you enjoyed that poem. Here, have another:
  </p>
  <div class="poem">
    Your eyes are as {#if !crossout}{poemWord}{:else}<s>{poemWord}</s>{/if}<br>
    Something something something...<br>
    I love you
  </div>
  <p>
    Thank you for visiting.
  </p>
  -->
</div>

<div class="ext-nav">
  <span style="margin: 0pt 10pt"> Profiles:</span>
  <a class="ext-link" href="https://github.com/cgbeutler">
    <img src="/img/github_logo.png" alt="github">
  </a>
  <a class="ext-link" href="https://stackoverflow.com/users/1884803">
    <span style="white-space: nowrap;"><img src="/img/stack-white.svg" alt="stack"> stack<b>overflow</b></span>
  </a>
  <a class="ext-link" href="https://aristonaut.itch.io/">
    <img src="/img/itchio_logo.svg" alt="itch.io">
  </a>
</div>

<Dog/>

<style lang="css">
  #banner-image {
    position: relative;
    background-image: url('/img/nebula_bg.jpg');
    width: 100%;
    height: 260px;
    z-index: -1;
  }

  #profile-image-box {
    display: flex;
    position: relative;
    column-gap: 1em;
    justify-content: center;
    width: 100%;
    height: 100px;
    z-index: 2;
  }

  .profile-image {
    position: relative;
    max-width: 200px;
    max-height: 200px;
    object-fit: cover;
    border-radius: 50%;
    transform-origin: 50% 50%;
    transform: translate(0,-50%) scale(2);
  }

  .ext-link-big {
    display:inline-block;
    border-radius: 10px;
    overflow: hidden;
    aspect-ratio: 461 / 202;
    max-width: 70vw;
  }
  .ext-link-big img{
    position: relative;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .ext-link {
    display: inline-block;
    background-color: #000000cc;
    color: whitesmoke;
    margin: 5pt;
  }

  .ext-link img {
    height: 14pt;
  }

  .poem {
    color: gray;
    text-align: center;
    font-style: italic;
  }

</style>