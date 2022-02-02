Hooks.on
("init", () =>
	{
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
			unarmedmonk: "uestrpg5e.uestrpg-common-weapons.wraCWeBlRj77xte5"
		}
	}
)