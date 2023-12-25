<script lang="ts">
    import work from './work.json'

    const dateTime = (date: string | Date | undefined) => {
        if (!date) return
        return new Date(date)
            .toLocaleDateString(navigator.language, { year:"numeric", month:"short"}) 
    }

    const timeDifference = (d1:string | Date, d2:string | Date | undefined = new Date()) => {
        if (new Date(d2) > new Date()) {
            d2 = new Date()
        }
        var months = Math.floor(Math.abs(new Date(d2).getTime() - new Date(d1).getTime()) / (1000 * 60 * 60 * 24 * 30));
        return months >= 12 ? Math.floor(months / 12) + ' yr' : months + ' mo' + (months !== 1 ? 's' : '');
    }
</script>

<div class="flex justify-center">
    <div class="grid grid-cols-1 md:grid-cols-1 grid-flow-row hover:grid-flow-row-dense gap-10 md:gap-24 auto-cols-max py-20 px-10 md:px-20">
        {#each work as item}
        <div>
            <h2 class="text-lg"><a href={item.url} target="_blank">{item.company} 🔗</a></h2>
            <div class="text-sm text-gray-300">{item.position}</div>
            <div class="text-sm text-gray-300">{dateTime(item.start)} - {dateTime(item.end) || "Present"} · {timeDifference(item.start, item.end)}</div>
            <div class="text-sm text-gray-300">{item.description}</div>
        </div>
        {/each}
    </div>
</div>