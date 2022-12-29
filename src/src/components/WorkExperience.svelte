<script>
	import Timeline from 'src/components/timeline/Timeline.svelte';
	import TimelineHeading from 'src/components/timeline/TimelineHeading.svelte';
	import TimelineSubheading from 'src/components/timeline/TimelineSubheading.svelte';
</script>

<h1 class="mb-6 font-semibold text-2xl">Work Experience</h1>

<Timeline>
	<TimelineHeading
		title="esp-engineering gmbh"
		subtitle="2 years and 4 months"
		src="/logos/esp-engineering.svg"
        href="https://www.esp-engineering.com/"
        newTarget={true}
	/>
	<TimelineSubheading
		title="Junior Fullstack Developer .NET/C#"
		subtitle="August 2022 - Today (40%)"
	/>
	<TimelineSubheading
		title="Junior Fullstack Developer .NET/C#"
		subtitle="August 2020 - July 2022 (100%)"
	/>
	<TimelineSubheading
		title="Junior Web Developer"
		subtitle="January 2016 - August 2020 (Freelancer)"
		lastElement={true}
	/>

	<TimelineHeading
		title="Schule Waldstatt"
		subtitle="1 year"
		src="/logos/schule-waldstatt.svg"
        href="https://www.schule-waldstatt.ch/"
        newTarget={true}
	/>
	<TimelineSubheading
		title="Teacher Assistant"
		subtitle="August 2021 - July 2022 (100%)"
		lastElement={true}
	>
		<span slot="body">
			During my civil service I was able to work at a school based in Waldstatt, where I mainly
			supported teachers in teaching fifth to ninth graders.
		</span>
	</TimelineSubheading>

	<TimelineHeading
		title="Buhler Group"
		subtitle="4 years"
		src="/logos/buhler-group.svg"
        href="https://www.buhlergroup.com/"
        newTarget={true}
	/>
	<TimelineSubheading
		title="Apprentice as Automation Engineer"
		subtitle="August 2016 - July 2020 (100%)"
	>
		<span slot="body">
			Apprentice as Automation Engineer Ended my apprenticeship with the development of a vibration
			analysis device that could be clamped onto machines to determine the expected remaining
			lifespan of a component.
		</span>
	</TimelineSubheading>
	<TimelineSubheading
		title="  Apprentice as Automation Engineer at Buhler Bangalore"
		subtitle="Mai 2019 - August 2019 (100%)"
        lastElement={true}
	>
		<span slot="body">
            As a team of four apprentices, we worked abroad in Bangalore for about 4 months. We were able to not only extend our expertise but our intercultural knowledge as well.
		</span>
	</TimelineSubheading>
</Timeline>
