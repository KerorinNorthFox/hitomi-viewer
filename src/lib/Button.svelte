<script lang="ts">
	export let onClick: () => void;
	export let isProcessing: boolean = false;
	export let xSmPadding: number = 12;

	let isClick: boolean = false;
</script>

<button
	class={`mt-4 rounded px-${xSmPadding} py-2 text-white sm:px-12 ${isClick && 'scale-[.95] '} ${isProcessing ? 'bg-gray-400' : 'bg-hitomi-button hover:shadow-lg'}`}
	onmousedown={() => (isClick = true)}
	onmouseup={() => (isClick = false)}
	onclick={onClick}
>
	<slot />
</button>
