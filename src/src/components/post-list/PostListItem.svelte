<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let src: string;
    export let alt: string;
    export let href: string;
</script>


<div
	class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
>
	<div class="bg-gray-200">
		<img
			src={src}
			alt={alt}
			class="aspect-[8/3] object-cover object-center"
		/>
	</div>
	<div class="flex flex-1 flex-col space-y-2 p-4">
		<h3 class="text-sm font-medium text-gray-900">
			<a href={href}>
				<span aria-hidden="true" class="absolute inset-0" />
				{title}
			</a>
		</h3>
		<p class="text-sm text-gray-500">
			{subtitle}
		</p>
	</div>
</div>
