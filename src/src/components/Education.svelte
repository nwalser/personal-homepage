<script>
	import Timeline from 'src/components/timeline/Timeline.svelte';
	import TimelineHeading from 'src/components/timeline/TimelineHeading.svelte';
	import TimelineSubheading from './timeline/TimelineSubheading.svelte';
</script>

<h1 class="mb-6 font-semibold text-2xl">Education</h1>

<Timeline>
	<TimelineHeading
		title="ZHAW: Zurich University of Applied Sciences"
		subtitle="6 months"
		src="/logos/zhaw.svg"
		href="https://www.zhaw.ch/"
		newTarget={true}
	/>
	<TimelineSubheading
		title="Bachelor of Applied Science in Systems Engineering"
		subtitle="01.09.2022 - Ongoing"
		lastElement={true}
	/>

	<TimelineHeading
		title="GBS: Gewerbliches Berufs- und Weiterbildungszentrum St. Gallen"
		subtitle="4 years"
		src="/logos/gbssg.svg"
		href="https://www.gbssg.ch/"
		newTarget={true}
	/>
	<TimelineSubheading
		title="Education as Automation Engineer"
		subtitle="August 2016 - July 2020"
	/>
	<TimelineSubheading
		title="Vocational Baccalaureate School"
		subtitle="August 2016 - July 2020"
		lastElement={true}
	/>
</Timeline>
