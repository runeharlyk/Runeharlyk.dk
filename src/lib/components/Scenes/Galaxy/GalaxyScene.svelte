<script lang="ts">
	import { scrollPercent } from '$lib/stores/scrollStore';
	import { mousePercent } from '$lib/stores/mouseStore';
  import { T } from '@threlte/core'
  import { OrbitControls} from '@threlte/extras'
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import PostProcessingBloom from './PostProcessingBloom.svelte'
	import Galaxy from './Galaxy.svelte';
	import Stars from './Stars.svelte';
    
  export let debug = false
    
  const mouseX = tweened(0, { duration: 400, easing: cubicOut });
  const mouseY = tweened(0, { duration: 400, easing: cubicOut });

  $: mouseX.set(debug ? 0 : $mousePercent[0])
  $: mouseY.set(debug ? 0 : $mousePercent[1])
</script>

<PostProcessingBloom />

<Galaxy />

<Stars color={0xfff4ea} stars={50} radius={500}/>
<Stars color={0xffcc6f} stars={100} radius={700}/>
<Stars color={0xffd2a1} stars={300} radius={1000}/>

<T.PerspectiveCamera
  makeDefault
  position={[50 - 0 * 100 , -500 - 0 * 100 - 0*10, 500]}
  fov={50}
>
  <OrbitControls
    autoRotate={false}
    enableZoom={true}
    enableDamping
    autoRotateSpeed={1}    
  />
</T.PerspectiveCamera>

