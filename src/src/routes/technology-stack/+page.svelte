<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import Panel from 'src/components/Panel.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import Prose from 'src/components/Prose.svelte';
	import Hero from 'src/components/headers/Hero.svelte';
	import VerticalList from 'src/components/vertical-list/VerticalList.svelte';
	import VerticalListItem from 'src/components/vertical-list/VerticalListItem.svelte';

	function getExperienceText(startDate: Date, endDate: Date) {
		let totalMonths =
			endDate.getMonth() -
			startDate.getMonth() +
			12 * (endDate.getFullYear() - startDate.getFullYear());

		let years: number = Math.trunc(totalMonths / 12);

		if (years == 1) {
			return `${years} years of Experience`;
		}

		if (years > 1) {
			return `${years} years of Experience`;
		}

		return 'No Experience';
	}
</script>

<MetaTags
	title="Technology Stack"
	titleTemplate="%s - Nathaniel Walser"
	description="In my 10+ years of IT experiences I had the opportunity to learn many awesome 
	technologies. Over the years a go-to tech stack developed, with which I was able to 
	successfully complete many projects."
/>

<TwoColumnLayout>
	<span slot="header">
		<Hero src="/hero/bits.svg" alt="programmer working at desk in office" />
	</span>
	<span slot="body">
		<Panel>
			<Prose>
				<h1>Nathaniel's Technology Stack</h1>
				<p>
					In my 10+ years of IT experiences I had the opportunity to learn many awesome
					technologies. Over the years a go-to technology stack developed, with which I was able to
					successfully complete many projects. The approximate outline of
					the technology stack is as follows.
				</p>
				<h2>Primary Technologies Used</h2>
				<h3>C# / ASP.NET Core / Blazor</h3>
				<p>
					<span class="font-bold">C#</span> is my go-to programming language. It is fully cross
					platform and has a large community surrounding it. For UI purposes I mostly use
					<span class="font-bold">asp.net core</span> coupled with
					<span class="font-bold">Blazor</span>.
				</p>
				<h3>Kafka / RabbitMQ</h3>
				<p>
					About two years ago I shifted my focus mainly on learning design patterns for larger
					applications with complex business domains. Since then, I use great technologies like
					<span class="font-bold">Kafka</span> and <span class="font-bold">RabbitMQ</span> for
					<span class="font-bold">event sourcing</span> and <span class="font-bold">CQRS</span>. For
					managing those large distributed applications I use Docker with Portainer as a user
					interface on top of it.
				</p>
				<h3>OpenCV</h3>
				<p>
					For my more vision heavy applications that need image processing I use an <span
						class="font-bold">OpenCV</span
					> wrapper for c#.
				</p>
				<h2>Secondary Technologies Used</h2>
				<p>
					I also use other technologies like Python, C/C++, SQL, Embedded Systems, REST APIs,
					MongoDB and many more, but I would not consider them as part of my core technology stack,
					as I am using them differently on project basis.
				</p>
			</Prose>
		</Panel>
	</span>
	<span slot="side">
		<Panel>
			<Prose>
				<h2>Overview</h2>
				<div class="not-prose">
					<VerticalList>
						<VerticalListItem
							title="C#"
							subtitle={getExperienceText(new Date('2016-01-01'), new Date())}
							src="/logos/csharp.svg"
						/>
						<VerticalListItem
							title="ASP.NET Core"
							subtitle={getExperienceText(new Date('2017-01-01'), new Date())}
							src="/logos/dotnet-core.svg"
						/>
						<VerticalListItem
							title="Blazor"
							subtitle={getExperienceText(new Date('2019-01-01'), new Date())}
							src="/logos/blazor.svg"
						/>
					</VerticalList>

					<div class="my-5 h-[1px] bg-gray-200"></div>
				
					<VerticalList>
						<VerticalListItem
							title="Kafka"
							subtitle="I use Kafka to deliver events to consumers and to persist them for later processing with new microservices."
							src="/logos/kafka.svg"
						/>
						<VerticalListItem
							title="MongoDB"
							subtitle="I use MongoDB to store the current state of Aggregates for query purposes."
							src="/logos/mongodb.svg"
						/>
					</VerticalList>

					<div class="my-5 h-[1px] bg-gray-200"></div>
				
					<VerticalList>
						<VerticalListItem
							title="OpenCV"
							subtitle="For image processing projects I use an OpenCV wrapper for C#."
							src="/logos/opencv.svg"
						/>
					</VerticalList>
				</div>
			</Prose>
		</Panel>
	</span></TwoColumnLayout
>
