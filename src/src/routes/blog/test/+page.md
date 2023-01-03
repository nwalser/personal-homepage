<script>
	import CodeBlock from 'src/components/code-block/CodeBlock.svelte';
	import CodeBlockTab from 'src/components/code-block/CodeBlockTab.svelte';

    import Code1 from './code1.md';
    import Code2 from './code2.md';
</script>

# Hello

<CodeBlock>
    <CodeBlockTab name="Test">
        <Code1 />
    </CodeBlockTab>
    <CodeBlockTab name="Test2">
        <Code2 />
    </CodeBlockTab>
</CodeBlock>