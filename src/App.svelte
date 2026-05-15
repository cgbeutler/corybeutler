<script lang="ts">
  import { pathname } from './pathnameStore';
  import NotFound from './routes/NotFound.svelte';
  import Home from "./routes/Home.svelte";
  import GroceryBag from './routes/grocery-bag/GroceryBag.svelte';
  import Resume from './routes/resume/Resume.svelte';
  import StarPaint from './routes/star-paint/StarPaint.svelte';

  function navigate(path: string) {
    window.history.pushState(null, '', path);
    pathname.set(path);
  }

  function isActive(path: string) {
    return $pathname === path;
  }

  function isPartiallyActive(path: string) {
    if (path === '/') return $pathname === '/';
    return $pathname.startsWith(path);
  }

  function getBackLinkClass(path: string) {
    if (path === "/") return isActive('/') ? "hidden" : "";
    return isPartiallyActive(path) ? "active" : "hidden";
  }
</script>

<nav>
  <button
    id="home-button"
    class={getBackLinkClass('/')}
    on:click={() => navigate('/')}
  >
    <img src="/img/home.svg" alt="H" />
  </button>
</nav>
<nav>
  <!-- Navigation items here -->
</nav>

{#if isActive('/')}
  <Home />
{:else if isActive('/resume')}
  <Resume />
{:else if isActive('/grocery-bag')}
  <GroceryBag />
{:else if isActive('/star-paint')}
  <StarPaint />
{:else}
  <NotFound />
{/if}

