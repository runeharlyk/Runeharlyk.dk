<script lang="ts">
	import { scrollPercent } from '$lib/stores/scrollStore';
	import { mousePercent } from '$lib/stores/mouseStore';
  import { T } from '@threlte/core'
  import { OrbitControls} from '@threlte/extras'
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import PostProcessingBloom from './PostProcessingBloom.svelte'
	import Galaxy from './Galaxy.svelte';
    
  const mouseX = tweened(0, { duration: 400, easing: cubicOut });
  const mouseY = tweened(0, { duration: 400, easing: cubicOut });

  $: mouseX.set($mousePercent[0])
  $: mouseY.set($mousePercent[1])
</script>

<PostProcessingBloom />

<Galaxy />

<T.PerspectiveCamera
  makeDefault
  position={[ $mouseX*100 , -500+ -$mouseY*100 - $scrollPercent/10 + 1,500]}
  fov={50}
>
  <OrbitControls
    autoRotate={false}
    enableZoom={false}
    enableDamping
    autoRotateSpeed={0.5}
    target={[0,-$scrollPercent/10+1,0]}
  />
</T.PerspectiveCamera>

