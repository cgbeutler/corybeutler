<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing'
  import Home from './routes/Home.svelte'
  import Dice from './routes/dice/Dice.svelte'

  export let url :string = ""
</script>

<main>
  <Router url="{url}">
    <nav>
      <Link to="/">Home</Link>
      <Link to="dice">Dice</Link>
    </nav>
    <div class="page">
      <Route path="/" component={Home} />
      <Route path="dice" component={Dice} />
    </div>
  </Router>

  <div class="ext-nav">
    <span style="margin: 0pt 10pt"> You can also find me on:</span>
    <a href="https://aristonaut.itch.io/">
      <img src="img/itchio_logo.svg" alt="aristonaut.itch.io">
    </a>
    <a href="https://m.soundcloud.com/aristonaut">
      <img src="img/soundcloud_logo.png" alt="m.soundcloud.com/aristonaut">
    </a>
    <a href="https://github.com/cgbeutler">
      <img src="img/github_logo.png" alt="github.com/cgbeutler">
    </a>
  </div>

</main>

<style>
</style>