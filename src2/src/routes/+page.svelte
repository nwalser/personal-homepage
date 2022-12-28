<script>
    import { onMount } from 'svelte';

    import AnimatedOffice from '../components/AnimatedOffice.svelte';

    import Typed from 'typed.js';


	onMount(async () => {
        var options = {
            typeSpeed: 20,
            stringsElement: '#typed-strings',
            loop: false,
            showCursor: false,
        };

        var typed = new Typed('#typed', options);
	});
</script>

<div class="relative h-screen overflow-hidden">
    <div id="typed-strings" class="absolute w-1/3 text-white font-press-start translate-x-16 translate-y-16 z-10">
        <div>
            <h1 class="text-8xl">
                Hi. I am 
                <span class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Nathaniel Walser.</span>
            </h1>
            <p class="text-4xl mt-10">
                A 21 year old full stack software developer that is spezialized in frameworks like
                <span class="bg-gradient-to-r from-violet-300 to-pink-400 text-transparent bg-clip-text">ASP.Net Core</span>
                and
                <span class="bg-gradient-to-r from-violet-300 to-pink-400 text-transparent bg-clip-text">Blazor.</span>
            </p>
            <p class="text-4xl mt-10">
                Feel free to have a look around my office.
            </p>
            <p class="text-4xl mt-10"> 
                <span class="bg-gradient-to-r from-violet-700 to-pink-100 text-transparent bg-clip-text">--></span>
            </p>
        </div>
    </div>

    <div class="absolute w-1/3 text-white font-press-start translate-x-16 translate-y-16 z-10">
        <div id="typed">
            
        </div>
    </div>

    <AnimatedOffice />

</div>