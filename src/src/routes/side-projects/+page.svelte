<script lang="ts">
	import ButtonListItem from 'src/components/button-list/ButtonListItem.svelte';
	import Hero from 'src/components/headers/Hero.svelte';
	import Panel from 'src/components/Panel.svelte';
	import PostListItem from 'src/components/post-list/PostListItem.svelte';
	import Prose from 'src/components/Prose.svelte';
	import VerticalList from 'src/components/vertical-list/VerticalList.svelte';
	import VerticalListItem from 'src/components/vertical-list/VerticalListItem.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="Side Projects"
	titleTemplate="%s - Nathaniel Walser"
	description="A curated list of nathaniel walser's side projects."
/>

<TwoColumnLayout>
	<span slot="header">
		<Hero src="/hero/bits.svg" alt="programmer working at desk in office" />
	</span>
	<span slot="body">
		<Panel>
			<Prose>
				<h1>Side Projects</h1>
			</Prose>
		</Panel>

		<div class="grid grid-cols-1 gap-y-4 md:grid-cols-2 gap-x-4 mb-5">
			<div class="group relative flex flex-col overflow-hidden rounded-lg bg-white">
				<div class="bg-[#E0E0D1]">
					<img
						src="/side-projects/docker-stack.png"
						alt=""
						class="aspect-[8/3] object-contain object-center"
					/>
				</div>
				<div class="flex flex-1 flex-col space-y-2 p-4 mb-5">
					<p class="text-gray-900 text-sm -mb-2">Actively Maintained</p>
					<h2 class="font-bold text-gray-900 text-2xl">
						<a href="https://docker-stack.com" target="_blank">
							<span aria-hidden="true" class="absolute inset-0" />
							docker-stack.com
						</a>
					</h2>
					<p class="text-sm text-gray-500">
						Docker Stack is a website with prebuilt docker stacks, ready to download and to use in
						projects. It is built with SvelteKit and FlowbiteUI.
					</p>
				</div>
				<a class="z-10 bottom-2 right-2 absolute" href="https://github.com/nwalser/docker-stack">
					<img src="/logos/github.svg" alt="" class="w-10" />
				</a>
			</div>
			<div class="group relative flex flex-col overflow-hidden rounded-lg bg-white">
				<div class="bg-[#754E29]">
					<img
						src="/side-projects/3a-rechner.svg"
						alt=""
						class="aspect-[8/3] object-contain object-center"
					/>
				</div>
				<div class="flex flex-1 flex-col space-y-2 p-4 mb-5">
					<p class="text-gray-900 text-sm -mb-2">Actively Maintained</p>
					<h2 class="font-bold text-gray-900 text-2xl">
						<a href="https://3a-rechner.ch" target="_blank">
							<span aria-hidden="true" class="absolute inset-0" />
							3a-rechner.ch
						</a>
					</h2>
					<p class="text-sm text-gray-500">
						3A-Rechner is a website for comparing different swiss 3a portfolio offers. It forecasts
						the expected returns and final balance based on your personal situation. It is built
						with SvelteKit and Tailwind CSS.
					</p>
				</div>
				<a class="z-10 bottom-2 right-2 absolute" href="https://github.com/nwalser/3a-comparator">
					<img src="/logos/github.svg" alt="" class="w-10" />
				</a>
			</div>
			<div class="group relative flex flex-col overflow-hidden rounded-lg bg-white">
				<div class="bg-gray-800">
					<img
						src="/side-projects/personal-homepage.svg"
						alt=""
						class="aspect-[8/3] object-contain object-center"
					/>
				</div>
				<div class="flex flex-1 flex-col space-y-2 p-4 mb-5">
					<p class="text-gray-900 text-sm -mb-2">Actively Maintained</p>
					<h2 class="font-bold text-gray-900 text-2xl">
						<a href="https://nathaniel-walser.com" target="_blank">
							<span aria-hidden="true" class="absolute inset-0" />
							nathaniel-walser.com
						</a>
					</h2>
					<p class="text-sm text-gray-500">
						This is the project of my personal website. Your viewing it right now :). It is built
						with SvelteKit and Tailwind CSS.
					</p>
				</div>
				<a class="z-10 bottom-2 right-2 absolute" href="https://github.com/nwalser/personal-homepage">
					<img src="/logos/github.svg" alt="" class="w-10" />
				</a>
			</div>
		</div></span
	>
	<span slot="side">
		<Panel>
			<VerticalList>
				<VerticalListItem
					title="Linkedin"
					subtitle="nathaniel-walser"
					href="https://www.linkedin.com/in/nathaniel-walser/"
					src="/logos/linkedin.svg"
				/>
				<VerticalListItem
					title="Github"
					subtitle="nwalser"
					href="https://github.com/nwalser"
					src="/logos/github.svg"
				/>
				<VerticalListItem
					title="Stackoverflow"
					subtitle="nathaniel-walser"
					href="https://stackoverflow.com/users/10315352/nathaniel-walser"
					src="/logos/stackoverflow.svg"
					lastItem={true}
				/>
			</VerticalList>
		</Panel>
	</span>
</TwoColumnLayout>
