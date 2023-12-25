<script lang="ts">
	import { scrollPercent } from '$lib/stores/scrollStore';
	import { mousePercent } from '$lib/stores/mouseStore';
  import { T } from '@threlte/core'
  import { Grid, OrbitControls, ContactShadows, Float } from '@threlte/extras'
  import { tweened } from 'svelte/motion';
  import { cubicOut, quadOut } from 'svelte/easing';
	import fragmentShader from './fragment.glsl?raw'
  import vertexShader from './vertex.glsl?raw'
  import Boids from './Boids.svelte';
  import { interactivity } from '@threlte/extras'
	import { PlaneGeometry, Vector3 } from 'three';
  import { createNoise2D } from 'simplex-noise'
	import { DEG2RAD } from 'three/src/math/MathUtils.js';

  export let debug = false
    
  const mouseX = tweened(0, { duration: 400, easing: cubicOut });
  const mouseY = tweened(0, { duration: 400, easing: cubicOut });

  $: mouseX.set(debug ? 0 : $mousePercent[0])
  $: mouseY.set(debug ? 0 : $mousePercent[1])

  // $: mouseX.set($mousePercent[0])
  // $: mouseY.set($mousePercent[1])

  // Terrain setup
  const terrainSize = 100
  const height = 20
  const geometry = new PlaneGeometry(terrainSize, terrainSize, 400, 200)
  const noise = createNoise2D()
  const vertices = geometry.getAttribute('position').array
  for (let i = 0; i < vertices.length; i += 3) {
    const x = vertices[i]
    const y = vertices[i + 1]
    // @ts-ignore
    vertices[i + 2] = noise(x / height, y / height) * 2 + noise(x / 40, y / 40) * 3
  }
  geometry.computeVertexNormals()

  interactivity()
  const pulsePosition = new Vector3()
  const pulseTimer = tweened(0, {
    easing: quadOut
  })
</script>

<Boids />

<T.Mesh
  {geometry}
  rotation.x={DEG2RAD * -90}
  scale={2}
  on:click={({ point }) => {
    pulsePosition.set(point.x, point.y, point.z)
    pulseTimer.set(0, {
      duration: 0
    })
    pulseTimer.set(1, {
      duration: 2000
    })
  }}
>
  <T.ShaderMaterial
    {fragmentShader}
    {vertexShader}
    uniforms={{
      pulseTimer: {
        value: 0
      },
      pulsePosition: {
        value: pulsePosition
      }
    }}
    uniforms.pulseTimer.value={$pulseTimer}
  />
</T.Mesh>


<T.PerspectiveCamera
  makeDefault
  position={[ -50,10+  -$mouseY - $scrollPercent/10 + 1, $mouseX]}
  fov={50}
>
  <OrbitControls
    autoRotate={false}
    enableZoom={true}
    enableDamping
    autoRotateSpeed={0.5}
    target={[0,-$scrollPercent/10+1,0]}
  />
</T.PerspectiveCamera>

<T.DirectionalLight
  intensity={0.8}
  position.x={10}
  position.y={20}
/>
<T.AmbientLight intensity={0.4} />
