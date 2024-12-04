<script lang="ts">
	import HitomiButton from '$lib/Button/HitomiButton.svelte';
	import ScalingButton from '$lib/Button/ScalingButton.svelte';
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
	<title>{data.targetUrl ? data.targetUrl : $t('common.title')}</title>
</svelte:head>

<div class="px-4 py-12">
	<Welcome />
	<Form />
</div>

{#if data.hrefList}
	<div class="flex items-center justify-center space-x-4 md:hidden">
		<HitomiButton onClick={() => (isLeft = true)}>
			{$t('common.leftHand')}
		</HitomiButton>
		<HitomiButton onClick={() => (isLeft = false)}>
			{$t('common.rightHand')}
		</HitomiButton>
	</div>

	<div
		class={`fixed bottom-4 flex flex-col space-y-2 rounded-lg p-2 ${isLeft ? 'left-4' : 'right-4'}`}
	>
		<ScalingButton
			onClick={() => {
				if (hRate >= 12) return;
				hRate++;
			}}
		>
			<span class="text-xl">+</span>
		</ScalingButton>
		<ScalingButton
			onClick={() => {
				if (hRate <= 2) return;
				hRate--;
			}}
		>
			<span class="text-xl">-</span>
		</ScalingButton>
	</div>

	<div class="mt-4">
		<HitomiLoader bind:isLeft bind:hRate urlList={data.hrefList} />
	</div>

	<div class="flex justify-center p-12">
		<HitomiButton
			onClick={() => {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			}}
		>
			{$t('common.backToTop')}
		</HitomiButton>
	</div>
{/if}
