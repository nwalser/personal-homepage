<script lang="ts">
	import { GTAG } from '$env/static/private'
	import { page } from '$app/stores';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', GTAG, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id={GTAG}"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', GTAG);
	</script>
</svelte:head>
