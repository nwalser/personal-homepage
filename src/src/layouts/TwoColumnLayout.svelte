<script lang="ts">
	import MainLayout from 'src/layouts/MainLayout.svelte';
	export let pb = 56;
</script>

<MainLayout pb={pb}>
	<span slot="header"><slot name="header" /></span>
	<span slot="body">
		<div class="grid grid-cols-3 gap-4">
			<div class="col-span-3 md:col-span-2">
				<slot name="body" />
			</div>
			<div class="col-span-3 md:col-span-1">
				<slot name="side" />
			</div>
		</div>
	</span>
</MainLayout>
