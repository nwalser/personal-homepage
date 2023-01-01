<script>
	import Panel from 'src/components/Panel.svelte';
	import PostList from 'src/components/post-list/PostList.svelte';
	import PostListItem from 'src/components/post-list/PostListItem.svelte';
	import Prose from 'src/components/Prose.svelte';
	import PostLayout from 'src/layouts/PostLayout.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
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
				<h1>Recent Posts</h1>
			</Prose>
		</Panel>
		<div class="not-prose">
			<PostList>
				<PostListItem
					title="Template for Blazor Base Data Component"
					subtitle="How to setup a blazor base component that can be used to automate the lifecycle of fetching data."
					alt="image of blazor"
					href="/blog/template-for-blazor-base-component"
					src="/posts/blazor-header.svg"
				/>
			</PostList>
		</div>
	</span>
	<span slot="side" />
</TwoColumnLayout>
