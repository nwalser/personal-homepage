<script lang="ts">
	import type { PostListEntry } from './PostListEntry';

	export let post: PostListEntry;
	export let aspect: string = 'aspect-[8/3]';
</script>

<div class="group relative flex flex-col overflow-hidden rounded-lg bg-white">
	<div class="bg-white">
		<img src={post.imageSrc} alt={post.imageAlt} class="{aspect} object-fit object-center" />
	</div>
	<div class="flex flex-1 flex-col space-y-2 p-4">
		<h2 class="font-bold text-gray-900 text-2xl">
			<a href={post.link}>
				<span aria-hidden="true" class="absolute inset-0" />
				{post.title}
			</a>
		</h2>
		{#if post.subtitle != ''}
			<p class="text-sm text-gray-500">
				{post.subtitle}
			</p>
		{/if}
	</div>
</div>
