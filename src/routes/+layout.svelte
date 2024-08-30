<script lang="ts">
	import "../app.css";
	import "@fontsource-variable/jetbrains-mono";

	import { ModeWatcher } from "mode-watcher";
	import Header from "$lib/components/Header.svelte";

	const { children } = $props();
</script>

<ModeWatcher />

<Header />

<main>
	{@render children()}
</main>
