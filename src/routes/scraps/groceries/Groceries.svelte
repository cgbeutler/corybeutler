<script lang="ts">
    let htmlContent = ''
    fetch('/groceries.html')
    .then( response => {
        if (response.ok) return response.text()
        else throw new Error( response.status + " Failed Fetch " );
    })
    .then( html => { htmlContent = html } )
    .catch( err => {
        console.log( err )
        console.log( "Trying dev path" )
        fetch('/raw/groceries.html')
        .then( response => {
            if (response.ok) return response.text()
            else throw new Error( response.status + " Failed Fetch " );
        })
        .then( html => { htmlContent = html } )
        .catch( err => {
            console.log( err )
            console.log( "Trying dev path" )
        })
    })
</script>

<div class="page">
    <div class="groc-list">
        {@html htmlContent}
    </div>
</div>

<style>
.groc-list {
    padding-left: 2em;
    padding-right: 2em;
    text-align: left;
    font-size: small;
}
.groc-list :global(p) {
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
}
.groc-list :global(ul) {
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
}
</style>