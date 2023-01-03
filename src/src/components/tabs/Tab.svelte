<script>
	import { getContext } from 'svelte';
	import { TABS } from './TabList.svelte';

	const panel = {};
    const tab = {};

	const { registerPanel, selectedPanel, registerTab } = getContext(TABS);

    registerTab(tab);
</script>

{#if $selectedPanel === panel}
	<slot></slot>
{/if}