<script lang="ts">
	const steps = [
		{ n: '01', title: 'Tell us what you’ve got', text: 'Send photos and details — brand, model, year, condition. The more we know, the faster we move.' },
		{ n: '02', title: 'Get a fair offer', text: 'We’ll quote you a cash price or a trade value toward anything in the shop. No lowball games.' },
		{ n: '03', title: 'Get paid or trade up', text: 'Bring it in or ship it. Walk out with cash, or roll it into the instrument you’ve been chasing.' },
	];
</script>

<svelte:head>
	<title>Sell or Trade Your Gear | Tone Chasers Music · Grand Rapids, MI</title>
	<meta name="description" content="Sell or trade your guitars, basses, amps, and effects to Tone Chasers Music in Grand Rapids. Fair cash offers and trade values from people who know the gear." />
</svelte:head>

<section class="max-w-7xl mx-auto px-5 lg:px-8 py-12 md:py-20">
	<p class="text-xs tracking-[0.4em] uppercase text-red-500 mb-3">Buy · Sell · Trade · Consign</p>
	<h1 class="text-4xl md:text-6xl font-bold text-white max-w-3xl">Turn your gear into cash — or into something better.</h1>
	<p class="text-lg text-stone-400 max-w-2xl mt-6 leading-relaxed">
		We buy and trade vintage, modern, and heavy instruments every day. One piece or a whole collection — we know what it’s worth and we pay fairly.
	</p>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
		{#each steps as s (s.n)}
			<div class="border border-stone-800 p-8">
				<p class="text-4xl font-bold text-red-600 mb-4 font-display">{s.n}</p>
				<h2 class="text-xl font-bold text-white mb-3 font-display">{s.title}</h2>
				<p class="text-sm text-stone-400 leading-relaxed">{s.text}</p>
			</div>
		{/each}
	</div>

	<div class="mt-14 border border-stone-800 p-8 md:p-12 bg-stone-950/40 text-center">
		<h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Prefer to consign?</h2>
		<p class="text-stone-400 max-w-2xl mx-auto leading-relaxed mb-6">
			Let us do the selling. We list it to our audience, handle the buyers, and you get a bigger payout than a quick flip — without lifting a finger.
		</p>
		<a href="/contact" class="inline-block bg-red-600 hover:bg-red-500 text-black font-bold text-xs tracking-widest uppercase px-8 py-4 transition-colors">Start a Conversation</a>
	</div>
</section>
