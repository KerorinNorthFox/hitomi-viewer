<script lang="ts">
	export let label: string;
	export let onClick: () => void = () => {};
</script>

<button
	class="rounded-md px-8 py-2 text-sm text-black hover:bg-gray-100"
	on:click={() => onClick()}
>
	<p>{label}</p>
</button>
