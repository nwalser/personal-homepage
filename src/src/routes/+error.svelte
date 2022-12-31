<script>
    import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import MainLayout from 'src/layouts/MainLayout.svelte';
</script>


<MainLayout>
	<span slot="body">
        <div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
            <div class="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div class="mx-auto max-w-max">
                    <main class="sm:flex">
                        <p class="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">{$page.status}</p>
                        <div class="sm:ml-6">
                            <div class="sm:border-l sm:border-gray-200 sm:pl-6">
                                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{$page.error?.message}</h1>
                                <p class="mt-1 text-base text-gray-500">Looks like an error occured. You can get back into the savezone by following a link below.</p>
                            </div>
                            <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                <a href="/" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Go Back Home</a>
                                <a href="/get-in-touch" class="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Contact Me</a>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
	</span>
</MainLayout>