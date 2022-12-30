<script lang="ts">
	import MainLayout from 'src/layouts/MainLayout.svelte';
	export let pb = 32;
</script>

<MainLayout pb={pb}>
	<span slot="header"><slot name="header" /></span>
	<span slot="body">
		<div class="grid grid-cols-7 gap-4">
			<div class="col-span-7 md:col-span-4">
				<slot name="body" />
			</div>
			<div class="col-span-7 md:col-span-3">
				<slot name="side" />
			</div>
		</div>
	</span>
</MainLayout>
