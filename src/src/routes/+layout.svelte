<script>
    import "../app.css";

    import PageTransition from '../lib/components/PageTransition.svelte';

    /** @type {import('@sveltejs/kit').Load} */
    export const load = async ({ url }) => ({
        props: {
        url: url.href
        }
    });
</script>


    <PageTransition {url}>
        <slot />
    </PageTransition>

<slot />