<script lang="ts">
  import { Router, Link, link, Route } from 'svelte-routing';
  import Home from "./routes/Home.svelte";
  import Dice from "./routes/dice/Dice.svelte";
  import HnS from './routes/hns/HnS.svelte';
  import CharSheet from './routes/hns/char-sheet/CharSheet.svelte';

  function backLinkGetProps({ location, href, isPartiallyCurrent, isCurrent }) {
    if (href === "/") return isCurrent ? { class: "hidden" } : {};
    if (isPartiallyCurrent || isCurrent) return { class: "active" };
    return { class: "hidden" };
  }
  function forwardLinkGetProps({ location, href, isPartiallyCurrent, isCurrent }) {
    if (isPartiallyCurrent || isCurrent) return { class: "hidden" };

    let pathname = location.pathname;
    if (pathname[pathname.length-1] === "/") pathname = pathname.slice(0,-1);
    let locCount, hrefCount;
    for(var i = locCount = 0; i < pathname.length; locCount += +("/" === pathname[i++]));
    for(var i = hrefCount = 0; i < href.length; hrefCount += +("/" === href[i++]));
    if (hrefCount - locCount > 1) return { class: "hidden" };
    if (!href.startsWith(pathname)) return { class: "hidden" }
    return {};
  }
</script>


<Router>
  <nav>
    <Link to="/" id="home-button" getProps={backLinkGetProps}><img src="/img/home.svg" alt="H" /></Link>
    <Link to="dice" getProps={backLinkGetProps}>Dice</Link>
    <Link to="hns" getProps={backLinkGetProps}>HnS</Link>
    <Link to="hns/charsheet" getProps={backLinkGetProps}>Character Sheet</Link>
  </nav>
  <nav>
    <Link to="dice" getProps={forwardLinkGetProps}>Dice</Link>
    <!-- <Link to="hns" getProps={forwardLinkGetProps}>HnS</Link> -->
    <Link to="hns/charsheet" getProps={forwardLinkGetProps}>Character Sheet</Link>
  </nav>
  
  <Route component={Home} />
  <Route path="dice" component={Dice} />
  <Route path="hns" component={HnS} />
  <Route path="hns/charsheet" component={CharSheet} />
</Router>


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
</style>