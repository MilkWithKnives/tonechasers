<script lang="ts">
	import { guitars, categories, formatPrice } from '$lib/guitars';
	import GuitarImage from '$lib/GuitarImage.svelte';

	const featured = guitars.filter((g) => g.featured).slice(0, 3);
	const latest = guitars.filter((g) => g.status === 'available').slice(0, 8);

	const services = [
		{ title: 'Appraisals', text: 'Know what your instrument is really worth, from people who buy and sell it daily.' },
		{ title: 'Consignment', text: 'Let us sell your gear for you — our audience, our expertise, your payout.' },
		{ title: 'Repairs & Setups', text: 'Fretwork, setups, electronics — keep your instruments playing their best.' },
	];
</script>

<svelte:head>
	<title>Tone Chasers Music — Vintage, Rare & Heavy Guitars · Grand Rapids, MI</title>
	<meta name="description" content="Grand Rapids' destination for vintage, rare, and heavy guitars, basses, amps, and effects. Buy, sell, trade, and consign with people who know the gear." />
</svelte:head>

<!-- HERO -->
<section class="relative min-h-[88vh] flex items-center overflow-hidden border-b border-stone-800">
	<div class="absolute inset-0 bg-gradient-to-br from-stone-900 via-black to-black"></div>
	<div class="absolute inset-0 opacity-[0.07]" style="background-image: radial-gradient(circle at 20% 30%, #ef4444 0, transparent 40%), radial-gradient(circle at 80% 70%, #ef4444 0, transparent 40%);"></div>
	<div class="relative max-w-7xl mx-auto px-5 lg:px-8 py-24">
		<p class="text-xs tracking-[0.5em] uppercase text-red-500 mb-6">Grand Rapids, Michigan</p>
		<h1 class="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[0.95] max-w-4xl">
			Chase the tone.<br />Own the instrument.
		</h1>
		<p class="mt-6 text-lg text-stone-400 max-w-xl leading-relaxed">
			Vintage, rare, and downright heavy guitars, basses, amps, and effects — curated by people who actually play. Buy, sell, trade, and consign.
		</p>
		<div class="mt-10 flex flex-wrap gap-4">
			<a href="/shop" class="bg-red-600 hover:bg-red-500 text-black font-bold text-xs tracking-widest uppercase px-8 py-4 transition-colors">Shop the Collection</a>
			<a href="/sell-trade" class="border border-stone-600 hover:border-white text-white text-xs tracking-widest uppercase px-8 py-4 transition-colors">Sell or Trade Your Gear</a>
		</div>
	</div>
</section>

<!-- SHOP BY CATEGORY -->
<section class="max-w-7xl mx-auto px-5 lg:px-8 py-16 md:py-20">
	<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
		{#each categories as cat}
			<a href="/shop?category={cat}" class="group relative aspect-[4/3] overflow-hidden border border-stone-800 hover:border-red-600 transition-colors bg-gradient-to-br from-stone-800 to-black flex items-end p-5">
				<div>
					<p class="text-xs tracking-widest uppercase text-stone-500 group-hover:text-red-500 transition-colors">Shop</p>
					<p class="text-2xl font-bold text-white" style="font-family: var(--font-display)">{cat}</p>
				</div>
				<span class="absolute top-4 right-4 text-stone-600 group-hover:text-red-500 transition-colors">→</span>
			</a>
		{/each}
	</div>
</section>

<!-- FEATURED GEAR -->
<section class="border-y border-stone-800 bg-stone-950/40">
	<div class="max-w-7xl mx-auto px-5 lg:px-8 py-16 md:py-24">
		<div class="flex items-end justify-between mb-10">
			<div>
				<p class="text-xs tracking-[0.4em] uppercase text-red-500 mb-2">Hand-Picked</p>
				<h2 class="text-3xl md:text-5xl font-bold text-white">Featured Gear</h2>
			</div>
			<a href="/shop" class="text-xs tracking-widest uppercase text-stone-400 hover:text-white transition-colors hidden sm:block">View All →</a>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each featured as g (g.slug)}
				<a href="/shop/{g.slug}" class="group block">
					<GuitarImage guitar={g} class="aspect-[4/5] mb-4 border border-stone-800 group-hover:border-red-600/60 transition-colors" sizes="(min-width: 768px) 33vw, 100vw" />
					<div class="flex items-start justify-between gap-3">
						<div>
							<p class="text-xs tracking-widest uppercase text-stone-500">{g.brand} · {g.year}</p>
							<p class="text-lg font-bold text-white" style="font-family: var(--font-display)">{g.model}</p>
						</div>
						<p class="text-lg font-bold text-red-500 whitespace-nowrap">{formatPrice(g.price)}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- BUY SELL TRADE CONSIGN -->
