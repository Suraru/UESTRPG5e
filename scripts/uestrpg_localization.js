Hooks.on
("setup", () => 
	{
		game.dnd5e.config.abilities.dex = "Agility";
		game.dnd5e.config.abilities.con = "Endurance";
		game.dnd5e.config.abilities.wis = "Willpower";
		game.dnd5e.config.abilities.cha = "Personality";

		game.dnd5e.config.abilityAbbreviations.con = "End";
		game.dnd5e.config.abilityAbbreviations.dex = "Agi";
		game.dnd5e.config.abilityAbbreviations.wis = "Wil";
		game.dnd5e.config.abilityAbbreviations.cha = "Per";
		
		game.dnd5e.config.languages.elvish = "Altmeris";
		game.dnd5e.config.languages.halfling = "Bosmeri";
		game.dnd5e.config.languages.dwarvish = "Dunmeri";
		game.dnd5e.config.languages.goblin = "Jel";
		game.dnd5e.config.languages.giant = "Nordic";
		game.dnd5e.config.languages.orc = "Orcish";
		game.dnd5e.config.languages.gnomish = "Ta'Agra";
		game.dnd5e.config.languages.common = "Tamrielic";
		game.dnd5e.config.languages.aarakocra = "Yoku";

		game.dnd5e.config.languages.abyssal = "Akaviri";
		game.dnd5e.config.languages.aquan = "Aldmeris";
		game.dnd5e.config.languages.auran = "Ayleidoon";
		game.dnd5e.config.languages.gith = "Chimeris";
		game.dnd5e.config.languages.infernal = "Daedric";
		game.dnd5e.config.languages.draconic = "Dovahzul";
		game.dnd5e.config.languages.druidic = "Dugatach";
		game.dnd5e.config.languages.deep = "Dwemeris";
		game.dnd5e.config.languages.celestial = "Ehlnofex";
		game.dnd5e.config.languages.gnoll = "Falmeris";
		game.dnd5e.config.languages.primordial = "Hist";
		game.dnd5e.config.languages.terran = "Nedic";
		game.dnd5e.config.languages.sylvan = "Pyandonean";
		game.dnd5e.config.languages.ignan = "Sload";
		game.dnd5e.config.languages.undercommon = "Tsaesci";
		game.dnd5e.config.languages.cant = "Bretic";
	}
);