<script>
	import { MetaTags } from 'svelte-meta-tags';
	import Panel from 'src/components/Panel.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import Prose from 'src/components/Prose.svelte';
	import Hero from 'src/components/headers/Hero.svelte';
</script>

<MetaTags
	title="Docker Compose Templates"
	titleTemplate="%s - Nathaniel Walser"
	description="Templates for docker compose to be able to start quickly."
/>

<TwoColumnLayout>
	<span slot="header">
		<Hero src="/hero/bits.svg" alt="programmer working at desk in office" />
	</span>
	<span slot="body">
		<Panel>
			<Prose>
				<h1>Docker Compose Templates</h1>
				<a
					href="/docker-compose-templates/eventstore"
					class="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>Docker Compose template for EventStoreDb</a
				>
			</Prose>
		</Panel>
	</span>
	<span slot="side" />
</TwoColumnLayout>
