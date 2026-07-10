<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
  import Navbar from '$lib/components/layout/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<main class="flex flex-col justify-center items-center h-screen">
	<div class="flex flex-col justify-center items-center flex-1 ">
		{@render children()}
	</div>
	<div class="w-full">
		<Navbar />
	</div>
</main>

