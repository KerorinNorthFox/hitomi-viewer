<script lang="ts">
	import Button from './Button.svelte';
	import { t } from '$lib/translations/translations';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let url: string = '';
	let origin: string = $page.url.origin;
	let isProcessing: boolean = false;
</script>

<div class="p-12 text-center">
	<input
		class="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
		id="url"
		type="text"
		placeholder="URL"
		bind:value={url}
	/>
	<Button
		bind:isProcessing
		onClick={() => {
			let transitionPromise = goto(`${origin}?url=${url}`);
			isProcessing = true;
			transitionPromise.then(() => {
				url = '';
				isProcessing = false;
			});
		}}>{isProcessing ? `${$t('common.converting')}` : `${$t('common.convertButton')}`}</Button
	>
</div>
