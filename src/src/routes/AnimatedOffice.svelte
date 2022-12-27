<script>
    import InlineSVG from 'svelte-inline-svg'
</script>

<InlineSVG src="./programmer-office.svg" class="absolute w-3/5 translate-x-3/4 -translate-y-20 z-0 office-animated" />

<style>
    :global(#BookHTML, #BookPHP, #Cat, #Programmer){
        transition-duration: 0.5s;
    }

    :global(#BookHTML:hover, #BookPHP:hover){
        filter: drop-shadow(0px 0px 30px white);
        transform: translateY(-30px);
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

    :global(#Stars g) {
        animation: stars 6s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        filter: drop-shadow(0px 0px 20px white);
    }

    @keyframes -global-stars {
        0% {
            opacity: 1;
        }

        40% {
            opacity: 0.5;
        }

        100%{
            opacity: 1;
        }
    }

    :global(#Numbers g path) {
        animation: num 10s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-delay: calc(var(--order) * 200ms);
    }

    @keyframes -global-num {
        0% {
            transform: translate(0px, 0px);
        }

        15% {
            transform: translate(0px, 30px);
        }

        20%{
            transform: translate(0px, 32px);

        }

        30% {
            transform: translate(0px, 30px);
        }

        40% {
            transform: translate(0px, 35px);
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
            transform: translate(10px, -2px);
        }

        100%{
            transform: translate(0px, 0px);
        }
    }
</style>