export let types: Array<string> = ['Felines', 'Canids', 'Reptiles', 'Birds', 'Ursids', 'Primates', 'Marsupials', 'Rodents'];

export let incubators: Array<any> = [
  {id: 1, type: 'ursids', launched: true, bought: true, incubating: true},
  {id: 2, type: 'canines', launched: true, bought: true, incubating: true},
  {id: 3, type: 'felines', launched: true, bought: true, incubating: true},
  {id: 4, type: 'marsupials', launched: true, bought: true, incubating: false},
  {id: 5, type: 'primates', launched: true, bought: true, incubating: false},
  {id: 6, type: 'reptiles', launched: true, bought: false, incubating: false},
  {id: 7, type: 'rodents', launched: false, bought: false, incubating: false},
  {id: 8, type: 'birds', launched: false, bought: false, incubating: false},
];

export let egg: Array<any> = [];

export let baby: Array<any> = [
  {id: '', image: 'baby1', description: 'animal description', name: 'Homeless Goddess', attributes: { animalAge: 1, animalType: 0, attack: 1, defense: 4, vitality: 2, experience: 0, gender: 0 }, upgrading: true, timeRemaining: 0, timeForwarded: false},
  {id: '', image: 'baby2', description: 'animal description', name: 'Lucky Tsunami', attributes: { animalAge: 1, animalType: 0, attack: 5, defense: 4, vitality: 5, experience: 0, gender: 0 }, upgrading: true, timeRemaining: 7, timeForwarded: true},
  {id: '', image: 'baby3', description: 'animal description', name: 'Zonked Unicorn', attributes: { animalAge: 1, animalType: 0, attack: 0, defense: 0, vitality: 1, experience: 0, gender: 0 }, upgrading: true, timeRemaining: 26400, timeForwarded: false},
  {id: '', image: 'baby4', description: 'animal description', name: 'Sensible Gangster', attributes: { animalAge: 1, animalType: 0, attack: 5, defense: 0, vitality: 3, experience: 0, gender: 0 }, upgrading: false, timeRemaining: null, timeForwarded: false},
];
export let young: Array<any> = [
  {id: '', image: 'young1', description: 'animal description', name: 'Kind Nemesis', attributes: { animalAge: 2, animalType: 1, attack: 10, defense: 7, vitality: 11, experience: 0, gender: 0 }, upgrading: true, timeRemaining: 0, timeForwarded: false},
  {id: '', image: 'young2', description: 'animal description', name: 'Emotional Destroyer', attributes: { animalAge: 2, animalType: 1, attack: 2, defense: 4, vitality: 9, experience: 0, gender: 0 }, upgrading: true, timeRemaining: 6400, timeForwarded: true},
  {id: '', image: 'young3', description: 'animal description', name: 'Popular Whistle', attributes: { animalAge: 2, animalType: 1, attack: 1, defense: 7, vitality: 8, experience: 0, gender: 0 }, upgrading: true, timeRemaining: 16400, timeForwarded: true},
  {id: '', image: 'young4', description: 'animal description', name: 'Garrulous Doctor', attributes: { animalAge: 2, animalType: 1, attack: 10, defense: 11, vitality: 10, experience: 0, gender: 0 }, upgrading: true, timeRemaining: 26400, timeForwarded: false},
  {id: '', image: 'young5', description: 'animal description', name: 'Carnivorous King', attributes: { animalAge: 2, animalType: 1, attack: 10, defense: 7, vitality: 2, experience: 0, gender: 0 }, upgrading: true, timeRemaining: 36400, timeForwarded: false},
  {id: '', image: 'young6', description: 'animal description', name: 'Youthful Philosopher', attributes: { animalAge: 2, animalType: 1, attack: 12, defense: 1, vitality: 5, experience: 0, gender: 0 }, upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', image: 'young7', description: 'animal description', name: 'Indestructible Sadist', attributes: { animalAge: 2, animalType: 1, attack: 7, defense: 8, vitality: 7, experience: 0, gender: 0 }, upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', image: 'young8', description: 'animal description', name: 'Radical Intruder', attributes: { animalAge: 2, animalType: 1, attack: 10, defense: 4, vitality: 9, experience: 0, gender: 0 }, upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', image: 'young9', description: 'animal description', name: 'Wise Banana', attributes: { animalAge: 2, animalType: 1, attack: 9, defense: 4, vitality: 12, experience: 0, gender: 0 }, upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', image: 'young10', description: 'animal description', name: 'Jealous Monarch', attributes: { animalAge: 2, animalType: 1, attack: 13, defense: 11, vitality: 12, experience: 0, gender: 0 }, upgrading: false, timeRemaining: null, timeForwarded: false},
];

