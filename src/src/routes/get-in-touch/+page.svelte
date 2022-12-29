<script>
	import Container from 'src/components/Container.svelte';
	import SocialLinks from 'src/components/SocialLinks.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
</script>

<svelte:head>
	<title>Nathaniel Walser - Get in Touch</title>
</svelte:head>

<TwoColumnLayout>
	<span slot="title">Get in Touch</span>
	<span slot="body">
		<Container>
			<p>You can get in touch with me via one of the social networks provided on the right side.</p>
			<br />
			<p>Alternatively I am also reachable via the following e-mail: <a href="mailto:nathaniel.walser@esp-engineering.com">nathaniel.walser@esp-engineering.com</a></p>
		</Container>
	</span>
	<span slot="side">
		<SocialLinks />
	</span>
</TwoColumnLayout>