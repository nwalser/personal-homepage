<script>
	import Panel from 'src/components/Panel.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import TimelineHeading from 'src/components/timeline/TimelineHeading.svelte';
	import Timeline from 'src/components/timeline/Timeline.svelte';
	import TimelineSubheading from 'src/components/timeline/TimelineSubheading.svelte';
	import Title from 'src/components/headers/Title.svelte';
</script>

<svelte:head>
	<title>Nathaniel Walser - Hi</title>
</svelte:head>

<TwoColumnLayout>
	<span slot="header"><Title>Hi. I am Nathaniel Walser.</Title></span>
	<span slot="body">
		<Panel>
			<p>
				I am a 21 year old <span class="font-bold">fullstack developer</span> based in Saint Gallen,
				Switzerland. My fascination with technology and robotics has led me to pursue learning programming,
				and I am always looking for ways to improve my skills and stay up-to-date with the latest technologies.
				I have worked on a number of projects, including creating software algorithms with neuronal networks
				for surface inspection and quality assurance.
			</p>
			<br />
			<p>
				Currently I am working part time for <span class="font-bold">esp-engineering gmbh</span>,
				where I am able to extend my knowledge in vision based algorithms, operator interfaces,
				managing large datasets and many areas more.
			</p>
			<br />
			<p>
				In addition to my work experience, I am also studying systems engineering at the <span
					class="font-bold">Zurich University of Applied Sciences</span
				> in Winterthur. Currently I am in the second semester.
			</p>
			<br />
			<p>
				In my free time I fly quadrocopters, learn new technologies and develop plugins for a fully
				autonomous autopilot.
			</p>
		</Panel>

		<Panel>
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
		</Panel>
	</span>
	<span slot="side">
		<Panel>
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
						During my civil service I was able to work at a school based in Waldstatt, where I
						mainly supported teachers in teaching fifth to ninth graders.
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
						Apprentice as Automation Engineer Ended my apprenticeship with the development of a
						vibration analysis device that could be clamped onto machines to determine the expected
						remaining lifespan of a component.
					</span>
				</TimelineSubheading>
				<TimelineSubheading
					title="  Apprentice as Automation Engineer at Buhler Bangalore"
					subtitle="Mai 2019 - August 2019 (100%)"
					lastElement={true}
				>
					<span slot="body">
						As a team of four apprentices, we worked abroad in Bangalore for about 4 months. We were
						able to not only extend our expertise but our intercultural knowledge as well.
					</span>
				</TimelineSubheading>
			</Timeline>
		</Panel>
	</span>
</TwoColumnLayout>
