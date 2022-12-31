<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let href: string;
	export let src: string = '';
	export let alt: string = '';
</script>

<div
	class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
>
	<div class="flex-shrink-0">
		{#if src != ''}
			<img
				class="flex h-12 w-12 items-center justify-center rounded-md bg-gray-200 ring-8 ring-white"
				{src}
				{alt}
			/>
		{:else}
			<div
				class="flex h-12 w-12 items-center justify-center rounded-md bg-gray-200 ring-8 ring-white"
			/>
		{/if}
	</div>
	<div class="min-w-0 flex-1">
		<a {href} class="focus:outline-none">
			<span class="absolute inset-0" aria-hidden="true" />
			<p class="text-sm font-medium text-gray-900">{title}</p>
			<p class="truncate text-sm text-gray-500">{subtitle}</p>
		</a>
	</div>
</div>
