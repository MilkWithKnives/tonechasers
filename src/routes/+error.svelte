<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} — Tone Chasers Music</title>
</svelte:head>

<section class="max-w-3xl mx-auto px-5 lg:px-8 py-24 md:py-32 text-center">
	<p class="text-xs tracking-[0.5em] uppercase text-red-500 mb-4">Off the rails</p>
	<h1 class="text-6xl md:text-8xl font-bold text-white leading-none">{$page.status}</h1>
	<p class="mt-6 text-lg text-stone-400 leading-relaxed">
		{$page.error?.message ?? 'Something went wrong.'}
	</p>
	<p class="mt-2 text-stone-500">
		{#if $page.status === 404}
			That page wandered off. Let's get you back to the gear.
		{:else}
			Try again, or head back to the shop.
		{/if}
	</p>
	<div class="mt-10 flex flex-wrap gap-4 justify-center">
		<a href="/" class="bg-red-600 hover:bg-red-500 text-black font-bold text-xs tracking-widest uppercase px-8 py-4 transition-colors">Back Home</a>
		<a href="/shop" class="border border-stone-600 hover:border-white text-white text-xs tracking-widest uppercase px-8 py-4 transition-colors">Browse the Shop</a>
	</div>
</section>
