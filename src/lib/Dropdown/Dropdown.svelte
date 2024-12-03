<script lang="ts">
	export let label: string;
	export let isOpen: boolean = false;
</script>

<div class="relative inline-block text-left">
	<div>
		<button
			type="button"
			class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-100"
			on:click={() => (isOpen = !isOpen)}
		>
			{label}
			<svg
				class="-mr-1 size-5 text-gray-400"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
				data-slot="icon"
			>
				<path
					fill-rule="evenodd"
					d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>

	<div
		class={`absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none ${isOpen ? 'block' : 'hidden'}`}
	>
		<slot />
	</div>
</div>
