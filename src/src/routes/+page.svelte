<script>
    import AnimatedOffice from './AnimatedOffice.svelte';
</script>

<div class="relative h-screen overflow-hidden">
    <div class="absolute w-1/3 text-white font-press-start translate-x-16 translate-y-16 z-10">
        <h1 class="text-8xl">Hi. I am 
            <span class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Nathaniel Walser.</span>
        </h1>
        <p class="text-4xl mt-10">
            A 21 year old full stack software engineer that is currently 
            <span class="bg-gradient-to-r from-violet-300 to-pink-400 text-transparent bg-clip-text">working</span>
            for esp-engineering.
        </p>
        <p class="text-4xl mt-10">Feel free to have a 
            <span class="bg-gradient-to-r from-violet-200 to-pink-500 text-transparent bg-clip-text">look</span> 
            around my 
            <span class="bg-gradient-to-r from-violet-700 to-pink-100 text-transparent bg-clip-text">office.</span>
        </p>
        <p class="text-4xl mt-10"> 
            ->
        </p>
        <a href="/programming-jokes" sapper:prefetch>Test</a>
    </div>

    <AnimatedOffice />
</div>