export async function load({ params }) {
	// example requests
	// await fetch(`https://api.sonata.com/albums/${params.id}`);
	// await fetch(`https://api.sonata.com/albuma/${params.id}/tracks`);

	// simplified structure; w.i.p
	return {
		album: {
			id: params.id,
			name: "hypochondriac",
			bio: "",
			cover_art: {
				default:
					"https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/aa/db/1d/aadb1d21-85f1-057a-f308-6f0ac84809dc/196589611031.jpg/600x600bb.jpg",
				alternative: [],
			},
			release_date: new Date("2022-12-02"),
			artists: [
				{
					id: "",
					name: "brakence",
					profile_picture_url:
						"https://i.scdn.co/image/ab67616100005174808be2612c9044731e5970cd",
					banner_url: "https://i.scdn.co/image/ab67618600001016e286e23856341bac8d7fb2ac",
					bio: "",
				},
			],
			tracks: [
				{
					id: "",
					name: "bugging!",
					bio: "",
					cover_art: null,
					realease_date: new Date("2022-11-18"),
				},
				{
					id: "",
					name: "caffeine",
					bio: "",
					cover_art: {
						default:
							"https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/8e/55/16/8e551661-3421-5079-0b5b-88e7ef76a723/196589409782.jpg/600x600bb.jpg",
						alternatives: [],
					},
					realease_date: new Date("2022-09-09"),
				},
				{
					id: "",
					name: "venus fly trap",
					bio: "",
					cover_art: {
						default:
							"https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/09/a4/ea/09a4ea6c-14d9-e792-8cfe-aa80b04e62a7/196589252777.jpg/600x600bb.jpg",
						alternatives: [],
					},
					realease_date: new Date("2022-07-08"),
				},
				{
					id: "",
					name: "teeth",
					bio: "",
					cover_art: null,
					realease_date: new Date("2022-12-02"),
				},
				{
					id: "",
					name: "intellectual greed",
					bio: "",
					cover_art: null,
					realease_date: new Date("2022-12-02"),
				},
				{
					id: "",
					name: "5g",
					bio: "",
					cover_art: null,
					realease_date: new Date("2022-12-02"),
				},
				{
					id: "",
					name: "preparation exercise no. 7 (trembling)",
					bio: "",
					cover_art: null,
					realease_date: new Date("2022-12-02"),
				},
				{
					id: "",
					name: "cbd",
					bio: "",
					cover_art: {
						default:
							"https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9c/60/9d/9c609df0-137b-0a3f-40ec-540efef0f48e/886449742370.jpg/600x600bb.jpg",
						alternatives: [],
					},
					realease_date: new Date("2022-01-21"),
				},
				{
					id: "",
					name: "stung",
					bio: "",
					cover_art: null,
					realease_date: new Date("2022-12-02"),
				},
				{
					id: "",
					name: "argyle",
					bio: "",
					cover_art: {
						default:
							"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/35/78/17/357817d6-b65d-f044-db80-b7d5eee073d6/886449586882.jpg/600x600bb.jpg",
						alternatives: [],
					},
					realease_date: new Date("2021-10-08"),
				},
				{
					id: "",
					name: "deepfake",
					bio: "",
					cover_art: null,
					realease_date: new Date("2022-12-02"),
				},
				{
					id: "",
					name: "introvert",
					bio: "",
					cover_art: null,
					realease_date: new Date("2022-12-02"),
				},
				{
					id: "",
					name: "hypochondriac",
					bio: "",
					cover_art: null,
					realease_date: new Date("2022-12-02"),
				},
			],
			// ...
		},
	};
}
