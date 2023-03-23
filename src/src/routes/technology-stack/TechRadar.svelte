<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		radar_visualization({
			svg_id: 'radar',
			width: 1400,
			height: 1000,
			colors: {
				background: '#fff',
				grid: '#bbb',
				inactive: '#ddd'
			},
			title: 'Technology Stack',
			quadrants: [
				{ name: 'Languages and Frameworks' },
				{ name: 'Tools' },
				{ name: 'Platforms' },
				{ name: 'Techniques' }
			],
			rings: [
				{ name: 'Adopted', color: '#5ba300' },
				{ name: 'Trial', color: '#009eb0' },
				{ name: '', color: '' },
				{ name: '', color: '' }
			],
			print_layout: true,
			links_in_new_tabs: true,
			entries: [
				// techniques 3
				{
					label: 'Dependency Injection',
					quadrant: 3,
					ring: 0
				},
				{
					label: 'Domain-Driven Design',
					quadrant: 3,
					ring: 0
				},
				{
					label: 'Continuous Delivery',
					quadrant: 3,
					ring: 1
				},
				{
					label: 'Messaging',
					quadrant: 3,
					ring: 0
				},
				{
					label: 'Identity Provider',
					quadrant: 3,
					ring: 0
				},
				{
					label: 'DevOps',
					quadrant: 3,
					ring: 0
				},
				{
					label: 'Vertical Slice Architecture',
					quadrant: 3,
					ring: 1
				},
				{
					label: 'Modular Monolith',
					quadrant: 3,
					ring: 0
				},
				{
					label: 'Command and Query Responsibility Segregation',
					quadrant: 3,
					ring: 0
				},
				// platforms
				{
					label: 'Docker',
					quadrant: 2,
					ring: 0
				},
				{
					label: 'Kubernetes',
					quadrant: 2,
					ring: 1
				},
				{
					label: 'Redis',
					quadrant: 2,
					ring: 1
				},
				{
					label: 'MongoDb',
					quadrant: 2,
					ring: 0
				},
				{
					label: 'EventStoreDb',
					quadrant: 2,
					ring: 1
				},
				{
					label: 'Grafana',
					quadrant: 2,
					ring: 1
				},
				{
					label: 'Sentry',
					quadrant: 2,
					ring: 1
				},
				{
					label: 'Github',
					quadrant: 2,
					ring: 0
				},
				{
					label: 'FusionAuth',
					quadrant: 2,
					ring: 0
				},
				{
					label: 'MinIO',
					quadrant: 2,
					ring: 0
				},
                // tools
                {
					label: 'Git',
					quadrant: 1,
					ring: 0
				},
                {
					label: 'Visual Studio Code',
					quadrant: 1,
					ring: 0
				},
                {
					label: 'Visual Studio',
					quadrant: 1,
					ring: 0
				},
                {
					label: 'HotChocolate (GraphQL)',
					quadrant: 1,
					ring: 1
				},
                {
					label: 'Helm',
					quadrant: 1,
					ring: 1
				},
                {
					label: 'Blazor',
					quadrant: 1,
					ring: 0
				},
                {
					label: 'MudBlazor',
					quadrant: 1,
					ring: 0
				},
                {
					label: 'OpenCV',
					quadrant: 1,
					ring: 0
				},
                {
					label: 'MediatR',
					quadrant: 1,
					ring: 0
				},
                // languages and frameworks
                {
					label: 'C#',
					quadrant: 0,
					ring: 0
				},
                {
					label: 'ASP.NET Core',
					quadrant: 0,
					ring: 0
				},
                {
					label: '.NET 7',
					quadrant: 0,
					ring: 0
				},
                {
					label: 'SvelteKit',
					quadrant: 0,
					ring: 1
				},
			]
		});
	});
</script>

{@html '<script src="https://d3js.org/d3.v4.min.js"></script>'}

{@html '<script src="https://zalando.github.io/tech-radar/release/radar-0.7.js"></script>'}
<div
	style="backgroundColor: 'lightpink',
    resize: 'horizontal',
    overflow: 'hidden',
    width: '1000px',
    height: 'auto'"
>
	<svg width="100%" viewBox="0 100 1400 800" preserveAspectRatio="xMidYMid meet">
		<svg id="radar" class="object-contain" />
	</svg>
</div>
