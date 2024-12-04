<script lang="ts">
	import Dropdown from './Dropdown/Dropdown.svelte';
	import DropdownContent from './Dropdown/DropdownContent.svelte';
	import { locale } from '$lib/translations/translations';
	import ToggleTheme from './ToggleTheme.svelte';

	let isOpen: boolean = false;
	let language: string = 'en';
	function changeLanguage(lang: string) {
		locale.set(lang);
		language = lang;
	}
</script>

<header>
	<div
		class="bg-hitomi-primary dark:bg-header-dark h-header text-text-dark fixed w-screen shadow-md"
	>
		<div class="flex h-full items-center justify-between">
			<div class="p-4">
				<a class="text-xl" href="/">Hitomi Viewer</a>
			</div>
			<div class="flex h-full items-center justify-center space-x-4 pr-8">
				<ToggleTheme />
				<Dropdown label={language.toUpperCase()} bind:isOpen>
					<DropdownContent
						label="EN"
						onClick={() => {
							changeLanguage('en');
							isOpen = false;
						}}
					/>
					<DropdownContent
						label="JA"
						onClick={() => {
							changeLanguage('ja');
							isOpen = false;
						}}
					/>
				</Dropdown>
			</div>
		</div>
	</div>
</header>
