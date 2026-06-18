<script lang="ts">
	const services = [
		{
			title: 'Appraisals',
			text: 'Whether it’s for insurance, an estate, or just curiosity, get an honest valuation from people who buy and sell this gear daily. We know what the market actually pays.',
		},
		{
			title: 'Consignment',
			text: 'Hand us the instrument and we’ll do the rest — photography, listing, fielding buyers, and negotiating. You get a larger return than a fast sale, with none of the hassle.',
		},
		{
			title: 'Repairs & Setups',
			text: 'Fretwork, full setups, electronics, and restorations. We keep players playing and bring tired instruments back to life.',
		},
		{
			title: 'Gear Hunting',
			text: 'Chasing something specific — a year, a finish, a rare model? Tell us what you’re after and we’ll put our network to work finding it.',
		},
	];
</script>

<svelte:head>
	<title>Services — Appraisals, Consignment & Repairs | Tone Chasers Music</title>
	<meta name="description" content="Appraisals, consignment, repairs and setups, and gear hunting from Tone Chasers Music in Grand Rapids, MI." />
</svelte:head>

<section class="max-w-7xl mx-auto px-5 lg:px-8 py-12 md:py-20">
	<p class="text-xs tracking-[0.4em] uppercase text-red-500 mb-3">Beyond the Sale</p>
	<h1 class="text-4xl md:text-6xl font-bold text-white">Services</h1>
	<p class="text-lg text-stone-400 max-w-2xl mt-6 leading-relaxed">
		We’re more than a shop. Whatever you need done with an instrument, there’s a good chance we do it.
	</p>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
		{#each services as s (s.title)}
			<div class="border border-stone-800 p-8 hover:border-red-600/60 transition-colors">
				<h2 class="text-2xl font-bold text-white mb-3 font-display">{s.title}</h2>
				<p class="text-stone-400 leading-relaxed">{s.text}</p>
			</div>
		{/each}
	</div>

	<div class="text-center mt-14">
		<a href="/contact" class="inline-block bg-red-600 hover:bg-red-500 text-black font-bold text-xs tracking-widest uppercase px-10 py-4 transition-colors">Ask Us Anything</a>
	</div>
</section>
