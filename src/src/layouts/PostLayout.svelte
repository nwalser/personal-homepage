<script lang="ts">
	import Panel from "src/components/Panel.svelte";
	import Prose from "src/components/Prose.svelte";
	import { MetaTags } from "svelte-meta-tags";
	import MainLayout from "./MainLayout.svelte";

	export let title: string;
	export let description: string;
</script>

<MetaTags
	title={title}
	titleTemplate="%s - Nathaniel Walser"
	description={description}
/>

<MainLayout>
    <span slot="header">
		<img
			src="/hero/bits.svg"
			alt="programmer working at desk in office"
			class="absolute bottom-0 -right-32 md:right-0 lg:right-6 h-[30rem] max-w-none opacity-20 -z-50"
		/>
	</span>
	<span slot="body">
		<Panel>
			<Prose>
                <slot />
			</Prose>
		</Panel>
	</span>
</MainLayout>