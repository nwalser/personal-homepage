<script context="module">
	export const TABS = {};
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const tabs = writable([]);
	const selectedTab = writable(null);

	setContext(TABS, {
		registerTab: (tab) => {
			tabs.update((tabs) => [...tabs, tab]);
			selectedTab.update((current) => current || tab);
		},

		selectedTab
	});
</script>

<div>
	<div class="sm:hidden">
		<label for="tabs" class="sr-only">Select a tab</label>
		<select
			id="tabs"
			name="tabs"
			class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
		>
			{#each $tabs as tab}
				{#if tab == $selectedTab}
					<option
						on:click={(x) => {
							selectedTab.set(tab);
						}}
						selected>{tab.name}</option
					>
				{:else}
					<option
						on:click={(x) => {
							selectedTab.set(tab);
						}}>{tab.name}</option
					>
				{/if}
			{/each}
		</select>
	</div>
	<div class="hidden sm:block">
		<div class="border-b border-gray-200">
			<nav class="-mb-px flex space-x-8" aria-label="Tabs">
				{#each $tabs as tab}
					{#if tab == $selectedTab}
						<button
							class="border-indigo-500 text-indigo-600 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
							aria-current="page"
						>
							<!-- Heroicon name: mini/users -->
							<svg
								class="text-indigo-500 -ml-0.5 mr-2 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z"
								/>
							</svg>
							<span>{tab.name}</span>
						</button>
					{:else}
						<button
							on:click={(x) => {
								selectedTab.set(tab);
							}}
							class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
						>
							<svg
								class="text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"
								/>
							</svg>
							<span>{tab.name}</span>
						</button>
					{/if}
				{/each}
			</nav>
		</div>
	</div>
</div>

<div class="tabs">
	<slot />
</div>
