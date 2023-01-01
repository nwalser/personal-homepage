<script>
	import Panel from "src/components/Panel.svelte";
	import Prose from "src/components/Prose.svelte";
import TwoColumnLayout from "src/layouts/TwoColumnLayout.svelte";

</script>


<TwoColumnLayout>
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
	<span slot="side">

	</span>
</TwoColumnLayout>