<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	// Prefilled when arriving from a product page's "Inquire" button.
	// searchParams can't be read during static prerender — read it client-side only.
	const guitarInterest = $derived(browser ? ($page.url.searchParams.get('guitar') ?? '') : '');
	const defaultMessage = $derived(
		guitarInterest ? `Hi — I'm interested in the ${guitarInterest}. Is it still available?` : '',
	);
</script>

<svelte:head>
	<title>Contact | Tone Chasers Music · Grand Rapids, MI</title>
	<meta name="description" content="Get in touch with Tone Chasers Music in Grand Rapids — inquire about a guitar, sell or trade your gear, or ask about services." />
</svelte:head>

<section class="max-w-6xl mx-auto px-5 lg:px-8 py-12 md:py-20">
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
		<!-- Form -->
		<div>
			<p class="text-xs tracking-[0.4em] uppercase text-red-500 mb-3">Get in Touch</p>
			<h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Contact</h1>
			<p class="text-stone-400 leading-relaxed mb-8">
				Inquiring about a guitar, selling your gear, or asking about a repair? Drop us a line and we’ll get right back to you.
			</p>

			<!-- Static-friendly form. Point `action` at a Formspree (or similar) endpoint to go live — no server needed. -->
			<form action="https://formspree.io/f/your-form-id" method="POST" class="flex flex-col gap-4">
				{#if guitarInterest}
					<input type="hidden" name="guitar" value={guitarInterest} />
					<p class="text-xs text-stone-400 border border-stone-800 bg-stone-950/60 px-4 py-3">
						Inquiring about: <span class="text-white">{guitarInterest}</span>
					</p>
				{/if}
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<input name="name" type="text" required placeholder="Name" class="bg-stone-950 border border-stone-700 focus:border-red-600 outline-none text-white text-sm px-4 py-3 placeholder:text-stone-600" />
					<input name="email" type="email" required placeholder="Email" class="bg-stone-950 border border-stone-700 focus:border-red-600 outline-none text-white text-sm px-4 py-3 placeholder:text-stone-600" />
				</div>
				<input name="phone" type="tel" placeholder="Phone (optional)" class="bg-stone-950 border border-stone-700 focus:border-red-600 outline-none text-white text-sm px-4 py-3 placeholder:text-stone-600" />
				<textarea name="message" rows="6" required placeholder="How can we help?" class="bg-stone-950 border border-stone-700 focus:border-red-600 outline-none text-white text-sm px-4 py-3 placeholder:text-stone-600 resize-y">{defaultMessage}</textarea>
				<button type="submit" class="bg-red-600 hover:bg-red-500 text-black font-bold text-xs tracking-widest uppercase px-8 py-4 transition-colors w-fit">Send Message</button>
			</form>
		</div>

		<!-- Store info -->
		<div class="lg:pt-20">
			<div class="border border-stone-800 divide-y divide-stone-800">
				<div class="p-6">
					<p class="text-[10px] tracking-widest uppercase text-stone-500">Visit the Shop</p>
					<p class="text-white mt-2">121 Division Ave S<br/>Grand Rapids, MI 49503</p>
				</div>
				<div class="p-6">
					<p class="text-[10px] tracking-widest uppercase text-stone-500">Hours</p>
					<p class="text-white mt-2">Tuesday – Friday · 11am – 7pm<br/>Saturday · 12pm – 5pm<br/><span class="text-stone-500">Sun / Mon · Closed</span></p>
				</div>
				<div class="p-6">
					<p class="text-[10px] tracking-widest uppercase text-stone-500">Call or Email</p>
					<a href="tel:+16163819611" class="text-white mt-2 block hover:text-red-500 transition-colors">(616) 381-9611</a>
					<a href="mailto:info@tonechasersmusic.com" class="text-white block hover:text-red-500 transition-colors">info@tonechasersmusic.com</a>
				</div>
			</div>
		</div>
	</div>
</section>
