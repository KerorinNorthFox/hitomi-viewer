<script lang="ts">
	export let urlList: Array<string>;
	export let wRate: number = 8;
	export let hRate: number = 8;
	export let isLeft: boolean = false;
</script>

<div style="pointer-events: none;">
	{#each urlList as url}
		<div class={`flex md:justify-center ${isLeft ? 'justify-end' : 'justify-start'}`}>
			<iframe loading="lazy" width={`${wRate}0%`} height={hRate * 100} src={url} title=""></iframe>
		</div>
	{/each}
</div>
