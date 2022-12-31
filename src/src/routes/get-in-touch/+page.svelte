<script>
	import Panel from 'src/components/Panel.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import GridList from 'src/components/grid-list/GridList.svelte';
	import GridListItem from 'src/components/grid-list/GridListItem.svelte';
	import Title from 'src/components/headers/Title.svelte';
</script>

<svelte:head>
	<title>Nathaniel Walser - Get in Touch</title>
</svelte:head>

<TwoColumnLayout>
	<span slot="header"><Title title="Get in Touch" />
		<img
		src="/hero/bits.svg"
		alt="programmer working at desk in office"
		class="absolute bottom-0 -right-32 md:right-0 lg:right-6 h-[30rem] max-w-none opacity-20 -z-50"
	/></span>
	<span slot="body">
		<Panel>
			<p>You can get in touch with me via one of the social networks provided on the right side.</p>
			<br />
			<p>
				Alternatively I am also reachable via the following e-mail: <a
					href="mailto:nathaniel.walser@esp-engineering.com">nathaniel.walser@esp-engineering.com</a
				>
			</p>
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
