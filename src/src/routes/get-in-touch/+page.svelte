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
	title="Get in Touch"
	titleTemplate="%s - Nathaniel Walser"
	description="You can get in touch with me via one of the social networks provided on the right side."
/>

<TwoColumnLayout>
	<span slot="header">
		<Hero src="/hero/bits.svg" alt="programmer working at desk in office" />
	</span>
	<span slot="body">
		<Panel>
			<Prose>
				<h1>Get in Touch</h1>
				<p>
					You can get in touch with me via one of the social networks provided on the right side.
				</p>
				<p>
					Alternatively I am also reachable via the following e-mail: <a
						href="mailto:nathaniel.walser@esp-engineering.com"
						>nathaniel.walser@esp-engineering.com</a
					>
				</p>
			</Prose>
		</Panel>
	</span>
	<span slot="side">
		<GridList>
			<GridListItem
				title="Linkedin"
				subtitle="nathaniel-walser"
				href="https://www.linkedin.com/in/nathaniel-walser/"
				src="/logos/linkedin.svg"
			/>
			<GridListItem
				title="Github"
				subtitle="nwalser"
				href="https://github.com/nwalser"
				src="/logos/github.svg"
			/>
			<GridListItem
				title="Stackoverflow"
				subtitle="nathaniel-walser"
				href="https://stackoverflow.com/users/10315352/nathaniel-walser"
				src="/logos/stackoverflow.svg"
			/>
		</GridList>
	</span>
</TwoColumnLayout>
