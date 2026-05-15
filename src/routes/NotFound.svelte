<script lang="ts">
    function navigate(path: string) {
        window.history.pushState(null, '', path);
        // Trigger pathname update for routing
        window.dispatchEvent(new PopStateEvent('popstate'));
    }
</script>

<div class="page">
    <h1>Page Not Found</h1>
    <button class="button-outlined" on:click={() => navigate('/')}>Return To Homepage</button>
</div>
