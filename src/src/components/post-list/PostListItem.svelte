<script lang="ts">
	export let title: string;
	export let subtitle: string = '';
	export let src: string;
	export let alt: string;
	export let href: string;
	export let color: string = 'bg-gray-600';
</script>

<div class="group relative flex flex-col overflow-hidden rounded-lg bg-white">
	<div class={color}>
		<img {src} {alt} class="aspect-[8/3] object-fit object-center" />
	</div>
	<div class="flex flex-1 flex-col space-y-2 p-4">
		<h2 class="font-bold text-gray-900 text-2xl">
			<a {href}>
				<span aria-hidden="true" class="absolute inset-0" />
				{title}
			</a>
		</h2>
		{#if subtitle != ''}
			<p class="text-sm text-gray-500">
				{subtitle}
			</p>
		{/if}
	</div>
</div>
