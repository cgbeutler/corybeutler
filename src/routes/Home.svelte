<script lang="ts">
  import Link from "../lib/Link.svelte";
  import { tweened } from 'svelte/motion';


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

</script>


<div class="page">
  <h1>Cory Beutler</h1>
  <h2>A home page</h2>
  <hr>
  <p>
    Try out my fancy <Link to="dice">Dice Roller</Link>!
  </p>
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
</div>

<!-- External links at the bottom -->
<div class="ext-nav">
  <span style="margin: 0pt 10pt"> You can also find me on:</span>
  <a href="https://aristonaut.itch.io/">
    <img src="/img/itchio_logo.svg" alt="aristonaut.itch.io">
  </a>
  <a href="https://m.soundcloud.com/aristonaut">
    <img src="/img/soundcloud_logo.png" alt="m.soundcloud.com/aristonaut">
  </a>
  <a href="https://github.com/cgbeutler">
    <img src="/img/github_logo.png" alt="github.com/cgbeutler">
  </a>
</div>


<style>
.poem {
  color: gray;
  text-align: center;
  font-style: italic;
}
</style>