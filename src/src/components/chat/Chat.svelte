<script lang="ts">
	import type { ChatCompletionRequestMessage } from 'openai';
	import { writable } from 'svelte/store';
	import Panel from '../Panel.svelte';
	import Prose from '../Prose.svelte';

	let firstMessage = `Hi! I am Nathaniel's online buddy. I can 
        answer basic questions you have about him so he doesn't 
        have to. But be aware, I might hallucinate sometimes. :) 
        What do you want to know?`;

	let messages = writable<ChatCompletionRequestMessage[]>([
		{
			role: 'assistant',
			content: firstMessage
		}
	]);

	let newMessage: string = '';
	let writing = writable<boolean>(false);

	const onKeyPress = (e) => {
		if (e.charCode === 13) chat();
	};


	async function chat() {
		$writing = true;
		$messages = [...$messages, { role: 'user', content: newMessage }];
		newMessage = '';

		const req = await fetch('/api/chat', {
			method: 'POST',
			body: JSON.stringify($messages)
		});

		const chatMessage = await req.json();

		console.log(chatMessage);

		$writing = false;
		$messages = [...$messages, { role: 'assistant', content: chatMessage }];
	}
</script>

<Panel>
	<Prose>
		<h2 class="mb-2">Chat with my Buddy</h2>

		<div class="flex flex-col my-4">
			{#each $messages as message}
				{#if message.role == 'assistant'}
					<p class="relative my-4 max-w-[90%] mr-auto p-4 text-justify bg-slate-100 rounded-lg">
						<span class="font-bold absolute -top-5 left-3 bg-slate-200 p-2 py-0 rounded-md">Buddy</span>
						{message.content}
					</p>
				{/if}
				{#if message.role == 'user'}
					<p class="relative my-4 ml-auto p-4 max-w-[90%] text-justify bg-slate-100 rounded-lg">
						<span class="font-bold absolute -top-5 right-3 bg-slate-200 p-2 py-0 rounded-md">You</span>
						{message.content}
					</p>
				{/if}
			{/each}

			{#if $writing == true}
				<p class="relative my-4 max-w-[90%] p-4 mr-auto text-justify bg-slate-100 rounded-lg">
					<span class="font-bold absolute -top-5 left-3 bg-slate-200 p-2 py-0 rounded-md">Buddy</span>
					writing...
				</p>
			{/if}
		</div>

		<div class="not-prose justify-end flex">
			<input
				bind:value={newMessage}
				on:keypress={onKeyPress}
				class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				placeholder="Your question..."
			/>
			<button
				on:click={chat}
				class="ml-2 inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2"
				>➤ Ask</button
			>
		</div>
	</Prose>
</Panel>
