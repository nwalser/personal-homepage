<script context="module">
	export const TABS = {};
</script>

<script lang="ts">
	import { setContext, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	const tabs = writable([]);
	const selectedTab = writable(null);

	setContext(TABS, {
		registerTab: tab => {
			tabs.update(tabs => [...tabs, tab])
			selectedTab.update(current => current || tab);
		},

		selectedTab
	});
</script>

{#each $tabs as tab}
	<button on:click={x => {selectedTab.set(tab)}}>{tab.name}</button>
{/each}


<div class="tabs">
	<slot />
</div>