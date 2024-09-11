<script lang="ts">
	import Bell from "lucide-svelte/icons/bell";
	import LogIn from "lucide-svelte/icons/log-in";
	import Plus from "lucide-svelte/icons/plus";
	import Search from "lucide-svelte/icons/search";

	import { onMount } from "svelte";
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";
	import SearchDialog, { searchOpen } from "./Search.svelte";

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
			type="button"
			onclick={() => (searchOpen.value = true)}
		>
			<Search class="size-4" />
			Search
		</button>
	</div>

	{#if $page.data.user}
		<div class="flex items-center gap-x-2">
			<button
				class="flex size-8 items-center justify-center rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
				type="button"
				aria-label="Notifications"
			>
				<Bell class="size-4" />
			</button>

			<button
				class="flex size-8 items-center justify-center rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
				type="button"
				aria-label="Notifications"
			>
				<Plus class="size-4" />
			</button>

			<div class="h-6 w-px bg-gray-300" role="separator"></div>

			<!-- todo: replace with dropdown -->
			<form method="post" action="?/logOut" use:enhance>
				<button class="mx-2 text-sm font-medium">{$page.data.user.username}</button>
			</form>
		</div>
	{:else}
		<a class="flex items-center text-sm font-medium" href="/login">
			Log in <LogIn class="ml-1.5 size-4" />
		</a>
	{/if}
</header>

<SearchDialog />
