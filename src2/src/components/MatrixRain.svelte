<script lang="ts">
    import { onMount } from 'svelte';
    import figlet from 'figlet';
    import standard from 'figlet/importable-fonts/Colossal.js';

	onMount(async () => {
        figlet.parseFont('Standard', standard);

        animateMatrix();
	});

    
    function animateMatrix (){
        type TextRender = {
            text: string;
            color: string;
            startX: number;
            startY: number;
        }

        // Initialising the canvas
        let canvas = document.querySelector('canvas')!;
        let ctx = canvas.getContext('2d')!;

        let letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'.split('');
        let fontSize = 7;

        // Setting up the drops
        let drops: number[] = [];

        let texts: TextRender[] = [];

        const observer = new ResizeObserver((entries) => {
            setup();
        });
        observer.observe(canvas)

        function setup(){
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;

            // Setting up the columns
            let columns = canvas.width / fontSize;
            let lines = canvas.height / fontSize;

            for (let i = 0; i < columns; i++) {
                drops[i] = Math.random() * lines;
            }

            figlet.text("Hi! I am Nathaniel Walser.", {
                font: 'Standard',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: 140,
                whitespaceBreak: true
            }, function(err, data) {
                if (err) return;

                let render = {
                    text: data,
                    color: "#ff0000",
                    startX: 150,
                    startY: 150
                }

                texts.push(render as TextRender)
            });

            figlet.text("A 21 year old full stack software engineer, that is currently working for esp-engineering.", {
                font: 'Standard',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: 200,
                whitespaceBreak: true
            }, function(err, data) {
                if (err) return;

                let render = {
                    text: data,
                    color: "#ff0000",
                    startX: 150,
                    startY: 450
                }

                texts.push(render as TextRender)
            });
        }

        function update() {
            ctx.fillStyle = 'rgba(0, 0, 0, .04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // animate drops
            for (let i = 0; i < drops.length; i++) {
                let text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillStyle = '#00ff00';
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                drops[i]++;

                if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                    drops[i] = 0;
                }
            }

            // print texts
            for(let t = 0; t < texts.length; t++){
                let lines: string[] = texts[t].text.split(/\r?\n/);

                for(let i = 0; i < lines.length; i+=1){
                    let line = lines[i];
                    for(let j = 0; j < line.length; j+=1){
                        ctx.fillStyle = texts[t].color;
                        ctx.fillText(line[j], texts[t].startX + j * fontSize, texts[t].startY + i * fontSize);
                    }
                }
            }
        }

        // Loop the animation
        setInterval(update, 50);
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