<script lang="ts">
	const { children } = $props();
</script>

{@render children()}

<style>
	:global {
		html {
			background: theme("colors.gray.50");
		}

		html,
		body {
			height: 100%;
		}
	}
</style>
