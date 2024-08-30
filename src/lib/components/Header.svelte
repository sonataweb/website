<script lang="ts">
	import Search from "lucide-svelte/icons/search";
	import { onMount } from "svelte";

	let header: HTMLElement;

	onMount(() => {
		document.body.style.setProperty("--header-height", `${header.offsetHeight}px`);
	});
</script>

<header
	class="z-50 flex items-center justify-between bg-gray-50 px-8 py-2 shadow-sm"
	bind:this={header}
>
	<div class="flex items-center gap-x-4">
		<a class="size-10" href="/">
			<img src="https://placehold.co/64" alt="Logo" />
		</a>

		<div>
			<label class="sr-only" for="search">Email</label>

			<div class="relative rounded-md shadow-sm">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
					<Search class="size-4 text-gray-400" />
				</div>

				<input
					id="search"
					class="w-80 rounded-md border-0 py-1.5 pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm"
					type="search"
					name="search"
					placeholder="Search"
				/>
			</div>
		</div>
	</div>

	<div class="flex items-center gap-x-4">
		<!-- ... -->
	</div>
</header>
