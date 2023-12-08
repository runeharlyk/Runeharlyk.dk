<script lang="ts">
	import { scrollPercent } from '$lib/stores/scrollStore';
	import { mousePercent } from '$lib/stores/mouseStore';
  import { T } from '@threlte/core'
  import { Grid, OrbitControls } from '@threlte/extras'
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
	import Boids from './Boids.svelte';

  const mouseX = tweened(0, { duration: 400, easing: cubicOut });
  const mouseY = tweened(0, { duration: 400, easing: cubicOut });

  $: mouseX.set($mousePercent[0])
  $: mouseY.set($mousePercent[1])
</script>

<Boids />

<T.PerspectiveCamera
  makeDefault
  position={[ -50, -$mouseY - $scrollPercent/10 + 1, $mouseX]}
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

<T.DirectionalLight
  intensity={0.8}
  position.x={-10}
  position.y={0}
/>
<T.AmbientLight intensity={0.2} />

<Grid
  position.y={-0.001}
  cellColor="#ffffff"
  sectionColor="#ffffff"
  sectionThickness={0}
  fadeDistance={25}
  cellSize={2}
/>
