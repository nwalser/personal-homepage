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
	<div class="bg-[#1e1e1e] -mb-3 rounded-t-md">
		<nav class="flex space-x-0 overflow-auto" aria-label="Tabs">
			{#each $tabs as tab}
				{#if tab == $selectedTab}
					<button
						class="border-gray-200 text-gray-200 group inline-flex items-center py-4 px-5 border-b-2 font-medium text-sm"
						aria-current="page"
					>
						{#if tab.icon != ''}
							<img src={tab.icon} class="my-0 -ml-0.5 mr-2 h-5 w-5" alt="" />
						{/if}

						<span>{tab.name}</span>
					</button>
				{:else}
					<button
						class="text-gray-400 group inline-flex items-center py-2 px-5 font-medium text-sm"
						aria-current="page"
						on:click={(x) => {
							selectedTab.set(tab);
						}}
					>
						{#if tab.icon != ''}
							<img src={tab.icon} class="my-0 -ml-0.5 mr-2 h-5 w-5" alt="" />
						{/if}
						<span>{tab.name}</span>
					</button>
				{/if}
			{/each}
		</nav>
	</div>
</div>

<div class="tabs text-sm code-selection" style="">
	<slot />
</div>