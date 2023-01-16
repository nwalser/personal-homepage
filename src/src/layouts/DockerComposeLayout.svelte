<script>
	import Panel from 'src/components/Panel.svelte';
	import Prose from 'src/components/Prose.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import TwoColumnLayout from './TwoColumnLayout.svelte';

	import { postsFiltered } from 'src/data/posts';
	import { postSearch } from 'src/data/posts';
	import PostList from 'src/components/post-list/PostList.svelte';
	import { onMount } from 'svelte';
    import { page } from '$app/stores';

	export let id;
	export let data;
	export let form;
	export let layout;

	export let title = '';
	export let description = '';

	export let author = '';
	export let published = '';
	export let updated = '';
	export let authorLink = '/';

	onMount(async () => {
		$postSearch = "";
	});
</script>

<MetaTags {title} titleTemplate="%s - Nathaniel Walser" {description}  />

<TwoColumnLayout>
	<span slot="header">
		<img
			src="/hero/bits.svg"
			alt="programmer working at desk in office"
			class="absolute bottom-0 -right-32 md:right-0 lg:right-6 h-[30rem] max-w-none opacity-20 -z-50"
		/>
	</span>
	<span slot="body">
		<Panel>
			<Prose>
				<p class="text-sm mb-1">
					Published {published} - Updated {updated} - Written by <a href={authorLink}>{author}</a>
				</p>
				<slot />
				<div class="w-full h-[2px] bg-gray-300" />
				<script src="https://utteranc.es/client.js"
					repo="nwalser/personal-homepage-utterances"
					issue-term="pathname"
					theme="github-light"
					crossorigin="anonymous"
					async>
				</script>
			</Prose>
		</Panel>
	</span>
	<span slot="side">
		<Panel class="!px-0 !py-0">
			<Prose>
				<h2 class="mx-5 py-6">More Templates</h2>
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

		<PostList
			posts={postsFiltered}
			maxPosts={4}
			cols={1}
			smCols={1}
			aspect="aspect-[5/1]"
			seeAllLink="/docker-compose-templates"
		/>
	</span>
</TwoColumnLayout>
