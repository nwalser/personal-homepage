<script lang="ts">
	import type { Writable } from 'svelte/store';
	import type { PostListEntry } from './PostListEntry';
	import PostListItem from './PostListItem.svelte';

	export let posts: Writable<PostListEntry[]>;
</script>

<div class="grid grid-cols-1 gap-y-4 sm:grid-cols-3 gap-x-4">
	{#each $posts as post}
		<PostListItem post={post} />
	{/each}
</div>
