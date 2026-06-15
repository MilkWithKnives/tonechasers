<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	let { children } = $props();
	let mobileOpen = $state(false);

	const nav = [
		{ href: '/shop', label: 'Shop' },
		{ href: '/sell-trade', label: 'Sell / Trade' },
		{ href: '/services', label: 'Services' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' },
	];

	const isActive = (href: string) => $page.url.pathname === href || $page.url.pathname.startsWith(href + '/');
</script>

<div class="min-h-screen flex flex-col">
	<!-- NAV -->
	<header class="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-stone-800">
		<nav class="max-w-7xl mx-auto flex items-center justify-between h-16 px-5 lg:px-8">
			<a href="/" class="flex items-center gap-2" aria-label="Tone Chasers Music">
				<span class="inline-flex items-center justify-center w-8 h-8 rounded-sm bg-red-600 text-black font-bold text-sm" style="font-family: var(--font-display)">TC</span>
				<span class="text-lg font-bold tracking-wide text-white hidden sm:block" style="font-family: var(--font-display)">TONE CHASERS</span>
			</a>

			<ul class="hidden md:flex items-center gap-7">
				{#each nav as link}
					<li>
						<a href={link.href} class="text-xs tracking-widest uppercase transition-colors {isActive(link.href) ? 'text-red-500' : 'text-stone-400 hover:text-white'}">{link.label}</a>
					</li>
				{/each}
			</ul>

			<div class="flex items-center gap-3">
				<a href="/contact" class="hidden sm:inline-flex text-xs tracking-widest uppercase bg-red-600 hover:bg-red-500 text-black font-bold px-4 py-2 transition-colors">Inquire</a>
				<button class="md:hidden text-stone-300" aria-label="Menu" onclick={() => (mobileOpen = !mobileOpen)}>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
				</button>
			</div>
		</nav>

		{#if mobileOpen}
			<ul class="md:hidden border-t border-stone-800 px-5 py-4 flex flex-col gap-4 bg-black">
				{#each nav as link}
					<li><a href={link.href} onclick={() => (mobileOpen = false)} class="text-sm tracking-widest uppercase {isActive(link.href) ? 'text-red-500' : 'text-stone-300'}">{link.label}</a></li>
				{/each}
			</ul>
		{/if}
	</header>

	<!-- PAGE -->
	<main class="flex-1">
		{@render children()}
	</main>

	<!-- FOOTER -->
	<footer class="border-t border-stone-800 bg-black px-5 lg:px-8 py-12">
		<div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
			<div class="col-span-2 md:col-span-1">
				<div class="flex items-center gap-2 mb-3">
					<span class="inline-flex items-center justify-center w-8 h-8 rounded-sm bg-red-600 text-black font-bold text-sm" style="font-family: var(--font-display)">TC</span>
					<span class="text-lg font-bold tracking-wide text-white" style="font-family: var(--font-display)">TONE CHASERS</span>
				</div>
				<p class="text-sm text-stone-500 leading-relaxed">Vintage, rare & heavy gear. Buy · Sell · Trade · Consign. Downtown Grand Rapids.</p>
			</div>
			<div>
				<p class="text-xs tracking-widest uppercase text-stone-500 mb-3">Shop</p>
				<ul class="space-y-2">
					<li><a href="/shop" class="text-sm text-stone-400 hover:text-white transition-colors">All Gear</a></li>
					<li><a href="/shop?category=Electric" class="text-sm text-stone-400 hover:text-white transition-colors">Electric</a></li>
					<li><a href="/shop?category=Bass" class="text-sm text-stone-400 hover:text-white transition-colors">Bass</a></li>
					<li><a href="/shop?category=Amp" class="text-sm text-stone-400 hover:text-white transition-colors">Amps</a></li>
				</ul>
			</div>
			<div>
				<p class="text-xs tracking-widest uppercase text-stone-500 mb-3">Company</p>
				<ul class="space-y-2">
					<li><a href="/sell-trade" class="text-sm text-stone-400 hover:text-white transition-colors">Sell / Trade</a></li>
					<li><a href="/services" class="text-sm text-stone-400 hover:text-white transition-colors">Services</a></li>
					<li><a href="/about" class="text-sm text-stone-400 hover:text-white transition-colors">About</a></li>
					<li><a href="/contact" class="text-sm text-stone-400 hover:text-white transition-colors">Contact</a></li>
				</ul>
			</div>
			<div>
				<p class="text-xs tracking-widest uppercase text-stone-500 mb-3">Visit</p>
				<p class="text-sm text-stone-400">121 Division Ave S<br/>Grand Rapids, MI</p>
				<a href="tel:+16163819611" class="text-sm text-stone-400 hover:text-white transition-colors block mt-2">(616) 381-9611</a>
			</div>
		</div>
		<div class="max-w-7xl mx-auto mt-10 pt-6 border-t border-stone-900 flex flex-col sm:flex-row justify-between gap-3">
			<p class="text-xs text-stone-600">© 2026 Tone Chasers Music. All rights reserved.</p>
			<p class="text-xs text-stone-600">Site by Full Scope Media</p>
		</div>
	</footer>
</div>
