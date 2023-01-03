<script>
	import CodeBlock from 'src/components/code-block/CodeBlock.svelte';
	import CodeBlockTab from 'src/components/code-block/CodeBlockTab.svelte';

    import Code1 from './code1.md';
    import Code2 from './code2.md';
	import { Tabs, TabList, TabPanel, Tab } from 'src/components/code-block/tabs.js';
</script>

# Hello


<Tabs>
	<TabList>
		<Tab>one</Tab>
		<Tab>two</Tab>
		<Tab>three</Tab>
	</TabList>

	<TabPanel name="Hello">
        <Code1 />
	</TabPanel>

	<TabPanel>
        <Code2 />
	</TabPanel>

	<TabPanel>
		<h2>Third panel</h2>
	</TabPanel>
</Tabs>


# after

<CodeBlock>
    <CodeBlockTab name="Test">
        <Code1 />
    </CodeBlockTab>
    <CodeBlockTab name="Test2">
        <Code2 />
    </CodeBlockTab>
</CodeBlock>