<script lang="ts">
    export let href: string;
</script>

<div class="flex justify-end">
    <a
        {href}
        target="_blank"
        rel="noreferrer"
        class="-mt-3 right-0 inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        ><slot /></a
    >
</div>