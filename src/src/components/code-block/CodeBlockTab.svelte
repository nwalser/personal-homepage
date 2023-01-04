<script lang="ts">
	import { getContext } from 'svelte';
	import { TABS } from './CodeBlock.svelte';

	export let name: string;
    export let icon: string = "";

	let tab = {
        name: name,
        icon: icon
    };
	const { registerTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>


{#if $selectedTab === tab}
	<slot></slot>
{/if}