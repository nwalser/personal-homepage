<script lang="ts">
	import type { Readable, Writable } from 'svelte/store';
	import type { PostListEntry } from './PostListEntry';
	import PostListItem from './PostListItem.svelte';

	export let posts: Readable<PostListEntry[]>;

	export let cols: number = 3;
	export let smCols: number = 1;

	export let maxPosts: number = 1000;
	export let aspect: string = 'aspect-[8/3]';

	export let seeAllLink: string = '';
</script>

<div class="grid grid-cols-{cols} gap-y-4 sm:grid-cols-{smCols} gap-x-4 mb-5">
	{#each $posts.slice(0, maxPosts) as post}
		<PostListItem {post} {aspect} />
	{/each}

	{#if $posts.length == 0}
		<PostListItem
			post={{
				title: 'Nothing found',
				subtitle: '',
				updated: '',
				published: ''
			}}
			{aspect}
		/>
	{/if}
</div>

{#if $posts.slice(0, maxPosts).length != $posts.length && seeAllLink != ''}
	<div class="flex justify-center align-middle">
		<a
			href={seeAllLink}
			class="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>See all {$posts.length} Templates</a
		>
	</div>
{/if}
