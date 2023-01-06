<script>
	import { MetaTags } from 'svelte-meta-tags';
	import Panel from 'src/components/Panel.svelte';
	import Prose from 'src/components/Prose.svelte';
	import Hero from 'src/components/headers/Hero.svelte';
	import MainLayout from 'src/layouts/MainLayout.svelte';
	import PostList from 'src/components/post-list/PostList.svelte';
	import { writable } from 'svelte/store';
	import { posts } from './posts';
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
		<Panel>
			<Prose>
				<h1>Docker Compose Templates</h1>
			</Prose>
		</Panel>

		<!-- <div>
			<label for="email" class="sr-only">Search Docker Compose Templates</label>
			<input
				type="search"
				name="search"
				id="search"
				class="block w-full rounded-md text-2xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-5 py-6 mb-4"
				placeholder="Search Docker Compose Templates"
			/>
		</div> -->

		<PostList posts={writable(posts)} />

	</span>
</MainLayout>
