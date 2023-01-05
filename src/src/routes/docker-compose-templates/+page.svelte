<script>
	import { MetaTags } from 'svelte-meta-tags';
	import Panel from 'src/components/Panel.svelte';
	import Prose from 'src/components/Prose.svelte';
	import Hero from 'src/components/headers/Hero.svelte';
	import MainLayout from 'src/layouts/MainLayout.svelte';
	import PostList from 'src/components/post-list/PostList.svelte';
	import PostListItem from 'src/components/post-list/PostListItem.svelte';
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

		<PostList>
			<PostListItem
				title="Docker Compose template for EventStoreDb"
				href="/docker-compose-templates/eventstore"
				subtitle="This Docker Compose Template gets you started with EventStoreDb quickly."
				src="/docker-compose-templates/eventstore/header.svg"
				alt="eventstore db logo"
				color="bg-green-100"
			/>
			<PostListItem
				title="Docker Compose template for MinIO"
				href="/docker-compose-templates/minio"
				subtitle="This Docker Compose Template gets you started with MinIO quickly."
				src="/docker-compose-templates/minio/header.svg"
				alt="eventstore db logo"
				color="bg-red-100"
			/>
		</PostList>
	</span>
</MainLayout>