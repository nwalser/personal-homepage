<script lang="ts">
    export let title: string;
    export let subtitle: string = "";
</script>


<header class="py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-white">
            {title}
        </h1>
        <p class="text-lg tracking-tight text-gray-400">
            {subtitle}
        </p>
    </div>
</header>