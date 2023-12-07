<script lang="ts">
	import { scrollPercent } from '$lib/stores/scrollStore';
	import { mousePercent } from '$lib/stores/mouseStore';
  import { T } from '@threlte/core'
  import { ContactShadows, Float, Grid, OrbitControls} from '@threlte/extras'
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
    
    const mouseX = tweened(0, { duration: 400, easing: cubicOut });
    const mouseY = tweened(0, { duration: 400, easing: cubicOut });

    $: mouseX.set($mousePercent[0])
    $: mouseY.set($mousePercent[1])
</script>

<T.PerspectiveCamera
  makeDefault
  position={[ -5, -$mouseY - $scrollPercent/10 + 1, $mouseX]}
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

<!-- <T.Mesh
  scale={2}
  position.x={10}
  on:click={() => {
    console.log('click!')
  }}
>
  <T.BoxGeometry args={[1, 1, 2]} />
  <T.MeshStandardMaterial color="hotpink" />
</T.Mesh> -->

<T.DirectionalLight
  intensity={0.8}
  position.x={5}
  position.y={10}
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

<!-- <ContactShadows
  scale={10}
  blur={2}
  far={2.5}
  opacity={0.5}
/> -->

<Float
  floatIntensity={1}
  floatingRange={[0, 1]}
>
  <T.Mesh
    position.y={1.2}
    position.z={-0.75}
  >
    <T.BoxGeometry />
    <T.MeshStandardMaterial color="#0059BA" />
  </T.Mesh>
</Float>

<Float
  floatIntensity={1}
  floatingRange={[0, 1]}
>
  <T.Mesh
    position={[1.2, 1.5, 0.75]}
    rotation.x={5}
    rotation.y={71}
  >
    <T.TorusKnotGeometry args={[0.5, 0.15, 100, 12, 2, 3]} />
    <T.MeshStandardMaterial color="#F85122" />
  </T.Mesh>
</Float>

<Float
  floatIntensity={1}
  floatingRange={[0, 1]}
>
  <T.Mesh
    position={[$scrollPercent/100, 1.5, 0.75]}
    rotation={[-5, 128, 10]}
  >
    <T.IcosahedronGeometry />
    <T.MeshStandardMaterial color="#F8EBCE" />
  </T.Mesh>
</Float>

<Float
  floatIntensity={1}
  floatingRange={[0, 1]}
>
  <T.Mesh
    position={[0, -2, -$scrollPercent/20-1]}
    rotation.x={5}
    rotation.y={71}
  >
    <T.TorusKnotGeometry args={[0.5, 0.15, 100, 12, 2, 3]} />
    <T.MeshStandardMaterial color="#F85122" />
  </T.Mesh>
</Float>

<Float
  floatIntensity={1}
  floatingRange={[0, 1]}
>
  <T.Mesh
    position={[0, -5, 2+-$scrollPercent/20]}
    rotation.x={5}
    rotation.y={71}
  >
    <T.TorusKnotGeometry args={[0.5, 0.15, 100, 12, 2, 3]} />
    <T.MeshStandardMaterial color="#F85122" />
  </T.Mesh>
</Float>

<Float
  floatIntensity={1}
  floatingRange={[0, 1]}
>
  <T.Mesh
    position={[-$scrollPercent/100, -10, 0.75]}
    rotation={[-5, 128, 10]}
  >
    <T.IcosahedronGeometry />
    <T.MeshStandardMaterial color="#F8EBCE" />
  </T.Mesh>
</Float>
