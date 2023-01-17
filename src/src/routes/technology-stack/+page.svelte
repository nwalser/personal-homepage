<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import Panel from 'src/components/Panel.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import Prose from 'src/components/Prose.svelte';
	import Hero from 'src/components/headers/Hero.svelte';
	import VerticalList from 'src/components/vertical-list/VerticalList.svelte';
	import VerticalListItem from 'src/components/vertical-list/VerticalListItem.svelte';
	import VerticalListDivider from 'src/components/vertical-list/VerticalListDivider.svelte';
	import VerticalListButton from 'src/components/vertical-list/VerticalListButton.svelte';

	function getExperienceText(startDate: Date, endDate: Date) {
		let totalMonths =
			endDate.getMonth() -
			startDate.getMonth() +
			12 * (endDate.getFullYear() - startDate.getFullYear());

		let years: number = Math.trunc(totalMonths / 12);

		if (years == 1) {
			return `${years} years of experience`;
		}

		if (years > 1) {
			return `${years} years of experience`;
		}

		return 'No experience';
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
					successfully complete many projects. The approximate outline of the technology stack is as
					follows.
				</p>
				<h2>Primary Technologies Used</h2>
				<h3>C# / ASP.NET Core / Blazor</h3>
				<p>
					<span class="font-bold">C#</span> is my go-to programming language. It is fully cross
					platform and has a large community surrounding it. For UI purposes I mostly use
					<span class="font-bold">asp.net core</span> coupled with
					<span class="font-bold">Blazor</span>.
				</p>
				<h3>EventStoreDb / MongoDb</h3>
				<p>
					About two years ago my focus shifted mainly on learning design patterns for larger
					applications with complex business domains. Since then, technologies like
					<span class="font-bold">EventStoreDb</span> for event sourcing and
					<span class="font-bold">MongoDb</span> as a query store accompany me almost every day.
				</p>
				<h3>Docker / Portainer</h3>
				<p>
					For managing created microservices I use Docker with Portainer as a user interface on top
					of it, but I will soon switch to K8 with K8 Lens because some of the needed features are
					missing in docker swarm.
				</p>
				<h3>OpenCV</h3>
				<p>For vision based processing tasks I use an OpenCV wrapper for c#.</p>
				<h2>Secondary Technologies Used</h2>
				<p>
					I also use other technologies like Python, C/C++, SQL, REST APIs, Refit, Polly, Autofac,
					Mapster and many more, but I would not consider them as part of my core technology stack,
					as I am using them differently on project to project basis.
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
						<VerticalListDivider />

						<VerticalListItem
							title="EventStoreDB"
							subtitle="I use EventStoreDB to store and deliver events to distributed event handlers."
							src="/logos/eventstore-db.svg"
						/>
						<VerticalListItem
							title="MongoDB"
							subtitle="I use MongoDB to store the current state of aggregates for query purposes."
							src="/logos/mongodb.svg"
						/>
						<VerticalListButton href="https://github.com/stars/nwalser/lists/awesome-services"
							>Awesome Services 🏆</VerticalListButton
						>
						<VerticalListDivider />

						<VerticalListItem
							title="OpenCV"
							subtitle="For image processing projects I use an OpenCV wrapper for C#."
							src="/logos/opencv.svg"
						/>
						<VerticalListItem
							title="MediatR"
							subtitle="For the implementation of an effective CQRS pattern I use MediatR as broker."
							src=""
						/>

						<VerticalListButton
							href="https://github.com/stars/nwalser/lists/c-net-library-must-haves"
							>C#/.NET Library Must Haves 👌</VerticalListButton
						>
					</VerticalList>
				</div>
			</Prose>
		</Panel>

		<Panel>
			<Prose>
				<blockquote>
					Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the
					science. <br />
					-
					<a
						href="https://www.devtopics.com/best-programming-jokes/"
						target="_blank"
						rel="noreferrer">DevTopics</a
					>
				</blockquote>
			</Prose>
		</Panel>
	</span>
</TwoColumnLayout>
