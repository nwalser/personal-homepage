<script lang="ts">
    import { onMount } from 'svelte';

    onMount(() => {
        animateMatrix();
    });
    
    function animateMatrix (){
        // Initialising the canvas
        let canvas = document.querySelector('canvas')!;
        let ctx = canvas.getContext('2d')!;

        let letterArray: string[][] = [];

        // Setting up the drops
        let drops: number[] = [];

        // Setting up the letters
        let lettersStr = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
        let letters = lettersStr.split('');
        let fontSize = 10;

        const observer = new ResizeObserver((entries) => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;

            // Setting up the columns
            let columns = canvas.width / fontSize;
            let lines = canvas.height / fontSize;

            for (let i = 0; i < columns; i++) {
                drops[i] = Math.random() * lines;
            }
        });
        observer.observe(canvas)



        // Setting up the draw function
        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, .1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < drops.length; i++) {
                let text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillStyle = '#0f0';
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                drops[i]++;

                // return drop to starting position
                if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                    drops[i] = 0;
                }
            }
        }

        // Loop the animation
        setInterval(draw, 33);
    }
</script>

<div class="h-screen w-100 overflow-hidden">
    <canvas class="block"/>
</div>


<style>
    canvas {
    width: 100%;
    height: 100%;
    display: block;
  }

</style>