<section class="max-w-7xl mx-auto px-5 lg:px-8 py-16 md:py-24">
	<div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-800 border border-stone-800">
		{#each ['Buy', 'Sell', 'Trade', 'Consign'] as word}
			<div class="bg-black p-8 text-center">
				<p class="text-3xl md:text-4xl font-bold text-white" style="font-family: var(--font-display)">{word}</p>
			</div>
		{/each}
	</div>
	<p class="text-center text-stone-400 max-w-2xl mx-auto mt-8 leading-relaxed">
		Bring us your guitars, basses, amps, and effects. Fair offers, no games, and a team that knows the difference between a player and a collector piece — because we deal in both.
	</p>
	<div class="text-center mt-8">
		<a href="/sell-trade" class="border border-stone-600 hover:border-white text-white text-xs tracking-widest uppercase px-8 py-4 transition-colors inline-block">Get an Offer</a>
	</div>
</section>

<!-- LATEST INVENTORY -->
<section class="border-y border-stone-800 bg-stone-950/40">
	<div class="max-w-7xl mx-auto px-5 lg:px-8 py-16 md:py-24">
		<div class="flex items-end justify-between mb-10">
			<h2 class="text-3xl md:text-5xl font-bold text-white">Now Available</h2>
			<a href="/shop" class="text-xs tracking-widest uppercase text-stone-400 hover:text-white transition-colors">View All →</a>
		</div>
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
			{#each latest as g (g.slug)}
				<a href="/shop/{g.slug}" class="group block">
					<GuitarImage guitar={g} class="aspect-square mb-3 border border-stone-800 group-hover:border-red-600/60 transition-colors" />
					<p class="text-xs tracking-widest uppercase text-stone-500">{g.brand}</p>
					<p class="text-sm font-bold text-white leading-tight" style="font-family: var(--font-display)">{g.model}</p>
					<p class="text-sm text-red-500 mt-1">{formatPrice(g.price)}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- BRAND STORY -->
<section class="max-w-5xl mx-auto px-5 lg:px-8 py-16 md:py-24 text-center">
	<p class="text-xs tracking-[0.4em] uppercase text-red-500 mb-4">Our Story</p>
	<h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Run by players, for players.</h2>
	<p class="text-lg text-stone-400 leading-relaxed max-w-2xl mx-auto">
		Tone Chasers started as one collector's obsession with finding the right instruments and ended up as Grand Rapids' home for vintage and heavy gear. We buy what we'd play, price it fair, and stand behind every piece on the wall.
	</p>
	<a href="/about" class="inline-block mt-8 text-xs tracking-widest uppercase border-b border-red-600 text-white pb-1 hover:opacity-70 transition-opacity">More About Us</a>
</section>

<!-- SERVICES -->
<section class="border-t border-stone-800 bg-black">
	<div class="max-w-7xl mx-auto px-5 lg:px-8 py-16 md:py-24">
		<div class="text-center mb-12">
			<p class="text-xs tracking-[0.4em] uppercase text-red-500 mb-2">Beyond the Sale</p>
			<h2 class="text-3xl md:text-5xl font-bold text-white">Services</h2>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each services as s}
				<div class="border border-stone-800 p-8 hover:border-red-600/60 transition-colors">
					<h3 class="text-xl font-bold text-white mb-3" style="font-family: var(--font-display)">{s.title}</h3>
					<p class="text-sm text-stone-400 leading-relaxed">{s.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-red-600 text-black">
	<div class="max-w-7xl mx-auto px-5 lg:px-8 py-16 md:py-20 text-center">
		<h2 class="text-3xl md:text-5xl font-bold mb-4">Looking for something specific?</h2>
		<p class="text-black/70 mb-8 max-w-xl mx-auto">Tell us what you're chasing — we'll hunt it down or make you an offer on what you've got.</p>
		<a href="/contact" class="inline-block bg-black text-white text-xs tracking-widest uppercase font-bold px-10 py-4 hover:bg-stone-900 transition-colors">Get in Touch</a>
	</div>
</section>
