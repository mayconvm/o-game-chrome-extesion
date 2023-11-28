const RESOURCES_MAP = {
    "metal": {
        get:"span[id='resources_metal']",
        "_":"",
    },
    "crystal": {
        get:"span[id='resources_crystal']",
        "_":"",
    },
    "deuterium": {
        get:"span[id='resources_deuterium']",
        "_":"",
    },
    "energy": {
        get:"span[id='resources_energy']",
        "_":"",
    },
}

const MENU_MAP = {
    overview: {
        get: "ipiToolbarOverview"
    },
    resourcebuildings: {
        get: "ipiToolbarResourcebuildings"
    },
    lifeformbuildings: {
        get: "ipiToolbarLifeformbuildings"
    },
    facilities: {
        get: "ipiToolbarFacilities"
    },
    trader: {
        get: "ipiToolbarTrader"
    },
    research: {
        get: "ipiToolbarResearch"
    },
    shipyard: {
        get: "ipiToolbarShipyard"
    },
    defense: {
        get: "ipiToolbarDefense"
    },
    fleet: {
        get: "ipiToolbarFleet"
    },
    galaxy: {
        get: "ipiToolbarGalaxy"
    },
    empire: {
        get: "ipiToolbarEmpire"
    },
    alliance: {
        get: "ipiToolbarAlliance"
    },
    officers: {
        get: "ipiToolbarOfficers"
    },
    shop: {
        get: "ipiToolbarShop"
    },
    recurringRewards: {
        get: "ipiToolbarRecurringRewards"
    },
}

