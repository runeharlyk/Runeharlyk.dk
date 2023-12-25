<script lang="ts">
    import { useTask, useThrelte } from '@threlte/core'
    import {
      BrightnessContrastEffect,
      EffectComposer,
      EffectPass,
      FXAAEffect,
      RenderPass,
      GodRaysEffect, 
	  KernelSize,

	  BlendFunction

    } from 'postprocessing'
    import { onMount } from 'svelte'
    import {Group, Mesh, MeshBasicMaterial, PointLight, SphereGeometry} from 'three'

    const { renderer, scene, camera, autoRender, renderStage } = useThrelte()

    const makeSun = () => {
        const mainLight = new PointLight(0xffefd5, 10);
		mainLight.position.set(-0.5, 80, -0.25);
		mainLight.castShadow = true;
		mainLight.shadow.bias = 0.0000125;
		mainLight.shadow.mapSize.width = 2048;
		mainLight.shadow.mapSize.height = 2048;

        const sunMaterial = new MeshBasicMaterial({
			color: 0xffddaa,
			transparent: true,
			fog: false
		});

		const sunGeometry = new SphereGeometry(0.75, 32, 32);
		const sun = new Mesh(sunGeometry, sunMaterial);
		sun.frustumCulled = false;
		sun.matrixAutoUpdate = false;
		// sun.position.copy(this.light.position);
		// sun.updateMatrix();

		// Using a group here to check if matrix updates work correctly.
		const group = new Group();
		group.position.copy(mainLight.position);
		group.add(sun);
        scene.add(group);
        return sun
    }
 
    const composer = new EffectComposer(renderer)

    const setup = () => {
        const sun = makeSun()
      
        const godraysEffect = new GodRaysEffect($camera, sun, {
          height: 1902,
          kernelSize: KernelSize.SMALL,
          blendFunction: BlendFunction.SCREEN,
          density: 0.97,
          decay: 0.96,
          weight: 0.6,
          exposure: 0.4,
          samples: 30,
          clampMax: 1,
          width:1020,
          
      });
    
      const fxaaEffect = new FXAAEffect()
    
      /**
       * Brightness/Contrast
       */
      const bcEffect = new BrightnessContrastEffect()
        bcEffect.contrast = 0.1
        composer.removeAllPasses()
        composer.addPass(new RenderPass(scene, camera.current))
        // composer.addPass(new EffectPass(camera.current, fxaaEffect))
        composer.addPass(new EffectPass(camera.current, godraysEffect))
      //   composer.addPass(new EffectPass(camera.current, noiseEffect, toneMappingEffect, bcEffect))
    }
  
    $: $camera && setup()
  
    // When using PostProcessing, we need to disable autoRender
    onMount(() => {
      let before = autoRender.current
      autoRender.set(false)
      return () => {
        autoRender.set(before)
      }
    })
  
    useTask(
      () => {
        composer.render()
      },
      { stage: renderStage, autoInvalidate: false }
    )
  
    const { size } = useThrelte()
    $: composer.setSize($size.width, $size.height)
  </script>
  
  <slot />