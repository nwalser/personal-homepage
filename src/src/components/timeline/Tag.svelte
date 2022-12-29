<script lang="ts">
	export let title: string;
	export let href: string = '';
	export let colorClass: string = 'bg-rose-500';
</script>

<a
	{href}
	class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
>
	<span class="absolute flex flex-shrink-0 items-center justify-center">
		<span class="h-1.5 w-1.5 rounded-full {colorClass}" aria-hidden="true" />
	</span>
	<span class="ml-3.5 font-medium text-gray-900">{title}</span>
</a>
