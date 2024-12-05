<script lang="ts">
	import BasicButton from '$lib/Button/BasicButton.svelte';

	export let url: string;
	export let isLeft: boolean;
	export let wRate: number;
	export let hRate: number;

	let isVisible: boolean = true;
</script>

<div class={`flex md:justify-center ${isLeft ? 'justify-end' : 'justify-start'}`}>
	<img
		class={`m-1 shadow ${isVisible ? 'block' : 'hidden'}`}
		src={url}
		width={`${wRate}0%`}
		height={`${hRate}0%`}
		loading="lazy"
		alt=""
	/>
	<div class={`${isLeft ? 'order-last' : ''} m-1 h-8 w-8`}>
		<BasicButton className="flex justify-center p-1" onClick={() => (isVisible = !isVisible)}>
			{#if isVisible}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-eye-closed h-full w-full"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4"
					/><path d="M3 15l2.5 -3.8" /><path d="M21 14.976l-2.492 -3.776" /><path
						d="M9 17l.5 -4"
					/><path d="M15 17l-.5 -4" /></svg
				>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-eye h-full w-full"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
					/><path
						d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"
					/></svg
				>
			{/if}
		</BasicButton>
	</div>
</div>
