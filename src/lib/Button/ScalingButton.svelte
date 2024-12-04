<script lang="ts">
	import BasicButton from './BasicButton.svelte';

	export let onClick: () => void;
	export let className: string = '';
</script>

<BasicButton
	className={`w-auto h-auto flex justify-center border border-black p-6 ${className}`}
	{onClick}
>
	<slot />
</BasicButton>
