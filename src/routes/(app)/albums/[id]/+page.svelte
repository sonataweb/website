<script lang="ts">
	import { color } from "$lib/actions";

	const { data } = $props();
</script>

<aside
	class="flex p-6 shadow-inner lg:fixed lg:inset-y-0 lg:left-0 lg:min-h-svh lg:max-w-md lg:flex-col lg:overflow-y-auto lg:p-12"
>
	<div class="flex flex-col">
		<div class="max-w-48 overflow-hidden rounded-xl shadow-lg lg:max-w-none lg:rounded-2xl">
			<img src={data.album.cover_art.default} alt="" crossorigin="anonymous" use:color />
		</div>

		<div class="mt-6">
			<h1 class="text-3xl font-bold">{data.album.name}</h1>
			<h2 class="mt-1 text-2xl font-semibold text-gray-700">
				{data.album.artists.map((artist) => artist.name).join(", ")}
			</h2>
		</div>
	</div>

	<article class="lg:mt-6">
		<h3 class="font-mono text-lg font-medium">About</h3>

		<p class="mt-2 text-gray-700">
			Quis exercitation mollit sunt consequat nisi excepteur. Ut velit velit ullamco in anim
			anim sunt et proident aute reprehenderit nulla eiusmod labore.
		</p>

		<p class="mt-2 text-gray-700">
			Id ex irure irure nulla. Laboris fugiat consectetur et esse do duis ipsum aliqua
			eiusmod. Quis cupidatat in consequat et commodo labore deserunt laborum.
		</p>
	</article>
</aside>

<div class="px-12 py-6 lg:ml-[28rem]">
	<ol class="divide-y divide-gray-200">
		{#each data.album.tracks as track, i (track.name)}
			<li class="py-6">
				<div class="mx-auto max-w-2xl">
					<article class="flex flex-col">
						<header>
							<span class="float-left -ml-10 mt-2.5 font-mono text-gray-300">
								{`${i + 1}`.padStart(2, "0")}.
							</span>

							<h2 class="mt-2 text-lg font-semibold">
								{track.name}
							</h2>
						</header>

						<p class="mt-2 line-clamp-3 font-light text-gray-500">
							Lorem ipsum cillum quis nulla ex minim aliquip sint nostrud pariatur
							velit. Ea duis tempor magna veniam deserunt ut. Officia officia mollit
							in eiusmod cillum in eiusmod duis nisi aliqua. Ut commodo minim commodo
							laboris anim aliquip consequat.
						</p>

						<footer class="mt-4 flex items-center gap-4">
							<a
								class="text-sm font-medium text-cover-art-fg"
								href="/tracks/{track.id}"
							>
								Lyrics
							</a>

							<div class="h-4 w-px bg-gray-900" role="separator"></div>

							<button
								class="text-sm font-medium text-cover-art-fg"
								onclick={() => {}}
							>
								Credits
							</button>
						</footer>
					</article>
				</div>
			</li>
		{/each}
	</ol>
</div>

<style>
	aside {
		background: linear-gradient(
			var(--cover-art-bg, theme("colors.gray.50")),
			color-mix(
				in srgb,
				var(--cover-art-bg, theme("colors.gray.50")),
				theme("colors.gray.50") 85%
			)
		);

		@screen lg {
			top: var(--header-height);
		}
	}
</style>
