<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let src: string;
    export let alt: string;
    export let href: string;
</script>


<div
	class="group relative flex flex-col overflow-hidden rounded-lg bg-white"
>
	<div class="bg-gray-600">
		<img
			src={src}
			alt={alt}
			class="aspect-[8/3] object-fit object-center p-10"
		/>
	</div>
	<div class="flex flex-1 flex-col space-y-2 p-4">
		<h3 class="text-sm font-bold text-gray-900">
			<a href={href} class="text-lg">
				<span aria-hidden="true" class="absolute inset-0" />
				{title}
			</a>
		</h3>
		<p class="text-sm text-gray-500">
			{subtitle}
		</p>
	</div>
</div>
