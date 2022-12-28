<script>
    import InlineSVG from 'svelte-inline-svg'
</script>

<InlineSVG src="./programmer-office.svg" class="absolute z-0 -translate-y-40 office-animated" style="height: 120%; width: 140%;"/>


<style>
    :global(#BookHTML, #BookPHP, #Cat, #Programmer){
        transition-duration: 0.5s;
    }

    :global(#BookHTML:hover, #BookCSharp:hover){
        filter: drop-shadow(0px 0px 30px white);
    }

    :global(#Cat:hover, #Programmer:hover){
        filter: drop-shadow(0px 0px 5px white);
    }

    :global(#Head) {
        animation: head 10s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
    }

    @keyframes -global-head {
        0% {
            transform: translateY(0);
        }

        10%{
            transform: translateY(40px);
        }

        20%{
            transform: translateY(35px);

        }

        30%{
            transform: translateY(45px);

        }

        100% {
            transform: translateY(0);
        }
    }

    :global(#Eyes) {
        animation: eyes 10s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
    }

    @keyframes -global-eyes {
        0% {
            transform: translate(0px, 0px);
        }

        10% {
            transform: translate(5px, 10px);
        }

        50%{
            transform: translate(10px, 0px);
        }

        70%{
            transform: translate(-12px, 0px);
        }

        100%{
            transform: translate(0px, 0px);
        }
    }

    :global(#S1, #S6, #S11, #S16, #S21, #S26) {
        animation: stars 3s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        filter: drop-shadow(0px 0px 20px white);
    }

    :global(#S2, #S7, #S12, #S17, #S22) {
        animation: stars 4s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        filter: drop-shadow(0px 0px 15px white);
        animation-delay: 0.5s;
    }

    :global(#S3, #S8, #S13, #S18, #S23) {
        animation: stars 2s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        filter: drop-shadow(0px 0px 20px white);
        animation-delay: 1s;
    }

    :global(#S4, #S9, #S14, #S19, #S24) {
        animation: stars 5s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        filter: drop-shadow(0px 0px 50px white);
        animation-delay: 0s;
    }

    :global(#S5, #S10, #S15, #S20, #S25) {
        animation: stars 6s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        filter: drop-shadow(0px 0px 40px white);
        animation-delay: 1s;
    }

    @keyframes -global-stars {
        0% {
            opacity: 1;
        }

        40% {
            opacity: 0.1;
        }

        60% {
            opacity: 1;
        }

        85% {
            opacity: 0.8;
        }


        100%{
            opacity: 1;
        }
    }

    :global(#Numbers1 g g path) {
        animation: num 10s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-delay: 0s;
    }

    :global(#Numbers2 g g path) {
        animation: num 10s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-delay: 0.5s;
    }

    :global(#Numbers3 g g path) {
        animation: num 10s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-delay: 1s;
    }

    @keyframes -global-num {
        0% {
            transform: translate(0px, 0px);
        }

        15% {
            transform: translate(0px, 0.5px);
        }

        40% {
            transform: translate(0px, 1.2px);
        }

        60% {
            transform: translate(0px, 1px);
        }

        100% {
            transform: translate(0px, 0px);
        }
    }

    :global(#CatEyes) {
        animation: cat-eyes 10s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-delay: calc(var(--order) * 200ms);
    }

    @keyframes -global-cat-eyes {
        0% {
            transform: translate(0px, 0px);
        }

        60%{
            transform: translate(-20px, 4px);
        }

        100%{
            transform: translate(0px, 0px);
        }
    }
</style>