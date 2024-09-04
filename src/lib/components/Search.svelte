<script lang="ts" module>
	export const searchOpen = $state({ value: false });
</script>

<script lang="ts">
	import type { Icon } from "lucide-svelte";
	import ArrowBigUp from "lucide-svelte/icons/arrow-big-up";
	import Disc3 from "lucide-svelte/icons/disc-3";
	import DiscAlbum from "lucide-svelte/icons/disc-album";
	import Search from "lucide-svelte/icons/search";
	import SearchSlash from "lucide-svelte/icons/search-slash";

	import { Command } from "cmdk-sv";
	import { fade } from "svelte/transition";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { grow } from "$lib/transition";

	interface Shortcut {
		href: string;
		icon: typeof Icon;
		text: string;
	}

	const shortcuts: Record<string, Shortcut> = {
		g: { href: "/albums/new", icon: DiscAlbum, text: "New album" },
		b: { href: "/tracks/new", icon: Disc3, text: "New track" },
	};

	async function handleKey(event: KeyboardEvent) {
		const isModifier = event.metaKey || event.ctrlKey;

		if (event.key === "k" && isModifier) {
			event.preventDefault();

			searchOpen.value = !searchOpen.value;
		} else if (event.key === "Escape") {
			searchOpen.value = false;
		} else if (event.key in shortcuts && isModifier) {
			event.preventDefault();
			searchOpen.value = false;

			await goto(shortcuts[event.key].href);
		}
	}
</script>

<svelte:document onkeydown={handleKey} />

<Command.Dialog
	contentClasses="fixed left-1/2 top-1/2 z-50 w-full max-w-screen-sm -translate-x-1/2 -translate-y-1/2 divide-gray-500/10 overflow-hidden rounded-xl bg-white"
	contentTransition={grow}
	overlayClasses="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px]"
	overlayTransition={fade}
	overlayTransitionConfig={{ duration: 250 }}
	bind:open={searchOpen.value}
>
	<div class="flex items-center border-b border-gray-500/20 px-4">
		<Search class="mr-3 size-4 shrink-0 text-gray-400" />

		<Command.Input
			class="h-11 w-full border-0 bg-transparent text-sm outline-0 placeholder:text-gray-400"
			placeholder="Search"
		/>
	</div>

	<Command.List>
		<Command.Empty class="px-6 py-12 text-center text-sm sm:px-12">
			<SearchSlash class="mx-auto size-6 opacity-40" />
			<p class="mt-4 text-sm">Your search returned no results. Try again.</p>
		</Command.Empty>

		<!-- recent searches, otherwise show trending -->
		<Command.Group class="p-2" heading="Trending">
			<Command.Item asChild let:action let:attrs>
				{#each $page.data.trending as track}
					<a
						class="flex items-start rounded-md px-3 py-2 hover:bg-gray-100"
						href="/tracks/{track.id}"
						{...attrs}
						use:action
					>
						<div class="size-12 overflow-hidden rounded">
							<img src={track.cover_art.default} alt="" />
						</div>

						<div class="ml-2 flex flex-col">
							<span class="font-semibold">{track.name}</span>
							<span class="text-xs text-gray-400">
								{track.artists[0].name} &bullet; {track.release_date.getFullYear()}
							</span>
						</div>
					</a>
				{/each}
			</Command.Item>

			<!-- ... -->
		</Command.Group>

		<Command.Separator class="h-px w-full border-b border-gray-500/20" />

		<Command.Group class="p-2 text-sm" heading="Shortcuts">
			{#each Object.entries(shortcuts) as [key, shortcut]}
				<Command.Item asChild let:action let:attrs>
					<a
						class="flex items-center rounded-md px-3 py-2 hover:bg-gray-100"
						href={shortcut.href}
						onclick={() => (searchOpen.value = false)}
						{...attrs}
						use:action
					>
						<shortcut.icon class="mr-2 size-5 text-gray-400" />
						{shortcut.text}

						<div class="ml-auto flex text-xs text-gray-400">
							<kbd class="!m-0.5">Ctrl</kbd>
							<kbd class="!m-0.5 uppercase">{key}</kbd>
						</div>
					</a>
				</Command.Item>
			{/each}
		</Command.Group>
	</Command.List>

	<div
		class="flex items-center border-t border-gray-500/20 bg-gray-50 px-4 py-2.5 text-xs text-gray-500"
	>
		Type
		<kbd class="text-black">#</kbd> for albums,
		<kbd class="text-black">$</kbd> for tracks, and
		<kbd class="text-black">@</kbd> for users.
	</div>
</Command.Dialog>

<style>
	:global([data-cmdk-group-heading]) {
		margin: 2px 12px 4px 12px;
		color: theme("colors.gray.400");
		font-size: theme("fontSize.xs");
		font-weight: theme("fontWeight.medium");
	}

	kbd {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 20px;
		padding: 0 5px;
		margin: 4px;
		background: white;
		border: 1px solid theme("colors.gray.400");
		border-radius: 4px;
		font-weight: theme("fontWeight.semibold");
	}
</style>
