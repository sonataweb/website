export async function load() {
	// call location is tentative
	// await fetch("https://.../trending");

	// tracks only; simplified for demo purposes
	return {
		trending: [
			{
				id: "",
				cover_art: {
					default:
						"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/20/37/db/2037db2a-ce98-a0f1-bbb3-4d1b83415ff3/8721093219910.png/600x600bb.png",
				},
				name: "Zzz",
				release_date: new Date("2024-07-02"),
				artists: [
					{
						name: "EDEN",
					},
				],
			},
			{
				id: "",
				cover_art: {
					default:
						"https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e3/8e/04/e38e04b6-e4fa-5ce3-9472-6cc861e2c0cb/20UMGIM13353.rgb.jpg/600x600bb.png",
				},
				name: "luv is stooopid",
				release_date: new Date("2020-03-13"),
				artists: [
					{
						name: "renforshort",
					},
				],
			},
			{
				id: "",
				cover_art: {
					default:
						"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d4/77/e2/d477e262-201b-b4d9-d5f5-80cd9badce31/196292171198.jpg/600x600bb.png",
				},
				name: "Wish I Missed U",
				release_date: new Date("2021-08-06"),
				artists: [
					{
						name: "Concrete Castles",
					},
				],
			},
		],
	};
}
