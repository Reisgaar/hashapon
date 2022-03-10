export let incubators: Array<any> = [
  {id: 1, type: 'birds', launched: true, bought: true, incubating: true},
  {id: 2, type: 'canines', launched: true, bought: true, incubating: true},
  {id: 3, type: 'felines', launched: true, bought: true, incubating: true},
  {id: 4, type: 'marsupials', launched: true, bought: true, incubating: false},
  {id: 5, type: 'primates', launched: true, bought: true, incubating: false},
  {id: 6, type: 'reptiles', launched: true, bought: false, incubating: false},
  {id: 7, type: 'rodents', launched: false, bought: false, incubating: false},
  {id: 8, type: 'ursids', launched: false, bought: false, incubating: false},
];

export let egg: Array<any> = [
  {id: '', stage: 0, type: 'birds', upgrading: true, timeRemaining: 0, timeForwarded: false},
  {id: '', stage: 0, type: 'canines', upgrading: true, timeRemaining: 16400, timeForwarded: true},
  {id: '', stage: 0, type: 'felines', upgrading: true, timeRemaining: 36400, timeForwarded: false},
  {id: '', stage: 0, type: 'marsupials', upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', stage: 0, type: 'primates', upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', stage: 0, type: 'reptiles', upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', stage: 0, type: 'rodents', upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', stage: 0, type: 'ursids', upgrading: false, timeRemaining: null, timeForwarded: false},
];

export let baby: Array<any> = [
  {id: '', stage: 1, name: 'Homeless Goddess', type: 'baby1', stats: {atk: 1, def: 4, vit: 2}, upgrading: true, timeRemaining: 0, timeForwarded: false},
  {id: '', stage: 1, name: 'Lucky Tsunami', type: 'baby2', stats: {atk: 5, def: 4, vit: 5}, upgrading: true, timeRemaining: 16400, timeForwarded: true},
  {id: '', stage: 1, name: 'Zonked Unicorn', type: 'baby3', stats: {atk: 0, def: 0, vit: 1}, upgrading: true, timeRemaining: 26400, timeForwarded: false},
  {id: '', stage: 1, name: 'Sensible Gangster', type: 'baby4', stats: {atk: 5, def: 0, vit: 3}, upgrading: false, timeRemaining: null, timeForwarded: false},
];
export let young: Array<any> = [
  {id: '', stage: 2, name: 'Kind Nemesis', type: 'young1', stats: {atk: 10, def: 7, vit: 11}, upgrading: true, timeRemaining: 0, timeForwarded: false},
  {id: '', stage: 2, name: 'Emotional Destroyer', type: 'young2', stats: {atk: 2, def: 4, vit: 9}, upgrading: true, timeRemaining: 6400, timeForwarded: true},
  {id: '', stage: 2, name: 'Popular Whistle', type: 'young3', stats: {atk: 1, def: 7, vit: 8}, upgrading: true, timeRemaining: 16400, timeForwarded: true},
  {id: '', stage: 2, name: 'Garrulous Doctor', type: 'young4', stats: {atk: 10, def: 11, vit: 10}, upgrading: true, timeRemaining: 26400, timeForwarded: false},
  {id: '', stage: 2, name: 'Carnivorous King', type: 'young5', stats: {atk: 10, def: 7, vit: 2}, upgrading: true, timeRemaining: 36400, timeForwarded: false},
  {id: '', stage: 2, name: 'Youthful Philosopher', type: 'young6', stats: {atk: 12, def: 1, vit: 5}, upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', stage: 2, name: 'Indestructible Sadist', type: 'young7', stats: {atk: 7, def: 8, vit: 7}, upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', stage: 2, name: 'Radical Intruder', type: 'young8', stats: {atk: 10, def: 4, vit: 9}, upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', stage: 2, name: 'Wise Banana', type: 'young9', stats: {atk: 9, def: 4, vit: 12}, upgrading: false, timeRemaining: null, timeForwarded: false},
  {id: '', stage: 2, name: 'Jealous Monarch', type: 'young10', stats: {atk: 13, def: 11, vit: 12}, upgrading: false, timeRemaining: null, timeForwarded: false},
];

export let adult: Array<any> = [
  {id: '', stage: 3, name: 'Macabre Pacifist', type: 'adult1', stats: {atk: 25, def: 19, vit: 20}, experienceTotal: 74, experience: 24, battleTotal: 129, battleWon: 97, battleLost: 32, upgrading: true, upgradingStat: 0, timeRemaining: 0},
  {id: '', stage: 3, name: 'Dandy Sleepwalker', type: 'adult2', stats: {atk: 4, def: 15, vit: 22}, experienceTotal: 74, experience: 24, battleTotal: 40, battleWon: 18, battleLost: 22, upgrading: true, upgradingStat: 1, timeRemaining: 16400},
  {id: '', stage: 3, name: 'Ugly Maiden', type: 'adult3', stats: {atk: 30, def: 25, vit: 28}, experienceTotal: 74, experience: 24, battleTotal: 27, battleWon: 17, battleLost: 10, upgrading: true, upgradingStat: 2, timeRemaining: 26400},
  {id: '', stage: 3, name: 'Bizarre Comrade', type: 'adult4', stats: {atk: 0, def: 0, vit: 0}, experienceTotal: 74, experience: 24, battleTotal: 88, battleWon: 59, battleLost: 29, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', stage: 3, name: 'Odorous Butcher', type: 'adult5', stats: {atk: 20, def: 14, vit: 25}, experienceTotal: 74, experience: 24, battleTotal: 46, battleWon: 13, battleLost: 33, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', stage: 3, name: 'The Nightmare', type: 'adult6', stats: {atk: 25, def: 22, vit: 27}, experienceTotal: 74, experience: 24, battleTotal: 42, battleWon: 39, battleLost: 3, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', stage: 3, name: 'Flammable Anarchist', type: 'adult7', stats: {atk: 10, def: 21, vit: 9}, experienceTotal: 74, experience: 24, battleTotal: 103, battleWon: 75, battleLost: 28, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', stage: 3, name: 'Abandoned Pet', type: 'adult8', stats: {atk: 4, def: 15, vit: 23}, experienceTotal: 74, experience: 24, battleTotal: 99, battleWon: 68, battleLost: 31, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', stage: 3, name: 'Viscous Nudist', type: 'adult9', stats: {atk: 22, def: 17, vit: 11}, experienceTotal: 74, experience: 24, battleTotal: 4, battleWon: 0, battleLost: 4, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', stage: 3, name: 'Questionable Proffesional', type: 'adult10', stats: {atk: 30, def: 0, vit:15}, experienceTotal: 74, experience: 24, battleTotal: 12, battleWon: 3, battleLost: 9, upgrading: false, upgradingStat: null, timeRemaining: null},
  {id: '', stage: 3, name: 'Neurotic Villain', type: 'adult11', stats: {atk: 0, def: 30, vit:30}, experienceTotal: 74, experience: 24, battleTotal: 39, battleWon: 22, battleLost: 17, upgrading: false, upgradingStat: null, timeRemaining: null},
];

