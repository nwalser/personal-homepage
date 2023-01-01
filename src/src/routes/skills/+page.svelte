<script>
	import { MetaTags } from 'svelte-meta-tags';
	import Panel from 'src/components/Panel.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import GridList from 'src/components/grid-list/GridList.svelte';
	import GridListItem from 'src/components/grid-list/GridListItem.svelte';
	import Prose from 'src/components/Prose.svelte';
	import Hero from 'src/components/headers/Hero.svelte';
</script>

<MetaTags
	title="Skills"
	titleTemplate="%s - Nathaniel Walser"
	description="todo..."
/>

<TwoColumnLayout>
	<span slot="header">
		<Hero src="/hero/bits.svg" alt="programmer working at desk in office" />
	</span>
	<span slot="body">
		<Panel>
			<Prose>
				<h1>Skills</h1>
			</Prose>
		</Panel>
	</span>
	<span slot="side">

	</span>
</TwoColumnLayout>
