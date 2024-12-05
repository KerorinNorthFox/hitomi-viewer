<script lang="ts">
	import BasicButton from '$lib/Button/BasicButton.svelte';

	export let url: string;
	export let isLeft: boolean;
	export let wRate: number;
	export let hRate: number;

	let isVisible: boolean = true;
</script>

<div class={`flex md:justify-center ${isLeft ? 'justify-end' : 'justify-start'}`}>
	<iframe loading="lazy" width={`${wRate}0%`} height={hRate * 100} src={url} title=""></iframe>
	<div class={`${isVisible ? 'block' : 'hidden'} ${isLeft ? 'order-last' : ''}`}>
		<BasicButton className="flex justify-center" onClick={() => (isVisible = !isVisible)}>
			<span class="p-2">x</span>
		</BasicButton>
	</div>
</div>
