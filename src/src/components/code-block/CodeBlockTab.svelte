<script lang="ts">
    import CodeBlock from "./CodeBlock.svelte";

    export let name: string;
</script>

<button id="">{name}</button>
<slot />