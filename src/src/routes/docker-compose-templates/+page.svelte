<script>
	import { MetaTags } from 'svelte-meta-tags';
	import Panel from 'src/components/Panel.svelte';
	import Prose from 'src/components/Prose.svelte';
	import Hero from 'src/components/headers/Hero.svelte';
	import MainLayout from 'src/layouts/MainLayout.svelte';
	import PostList from 'src/components/post-list/PostList.svelte';
	import { postsFiltered } from 'src/data/posts';
	import { postSearch } from 'src/data/posts';
	import { onMount } from 'svelte';

	onMount(async () => {
		$postSearch = "";
	});
</script>

<MetaTags
	title="Docker Compose Templates"
	titleTemplate="%s - Nathaniel Walser"
	description="Templates for docker compose to be able to start quickly."
/>

<MainLayout>
	<span slot="header">
		<Hero src="/hero/bits.svg" alt="programmer working at desk in office" />
	</span>
	<span slot="body">
		<Panel class="!px-0 !py-0">
			<Prose>
				<h1 class="mx-5 py-6">Docker Compose Templates</h1>
			</Prose>
			<div class="w-full h-[1px] bg-gray-300" />
			<div>
				<label for="email" class="sr-only">Search Docker Compose Templates</label>
				<input
					type="search"
					name="search"
					id="search"
					class="block w-full rounded-md text-2xl text-gray-800 border-gray-500 shadow-sm px-5 py-6"
					placeholder="Search Templates"
					bind:value={$postSearch}
				/>
			</div>
		</Panel>

		<PostList posts={postsFiltered}/>
	</span>
</MainLayout>
