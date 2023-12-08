<script lang="ts">
    import socials from './socials.json'
</script>
<div class="flex justify-center h-screen backdrop-blur-lg bg-slate-200 bg-opacity-10 p-4 text-content">
    <div class="p-10 flex flex-col gap-4">
        <h1 class="text-4xl">Hi, Welcome 👋</h1>
        <h2 class="text-2xl">This is my socials</h2>
        <ul>
            {#each socials as social}
                <li class="pb-4">
                    <a href={social.url} class="flex border-white border rounded-lg p-4 bg-slate-200 bg-opacity-40">
                        <img src={social.img} alt={social.name} class="w-5 mr-2">
                        {social.name}@{social.handle}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</div>