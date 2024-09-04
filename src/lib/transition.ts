import { cubicOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";

function lerp(n: number, x: number[], y: number[]): number {
	return ((n - x[0]) / (x[1] - x[0])) * (y[1] - y[0]) + y[0];
}

export function grow(node: Element): TransitionConfig {
	const style = getComputedStyle(node);
	const transform = style.transform === "none" ? "" : style.transform;

	return {
		duration: 150,
		delay: 0,
		easing: cubicOut,
		css(t) {
			const x = lerp(t, [0, 1], [0, 0]);
			const y = lerp(t, [0, 1], [-8, 0]);
			const scale = lerp(t, [0, 1], [0.95, 1]);

			return `
				transform: ${transform} translate3d(${x}px, ${y}px, 0) scale(${scale});
				opacity: ${t};
			`;
		},
	};
}
