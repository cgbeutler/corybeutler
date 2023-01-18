<script>
    export let group;
    export let value = 0
</script>

<input type="radio" class="btn-check" name="dcount" id="dcount1" bind:group={group} value={value}>
<label class="btn btn-outline-info" for="dcount1">1</label>

<style>
    .btn-check {
        display: inline-block;
    }
</style>