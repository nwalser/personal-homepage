<script lang="ts">
	import Prose from "./Prose.svelte";

	export let clazz: string = "";
    export { clazz as class };
</script>

<div class="{clazz} rounded-lg bg-white px-5 py-6 shadow sm:px-6 mb-4">
    <slot />
</div>