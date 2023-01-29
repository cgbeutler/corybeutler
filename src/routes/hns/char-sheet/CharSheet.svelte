<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing';
  import type { RouteLocation } from 'svelte-routing/types/Route';
  import BuildView from './build-view/BuildView.svelte';
  import PlayView from './play-view/PlayView.svelte';

  export let location :RouteLocation;
  $: console.log(location.pathname)
</script>

<h1>Hi</h1>
<Router>
    <Link to="/">Build View</Link>
    <Link to="play">Play View</Link>
    <Route path="/" component={BuildView} />
    <Route path="play" component={PlayView} />
</Router>