export let adult: Array<any> = [
  {id: '', image: 'adult0', name: 'Macabre Pacifist', attributes: { animalAge: 3, animalType: 4, attack: 25, defense: 19, vitality: 20, maxAttack: 35, maxDefense: 22, maxVitality: 21, experience: 22, gender: 0, experienceTotal: 74 }, lookingOpponent: false, lastBattleData: true, battleTotal: 129, battleWon: 97, battleLost: 32, upgrading: true, upgradingStat: 0, timeRemaining: 10000},
  {id: '', image: 'adult1', name: 'Dandy Sleepwalker', attributes: { animalAge: 3, animalType: 5, attack: 4, defense: 15, vitality: 22, maxAttack: 14, maxDefense: 20, maxVitality: 31, experience: 22, gender: 0, experienceTotal: 74 }, lookingOpponent: false, lastBattleData: true, battleTotal: 40, battleWon: 18, battleLost: 22, upgrading: true, upgradingStat: 1, timeRemaining: 16400},
  {id: '', image: 'adult2', name: 'Ugly Maiden', attributes: { animalAge: 3, animalType: 7, attack: 30, defense: 25, vitality: 28, maxAttack: 35, maxDefense: 31, maxVitality: 36, experience: 22, gender: 0, experienceTotal: 74 }, lookingOpponent: false, lastBattleData: true, battleTotal: 27, battleWon: 17, battleLost: 10, upgrading: true, upgradingStat: 2, timeRemaining: 26400},
  {id: '', image: 'adult3', name: 'Uncommunicative Troublemaker', attributes: { animalAge: 3, animalType: 6, attack: 20, defense: 29, vitality: 15, maxAttack: 30, maxDefense: 36, maxVitality: 24, experience: 22, gender: 0, experienceTotal: 74 }, lookingOpponent: false, lastBattleData: true, battleTotal: 88, battleWon: 59, battleLost: 29, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', image: 'adult4', name: 'Bizarre Comrade', attributes: { animalAge: 3, animalType: 4, attack: 0, defense: 0, vitality: 0, maxAttack: 10, maxDefense: 10, maxVitality: 10, experience: 22, gender: 0, experienceTotal: 74 }, lookingOpponent: false, lastBattleData: false, battleTotal: 0, battleWon: 0, battleLost: 0, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', image: 'adult5', name: 'Odorous Butcher', attributes: { animalAge: 3, animalType: 3, attack: 20, defense: 14, vitality: 25, maxAttack: 23, maxDefense: 19, maxVitality: 29, experience: 22, gender: 0, experienceTotal: 74 }, lookingOpponent: false, lastBattleData: true, battleTotal: 46, battleWon: 13, battleLost: 33, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', image: 'adult6', name: 'The Nightmare', attributes: { animalAge: 3, animalType: 0, attack: 25, defense: 22, vitality: 27, maxAttack: 30, maxDefense: 28, maxVitality: 35, experience: 22, gender: 0, experienceTotal: 74 }, lookingOpponent: false, lastBattleData: true, battleTotal: 42, battleWon: 39, battleLost: 3, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', image: 'adult7', name: 'Flammable Anarchist', attributes: { animalAge: 3, animalType: 3, attack: 10, defense: 21, vitality: 9, maxAttack: 20, maxDefense: 28, maxVitality: 17, experience: 22, gender: 0, experienceTotal: 74 }, lookingOpponent: false, lastBattleData: true, battleTotal: 103, battleWon: 75, battleLost: 28, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', image: 'adult8', name: 'Abandoned Pet', attributes: { animalAge: 3, animalType: 1, attack: 4, defense: 15, vitality: 23, maxAttack: 14, maxDefense: 25, maxVitality: 33, experience: 22, gender: 0, experienceTotal: 74 }, lookingOpponent: false, lastBattleData: true, battleTotal: 99, battleWon: 68, battleLost: 31, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', image: 'adult9', name: 'Viscous Nudist', attributes: { animalAge: 3, animalType: 5, attack: 22, defense: 17, vitality: 11, maxAttack: 29, maxDefense: 23, maxVitality: 19, experience: 22, gender: 0, experienceTotal: 74 }, lookingOpponent: false, lastBattleData: true, battleTotal: 4, battleWon: 0, battleLost: 4, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', image: 'adult10', name: 'Questionable Proffesional', attributes: { animalAge: 3, animalType: 2, attack: 30, defense: 0, vitality: 15, maxAttack: 33, maxDefense: 10, maxVitality: 19, experience: 22, gender: 0, experienceTotal: 74 }, lookingOpponent: false, lastBattleData: true, battleTotal: 12, battleWon: 3, battleLost: 9, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', image: 'adult11', name: 'Neurotic Villain', attributes: { animalAge: 3, animalType: 0, attack: 0, defense: 30, vitality: 30, maxAttack: 10, maxDefense: 32, maxVitality: 33, experience: 22, gender: 0, experienceTotal: 74 }, lookingOpponent: false, lastBattleData: true, battleTotal: 39, battleWon: 22, battleLost: 17, upgrading: false, upgradingStat: null, timeRemaining: null},
];
