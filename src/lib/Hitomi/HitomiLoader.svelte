<script lang="ts">
	import HitomiContent from './HitomiContent.svelte';

	export let urlList: Array<string>;
	export let wRate: number = 8;
	export let hRate: number = 8;
	export let isLeft: boolean = false;
</script>

<div style="pointer-events: none;">
	{#each urlList as url}
		<HitomiContent {url} {isLeft} {wRate} {hRate} />
	{/each}
</div>
