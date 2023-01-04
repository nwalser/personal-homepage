<script lang="ts">
	import MainLayout from "src/layouts/MainLayout.svelte";

	export let title: string;
	export let date: string;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<MainLayout>
	<span slot="title">{title}</span>
	<span slot="body">
		<div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
			<article class="prose-xl">
				<slot />
			  </article>
		</div>
	</span>
</MainLayout>