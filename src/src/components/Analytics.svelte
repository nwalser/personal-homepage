<script lang="ts">
  import { page } from '$app/stores'

  export let measurementId: string = "G-QFNRM1L7Q1";

  $: {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-QFNRM1L7Q1', {
        page_title: document.title,
        page_path: $page.url.pathname,
      })
    }
  }
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id={measurementId}">
  </script>
  <script>
    window.dataLayer = window.dataLayer || []

    function gtag() {
      dataLayer.push(arguments)
    }

    gtag('js', new Date())
    gtag('config', 'G-QFNRM1L7Q1')
  </script>
</svelte:head>