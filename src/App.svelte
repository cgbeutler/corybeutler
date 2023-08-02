<script lang="ts">
  import { Router, Link, link, Route } from 'svelte-routing';
  import NotFound from './routes/NotFound.svelte';
  import Home from "./routes/Home.svelte";
  import Dice from "./routes/dice/Dice.svelte";
  import AgeRoller from "./routes/dice/ageroller/AgeRoller.svelte";
  import EyeRoller from "./routes/dice/eyeroller/EyeRoller.svelte";
  import HnS from './routes/hns/HnS.svelte';
  import Motw from './routes/motw/Motw.svelte';
  import CharSheet from './routes/hns/char-sheet/CharSheet.svelte';
  // Scraps
  import Scraps from './routes/scraps/Scraps.svelte';
  import Groceries from './routes/scraps/groceries/Groceries.svelte';
  import Pokemon from './routes/scraps/pokemon/Pokemon.svelte';
    import MotwCharacter from './routes/motw/character/MotwCharacter.svelte';

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
    <Link to="dice/ageroller" getProps={backLinkGetProps}>Age Roller</Link>
    <Link to="dice/eyeroller" getProps={backLinkGetProps}>Eye Roller</Link>
    <Link to="hns" getProps={backLinkGetProps}>HnS</Link>
    <Link to="hns/charsheet" getProps={backLinkGetProps}>Character Sheet</Link>
    <!--Scraps-->
    <Link to="scraps" getProps={backLinkGetProps}>Scraps</Link>
    <Link to="scraps/groceries" getProps={backLinkGetProps}>Groceries</Link>
    <Link to="scraps/pokemon" getProps={backLinkGetProps}>Pokemon</Link>
  </nav>
  <nav>
    <Link to="dice" getProps={forwardLinkGetProps}>Dice</Link>
    <Link to="dice/ageroller" getProps={forwardLinkGetProps}>Age Roller</Link>
    <Link to="dice/eyeroller" getProps={forwardLinkGetProps}>Eye Roller</Link>
    <!-- <Link to="hns" getProps={forwardLinkGetProps}>HnS</Link> -->
    <Link to="hns/charsheet" getProps={forwardLinkGetProps}>Character Sheet</Link>
    <Link to="scraps" getProps={forwardLinkGetProps}>Scraps</Link>
  </nav>
  
  <Route component="{NotFound}" />
  <Route path="/" component={Home} />
  <Route path="dice" component={Dice} />
  <Route path="dice/ageroller" component={AgeRoller} />
  <Route path="dice/eyeroller" component={EyeRoller} />
  <Route path="hns" component={HnS} />
  <Route path="hns/charsheet" component={CharSheet} />
  <Route path="motw" component={Motw} />
  <Route path="motw/character" component={MotwCharacter} />
  <Route path="motw/character/:id" component={MotwCharacter} />
  <!--Scraps-->
  <Route path="scraps" component={Scraps} />
  <Route path="scraps/groceries" component={Groceries} />
  <Route path="scraps/pokemon" component={Pokemon} />
</Router>
