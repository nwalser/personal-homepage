<script>
	import { Container } from 'postcss';
	import Panel from 'src/components/Panel.svelte';
	import MainLayout from 'src/layouts/MainLayout.svelte';
	import Title from 'src/components/headers/Title.svelte';
</script>

<svelte:head>
	<title>Nathaniel Walser - Programming Humour</title>
</svelte:head>

<MainLayout>
	<span slot="header"><Title>A collection of my favorite programming jokes</Title></span>
	<span slot="body">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			<div>
				<Panel class="h-full">
					<p>How many programmers does it take to change a light bulb?</p>
					<br />
					<p>None – It’s a hardware problem.</p>
				</Panel>
			</div>
			<div>
				<Panel class="h-full">
					<p>
						Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with
						the science.
					</p>
				</Panel>
			</div>
			<div>
				<Panel class="h-full">
					<p>Why do most Java programmers wear glasses?</p>
					<br />
					<p>Because they don’t see sharp.</p>
				</Panel>
			</div>
			<div class="col-span-1 md:col-span-3">
				<Panel class="h-full">
					<h2 class="font-bold">CIA - Computer Industry Acronyms</h2>
					<p>// CD-ROM: Consumer Device, Rendered Obsolete in Months</p>
					<p>ISDN: It Still Does Nothing</p>
					<p>MIPS: Meaningless Indication of Processor Speed</p>
					<p>DOS: Defunct Operating System</p>
					<p>OS/2: Obsolete Soon, Too</p>
					<p>PnP: Plug and Pray</p>
					<p>IBM: I Blame Microsoft</p>
					<p>COBOL: Completely Obsolete Business Oriented Language</p>
					<p>LISP: Lots of Insipid and Stupid Parentheses</p>
					<p>MACINTOSH: Most Applications Crash; If Not, The Operating System Hangs</p>
					<p>AAAAA: American Association Against Acronym Abuse.</p>
					<p>
						WYSIWYMGIYRRLAAGW: What You See Is What You Might Get If You’re Really Really Lucky And
						All Goes Well.
					</p>
				</Panel>
			</div>
		</div>
	</span>
</MainLayout>
