<script lang="ts">
	import TimelineKnob from './TimelineKnob.svelte';
	import work from './work.json';

	const dateTime = (date: string | Date | undefined) => {
		if (!date) return;
		return new Date(date).toLocaleDateString(navigator.language, {
			year: 'numeric',
			month: 'short'
		});
	};

	const timeDifference = (d1: string | Date, d2: string | Date | undefined = new Date()) => {
		if (new Date(d2) > new Date()) {
			d2 = new Date();
		}
		var months = Math.floor(
			Math.abs(new Date(d2).getTime() - new Date(d1).getTime()) / (1000 * 60 * 60 * 24 * 30)
		);
		return months >= 12
			? Math.floor(months / 12) + ' yr'
			: months + ' mo' + (months !== 1 ? 's' : '');
	};
</script>

<div class="flex justify-center">
	<ul
		class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-full max-w-7xl"
	>
		{#each work as item, i}
			<li>
				<div class="timeline-middle">
					<TimelineKnob />
				</div>
				<div
					class:timeline-start={!(i % 2)}
					class:timeline-end={i % 2}
					class="timeline-box mb-10 md:text-end bg-transparent backdrop-blur-lg border-white/30"
				>
					<time class="font-mono italic">
						{dateTime(item.start)} - {dateTime(item.end) || 'Present'} · {timeDifference(
							item.start,
							item.end
						)}
					</time>
					<div class="text-lg font-black">
						<a href={item.url} target="_blank">{item.company} 🔗</a>
					</div>
					<p>{item.position}</p>
					<p />
					<p>{item.description}</p>
				</div>
				<hr />
			</li>
		{/each}
	</ul>
</div>
