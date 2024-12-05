<script lang="ts">
	import ScalingButton from '$lib/Button/ScalingButton.svelte';

	export let hRate: number;
	export let wRate: number;
	export let isLeft: boolean;
</script>

<div
	class={`fixed bottom-4 flex aspect-square w-[13%] flex-col space-y-2 rounded-lg p-2 md:w-24 ${isLeft ? 'left-4' : 'right-4'}`}
>
	<ScalingButton
		onClick={() => {
			if (hRate < 12) hRate++;
			if (wRate < 12) wRate++;
		}}
	>
		<!-- <span class="text-xl">+</span> -->
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24	"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icons-tabler-outline icon-tabler-plus h-full w-full"
				><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path
					d="M5 12l14 0"
				/></svg
			>
		</div>
	</ScalingButton>
	<ScalingButton
		onClick={() => {
			if (hRate > 2) hRate--;
			if (wRate > 2) wRate--;
		}}
	>
		<!-- <span class="text-xl">-</span> -->
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icons-tabler-outline icon-tabler-minus h-full w-full"
				><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /></svg
			>
		</div>
	</ScalingButton>
</div>
