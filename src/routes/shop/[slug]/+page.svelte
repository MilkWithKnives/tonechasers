<script lang="ts">
	import { formatPrice } from '$lib/guitars';
	import GuitarImage from '$lib/GuitarImage.svelte';

	let { data } = $props();
	const { guitar, related } = $derived(data);

	const inquiryHref = $derived(
		`/contact?guitar=${encodeURIComponent(`${guitar.year} ${guitar.brand} ${guitar.model}`)}`,
	);
</script>

<svelte:head>
	<title>{guitar.year} {guitar.brand} {guitar.model} | Tone Chasers Music</title>
	<meta name="description" content={guitar.blurb} />
</svelte:head>

<section class="max-w-7xl mx-auto px-5 lg:px-8 py-10 md:py-16">
	<a href="/shop" class="text-xs tracking-widest uppercase text-stone-500 hover:text-white transition-colors">← Back to Shop</a>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
		<!-- Image -->
		<GuitarImage guitar={guitar} class="aspect-square border border-stone-800" sizes="(min-width: 1024px) 50vw, 100vw" />

		<!-- Details -->
		<div>
			<p class="text-xs tracking-[0.4em] uppercase text-red-500 mb-2">{guitar.category} · {guitar.year}</p>
			<h1 class="text-3xl md:text-5xl font-bold text-white leading-tight">{guitar.brand} {guitar.model}</h1>

			<div class="flex items-center gap-4 mt-5">
				<p class="text-3xl font-bold {guitar.status === 'sold' ? 'text-stone-600 line-through' : 'text-red-500'}">{formatPrice(guitar.price)}</p>
				{#if guitar.status === 'sold'}
					<span class="bg-stone-800 text-stone-300 text-xs tracking-widest uppercase px-3 py-1">Sold</span>
				{:else if guitar.status === 'hold'}
					<span class="bg-amber-600 text-black text-xs tracking-widest uppercase px-3 py-1">On Hold</span>
				{:else}
					<span class="bg-green-700/30 text-green-400 text-xs tracking-widest uppercase px-3 py-1">Available</span>
				{/if}
			</div>

			<p class="text-stone-400 leading-relaxed mt-6">{guitar.description}</p>

			<!-- Specs -->
			<dl class="grid grid-cols-2 gap-px bg-stone-800 border border-stone-800 mt-8">
				<div class="bg-black p-4">
					<dt class="text-[10px] tracking-widest uppercase text-stone-500">Condition</dt>
					<dd class="text-sm text-white mt-1">{guitar.condition}</dd>
				</div>
				<div class="bg-black p-4">
					<dt class="text-[10px] tracking-widest uppercase text-stone-500">Finish</dt>
					<dd class="text-sm text-white mt-1">{guitar.finish}</dd>
				</div>
				{#each guitar.specs as spec}
					<div class="bg-black p-4">
						<dt class="text-[10px] tracking-widest uppercase text-stone-500">{spec.label}</dt>
						<dd class="text-sm text-white mt-1">{spec.value}</dd>
					</div>
				{/each}
			</dl>

			<!-- Inquiry CTA -->
			<div class="mt-8 flex flex-wrap gap-4">
				{#if guitar.status === 'available'}
					<a href={inquiryHref} class="bg-red-600 hover:bg-red-500 text-black font-bold text-xs tracking-widest uppercase px-8 py-4 transition-colors">Inquire About This Guitar</a>
				{:else}
					<a href="/contact" class="bg-red-600 hover:bg-red-500 text-black font-bold text-xs tracking-widest uppercase px-8 py-4 transition-colors">Find Me Something Similar</a>
				{/if}
				<a href="/sell-trade" class="border border-stone-600 hover:border-white text-white text-xs tracking-widest uppercase px-8 py-4 transition-colors">Trade Toward It</a>
			</div>
			<p class="text-xs text-stone-500 mt-4">Every instrument is inspected and set up before it leaves the shop. Questions? <a href="/contact" class="text-red-500 hover:underline">Reach out.</a></p>
		</div>
	</div>

	<!-- Related -->
	{#if related.length}
		<div class="mt-20">
			<h2 class="text-2xl font-bold text-white mb-6">More {guitar.category}</h2>
			<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
				{#each related as g (g.slug)}
					<a href="/shop/{g.slug}" class="group block">
						<GuitarImage guitar={g} class="aspect-square mb-3 border border-stone-800 group-hover:border-red-600/60 transition-colors" />
						<p class="text-xs tracking-widest uppercase text-stone-500">{g.brand}</p>
						<p class="text-sm font-bold text-white leading-tight" style="font-family: var(--font-display)">{g.model}</p>
						<p class="text-sm text-red-500 mt-1">{formatPrice(g.price)}</p>
					</a>
				{/each}
			</div>
		</div>
	{/if}
</section>
