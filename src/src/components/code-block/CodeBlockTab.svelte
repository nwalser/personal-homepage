<script lang="ts">
	import { getContext } from 'svelte';
	import { TABS } from './CodeBlock.svelte';

	export let name: string;

	let tab = {name: name};
	const { registerTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>


{#if $selectedTab === tab}
	<slot></slot>
{/if}