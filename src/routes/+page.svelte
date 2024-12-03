<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Form from '$lib/Form.svelte';
	import HitomiLoader from '$lib/HitomiLoader.svelte';
	import Welcome from '$lib/Welcome.svelte';
	import { t } from '$lib/translations/translations';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	let hRate: number = 8;
	let isLeft: boolean = true;
</script>

<svelte:head>
	<title>{data.targetUrl ? data.targetUrl : $t('common.welcome-page.title')}</title>
</svelte:head>

<div class="px-4 py-12">
	<Welcome />
	<Form />
</div>

{#if data.hrefList}
	<div class="flex items-center justify-center space-x-4 md:hidden">
		<Button xSmPadding={4} onClick={() => (isLeft = true)}>{$t('common.leftHand')}</Button>
		<Button xSmPadding={4} onClick={() => (isLeft = false)}>{$t('common.rightHand')}</Button>
	</div>

	<div
		class={`fixed bottom-4 flex flex-col space-y-2 rounded-lg bg-gray-200 p-2 ${isLeft ? 'left-4' : 'right-4'}`}
	>
		<button
			class="rounded-lg border border-black p-6"
			on:click={() => {
				if (hRate >= 12) return;
				hRate++;
			}}>+</button
		>
		<button
			class="rounded-lg border border-black p-6"
			on:click={() => {
				if (hRate <= 2) return;
				hRate--;
			}}>-</button
		>
	</div>

	<div class="mt-4">
		<HitomiLoader bind:isLeft bind:hRate urlList={data.hrefList} />
	</div>

	<div class="p-12 text-center">
		<Button
			onClick={() => {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			}}>{$t('common.backToTop')}</Button
		>
	</div>
{/if}
