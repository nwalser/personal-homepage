<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import Panel from 'src/components/Panel.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import Prose from 'src/components/Prose.svelte';
	import VerticalList from 'src/components/vertical-list/VerticalList.svelte';
	import VerticalListItem from 'src/components/vertical-list/VerticalListItem.svelte';
</script>

<MetaTags
	title="Programming Humour"
	titleTemplate="%s - Nathaniel Walser"
	description="Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the
	science."
/>

<TwoColumnLayout>
	<span slot="header">
		<img
			src="/hero/bits.svg"
			alt="programmer working at desk in office"
			class="absolute bottom-0 -right-32 md:right-0 lg:right-6 h-[30rem] max-w-none opacity-20 -z-50"
		/>
	</span>
	<span slot="body">
		<Panel>
			<Prose>
				<h1>Programming Humour</h1>
				<h2>My favourite programming Jokes</h2>
				<blockquote>
					How many programmers does it take to change a light bulb?
					<br />None – It’s a hardware problem.
				</blockquote>
				<blockquote>
					Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the
					science.
				</blockquote>
				<blockquote>
					Why do most Java programmers wear glasses?
					<br />
					Because they don’t see sharp.
				</blockquote>
				<blockquote>
					Programming is like sex:
					<br />
					One mistake and you have to support it for the rest of your life.
				</blockquote>

				<h2>CIA - Computer Industry Acronyms</h2>
				<blockquote>
					CD-ROM: Consumer Device, Rendered Obsolete in Months<br />
					ISDN: It Still Does Nothing<br />
					MIPS: Meaningless Indication of Processor Speed<br />
					DOS: Defunct Operating System<br />
					OS/2: Obsolete Soon, Too<br />
					PnP: Plug and Pray<br />
					IBM: I Blame Microsoft<br />
					COBOL: Completely Obsolete Business Oriented Language<br />
					LISP: Lots of Insipid and Stupid Parentheses<br />
					MACINTOSH: Most Applications Crash; If Not, The Operating System Hangs<br />
					AAAAA: American Association Against Acronym Abuse.<br />

					WYSIWYMGIYRRLAAGW: What You See Is What You Might Get If You’re Really Really Lucky And
					All Goes Well.
				</blockquote>
				<h2>Project Cartoon</h2>
				<img
					src="/posts/project-cartoon.webp"
					alt="describing the way people involved in a project imagine the end product"
				/>
			</Prose>
		</Panel>
	</span>
	<span slot="side">
		<Panel>
			<VerticalList>
				<VerticalListItem
					title="Reddit"
					subtitle="r/ProgrammerHumor"
					href="https://www.reddit.com/r/ProgrammerHumor/"
					src="/logos/reddit.svg"
				/>
				<VerticalListItem
					title="DevTopics"
					subtitle="Best Programming Jokes"
					href="https://www.devtopics.com/best-programming-jokes/"
					lastItem={true}
				/>
			</VerticalList>
		</Panel>
	</span>
</TwoColumnLayout>
