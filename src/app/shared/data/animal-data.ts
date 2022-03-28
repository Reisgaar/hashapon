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

/*
export let egg: Array<any> = [
  {id: '', stage: 0, image: 'ursids', type: 'ursids', upgrading: true, timeRemaining: 0, timeForwarded: false},
  {id: '', stage: 0, image: 'canines', type: 'canines', upgrading: true, timeRemaining: 16400, timeForwarded: true},
  {id: '', stage: 0, image: 'felines', type: 'felines', upgrading: true, timeRemaining: 36400, timeForwarded: false},
  {id: '', stage: 0, image: 'marsupials', type: 'marsupials', upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', stage: 0, image: 'primates', type: 'primates', upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', stage: 0, image: 'reptiles', type: 'reptiles', upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', stage: 0, image: 'rodents', type: 'rodents', upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', stage: 0, image: 'birds', type: 'birds', upgrading: false, timeRemaining: null, timeForwarded: false},
];
*/

export let baby: Array<any> = [
  {id: '', image: 'baby1', stage: 1, type: '', name: 'Homeless Goddess', stats: {atk: 1, def: 4, vit: 2}, upgrading: true, timeRemaining: 0, timeForwarded: false},
  {id: '', image: 'baby2', stage: 1, type: '', name: 'Lucky Tsunami', stats: {atk: 5, def: 4, vit: 5}, upgrading: true, timeRemaining: 16400, timeForwarded: true},
  {id: '', image: 'baby3', stage: 1, type: '', name: 'Zonked Unicorn', stats: {atk: 0, def: 0, vit: 1}, upgrading: true, timeRemaining: 26400, timeForwarded: false},
  {id: '', image: 'baby4', stage: 1, type: '', name: 'Sensible Gangster', stats: {atk: 5, def: 0, vit: 3}, upgrading: false, timeRemaining: null, timeForwarded: false},
];
export let young: Array<any> = [
  {id: '', image: 'young1', stage: 2, type: '', name: 'Kind Nemesis', stats: {atk: 10, def: 7, vit: 11}, upgrading: true, timeRemaining: 0, timeForwarded: false},
  {id: '', image: 'young2', stage: 2, type: '', name: 'Emotional Destroyer', stats: {atk: 2, def: 4, vit: 9}, upgrading: true, timeRemaining: 6400, timeForwarded: true},
  {id: '', image: 'young3', stage: 2, type: '', name: 'Popular Whistle', stats: {atk: 1, def: 7, vit: 8}, upgrading: true, timeRemaining: 16400, timeForwarded: true},
  {id: '', image: 'young4', stage: 2, type: '', name: 'Garrulous Doctor', stats: {atk: 10, def: 11, vit: 10}, upgrading: true, timeRemaining: 26400, timeForwarded: false},
  {id: '', image: 'young5', stage: 2, type: '', name: 'Carnivorous King', stats: {atk: 10, def: 7, vit: 2}, upgrading: true, timeRemaining: 36400, timeForwarded: false},
  {id: '', image: 'young6', stage: 2, type: '', name: 'Youthful Philosopher', stats: {atk: 12, def: 1, vit: 5}, upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', image: 'young7', stage: 2, type: '', name: 'Indestructible Sadist', stats: {atk: 7, def: 8, vit: 7}, upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', image: 'young8', stage: 2, type: '', name: 'Radical Intruder', stats: {atk: 10, def: 4, vit: 9}, upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', image: 'young9', stage: 2, type: '', name: 'Wise Banana', stats: {atk: 9, def: 4, vit: 12}, upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', image: 'young10', stage: 2, type: '', name: 'Jealous Monarch', stats: {atk: 13, def: 11, vit: 12}, upgrading: false, timeRemaining: null, timeForwarded: false},
];

