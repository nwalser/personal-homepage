<script>
	import Panel from 'src/components/Panel.svelte';
	import Prose from 'src/components/Prose.svelte';
	import VerticalList from 'src/components/vertical-list/VerticalList.svelte';
	import VerticalListItem from 'src/components/vertical-list/VerticalListItem.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import TwoColumnLayout from './TwoColumnLayout.svelte';

	export let title;
	export let description;
</script>

<MetaTags {title} titleTemplate="%s - Nathaniel Walser" {description} />

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
				<slot />
			</Prose>
		</Panel>
	</span>
	<span slot="side">
		<Panel>
			<Prose>
				<h2>More Templates</h2>
				<div class="not-prose">
					<VerticalList>
						<VerticalListItem
							title="EventStoreDB"
							subtitle="How to deploy EventStoreDB with docker compose"
							src="/logos/eventstore-db.svg"
							href="/docker-compose-templates/eventstore"
						/>

						<VerticalListItem
							title="MinIO"
							subtitle="How to deploy MinIO with docker compose"
							src="/logos/minio.svg"
							href="/docker-compose-templates/minio"
							lastItem={true}
						/>
					</VerticalList>
				</div>
			</Prose>
		</Panel>
	</span>
</TwoColumnLayout>
