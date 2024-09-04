import tinycolor from "tinycolor2";

export function color(node: HTMLImageElement) {
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d")!;

	ctx.drawImage(node, 0, 0, 1, 1);

	const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
	const parts = (1 << 24) + (r << 16) + (g << 8) + b;

	const base = tinycolor(`#${parts.toString(16).slice(1)}`);
	document.body.style.setProperty("--cover-art-bg", base.saturate(50).toString());
	document.body.style.setProperty("--cover-art-fg", base.lighten(5).saturate(95).toString());

	return {
		destroy: () => canvas.remove(),
	};
}
