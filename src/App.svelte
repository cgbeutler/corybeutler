<script lang="ts">
  import { Router, Link, link, Route } from 'svelte-routing';
  import NotFound from './routes/NotFound.svelte';
  import Home from "./routes/Home.svelte";
  import GroceryBag from './routes/grocery-bag/GroceryBag.svelte';
    import Resume from './routes/resume/Resume.svelte';
    import StarPaint from './routes/star-paint/StarPaint.svelte';

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
  </nav>
  <nav>
    <!-- <Link to="/dice" getProps={forwardLinkGetProps}>Dice</Link> -->
  </nav>
  
  <Route component="{NotFound}" />
  <Route path="/" component={Home} />
  <Route path="/resume" component={Resume} />
  <Route path="/grocery-bag" component={GroceryBag} />
  <Route path="/star-paint" component={StarPaint} />
</Router>
