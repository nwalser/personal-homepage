<script lang="ts">
	import MainLayout from 'src/layouts/MainLayout.svelte';
</script>

<MainLayout>
	<span slot="title"><slot name="title" /></span>
	<span slot="body">
		<div class="grid grid-cols-7 gap-4">
			<div class="col-span-4">
				<slot name="body" />
			</div>
			<div class="col-span-3">
				<slot name="side" />
			</div>
		</div>
	</span>
</MainLayout>
