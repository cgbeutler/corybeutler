<script lang="ts">
    import type { PokemonInfo } from "./PokemonInfo";
    
    const michHasRanges = `1-42,46,47,54-82,84-87,90-94,96-107,109-115,118-139,142-150,152-157,160-166,168-181,183-190,193-200,203,206-207,209-214,216-221,224-238,240-243,246-249,252-257,263-277,280-284,286-297,299,300,301,302,304-317,320,321,324-326,328-337,340,341-344,346,349-350,353-359,361-368,370-376,380-384,387-389,393-400,403-405,407-411,414-416,420,421,424-431,434-437,439,441-448,451-457,459-462,464-471,472-478,483,484,487,495-503,505-508,511-514,517-531,534,538-549,554,555,557,558,562,563,568-570,577-587,590-591,593,595-598,602-609,613-615,618,624,625,627-630,633-635,639,646,650-663,667,668,674-676,682,683,686,687,689,692-695,700,702,710-715,725-727-738,743,751-756,759,760,765,767,768,779,793,798,808,809,819,820,862,867,870`
        .replace(/(\r\n|\n|\r)/gm, "") // Remove line breaks
        .split(',').filter( part => part.length > 0 ).map( part => {
            return part.split('-').filter( part => part.length > 0 ).map( n => parseInt(n) ).filter( n => !isNaN(n) )
        })

    var pokemons :Map<number, PokemonInfo> = new Map<number, PokemonInfo>()
    var name_to_id :Map<string, number> = new Map<string, number>()
    fetch("https://pogoapi.net/api/v1/pokemon_names.json")
    .then( (response) => response.json() )
    .then( (nameData) => {
        for (let key in nameData) {
            let id = nameData[key].id
            let name = nameData[key].name
            if (!pokemons.has(id)) { pokemons.set( id, { id: id, name: name, isReleased: false, isWantedByMichael: true } ) }
            name_to_id[name] = id
        }
        michHasRanges.forEach( range => {
            if (range.length == 1) {
                pokemons.get(range[0]).isWantedByMichael = false
            }
            else if (range.length == 2) {
                for (let i = range[0]; i <= range[1]; i += 1) {
                    pokemons.get(i).isWantedByMichael = false
                }
            }
            else { console.log( "Got invalid range " + range ); }
        })
        
        fetch("https://pogoapi.net/api/v1/released_pokemon.json")
        .then( (response) => response.json() )
        .then( releaseData => {
            for (let key in releaseData) {
                let id = nameData[key].id
                pokemons.get(id).isReleased = true
            }
        })
        
        console.log(pokemons)
    })
    .catch( (error) => console.log( error ) )
    
    var dittos :Array<Object> = []
    fetch("https://pogoapi.net/api/v1/possible_ditto_pokemon.json")
    .then( (response) => response.json() )
    .then( (data:{id:number,name:string}) => {
        dittos = Object.values(data).sort( (a,b)=> Number(a.id) < Number(b.id) )
    })
    .catch( (error) => console.log( error ) )

    let michTerm = ""
    let michError = ""
    let michResults = []
    function michSearch()
    {
        console.log("searching '" + michTerm + "'")
        michError = ""
        michResults = []

        if (michTerm == null || michTerm == "") { // No search. find all needed
            console.log("Defaulting search")
            console.log( pokemons )
            pokemons.forEach( p => console.log(p) )
            pokemons.forEach( p => {if (p.isWantedByMichael && p.isReleased) {michResults.push(p)} } )
            console.log(michResults)
            return
        }

        let toFind :Array<number> = []
        let num = parseInt( michTerm )
        if (!isNaN(num)) { //if is number
            if (num <= 0) { michError = "Invalid number."; return; }
            if (!pokemons.has(num)) { michError = "Could not find pokemon #" + num; return; }
            toFind.push( num )
        }
        else { // Text search
            let name_re = new RegExp( michTerm, "iu" );
            for (let name in name_to_id) {
                if (name.search( name_re ) != -1) {
                    toFind.push( name_to_id[name] )
                }
            }
        }
        if (toFind.length == 0) {
            michError = "Couldn't find '" + michTerm + "'"
            return
        }
        michResults = toFind.map( id => pokemons.get(id) )
    }
</script>


<div class="page">
    <h1>Pokemon GO Coordinator</h1>
    <p class="small-txt">
        Note: This page uses pogoapi.net to fetch info. If that gets out of date, ditto and release info may be wrong.<br/>
    </p>
    <hr/>
    <h3 style="margin-bottom: 0;">Cory</h3>
    <p class="small-txt" style="margin-top: 0.2em;">Wants Shiny Dittos.<br/>They may currently may be:</p>
    <div>
        {#each dittos as ditto}
            <span>{ditto.name}</span> &nbsp;
        {/each}
    </div>
    <br/>
    <hr/>
    <h3 style="margin-bottom: 0;">Michael</h3>
    <p class="small-txt" style="margin-top: 0.2em;">Wants a living lucky flush.<br/>See if you got what he needs:<br/>(Search does not indicate variant.)</p>
    <input bind:value={michTerm} on:change={michSearch}> <button class="button-outlined" on:click={michSearch}>Search</button><br/>
    {#if michError && michError.length != 0}
        Error: {michError}
    {/if}
    <ul>
        {#each michResults as result }
            <li style="text-align:left" class={result.isWantedByMichael ? "" : "gray"}>
                {result.isWantedByMichael ? "Wants" : "Has"} #{result.id} {result.name} {result.isReleased ? "" : "(Unreleased)"}
            </li>
        {/each}
    </ul>
</div>

<style>
.gray {
    color: gray
}
.small-txt {
    font-size: small;
    line-height: 1.2em;
}
</style>