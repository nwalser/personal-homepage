<script lang="ts">
	import MenuItem from 'src/components/menu/MenuItem.svelte';
	import 'src/app.css';

	export let pb: number = 32;
	export let mt: number = 36;

	let menuOpen = false;

	function toggleNav() {
		menuOpen = !menuOpen;
	}
</script>

<div class="min-h-full">
	<div class="bg-gray-800 relative z-0" style="padding-bottom: {pb/4}rem;">
		<nav class="bg-gray-800">
			<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div class="border-b border-gray-700">
					<div class="flex h-16 items-center justify-between px-4 sm:px-0">
						<div class="flex items-center">
							<div class="flex-shrink-0">
								<a href="/">
									<img
										class="h-8 w-8 object-cover rounded-full"
										src="/profile-picture.jpeg"
										alt="Nathaniel Walser"
									/>
								</a>
							</div>
							<div class="hidden md:block">
								<div class="ml-10 flex items-baseline space-x-4">
									<MenuItem href="/programming-humour">Programming Humour</MenuItem>

									<!-- <MenuItem href="/projects">Projects</MenuItem>
									<MenuItem href="/programming-humor">Programming Humor</MenuItem>
									<MenuItem href="/awesome-code-snippets">Awesome Code Snippets</MenuItem> -->
								</div>
							</div>
						</div>
						<div class="hidden md:block">
							<div class="ml-4 flex items-center md:ml-6">
								<a
									href="/get-in-touch"
									class="ml-6 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>Get in Touch</a
								>
							</div>
						</div>

						<div class="-mr-2 flex md:hidden">
							<!-- Mobile menu button -->
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
						<MenuItem href="/programming-humour" mobile={true}>Programming Humour</MenuItem>
						<a
							href="/get-in-touch"
							class="inline-flex items-center w-full rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>Get in Touch</a
						>

						<!-- <MenuItem href="/projects" mobile={true}>Projects</MenuItem>
						<MenuItem href="/programming-humor" mobile={true}>Programming Humor</MenuItem>
						<MenuItem href="/awesome-code-snippets" mobile={true}>Awesome Code Snippets</MenuItem> -->
					</div>
				</div>
			{/if}
		</nav>
		<slot name="header" />
	</div>

	<main class="z-10 relative" style="margin-top: -{mt/4}rem;">
		<div
			class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 text-xl tracking-tight font-light text-slate-800 text-justify"
		>
			<slot name="body" />
		</div>
	</main>
</div>