export let adult: Array<any> = [
  {id: '', image: 'adult0', stage: 3, type: 'ursids', name: 'Macabre Pacifist', stats: {atk: 25, def: 19, vit: 20}, maxStats: {atk: 35, def: 29, vit: 30}, experienceTotal: 74, experience: 24, battleTotal: 129, battleWon: 97, battleLost: 32, upgrading: true, upgradingStat: 0, timeRemaining: 0},
  {id: '', image: 'adult1', stage: 3, type: 'primates', name: 'Dandy Sleepwalker', stats: {atk: 4, def: 15, vit: 22}, maxStats: {atk: 14, def: 25, vit: 32}, experienceTotal: 74, experience: 24, battleTotal: 40, battleWon: 18, battleLost: 22, upgrading: true, upgradingStat: 1, timeRemaining: 16400},
  {id: '', image: 'adult2', stage: 3, type: 'rodents', name: 'Ugly Maiden', stats: {atk: 30, def: 25, vit: 28}, maxStats: {atk: 40, def: 35, vit: 38}, experienceTotal: 74, experience: 24, battleTotal: 27, battleWon: 17, battleLost: 10, upgrading: true, upgradingStat: 2, timeRemaining: 26400},
  {id: '', image: 'adult3', stage: 3, type: 'marsupials', name: 'Uncommunicative Troublemaker', stats: {atk: 20, def: 29, vit: 15}, maxStats: {atk: 30, def: 39, vit: 25}, experienceTotal: 74, experience: 24, battleTotal: 88, battleWon: 59, battleLost: 29, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', image: 'adult4', stage: 3, type: 'ursids', name: 'Bizarre Comrade', stats: {atk: 0, def: 0, vit: 0}, maxStats: {atk: 10, def: 10, vit: 10}, experienceTotal: 74, experience: 24, battleTotal: 88, battleWon: 59, battleLost: 29, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', image: 'adult5', stage: 3, type: 'birds', name: 'Odorous Butcher', stats: {atk: 20, def: 14, vit: 25}, maxStats: {atk: 30, def: 24, vit: 35}, experienceTotal: 74, experience: 24, battleTotal: 46, battleWon: 13, battleLost: 33, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', image: 'adult6', stage: 3, type: 'felines', name: 'The Nightmare', stats: {atk: 25, def: 22, vit: 27}, maxStats: {atk: 35, def: 32, vit: 37}, experienceTotal: 74, experience: 24, battleTotal: 42, battleWon: 39, battleLost: 3, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', image: 'adult7', stage: 3, type: 'birds', name: 'Flammable Anarchist', stats: {atk: 10, def: 21, vit: 9}, maxStats: {atk: 20, def: 31, vit: 19}, experienceTotal: 74, experience: 24, battleTotal: 103, battleWon: 75, battleLost: 28, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', image: 'adult8', stage: 3, type: 'canines', name: 'Abandoned Pet', stats: {atk: 4, def: 15, vit: 23}, maxStats: {atk: 14, def: 25, vit: 33}, experienceTotal: 74, experience: 24, battleTotal: 99, battleWon: 68, battleLost: 31, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', image: 'adult9', stage: 3, type: 'primates', name: 'Viscous Nudist', stats: {atk: 22, def: 17, vit: 11}, maxStats: {atk: 32, def: 27, vit: 21}, experienceTotal: 74, experience: 24, battleTotal: 4, battleWon: 0, battleLost: 4, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', image: 'adult10', stage: 3, type: 'reptiles', name: 'Questionable Proffesional', stats: {atk: 30, def: 0, vit: 15}, maxStats: {atk: 40, def: 10, vit: 25}, experienceTotal: 74, experience: 24, battleTotal: 12, battleWon: 3, battleLost: 9, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', image: 'adult11', stage: 3, type: 'felines', name: 'Neurotic Villain', stats: {atk: 0, def: 30, vit: 30}, maxStats: {atk: 10, def: 40, vit: 40}, experienceTotal: 74, experience: 24, battleTotal: 39, battleWon: 22, battleLost: 17, upgrading: false, upgradingStat: null, timeRemaining: null},
];
