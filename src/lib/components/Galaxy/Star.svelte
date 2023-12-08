<script lang="ts">
    import { useTask, useThrelte } from '@threlte/core'
	

    const { renderer, scene, camera, autoRender, renderStage } = useThrelte()


    
    
</script>





<!-- <script lang="ts">
    import { onMount } from 'svelte';
    import { Sprite, Texture, TextureLoader } from 'three';
    import { T, useThrelte} from '@threlte/core'

    import { Vector3 } from 'three';
    import { starTypes } from './config/starDistributions.js';
    import { clamp } from './utils.js';
    import { BLOOM_LAYER, STAR_MAX, STAR_MIN } from './config/renderConfig.js';

    const { camera } = useThrelte()
  
    export let position = new Vector3(1, 1, 1);
  
    let texture: Texture;
    let materials: any[] = [];
  
    onMount(() => {
      texture = new TextureLoader().load('/sprite120.png');
      materials = starTypes.color.map(color => ({
        map: texture,
        color: color
      }));
    });
  
    function generateStarType() {
      let num = Math.random() * 100.0;
      let pct = starTypes.percentage;
      for (let i = 0; i < pct.length; i++) {
        num -= pct[i];
        if (num < 0) {
          return i;
        }
      }
      return 0;
    }
  
    const starType = generateStarType();
  
    // $: scale = new Vector3(1, 1, 1).multiplyScalar(clamp(
    //   position.distanceTo(camera.position) / 250 * starTypes.size[starType],
    //   STAR_MIN,
    //   STAR_MAX
    // ));
  </script> -->
  

  <!-- <T.Sprite 
    position={[0,0,0]}
    layers={[BLOOM_LAYER]}
    material={materials[starType]}
  />

  <T.Mesh
  position.y={0}
  position.x={20}
  position.z = {0}
  scale.x = {2}
  scale.y = {2}
  >
  <T.SphereGeometry />
  <T.MeshStandardMaterial color="#FFFFFF" />
</T.Mesh> -->