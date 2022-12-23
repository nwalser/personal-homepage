<script>
    import Nav from "../components/nav.svelte";
</script>
  

<Nav></Nav>

<slot></slot>

<style>
    :global(body) {
        background-color: #000000;
        padding: 0;
        margin: 0;
    }

    :global(h1) {
        color: #ffffff;
    }
    :global(p) {
        color: #ffffff;
    }
</style>