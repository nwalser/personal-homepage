<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let src: string = '';
	export let alt: string = '';
	export let href: string = '';
	export let newTarget: boolean = false;
</script>

<li>
	<div class="relative mb-5">
		<div class="relative flex items-start space-x-3">
			<div class="relative">
				{#if src != ''}
					<img
						class="flex h-12 w-12 items-center justify-center rounded-md my-2 bg-gray-200 ring-8 ring-white"
						{src}
						{alt}
					/>
				{:else}
					<div
						class="flex h-12 w-12 items-center justify-center rounded-md my-2 bg-gray-200 ring-8 ring-white"
					/>
				{/if}
			</div>
			<div class="min-w-0 flex-1">
				<div>
					<div class="text-xl font-medium text-gray-900">
						{#if href != ''}
							{#if newTarget}
								<a {href} target="_blank" rel="noopener noreferrer">{title}</a>
							{:else}
								<a {href}>{title}</a>
							{/if}
						{:else}
							<p>{title}</p>
						{/if}
					</div>
					<p class="mt-0.5 text-xl text-gray-500">{subtitle}</p>
				</div>
			</div>
		</div>
	</div>
</li>
