<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { guitars, categories, formatPrice, type Category } from '$lib/guitars';
	import GuitarImage from '$lib/GuitarImage.svelte';

	// searchParams can't be read during static prerender — only filter client-side.
	const activeCategory = $derived(browser ? ($page.url.searchParams.get('category') as Category | null) : null);
	const filtered = $derived(
		activeCategory ? guitars.filter((g) => g.category === activeCategory) : guitars,
	);
</script>

<svelte:head>
	<title>Shop Vintage & Rare Guitars | Tone Chasers Music · Grand Rapids, MI</title>
	<meta name="description" content="Browse vintage, rare, and heavy electric guitars, basses, amps, and effects in stock at Tone Chasers Music in Grand Rapids, MI." />
</svelte:head>

<section class="max-w-7xl mx-auto px-5 lg:px-8 py-12 md:py-16">
	<p class="text-xs tracking-[0.4em] uppercase text-red-500 mb-3">The Collection</p>
	<h1 class="text-4xl md:text-6xl font-bold text-white mb-8">Shop</h1>

	<!-- Category filter -->
	<div class="flex flex-wrap gap-2 mb-10">
		<a href="/shop" class="text-xs tracking-widest uppercase px-4 py-2 border transition-colors {!activeCategory ? 'border-red-600 text-red-500' : 'border-stone-700 text-stone-400 hover:border-white hover:text-white'}">All</a>
		{#each categories as cat}
			<a href="/shop?category={cat}" class="text-xs tracking-widest uppercase px-4 py-2 border transition-colors {activeCategory === cat ? 'border-red-600 text-red-500' : 'border-stone-700 text-stone-400 hover:border-white hover:text-white'}">{cat}</a>
		{/each}
	</div>

	<p class="text-xs tracking-widest uppercase text-stone-500 mb-6">{filtered.length} {filtered.length === 1 ? 'item' : 'items'}</p>

	<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
		{#each filtered as g (g.slug)}
			<a href="/shop/{g.slug}" class="group block">
				<div class="relative">
					<GuitarImage guitar={g} class="aspect-square mb-3 border border-stone-800 group-hover:border-red-600/60 transition-colors" />
					{#if g.status === 'sold'}
						<span class="absolute top-2 left-2 bg-black/80 text-stone-300 text-[10px] tracking-widest uppercase px-2 py-1">Sold</span>
					{:else if g.status === 'hold'}
						<span class="absolute top-2 left-2 bg-amber-600/90 text-black text-[10px] tracking-widest uppercase px-2 py-1">On Hold</span>
					{/if}
				</div>
				<p class="text-xs tracking-widest uppercase text-stone-500">{g.brand} · {g.year}</p>
				<p class="text-sm font-bold text-white leading-tight" style="font-family: var(--font-display)">{g.model}</p>
				<p class="text-sm {g.status === 'sold' ? 'text-stone-600 line-through' : 'text-red-500'} mt-1">{formatPrice(g.price)}</p>
			</a>
		{/each}
	</div>
</section>
