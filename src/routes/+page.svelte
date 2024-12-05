<script lang="ts">
	import HitomiButton from '$lib/Button/HitomiButton.svelte';
	import Form from '$lib/Form.svelte';
	import HitomiLoader from '$lib/Hitomi/HitomiLoader.svelte';
	import ScalingChanger from '$lib/ScalingChanger.svelte';
	import Welcome from '$lib/Welcome.svelte';
	import { t } from '$lib/translations/translations';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	let hRate: number = 8;
	let wRate: number = 8;
	let isLeft: boolean = true;
</script>

<svelte:head>
	<title>{data.title ? `${data.title} | Hitomi Viewer` : $t('common.title')}</title>
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

	<ScalingChanger {isLeft} bind:hRate bind:wRate />

	<div class="mt-4">
		<HitomiLoader bind:isLeft bind:hRate bind:wRate urlList={data.imageByteUrlList} />
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
