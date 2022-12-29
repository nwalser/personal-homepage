<script>
	import MainLayout from 'src/components/MainLayout.svelte';
</script>

<MainLayout>
	<span slot="title"> Hi. I am Nathaniel Walser. </span>
	<span slot="body">
		<div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
			<h1 class="text-3xl font-bold tracking-tight text-slate-800">Hi. I am Nathaniel Walser.</h1>
			<p class="text-xl tracking-tight font-light text-slate-800">
				A 21 year old junior fullstack software developer based in Saint Gallen, Switzerland.
			</p>
			<article class="prose lg:prose-lg w-full">
				<h1 class="prose-h1:prose-emerald">Hi! I am Nathaniel Walser.</h1>
				<p class="prose-h2:marker:first-letter:selection:first-line">
					A 21 year old junior fullstack software developer based in Saint Gallen, Switzerland.
				</p>
				<p>
					But a recent study shows that the celebrated appetizer may be linked to a series of rabies
					cases springing up around the country.
				</p>
			</article>
		</div>
	</span>
</MainLayout>
