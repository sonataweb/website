<script lang="ts">
	import "../app.css";
	import "@fontsource-variable/jetbrains-mono";

	import { ModeWatcher } from "mode-watcher";

	const { children } = $props();
</script>

<ModeWatcher />

<main>
	{@render children()}
</main>
