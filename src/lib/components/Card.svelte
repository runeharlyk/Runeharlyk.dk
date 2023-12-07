<script lang="ts">
	import { onMount } from "svelte";
	import { lerp } from "three/src/math/MathUtils.js";

	export let data:prototype;
    let card:HTMLDivElement
    let height = 0
    let width = 0
    let interval: number
    let position = {x:0, y:0}
    let last_trans = ""

    onMount(() => handleResize())

    const handleMouseMove = (event:MouseEvent) => {
        position.x = event.clientX - card.getBoundingClientRect().left || 0
        position.y = event.clientY - card.getBoundingClientRect().top || 0
        updateRotation()
    }

    const handleMouseLeave = () => {
        clearInterval(interval)
        position = {x:card.clientWidth/2, y:card.clientHeight/2}
        interval = setInterval(() =>  { 
            if(updateRotation()) clearInterval(interval)
        }, 1000/60)
    }

    const handleMouseEnter = () =>  {
        clearInterval(interval)
        interval = setInterval(() =>  { updateRotation() }, 1000/60)
    }

    const updateRotation = () => {
        if(!card) return
        
        const transform = card.style.transform
        const extractRotation = (axis:string) => parseFloat((transform.match(new RegExp(`${axis}\\(([^)]+)deg\\)`)) || [])[1]) || 0;
        const xRot = extractRotation('rotateX')
        const yRot = extractRotation('rotateY')
        const yRotation = Math.floor(lerp(yRot, 10 * ((position.x - width / 2) / width), 0.1) * 100) / 100
        const xRotation = Math.floor(lerp(xRot, -10 * ((position.y - height / 2) / height), 0.1) * 100) / 100
        const string = 'perspective(1000px) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
        if (last_trans == string) return true
        last_trans = string
        card.style.transform = string
    }

    const handleResize = () => {
        height = card.clientHeight
        width = card.clientWidth
    }

</script>

<style>
    .card {
        box-shadow: rgb(0, 102, 255) 0px 20px 60px 0px, rgb(0, 200, 255) 0px 18px 36px -18px;
    }
</style>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    on:mouseenter={handleMouseEnter}
    on:mousemove={handleMouseMove} 
    on:mouseout={handleMouseLeave} 
    class="aspect-video hover:transition-none transition-transform z-20">
    <div bind:this={card} class="card h-full flex justify-center">  
        <div class="w-full -z-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            
            <img src={data.cover} class="object-cover w-full h-full -z-10" alt="">
            <a class="absolute bottom-0 w-full h-full md:opacity-0 hover:opacity-100 active:opacity-100 z-10 transition-opacity" href={`prototypes/${data.path}`}>
                <div class="absolute bottom-0 h-28 w-full flex flex-col bg-gray-900 bg-opacity-50 text-white p-4">
                    <div class="flex flex-row divide-x divide-slate-800 uppercase -ml-4">
                        {#each data.keywords || [] as keyword}
                            <div class="px-4">{@html keyword}</div>
                        {/each}
                    </div>
                    <h2 class="text-3xl">{data.name}</h2>
                </div>
            </a>
        </div>
    </div>
</div>

<svelte:window on:resize={handleResize}></svelte:window>