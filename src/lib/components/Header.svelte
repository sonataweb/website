<script lang="ts">
	import Search from "lucide-svelte/icons/search";
	import { onMount } from "svelte";

	let header: HTMLElement;

	onMount(() => {
		document.body.style.setProperty("--header-height", `${header.offsetHeight}px`);
	});
</script>

<header
	class="fixed top-0 z-50 flex w-full items-center justify-between bg-gray-50 px-8 py-2 shadow-sm"
	bind:this={header}
>
	<div class="flex items-center gap-x-4">
		<a class="size-10" href="/">
			<img src="https://placehold.co/64" alt="Logo" />
		</a>

		<button
			class="flex h-8 w-80 items-center gap-x-2 rounded-md border-0 py-1.5 pl-3.5 text-left text-sm text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset"
		>
			<Search class="size-4" />
			Search
		</button>
	</div>

	<div class="flex items-center gap-x-4">
		<!-- ... -->
	</div>
</header>
