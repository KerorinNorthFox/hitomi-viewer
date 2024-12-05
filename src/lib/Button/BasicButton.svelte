<script lang="ts">
	export let onClick: () => void;
	export let isProcessing: boolean = false;
	export let className: string = '';

	let isClicking: boolean = false;
</script>

<button
	class={`h-full w-full rounded transition-all duration-300 ease-in-out ${isClicking && 'scale-[.95]'} ${isProcessing ? 'text-text-light border border-black bg-white' : 'bg-hitomi-button text-text-dark hover:shadow-lg'} ${className}`}
	onmousedown={() => (isClicking = true)}
	onmouseup={() => (isClicking = false)}
	onclick={onClick}
>
	<slot />
</button>
