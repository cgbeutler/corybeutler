<script>
    import { Canvas } from '@threlte/core'
    import Scene from './Scene.svelte';

    
</script>

<div class="star-paint">
    <Canvas size={{width:screen.width, height:screen.height}}>
        <Scene />
    </Canvas>
</div>

<style>
    .star-paint {
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
    }
</style>