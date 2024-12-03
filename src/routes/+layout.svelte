<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.css';
	let { children } = $props();

	import { loadTranslations } from '$lib/translations/translations';
	let defaultLanguage = 'en';
	loadTranslations(defaultLanguage, '/');
</script>

<main class="bg-white dark:bg-gray-600">
	<Header />
	<div class="pt-header mx-auto min-h-screen xl:max-w-[70%]">
		{@render children()}
	</div>
	<Footer />
</main>
