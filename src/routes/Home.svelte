<script lang="ts">
    import Link from "../lib/Link.svelte";


  export let location;
  $: console.log(location);
</script>


<div class="page">
  <h1>Cory Beutler</h1>
  <h2>A home page</h2>

  <p>
    Try out my fancy <Link to="dice">Dice Roller</Link>!
  </p>
  <p>
    Friends looking for crappy coordination stuff, like Pokemon GO or groceries will find them in my <Link to="scraps">Scraps</Link>!
  </p>
  <br/>
  <p>
    If you are not here for any of that, here is a haiku for you:<br/>
  </p>
  <div class="poem">
    I wish I could bake<br>
    I would bake you a nice cake<br>
    here, have a raw egg
  </div>
  <p>
    I hope you enjoyed that poem. Good luck in your many journeys.
  </p>
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