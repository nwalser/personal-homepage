<script lang="ts">
	import MenuItem from 'src/components/menu/MenuItem.svelte';

	import 'src/app.css';

	export let pb: number = 56;
	export let mt: number = 36;

	let menuOpen = false;

	function toggleNav() {
		menuOpen = !menuOpen;
	}
</script>

<svelte:head>
	<meta name="theme-color" content="#1f2937"/>
</svelte:head>

<div class="min-h-screen flex flex-col overflow-hidden">
	<div class="bg-gray-800 relative z-0 overflow-hidden" style="padding-bottom: {pb / 4}rem;">
		<nav>
			<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div class="border-b border-gray-700">
					<div class="flex h-16 items-center justify-between px-4 sm:px-0">
						<div class="flex items-center">
							<div class="flex-shrink-0">
								<a href="/">
									<img
										class="h-8 w-8 object-cover rounded-full"
										src="/profile/profile-picture-small.webp"
										alt="Nathaniel Walser"
									/>
								</a>
							</div>
							<div class="hidden md:block">
								<div class="ml-10 flex items-baseline space-x-4">
									<MenuItem href="/technology-stack">💻 Technology Stack</MenuItem>
									<MenuItem href="/side-projects">☕ Side Projects</MenuItem>
									<MenuItem href="/docker-compose-templates">📄 Docker Compose Templates</MenuItem>
								</div>
							</div>
						</div>
						<div class="hidden md:block">
							<div class="ml-4 flex items-center md:ml-6">
								<a
									href="/get-in-touch"
									class="ml-6 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>👋 Get in Touch</a
								>
							</div>
						</div>

						<div class="-mr-2 flex md:hidden">
							<button
								type="button"
								class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span class="sr-only">Open main menu</span>
								<svg
									class="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									on:click={toggleNav}
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
								<svg
									class="hidden h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>

			{#if menuOpen}
				<div class="border-b border-gray-700 md:hidden" id="mobile-menu">
					<div class="space-y-1 px-2 py-3 sm:px-3">
						<MenuItem href="/technology-stack" mobile={true}>💻 Technology Stack</MenuItem>
						<MenuItem href="/side-projects" mobile={true}>☕ Side Projects</MenuItem>
						<MenuItem href="/docker-compose-templates" mobile={true}>📄 Docker Compose Templates</MenuItem>
						<a
							href="/get-in-touch"
							class="inline-flex items-center w-full rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>👋 Get in Touch</a
						>
					</div>
				</div>
			{/if}
		</nav>
		<slot name="header" />
	</div>

	<main class="z-10 relative" style="margin-top: -{mt / 4}rem;">
		<div
			class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 text-slate-800"
		>
			<slot name="body" />
		</div>
	</main>

	<footer class="bg-white mt-auto">
		<div class="mx-auto max-w-7xl overflow-hidden py-3 px-4 sm:px-6 lg:px-8">
			<div class="flex justify-center space-x-6">
				<a
					href="https://www.linkedin.com/in/nathaniel-walser/"
					class="text-gray-400 hover:text-gray-500"
				>
					<span class="sr-only">Linkedin</span>
					<img class="h-10 w-10" src="/logos/linkedin.svg" alt="icon of linkedin" />
				</a>
				<a href="https://github.com/nwalser" class="text-gray-400 hover:text-gray-500">
					<span class="sr-only">Github</span>
					<img class="h-10 w-10" src="/logos/github.svg" alt="icon of github" />
				</a>
				<a
					href="https://stackoverflow.com/users/10315352/nathaniel-walser"
					class="text-gray-400 hover:text-gray-500"
				>
					<span class="sr-only">Stackoverflow</span>
					<img class="h-10 w-10" src="/logos/stackoverflow.svg" alt="icon of stackoverflow" />
				</a>
			</div>
			<p class="mt-2 text-center text-base text-gray-700">
				&copy; {new Date().getFullYear()} Nathaniel Walser. All rights reserved. <a href="https://github.com/nwalser/personal-homepage" class="underline">Code available on GitHub</a>
			</p>
		</div>
	</footer>
</div>
