<script lang="ts">
	import HitomiButton from './Button/HitomiButton.svelte';
	import { t } from '$lib/translations/translations';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let url: string = '';
	let origin: string = $page.url.origin;
	let isProcessing: boolean = false;
</script>

<div class="p-12 text-center">
	<input
		class="text-text-light w-full appearance-none rounded border px-3 py-2 leading-tight shadow-md focus:outline-none"
		id="url"
		type="text"
		placeholder="URL"
		bind:value={url}
	/>
	<div class="mt-4 flex justify-center">
		<HitomiButton
			bind:isProcessing
			onClick={() => {
				let transitionPromise = goto(`${origin}?url=${url}`);
				isProcessing = true;
				transitionPromise.then(() => {
					url = '';
					isProcessing = false;
				});
			}}
		>
			{isProcessing ? `${$t('common.converting')}` : `${$t('common.convertButton')}`}
		</HitomiButton>
	</div>
</div>
