<script lang="ts">
	import BasicButton from './BasicButton.svelte';

	export let onClick: () => void;
	export let isProcessing: boolean = false;
	export let className: string = '';
</script>

<div class="w-auto">
	<BasicButton className={`flex justify-center ${className}`} {onClick} {isProcessing}>
		<span class="px-6 py-2 sm:px-12">
			<slot />
		</span>
	</BasicButton>
</div>
