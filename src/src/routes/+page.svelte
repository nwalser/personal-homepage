<script>
	import Container from 'src/components/Container.svelte';
	import Education from 'src/components/Education.svelte';
	import ShortIntroduction from 'src/components/ShortIntroduction.svelte';
	import WorkExperience from 'src/components/WorkExperience.svelte';
	import MainLayout from 'src/layouts/MainLayout.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
</script>

<TwoColumnLayout>
	<span slot="title"> Hi. I am Nathaniel Walser.</span>
	<span slot="body" class="text-justify">
		<Container>
			<ShortIntroduction />
		</Container>
	</span>
	<span slot="side">
		<Container>
			<WorkExperience />
		</Container>

		<Container>
			<Education />
		</Container>
	</span>
</TwoColumnLayout>
