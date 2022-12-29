<script>
	import MainLayout from "./MainLayout.svelte";

	export let title;
	export let date;
</script>

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