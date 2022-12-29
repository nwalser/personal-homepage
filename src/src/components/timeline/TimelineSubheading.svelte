<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let lastElement: boolean = false;

	export let href: string = "";
	export let newTarget: boolean = false;
</script>

<li>
	<div class="relative pb-6">
		{#if !lastElement}
			<span class="absolute top-5 left-6 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
		{/if}
		<div class="relative flex items-start space-x-3">
			<div class="relative px-3">
				<div
					class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white"
				/>
			</div>
			<div class="min-w-0 flex-1">
				<div>
					<div class="text-sm">
						{#if href!=""}
							{#if newTarget}
								<a href={href} target="_blank" rel="noopener noreferrer" class="font-medium text-gray-900">{title}</a>
							{:else}
								<a href={href} class="font-medium text-gray-900">{title}</a>
							{/if}
						{:else}
							<p class="font-medium text-gray-900">{title}</p>
						{/if}					</div>
					<p class="mt-0.5 text-sm text-gray-500">{subtitle}</p>
					{#if $$slots.body}
						<p class="mt-0.5 text-xs text-gray-500">
							<slot name="body" />
						</p>
					{/if}

					{#if $$slots.body}
						<span class="mr-0.5">
							<slot name="tags" />
						</span>
					{/if}
				</div>
			</div>
		</div>
	</div>
</li>
