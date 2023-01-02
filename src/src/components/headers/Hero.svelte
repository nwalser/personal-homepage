<script lang="ts">
	export let src: string;
	export let alt: string = '';
</script>

<img
	src={src}
	alt={alt}
	class="absolute bottom-0 -right-32 md:right-0 lg:right-6 h-[30rem] max-w-none opacity-20 -z-50"
/>
