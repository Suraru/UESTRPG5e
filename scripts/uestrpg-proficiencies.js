Hooks.on
("init", () =>
	{
		CONFIG.DND5E.spellSchools = {
			destruction: "Destruction",
			restoration: "Restoration",
			conjuration: "Conjuration",
			alteration: "Alteration",
			illusion: "Illusion",
			mysticism: "Mysticism",
			thaumaturgy: "Thaumaturgy",
			enchanting: "Enchanting",
			alchemy: "Alchemy",
			auromancy: "Auromancy",
			darkmagic: "Dark Magic",
			necromancy: "Necromancy",
			fleshmagic: "Flesh Magic",
			bloodmagic: "Blood Magic",
			soulmagic: "Soul Magic",
			sight: "Sight",
			thuum: "Thu'um",
			shehai: "Shehai",
			timemagic: "Time Magic",
			weathermagic: "Weather Magic"
		};
		CONFIG.DND5E.languages = {
			commoncyrodilic: "Cyrodilic/Tamrielic",
			commonaltmeris: "Altmeris",
			commonbosmeris: "Bosmeris",
			commonbretic: "Bretic",
			commondunmeris: "Dunmeris",
			commonjel: "Jel",
			commonnordic: "Nordic",
			commonorcish: "Orcish",
			commontaagra: "Ta'agra",
			commonyoku: "Yoku",
			rareakaviri: "Akaviri",
			rarealdchimeris: "Ald Chimeris",
			rarealdmeris: "Aldmeris",
			rareayleidoon: "Ayliedoon",
			rarecentaurian: "Centaurian",
			raredaedric: "Daedric",
			raredovahzul: "Dovahzul",
			raredreugh: "Dreugh",
			raredwemeris: "Dwemeris",
			rareehlnofex: "Ehlnofex",
			rareelder: "Elder",
			rarefalmeris: "Falmeris",
			raregiantish: "Giantish",
			raregoblin: "Goblin-Speak",
			rareharpy: "Harpy",
			rarehist: "Hist",
			rareimga: "Imga",
			rarekothringi: "Kothringi",
			rarelamia: "Lamia",
			rareminotaur: "Minotaur",
			rarenedic: "Nedic",
			rarenereid: "Nereid",
			rareoldorcish: "Old Orcish",
			rarepyandonean: "Pyandonean",
			rarereachtongue: "Reach-Tongue",
			raresload: "Sload",
			rarespriggan: "Spriggan",
			raretsaesci: "Tsaesci"
		};
		CONFIG.DND5E.weaponProficiencies = {
			bln: "Blunt Weapons",
			sbl: "Short Blades",
			lbl: "Long Blades",
			mrk: "Marksman",
			axe: "Axes",
			pol: "Polearms",
			hth: "Hand-to-Hand"
		};
		CONFIG.DND5E.weaponProficienciesMap = {
			natural: true,
			blunt: "bln",
			shortblades: "sbl",
			longblades: "lbl",
			marksman: "mrk",
			axes: "axe",
			polearms: "pol",
			handtohand: "hth"
		};
		CONFIG.DND5E.weaponTypes = {
			blunt: "Blunt Weapons",
			shortblades: "Short Blades",
			longblades: "Long Blades",
			marksman: "Marksman",
			axes: "Axes",
			polearms: "Polearms",
			handtohand: "Hand-to-Hand",
			natural: "DND5E.WeaponNatural",
			improv: "DND5E.WeaponImprov",
			siege: "DND5E.WeaponSiege"
		};
		CONFIG.DND5E.weaponIds = {
			club: "uestrpg5e.uestrpg-common-weapons.PJuqY9wl5iencjCL",
			flail: "uestrpg5e.uestrpg-common-weapons.aMf69NseYl2UHhXI",
			greatclub: "uestrpg5e.uestrpg-common-weapons.gi5wJswnavkJOkmI",
			lighthammer: "uestrpg5e.uestrpg-common-weapons.YFUTW1alzKeqEY0j",
			mace: "uestrpg5e.uestrpg-common-weapons.NHMadisqaoGWtTF3",
			maul: "uestrpg5e.uestrpg-common-weapons.gJzV2EgyXGOztnT3",
			morningstar: "uestrpg5e.uestrpg-common-weapons.cVJbDN8CurLfFUYO",
			quarterstaff: "uestrpg5e.uestrpg-common-weapons.qbipbm38tyZ1zuMi",
			warhammer: "uestrpg5e.uestrpg-common-weapons.07oxW1HRKA1odmya",
			dagger: "uestrpg5e.uestrpg-common-weapons.yCORZ9rpLlZNFp6j",
			rapier: "uestrpg5e.uestrpg-common-weapons.ZDepnW65u2kLNTFf",
			scimitar: "uestrpg5e.uestrpg-common-weapons.xDzoTFJemzLFDXi6",
			shortsword: "uestrpg5e.uestrpg-common-weapons.y9I1YH6kaPbKbLD7",
			greatsword: "uestrpg5e.uestrpg-common-weapons.QDznRHlQMamQskdh",
			longsword: "uestrpg5e.uestrpg-common-weapons.0lTDS17xSSUPyR2J",
			blowgun: "uestrpg5e.uestrpg-common-weapons.iM5abthdyuYghlOe",
			crossbowheavy: "uestrpg5e.uestrpg-common-weapons.BaEwQsTZ7S9RNDHl",
			crossbowlight: "uestrpg5e.uestrpg-common-weapons.6vBBUntmkqFYH2tM",
			crossbowhand: "uestrpg5e.uestrpg-common-weapons.7SFxA1jIh3SiiQjm",
			dart: "uestrpg5e.uestrpg-common-weapons.YmlS6tD15b3KRRG1",
			longbow: "uestrpg5e.uestrpg-common-weapons.Wq6euYrXdX00Wwpv",
			net: "uestrpg5e.uestrpg-common-weapons.j4wH8NOkKskoksq8",
			shortbow: "uestrpg5e.uestrpg-common-weapons.ZgCpZBTV9cAwQKSO",
			sling: "uestrpg5e.uestrpg-common-weapons.81TktqKQIAWpviXb",
			battleaxe: "uestrpg5e.uestrpg-common-weapons.pGbeS2cEcPr1MQ4Q",
			greataxe: "uestrpg5e.uestrpg-common-weapons.W9oUuspC3xYQJEtl",
			handaxe: "uestrpg5e.uestrpg-common-weapons.iPstbNnf4iEoPu0g",
			sickle: "uestrpg5e.uestrpg-common-weapons.0YhVIyZyLyoa0cOI",
			warpick: "uestrpg5e.uestrpg-common-weapons.3QA4EOPumcYEK0a0",
			glaive: "uestrpg5e.uestrpg-common-weapons.N1lcrH3GseQyxb4s",
			halberd: "uestrpg5e.uestrpg-common-weapons.EW0oGfFpAnuEc6Kx",
			javelin: "uestrpg5e.uestrpg-common-weapons.u236ZGPtnMporjUn",
			lance: "uestrpg5e.uestrpg-common-weapons.aJnNENxPKAWOaz4e",
			pike: "uestrpg5e.uestrpg-common-weapons.gJnSRjt7hU0O6va5",
			spear: "uestrpg5e.uestrpg-common-weapons.PPV38U5OSYXq3Xic",
			trident: "uestrpg5e.uestrpg-common-weapons.NmY247olYhCNby6I",
			whip: "uestrpg5e.uestrpg-common-weapons.ZyFebv30yoIYt502",
			unarmed: "uestrpg5e.uestrpg-common-weapons.tHF6YlxURwLPjuhr",
			unarmedmonk: "uestrpg5e.uestrpg-common-weapons.wraCWeBlRj77xte5",
			bostaff: "uestrpg5e.uestrpg-rare-weapons.PiT65Yp2WroA9oG8",
			kanabo: "uestrpg5e.uestrpg-rare-weapons.hMHdxG3QTVtZnq2y",
			nunchaku: "uestrpg5e.uestrpg-rare-weapons.HIz1VGM3tyBeCqKf",
			tetsubo: "uestrpg5e.uestrpg-rare-weapons.QfbOr2H00QNHCaWL",
			warmace: "uestrpg5e.uestrpg-rare-weapons.hpPL1RT659BdhjQl",
			cutlass: "uestrpg5e.uestrpg-rare-weapons.q6q71VcMSb3zCYtl",
			tanto: "uestrpg5e.uestrpg-rare-weapons.ATchRkhuxTLMxIX7",
			wakizashi: "uestrpg5e.uestrpg-rare-weapons.NeviS3SKVk52yM93",
			broadsword: "uestrpg5e.uestrpg-rare-weapons.Kr0JYxARjUFkJVRO",
			claymore: "uestrpg5e.uestrpg-rare-weapons.mg4PQc2XlVkqs5cI",
			daikatana: "uestrpg5e.uestrpg-rare-weapons.u2nnMDiWRHF8giYL",
			katana: "uestrpg5e.uestrpg-rare-weapons.a89qeYiuAXPuNC0w",
			sabre: "uestrpg5e.uestrpg-rare-weapons.WEW7Pcyf1l5yDaUh",
			bola: "uestrpg5e.uestrpg-rare-weapons.hbUCgqFoo1E2uoLj",
			chakram: "uestrpg5e.uestrpg-rare-weapons.W0Az2yDgnEtyF4iK",
			throwingstar: "uestrpg5e.uestrpg-rare-weapons.VFa50finWPhzn2UF",
			pickaxe: "uestrpg5e.uestrpg-rare-weapons.aiEvuUdTnHGA44Sn",
			waraxe: "uestrpg5e.uestrpg-rare-weapons.WPb6AVvH0wg3CNeG",
			naginata: "uestrpg5e.uestrpg-rare-weapons.OcHJk1xrrdNZPG1x",
			poleaxe: "uestrpg5e.uestrpg-rare-weapons.K7MKkb5O5nNTnAaY",
			scythe: "uestrpg5e.uestrpg-rare-weapons.kEzKcveL6yWdoym3",
			awl: "uestrpg5e.uestrpg-rare-weapons.iQXQCd5eDKQu7LSH",
			claws: "uestrpg5e.uestrpg-rare-weapons.gn83GPZT7v2HWF7j",
			katar: "uestrpg5e.uestrpg-rare-weapons.G28yTbiFPnI4MzJm",
			knuckles: "uestrpg5e.uestrpg-rare-weapons.uee4ODz0XS6fhwU1"
		}
	}
)




