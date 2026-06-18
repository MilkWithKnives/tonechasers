<script lang="ts">
	import type { Guitar } from './guitars';

	let {
		guitar,
		class: klass = '',
		sizes = '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw',
	}: { guitar: Guitar; class?: string; sizes?: string } = $props();

	let loaded = $state(false);
	let errored = $state(false);

	function handleLoad() {
		loaded = true;
	}

	function handleError() {
		errored = true;
	}
</script>

<div class="relative overflow-hidden bg-gradient-to-br from-stone-800 via-stone-900 to-black {klass}">
	<!-- Designed placeholder (shown until/unless a real photo loads) -->
	{#if !loaded}
		<div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
			<span class="text-[10px] tracking-[0.35em] uppercase text-red-500/80">{guitar.brand}</span>
			<span class="mt-1 text-sm font-bold uppercase tracking-wide text-stone-300 font-display">{guitar.model}</span>
			<span class="mt-2 text-[10px] tracking-widest uppercase text-stone-600">{guitar.year}</span>
		</div>
	{/if}

	{#if !errored}
		<img
			src={guitar.image}
			alt="{guitar.brand} {guitar.model} ({guitar.year})"
			{sizes}
			loading="lazy"
			decoding="async"
			onload={handleLoad}
			onerror={handleError}
			class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 {loaded ? 'opacity-100' : 'opacity-0'}"
		/>
	{/if}
</div>
