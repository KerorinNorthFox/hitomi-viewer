<script lang="ts">
	export let onClick: () => void;
	export let isProcessing: boolean = false;
	export let className: string = '';

	let isClick: boolean = false;
</script>

<button
	class={`text-text-dark h-full w-full rounded ${isClick && 'scale-[.95] '} ${isProcessing ? 'bg-gray-500 text-gray-300' : 'bg-hitomi-button hover:shadow-lg'} ${className}`}
	onmousedown={() => (isClick = true)}
	onmouseup={() => (isClick = false)}
	onclick={onClick}
>
	<slot />
</button>
