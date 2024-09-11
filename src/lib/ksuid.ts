export function ksuid() {
	const buf = new ArrayBuffer(20);
	const view = new DataView(buf);

	const ts = Math.round(Date.now() / 1000) - 14e8;
	const values = crypto.getRandomValues(new Uint16Array(16));
	let offset = 0;

	view.setUint32(offset, ts);
	offset += 4;

	for (const n of values) {
		view.setUint8(offset++, n);
	}

	const out = Array.from<string>({ length: 27 }).fill("0");

	let i = 27;
	let b = [
		view.getUint32(0),
		view.getUint32(4),
		view.getUint32(8),
		view.getUint32(12),
		view.getUint32(16),
	];

	while (b.length) {
		const q = [];
		let r = 0;

		for (const n of b) {
			const value = BigInt(n) + BigInt(r) * 4_294_967_296n;
			const digit = value / 62n;

			r = Number(value % 62n);

			if (q.length || digit) q.push(Number(digit));
		}

		i--;
		out[i] = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[r];
		b = q;
	}

	return out.join("");
}
