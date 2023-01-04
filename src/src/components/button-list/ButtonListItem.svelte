<script lang="ts">
	export let title: string;
	export let href: string;
	export let newTarget: boolean;
</script>

{#if newTarget}
	<a
		{href}
		class="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
		target="_blank"
		rel="noopener noreferrer">{title}</a
	>
{:else}
	<a
		{href}
		class="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
		>{title}</a
	>
{/if}