const ACTIONS_MAP = {
    fighterLight: {
        get: "ipiTechnologyfighterLight",
        box:"technologies_battle",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    fighterHeavy: {
        get: "ipiTechnologyfighterHeavy",
        box:"technologies_battle",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    cruiser: {
        get: "ipiTechnologycruiser",
        box:"technologies_battle",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    battleship: {
        get: "ipiTechnologybattleship",
        box:"technologies_battle",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    interceptor: {
        get: "ipiTechnologyinterceptor",
        box:"technologies_battle",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    bomber: {
        get: "ipiTechnologybomber",
        box:"technologies_battle",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    destroyer: {
        get: "ipiTechnologydestroyer",
        box:"technologies_battle",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    deathstar: {
        get: "ipiTechnologydeathstar",
        box:"technologies_battle",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    reaper: {
        get: "ipiTechnologyreaper",
        box:"technologies_battle",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    explorer: {
        get: "ipiTechnologyexplorer",
        box: "technologies_civil",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    transporterSmall: {
        get: "ipiTechnologytransporterSmall",
        box: "technologies_civil",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    transporterLarge: {
        get: "ipiTechnologytransporterLarge",
        box: "technologies_civil",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    colonyShip: {
        get: "ipiTechnologycolonyShip",
        box: "technologies_civil",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    recycler: {
        get: "ipiTechnologyrecycler",
        box: "technologies_civil",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    espionageProbe: {
        get: "ipiTechnologyespionageProbe",
        box: "technologies_civil",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    solarSatellite: {
        get: "ipiTechnologysolarSatellite",
        box: "technologies_civil",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    resbuggy: {
        get: "ipiTechnologyresbuggy",
        box: "technologies_civil",
        available: "",
        quantities: "span.amount",
        max: "",
        start: "",
    },
    roboticsFactory: {
        get: "ipiTechnologyroboticsFactory",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    metalMine: {
        get: "ipiTechnologymetalMine",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    crystalMine: {
        get: "ipiTechnologycrystalMine",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    deuteriumSynthesizer: {
        get: "ipiTechnologydeuteriumSynthesizer",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    solarPlant: {
        get: "ipiTechnologysolarPlant",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    fusionPlant: {
        get: "ipiTechnologyfusionPlant",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    solarSatellite: {
        get: "ipiTechnologysolarSatellite",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    resbuggy: {
        get: "ipiTechnologyresbuggy",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    metalStorage: {
        get: "ipiTechnologymetalStorage",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    crystalStorage: {
        get: "ipiTechnologycrystalStorage",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    deuteriumStorage: {
        get: "ipiTechnologydeuteriumStorage",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    roboticsFactory: {
        get: "ipiTechnologyroboticsFactory",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    shipyard: {
        get: "ipiTechnologyshipyard",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    researchLaboratory: {
        get: "ipiTechnologyresearchLaboratory",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    allianceDepot: {
        get: "ipiTechnologyallianceDepot",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    missileSilo: {
        get: "ipiTechnologymissileSilo",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    naniteFactory: {
        get: "ipiTechnologynaniteFactory",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    terraformer: {
        get: "ipiTechnologyterraformer",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    repairDock: {
        get: "ipiTechnologyrepairDock",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    repairDock: {
        get: "ipiTechnologyrepairDock",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    energyTechnology: {
        get: "ipiTechnologyenergyTechnology",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    laserTechnology: {
        get: "ipiTechnologylaserTechnology",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    ionTechnology: {
        get: "ipiTechnologyionTechnology",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    hyperspaceTechnology: {
        get: "ipiTechnologyhyperspaceTechnology",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    plasmaTechnology: {
        get: "ipiTechnologyplasmaTechnology",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    combustionDriveTechnology: {
        get: "ipiTechnologycombustionDriveTechnology",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    impulseDriveTechnology: {
        get: "ipiTechnologyimpulseDriveTechnology",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    hyperspaceDriveTechnology: {
        get: "ipiTechnologyhyperspaceDriveTechnology",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    espionageTechnology: {
        get: "ipiTechnologyespionageTechnology",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    computerTechnology: {
        get: "ipiTechnologycomputerTechnology",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    astrophysicsTechnology: {
        get: "ipiTechnologyastrophysicsTechnology",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    researchNetworkTechnology: {
        get: "ipiTechnologyresearchNetworkTechnology",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    gravitonTechnology: {
        get: "ipiTechnologygravitonTechnology",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    weaponsTechnology: {
        get: "ipiTechnologyweaponsTechnology",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    shieldingTechnology: {
        get: "ipiTechnologyshieldingTechnology",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    armorTechnology: {
        get: "ipiTechnologyarmorTechnology",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    rocketLauncher: {
        get: "ipiTechnologyrocketLauncher",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    laserCannonLight: {
        get: "ipiTechnologylaserCannonLight",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    laserCannonHeavy: {
        get: "ipiTechnologylaserCannonHeavy",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    gaussCannon: {
        get: "ipiTechnologygaussCannon",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    ionCannon: {
        get: "ipiTechnologyionCannon",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    plasmaCannon: {
        get: "ipiTechnologyplasmaCannon",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    shieldDomeSmall: {
        get: "ipiTechnologyshieldDomeSmall",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    shieldDomeLarge: {
        get: "ipiTechnologyshieldDomeLarge",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    missileInterceptor: {
        get: "ipiTechnologymissileInterceptor",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
    missileInterplanetary: {
        get: "ipiTechnologymissileInterplanetary",
        box:"technologies",
        available: "",
        quantities: "span.level",
        max: "",
        start: "",
    },
}

const getResources = (type) => {
    return document.querySelector(RESOURCES_MAP[type].get).textContent
}

const goToMenu = (option) => {
    const path = MENU_MAP[option].get
    document.querySelector(`*[id=menuTable] li a.menubutton[data-ipi-hint='${path}']`).click()
}

const getAllPlanets = () => {
    const planets = document.querySelectorAll(`div[id=planetList] div.smallplanet`)
    const result = {}
    planets.forEach((planet) => {
        const id = planet.getAttribute('id');
        const name = planet.querySelector('span.planet-name').textContent
        const koords = planet.querySelector('span.planet-koords').textContent
        result[name] = {
            id,
            name,
            koords
        }
    })

    return result;
}

const getMax = () => {
    return document.querySelector('input[id=build_amount]')?.max
}

const getQuantities = (item) => {
    const box = ACTIONS_MAP[item].box
    const quantities = ACTIONS_MAP[item].quantities
    return document.querySelector(`li.${item} span.${item} ${quantities}`).dataset.value;
}

const isPage = (option) => {
    const page = MENU_MAP[option].get
    return document.querySelector(`*[id=menuTable] li a.menubutton.selected[data-ipi-hint='${page}']`) !== null
}

const isEnableItem = (item) => {
    const box = ACTIONS_MAP[item].box
    const path = ACTIONS_MAP[item].get
    return document.querySelector(`*[id=${box}] li[data-ipi-hint='${path}']`).dataset.status === 'on'
}

const hasResource = (item) => {

    if (!ACTIONS_MAP[item].resource?.metal) {
        return true;
    }

    const metal = getResources("metal");
    const crystal = getResources("crystal");
    const deuterium = getResources("deuterium");
    
    const metalI = ACTIONS_MAP[item].resource?.metal;
    const crystalI = ACTIONS_MAP[item].resource?.crystal;
    const deuteriumI = ACTIONS_MAP[item].resource?.deuterium;

    return metalI < metal && crystalI < crystal && deuteriumI < deuterium;
}

const isEnableItemToMake = (item) => {
    const active = isEnableItem(item);
    const _hasResource = hasResource(item);
    const building = !isBuilding();

    return active && _hasResource && building;
}

const isBuilding = () => {
    return document.querySelector(`div.maincontent li[data-status='active']`)
}

const selectItem = (item) => {
    const box = ACTIONS_MAP[item].box
    const path = ACTIONS_MAP[item].get
    document.querySelector(`*[id=${box}] li[data-ipi-hint='${path}'] span`).click()
}

const goToPlanet = (name) => {
    const planets = getAllPlanets();

    if (!planets[name]) {
        return console.error(`Planet ${name} not found.`);
    }

    document.querySelector(`div[id="planetList"] a[title*='${name}']`).click()
}

const isPlanet = (name) => {
    const planets = getAllPlanets()
    const planet = planets[name]

    if (!planet){
        return console.error('Planet ' + name + ' not found');
    }

    return document.querySelector(`div[id="planetList"] div[id='${planet.id}'] a.active`) !== null
}

const fillQuantitie = (value) => {
    return document.querySelector('input[id=build_amount]').value = value
}

const startBuild = () => {
    document.querySelector('div.ipiHintable button.upgrade').click()
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

//li.roboticsFactory span.roboticsFactory span.level data-value
//li.roboticsFactory span.roboticsFactory span.amount data-value

const getData = () => JSON.parse(localStorage.getItem(["queueBuild"]));
const setData = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const build = async (queue) => {
    if (queue?.dateEnd && new Date(queue.dateEnd) > new Date()) {
        console.log("Build available after ", new Date(queue.dateEnd));
        return 1;
    }

    // Verifica se estou no planeta
    if (!isPlanet(queue.planet)) {
    // vou para o planeta
        goToPlanet(queue.planet)
        return 0;
    }
    
    // Verificar se estou menu correto
    if (!isPage(queue.menu)) {
        // vou para o menu
        goToMenu(queue.menu);
        return 0;
    }
    
    // verifico se o level ou a quantidade é suficiente
    if (!isEnableItemToMake(queue.item)) {
        console.warn("Item not found: " + queue.item);
        return 2
    }

    selectItem(queue.item);
    await delay(1000);
    if (getMax() !== undefined) {
        if (!(getMax() > queue.quantities)) {
            console.warn('Quantitie of item '+ queue.item +' not possible: ' + queue.quantities);
            return 1
        }
        
        fillQuantitie(queue.quantities)
    } else {
        if (getQuantities(queue.item) > queue.quantities) {
            console.warn('Quantitie of item '+ queue.item +' is OK');
            return true;
        }
    }
  
    startBuild();
    
    return true;
}

const startQueueBuild = async () =>{
    let dataStorage = getData();

    if (!dataStorage) {
        console.log("No Queue", dataStorage);
        return true;
    }

    console.log("All Queue", dataStorage)
    const item = dataStorage.shift();

    if (!item) {
        console.log("No Queue", dataStorage);
        return true;
    }

    

    
    console.log("Start:", item);
    const result = await build(item);

    console.log("Result:", item, result);
    switch(result) {
        case 0:
            dataStorage = [item].concat(dataStorage);
            break
        case 2:
            const elemB = isBuilding()
            if (elemB) {
                const dataset = elemB.dataset;
                item.dateEnd = dataset.end*1000
            } else {
                setTimeout(document.location.reload(), 1000);
            }
        case 1:
            dataStorage.push(item);
            break;
        
        
    }

//    if (!result) {
//        dataStorage = [item].concat(dataStorage);
//    }

    console.log("New Queue", dataStorage);
    setData("queueBuild", dataStorage);
}

const writeQueueBuild = () => {
    const queueBuild = [
        {
            planet: "Verde",
            menu: "shipyard",
            item: "fighterLight",
            quantities: 1,
        },
//        {
//            planet: "Branco",
//            menu: "facilities",
//            item: "roboticsFactory",
//            quantities: 8,
//        }
    ];

    setData("queueBuild", queueBuild);
}

const addNewItem = (planet, menu, item, quantities) => {
    let data = getData()

    if (!data) {
        data = []
    }

    data.push({planet, menu, item, quantities});
    setData("queueBuild", data);
}


const addNewShip = {
    fl: (p, q) => addNewItem(p, 'shipyard', 'fighterLight', q),
    fh: (p, q) => addNewItem(p, 'shipyard', 'fighterHeavy', q),
    cruiser: (p, q) => addNewItem(p, 'shipyard', 'cruiser', q),
    battleship: (p, q) => addNewItem(p, 'shipyard', 'battleship', q),
    interceptor: (p, q) => addNewItem(p, 'shipyard', 'interceptor', q),
    bomber: (p, q) => addNewItem(p, 'shipyard', 'bomber', q),
    destroyer: (p, q) => addNewItem(p, 'shipyard', 'destroyer', q),
    deathstar: (p, q) => addNewItem(p, 'shipyard', 'deathstar', q),
    reaper: (p, q) => addNewItem(p, 'shipyard', 'reaper', q),
    explorer: (p, q) => addNewItem(p, 'shipyard', 'explorer', q),
    ts: (p, q) => addNewItem(p, 'shipyard', 'transporterSmall', q),
    tl: (p, q) => addNewItem(p, 'shipyard', 'transporterLarge', q),
    colonyShip: (p, q) => addNewItem(p, 'shipyard', 'colonyShip', q),
    recycler: (p, q) => addNewItem(p, 'shipyard', 'recycler', q),
    espionage: (p, q) => addNewItem(p, 'shipyard', 'espionageProbe', q),
    solarSatellite: (p, q) => addNewItem(p, 'shipyard', 'solarSatellite', q),
    resbuggy: (p, q) => addNewItem(p, 'shipyard', 'resbuggy', q),
}

const addNewResource = {
    metalMine:  (p, q) => addNewItem(p, 'resourcebuildings', 'metalMine', q),
    crystalMine:  (p, q) => addNewItem(p, 'resourcebuildings', 'crystalMine', q),
    deuteriumSynthesizer:  (p, q) => addNewItem(p, 'resourcebuildings', 'deuteriumSynthesizer', q),
    solarPlant:  (p, q) => addNewItem(p, 'resourcebuildings', 'solarPlant', q),
    fusionPlant:  (p, q) => addNewItem(p, 'resourcebuildings', 'fusionPlant', q),
    solarSatellite:  (p, q) => addNewItem(p, 'resourcebuildings', 'solarSatellite', q),
    resbuggy:  (p, q) => addNewItem(p, 'resourcebuildings', 'resbuggy', q),
    metalStorage:  (p, q) => addNewItem(p, 'resourcebuildings', 'metalStorage', q),
    crystalStorage:  (p, q) => addNewItem(p, 'resourcebuildings', 'crystalStorage', q),
    deuteriumStorage:  (p, q) => addNewItem(p, 'resourcebuildings', 'deuteriumStorage', q),
}

// Identificar qual página está selecionada - ok
// Identificar se existe recursos disponíveis
// Identificar se o item está disponível
// Adicionar a quantidade
// produzir

function start() {
    setInterval( () => startQueueBuild(), 5000);
}

// start script
start();