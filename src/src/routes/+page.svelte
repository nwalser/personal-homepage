<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import Panel from 'src/components/Panel.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import TimelineHeading from 'src/components/timeline/TimelineHeading.svelte';
	import Timeline from 'src/components/timeline/Timeline.svelte';
	import TimelineSubheading from 'src/components/timeline/TimelineSubheading.svelte';
	import Prose from 'src/components/Prose.svelte';

	function getMonthYearDifferenceString(startDate: Date, endDate: Date) {
		let totalMonths =
			endDate.getMonth() -
			startDate.getMonth() +
			12 * (endDate.getFullYear() - startDate.getFullYear());

		let months: number = totalMonths % 12;
		let years: number = Math.trunc(totalMonths / 12);

		let str = '';

		if (years == 1) {
			str += `${years} year `;
		}
		if (years > 1) {
			str += `${years} years `;
		}

		if (months == 1) {
			str += `${months} month`;
		}
		if (months > 1) {
			str += `${months} months`;
		}

		return str;
	}
</script>

<MetaTags
	title="About Me"
	titleTemplate="%s - Nathaniel Walser"
	description="I am a 21 year old fullstack developer based in Saint Gallen, Switzerland. I have worked on a number of projects, 
					including creating software algorithms with neuronal for surface inspection and quality assurance."
/>

<TwoColumnLayout pb={110}>
	<span slot="header">
		<img
			src="/hero/programmer-working.svg"
			alt="programmer working at desk in office"
			class="absolute bottom-0 -right-32 md:right-0 lg:right-6 h-[30rem] max-w-none -z-50"
		/>
	</span>
	<span slot="body">
		<Panel>
			<Prose>
				<img
				src="/profile/profile-picture.jpeg"
				alt="portrait of nathaniel walser"
				class="relative w-full object-cover sm:w-auto rounded-xl float-left mr-6 mb-6 h-60 xl:h-96 xl:-left-24 xl:-top-28 xl:-mr-16 xl:-mb-28"
			/>
				<h1>Hi! I am Nathaniel Walser.</h1>
				<p>
					I am a 21 year old <span class="font-bold">fullstack developer</span> based in Saint Gallen,
					Switzerland. My fascination with technology and robotics has led me to pursue learning programming,
					and I am always looking for ways to improve my skills and stay up-to-date with the latest technologies.
					I have worked on a number of projects, including creating software algorithms with neuronal
					networks for surface inspection and quality assurance.
				</p>
				<p>
					Currently I am working part time for <span class="font-bold">esp-engineering gmbh</span>,
					where I am able to extend my knowledge in vision based algorithms, operator interfaces,
					managing large datasets and many areas more.
				</p>
				<p>
					In addition to my work experience, I am also studying systems engineering at the <span
						class="font-bold">Zurich University of Applied Sciences</span
					> in Winterthur. Currently I am in the second semester.
				</p>
				<p>
					In my free time I fly quadrocopters, learn new technologies and develop plugins for a
					fully autonomous autopilot.
				</p>
				<p>
					Feel free to have a look around my personal website and if you want to get in touch feel
					free to contact me.
				</p>
				<div class="not-prose justify-end flex">
					<a
						href="/technology-stack"
						class="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2"
						>Tech Stack</a
					>
					<a
						href="/get-in-touch"
						class="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>Get in Touch</a
					>
				</div>
			</Prose>
		</Panel>

		<Panel>
			<Prose>
				<h2>Education</h2>
				<div class="not-prose">
					<Timeline>
						<TimelineHeading
							title="ZHAW: Zurich University of Applied Sciences"
							subtitle={getMonthYearDifferenceString(new Date('2022-09-01'), new Date())}
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
							lastElement={true}
						/>
					</Timeline>
				</div>
			</Prose>
		</Panel>
	</span>
	<span slot="side">
		<Panel>
			<Prose>
				<h2>Work Experience</h2>
				<div class="not-prose">
					<Timeline>
						<TimelineHeading
							title="esp-engineering gmbh"
							subtitle={getMonthYearDifferenceString(new Date('2016-01-01'), new Date())}
							src="/logos/esp-engineering.svg"
							href="https://www.esp-engineering.com/"
							newTarget={true}
						/>
						<TimelineSubheading
							title="Junior Fullstack Developer .NET/C#"
							subtitle="August 2020 - Today (40%)"
						>
							<span slot="body">
								I develop vision based algorithms, machine controlling interfaces and data
								management platforms that are tailored to customer specifications.
							</span>
						</TimelineSubheading>
						<TimelineSubheading
							title="Junior Web Developer"
							subtitle="January 2016 - August 2020 (Freelancer)"
							lastElement={true}
						>
							<span slot="body">
								As a freelancer, I developed websites and built the local ICT infrastructure for
								esp-engineering.
							</span>
						</TimelineSubheading>

						<TimelineHeading
							title="Buhler Group"
							subtitle={getMonthYearDifferenceString(
								new Date('2016-07-01'),
								new Date('2020-07-01')
							)}
							src="/logos/buhler-group.svg"
							href="https://www.buhlergroup.com/"
							newTarget={true}
						/>
						<TimelineSubheading
							title="Apprentice as Automation Engineer"
							subtitle="August 2016 - July 2020 (100%)"
						>
							<span slot="body">
								I ended my apprenticeship with the development of a vibration analysis device that
								could be clamped onto machines to determine the expected remaining lifespan of a
								certain component.
							</span>
						</TimelineSubheading>
						<TimelineSubheading
							title="  Apprentice as Automation Engineer at Buhler Bangalore"
							subtitle="Mai 2019 - August 2019 (100%)"
							lastElement={true}
						>
							<span slot="body">
								As a team of four apprentices, we worked abroad in Bangalore for 4 months.
							</span>
						</TimelineSubheading>
					</Timeline>
				</div>
			</Prose>
		</Panel>
	</span>
</TwoColumnLayout>
