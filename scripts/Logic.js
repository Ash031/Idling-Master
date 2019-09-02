// Logic Functions
function assignAllClones(){
    document.getElementById('NClones').value=player.maxClones;
}

function assign1Clones(){
    document.getElementById('NClones').value=1;
}

function assign10Clones(){
    document.getElementById('NClones').value=10;
}

function assign25Clones(){
    document.getElementById('NClones').value=25;
}

function assign100Clones(){
    document.getElementById('NClones').value=100;
}
function assign1percClones(){
    document.getElementById('NClones').value=Math.ceil(player.maxClones/100);
}

function assign10percClones(){
    document.getElementById('NClones').value=Math.ceil(player.maxClones/10);
}

function assign25percClones(){
    document.getElementById('NClones').value=Math.ceil(player.maxClones/4);
}
function getClones(){
    var clones = parseInt(document.getElementById('NClones').value)
    if(isNaN(clones)) clones=0;
    return clones;
}

function setRLevels(perks,gameVersion){
    console.log(gameVersion)
    if(gameVersion=="1.0" || gameVersion=="1.0.1"){
        for(var i=0;i<3;i++){rebirthPerks[i].lvl=perks[i]}
        rebirthPerks[3].lvl=0;
        rebirthPerks[4].lvl=0;
        for(var i=5;i<perks.length;i++){rebirthPerks[i].lvl=perks[i-2]}
    }
    else if(gameVersion.substr(0,5)=="1.0.2"){
        for(var i=0;i<4;i++){rebirthPerks[i].lvl=perks[i]}
        rebirthPerks[4].lvl=0;
        for(var i=5;i<perks.length;i++){rebirthPerks[i].lvl=perks[i-1]}
    }
    else{
        for(var i=0;i<perks.length;i++){rebirthPerks[i].lvl=perks[i]}
    }
}

function setCrafting(list){
    for(var i=0;i<list.length;i++){crafting.items[i].level=list[i]}
}
function setArenaShopLevels(levels){
    for(var i=0;i<levels.dojo.length;i++){arenaShop.dojo[i].lvl=levels.dojo[i]}
    for(var i=0;i<levels.mine.length;i++){arenaShop.mine[i].lvl=levels.mine[i]}
    for(var i=0;i<levels.farm.length;i++){arenaShop.Farm[i].lvl=levels.farm[i]}
    for(var i=0;i<levels.warehouse.length;i++){arenaShop.warehouse[i].lvl=levels.warehouse[i]}
}
function setArenaDefeated(fighters){
    for(var i=0;i<fighters.dojo.length;i++){arenaFighters.dojo[i].defeated=fighters.dojo[i]}
    for(var i=0;i<fighters.mine.length;i++){arenaFighters.Mine[i].defeated=fighters.mine[i]}
    for(var i=0;i<fighters.farm.length;i++){arenaFighters.farm[i].defeated=fighters.farm[i]}
    for(var i=0;i<fighters.warehouse.length;i++){arenaFighters.warehouse[i].defeated=fighters.warehouse[i]}
}
function setCitySave(citySave){
    wishingStats = citySave.wish;
    coinTosses = citySave.wishes;
    city=citySave.city;
    cityBuildings=citySave.buildings;
    availableBounties = citySave.bounties;
    bountyStats.perm = citySave.bountyStats;
}

function setUnlockedSkills(aSkills){
    for(var i=0;i<aSkills.length;i++){skills[i].got=aSkills[i]}    
}

//GAME SAVING, LOADING AND RESETING
function load(){
    Importload(localStorage.getItem('save',true));
}

function nerfFarm(){
    if(farmStats.ClonesAmountMult>10) farmStats.ClonesAmountMult = 1+Math.log10(farmStats.ClonesAmountMult-1);
    if(farmStats.ClonesPowerMult>10) farmStats.ClonesPowerMult = 1+Math.log10(farmStats.ClonesPowerMult-1);
    if(farmStats.mining>10) farmStats.mining = 1+Math.log10(farmStats.mining-1);
    if(farmStats.farmDropMult>10) farmStats.farmDropMult = 1+Math.log10(farmStats.farmDropMult-1);
    if(farmStats.attack>10) farmStats.attack = 1+Math.log10(farmStats.attack-1);
    if(farmStats.defense>10) farmStats.defense = 1+Math.log10(farmStats.defense-1);
    if(farmStats.dojoMult>10) farmStats.dojoMult = 1+Math.log10(farmStats.dojoMult-1);
    if(farmStats.GoldMult>10) farmStats.GoldMult = 1+Math.log10(farmStats.GoldMult-1);
    if(farmStats.farmXPMult>10) farmStats.farmXPMult = 1+Math.log10(farmStats.farmXPMult-1);
    if(farmStats.hp>10) farmStats.hp = 1+Math.log10(farmStats.hp-1);
}

function Importload(save){
    save = JSON.parse(save);
    if(save){
        plots=save.farm; farmStats=save.farmStats; setRLevels(save.perks,save.version);
        player=save.player; assignedClones=save.assignedClones; options=save.options;
        values=save.value; stats=save.stats; dojoStats=save.dojoStats; ores=save.ores;
        rebirth=save.rebirth; lifeStats=save.lifeStat; skillsChosen=save.choosen;
        arenaTokens=save.arenaTokens; setArenaShopLevels(save.arenaShop);
        choosableContracts=save.contracts; warehouse=save.warehouse;
        warehouseStats=save.warehouseStats; arenaVouchers=save.arenaVouchers;
        
        setArenaDefeated(save.arenaDefeated)
        setUnlockedSkills(save.skills)
        if(save.version!="1.0") setCrafting(save.items)
        if(save.version.substr(0,3)!="1.0") setCitySave(save.city)
        if(save.version.substr(0,5)=="1.0.1"||save.version.substr(0,5)=="1.0.2"||save.version.substr(0,5)=="1.0.3") nerfFarm();
        updateVersion(save.version);
        checkErrors();
        generateOffline((new Date().getTime()/1000)-save.time);
        if(save.version==="DEV") {
            setDev()
        }
    }
}


function checkErrors(){
    plots.forEach(e=>{
        if(e.crop>=crops.length) e.crop = crops.length-1;
    })
}

function ImportData() {
    var save = document.getElementById('DataImporter').value;
    Importload(atob(save));
}
function ExportData() {
    download("Idling Master.txt",btoa(localStorage.getItem("save")))
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}
function updateVersion(oldVersion){
    if(version.substr(0,5)!=oldVersion.substr(0,5) && oldVersion!="DEV") ExportData();
    if(oldVersion.substr(0,3)=="1.0"){
        city={clones:0}
        wishingStats = {strength: 1,defense: 1,HP: 1,mining: 1,farm: 1,warehouseSpeed: 1}
        cityBuildings = [{name: "Townhall",lvl: 0,bonus: 0.05,cost: 100000,time: 3.6e7,curTime: 3.6e7,paid: false,working: false,type: "Money"},{name : "Contruction Office",lvl: 0,bonus: 0.05,cost: 500000,time: 3.6e7,curTime: 3.6e7,paid: false,working: false,type: "CityTime"},{name: "Housing Facilities",lvl: 0,bonus: 0.5,cost: 1000000,time: 7.2e7,curTime: 7.2e7,paid: false,working: false,type: "ClonesAmount"},{name: "Quarry",lvl: 0,bonus: 0.5,cost: 1e8,time: 1.08e8,curTime: 1.08e8,paid: false,working: false,type: "Strength"},{name: "Food Producers",lvl: 0,bonus: 0.5,cost: 1e8,time: 1.08e8,curTime: 1.08e8,paid: false,working: false,type: "Defense"},{name: "Clothing Shop",lvl: 0,bonus: 1,cost: 1e8,time: 1.08e8,curTime: 1.08e8,paid: false,working: false,type: "HP"},{name: "Bank",lvl: 0,bonus: 100,cost: 2e8,time: 7.2e7,curTime: 7.2e7,paid: false,working: false,type: "PassiveGold"},{name: "Outpost",lvl: 0,bonus: 0.5,cost: 1e8,time: 1.08e8,curTime: 1.08e8,paid: false,working: false,type: "Dojo"},{name: "Bulletin Board",lvl: 0,bonus: 0.1,cost: 1e9,time: 1.8e8,curTime: 1.08e8,paid: false,working: false,type: "Bounty"},{name: "Wishing Well",lvl: 0,bonus: 0.1,cost: 1e9,time: 1.8e8,curTime: 1.08e8,paid: false,working: false,type: "Wishing"},{name: "Kiosk",lvl: 0,bonus: 0.1,cost: 1e9,time: 1.8e8,curTime: 1.08e8,paid: false,working: false,type: "Luck"}]
    }
    if(farmStats.hp==undefined) farmStats.hp=1;
    if(!lifeStats.totalArenaBosses)lifeStats.totalArenaBosses=0;
    if(!lifeStats.totalContractsDone)lifeStats.totalContractsDone=0;
    if(!lifeStats.totalCropsGrown)lifeStats.totalCropsGrown=0;
    if(!lifeStats.totalRankUpsWarehouse)lifeStats.totalRankUpsWarehouse=0;
    if(!lifeStats.totalDojoEnemies)lifeStats.totalDojoEnemies=0;
    if(!lifeStats.totalOresMined)lifeStats.totalOresMined=0;
}

function generateOffline(offlineTime){
    arenaVouchers+=offlineTime/7200;
    mineOffline(offlineTime);
    growOffline(offlineTime);
    warehouseOffline(offlineTime);
    for(var i=0;i<offlineTime;i++){
        train();
    }
}

function getCitySave(){
    var ret = {}
    ret.wish = wishingStats;
    ret.wishes = coinTosses;
    ret.city = city;
    ret.buildings = cityBuildings;
    ret.bounties = availableBounties;
    ret.bountyStats = bountyStats.perm;
    return ret;
}

function getRLevels(perks){
    var ret = []
    perks.forEach(p=>{
        ret.push(p.lvl);
    })
    return ret;
}
function getUnlockedSkills(skills){
    var ret = []
    skills.forEach(p=>{
        ret.push(p.got);
    })
    return ret;
}
function getArenaShopLevels(shop){
    var ret = {dojo:[],mine:[],farm:[],warehouse:[]}
    shop.dojo.forEach(s=>ret.dojo.push(s.lvl))
    shop.mine.forEach(s=>ret.mine.push(s.lvl))
    shop.Farm.forEach(s=>ret.farm.push(s.lvl))
    shop.warehouse.forEach(s=>ret.warehouse.push(s.lvl))
    return ret;
}
function getArenaDefeated(fighters){
    var ret = {dojo:[],mine:[],farm:[],warehouse:[]}
    fighters.dojo.forEach(s=>ret.dojo.push(s.defeated))
    fighters.Mine.forEach(s=>ret.mine.push(s.defeated))
    fighters.farm.forEach(s=>ret.farm.push(s.defeated))
    fighters.warehouse.forEach(s=>ret.warehouse.push(s.defeated))
    return ret;
}

function saveCrafting(){
    var ret = []
    crafting.items.forEach(c=>{
        ret.push(c.level);
    })
    return ret;
}

function save(){
    var save = {
        farm: plots,
        farmStats: farmStats,
        perks: getRLevels(rebirthPerks),
        player: player,
        assignedClones: assignedClones,
        options: options,
        value: values,
        stats: stats,
        dojoStats: dojoStats,
        time: new Date().getTime() / 1000,
        ores: ores,
        rebirth: rebirth,
        lifeStat: lifeStats,
        choosen: skillsChosen,
        arenaTokens: arenaTokens,
        arenaShop: getArenaShopLevels(arenaShop),
        contracts: choosableContracts,
        warehouse: warehouse,
        warehouseStats: warehouseStats,
        version: version,
        arenaVouchers: arenaVouchers,
        skills: getUnlockedSkills(skills),
        arenaDefeated: getArenaDefeated(arenaFighters),
        items: saveCrafting(),
        city: getCitySave()
    }
    localStorage.setItem('save',JSON.stringify(save));
}

// Get Stats with Multiplier
function getCraftingAttack(){
    var ret = 1.0;
    for(var i = 0;i<crafting.items.length;i++){
        if(crafting.items[i].bonus=="Strength" || crafting.items[i].bonus=="Mixed"){
            ret *= 1+(crafting.items[i].level-1)*crafting.items[i].perLevel;
        }
    }
    return ret;
}

function getFarmAttack(){
    return farmStats.attack;
}
function getFarmHP(){
    return farmStats.hp;
}

function getFarmDefense(){
    return farmStats.defense;
}

function getHP(){
    return Math.floor(player.hp
        *(1+dojoStats.hp/100)
        *getCraftingHp()
        *getRBHP()
        *getFarmHP());
}

function getStrength(){
    return Math.floor(getRawStrength()*crit());
}

function getRawStrength(){
    return Math.floor(player.strength
        *(1+dojoStats.attack/100)
        *getCraftingAttack()
        *getFarmAttack()
        *getRBAttack()
        *getWarehouseStrength()
        *getCityStrength()
        *getBountyMainStats());
}

function getCraftingDefense(){
    var ret = 1.0;
    for(var i = 0;i<crafting.items.length;i++){
        if(crafting.items[i].bonus=="Defense"||crafting.items[i].bonus=="Mixed"){
            ret *= 1+(crafting.items[i].level-1)*crafting.items[i].perLevel;
        }
    }
    return ret;
}

function getCraftingHp(){
    var ret = 1.0;
    for(var i = 0;i<crafting.items.length;i++){
        if(crafting.items[i].bonus=="HP"||crafting.items[i].bonus=="Mixed"){
            ret *= 1+(crafting.items[i].level-1)*crafting.items[i].perLevel;
        }
    }
    return ret;
}

function getDefense(){
    return getRawDefense();
}

function getRawDefense(){
    return Math.floor(player.defense
        *(1+dojoStats.defense/100)
        *getCraftingDefense()
        *getFarmDefense()
        *getRBDefense()
        *getWarehouseDefense()
        *getCityDefense()
        *getBountyMainStats());
}

//Add Values with multipliers

function addClones(num){
    num = Math.floor(num
        *farmStats.ClonesAmountMult
        *getCityClonesAmount())
    player.baseClones+=num;
    player.idleClones+=num;
    player.maxClones+=num;
}
function addClonesRaw(num){
    player.baseClones+=num;
    player.idleClones+=num;
    player.maxClones+=num;
}
function putClonesToWork(num){
    if(num<=player.idleClones){
        player.idleClones-=num;
        return true;
    }
    return false;
}

function addMoney(num){
    num = num
        *farmStats.GoldMult
        *getBonusRebirth("MoneyMult")
        *getCityMoneyMult()
        *getBountyMoney();
    player.money+=num;
}

function getPrice(perk){
    var priceUp = perk.step[0];
    if(priceUp=='*')return (perk.lvl+1)*perk.basePrice*Number(perk.step.slice(1));
    if(priceUp=='^')return Math.pow(perk.basePrice,perk.lvl+1*Number(perk.step.slice(1)));
}

//SET GAME INTERVAL
function initGame(){
    document.getElementById('Version').innerHTML="Version "+version;
    load();
    loadBoss();
    loadPlayerScreen();
    loadTutorial();
    options.menu="none";
    if(lifeStats.totalDojoEnemies>=10)unlockButton("DojoShop")
    setInterval(passSecond,1000);
    setInterval(save,60000);
}

function passSecond(){
    stats.totalSeconds++;
    lifeStats.totalSeconds++;
    arenaVouchers+=1/7200;
    dojoFight();
    mine();
    loadScreen();
    train();
    grow();
    workOnWarehouse();
    workOnCity();
    player.curhp+=player.hpRegen;
    if(player.curhp>getHP())player.curhp=getHP();
    if(action.attacking){
        attack();
    }
}   

//RESET GAME, DONT HOOK ANYTHING TO THESE

function newGame(){
    if(options.reset==undefined) {
        options.reset=""
        return;
    }
    values.boss=1;
    values.zone=0;
    stats.highestBoss=0;
    loadBoss();
    resetAssignedClones();
    resetPlayer();
    resetRebirth();
    lockAllButtons();
    resetMine();
    resetFarm();    
    resetWarehouse();
    resetArena();
    save();
}

function resetRebirth(){
    rebirth={canRebirth: false,rbPoints: 0}
    resetArenaAux(rebirthPerks);
}

function resetAssignedClones(){
    assignedClones.train.attack.jumpKick=
    assignedClones.train.attack.kick=
    assignedClones.train.attack.punch=
    assignedClones.train.attack.scream=
    assignedClones.train.attack.tornadoKick=
    assignedClones.train.defense.beat=
    assignedClones.train.defense.eat=
    assignedClones.train.defense.fall=
    assignedClones.train.defense.rest=
    assignedClones.train.defense.sleep=0;
}

function spendMoney(money){
    if(player.money<money)return false;
    player.money-=money;
    return true;
}

function resetPlayer(){
    stats.highestBoss=0;
    player.curhp=player.hp=10;
    player.strength=player.defense=player.hpRegen=player.idleClones=player.maxClones=player.train.mult=1;
    player.money=0;
    player.train.attack.scream.level=player.train.attack.scream.progress=
    player.train.attack.punch.level=player.train.attack.punch.progress=
    player.train.attack.kick.level=player.train.attack.kick.progress=
    player.train.attack.jumpKick.level=player.train.attack.jumpKick.progress=
    player.train.attack.tornadoKick.level=player.train.attack.tornadoKick.progress=
    player.train.defense.eat.level=player.train.defense.eat.progress=
    player.train.defense.rest.level=player.train.defense.rest.progress=
    player.train.defense.sleep.level=player.train.defense.sleep.progress=
    player.train.defense.fall.level=player.train.defense.fall.progress=
    player.train.defense.beat.level=player.train.defense.beat.progress=
    stats.totalDojoEnemies=stats.totalBossesKilles=stats.totalSeconds=
    stats.totalOresMined=stats.highestBoss=lifeStats.totalBossesKilles=
    lifeStats.totalDojoEnemies=lifeStats.totalOresMined=lifeStats.totalSeconds=0;
    dojoStats = {hp : 10,curhp : 10,attack : 1,defense : 1}
}

function resetMine(){
    ores.forEach(ore => {
        ore.quant=0;
        ore.clones=0;
    });
    crafting.items.forEach(item=>{
        item.level=1;
    })
}

function resetFarm(){
    plots.forEach(plot=>{
        plot.crop=-1;
        plot.level=0;
        plot.xp=0;
        plot.curTime=0;
        plot.got=false;
    })
}

function resetWarehouse(){
    choosableContracts = []
    warehouse = {capacity: 10,speed: 1,rank: 1,used: 0,level: 1,upgradeCrates: 0,upgradesNeeded: 5}    
    warehouseStats = {strength: 1,defense: 1,dojoAttack: 1,dojoDefense: 1,farmDrop: 1,Mining: 1}
}

function resetArena(){
    skillsChosen = [0]
    arenaTokens = {dojo: 0,mine: 0,farm: 0,warehouse: 0}
    resetArenaAux(arenaShop.dojo)
    resetArenaAux(arenaShop.mine)
    resetArenaAux(arenaShop.Farm)
    resetArenaAux(arenaShop.warehouse)
    resetSkills();
}
function resetArenaAux(list){
    list.forEach(element=>{
        element.lvl=0
    })
}
function resetSkills(){
    skills.forEach(s=>{
        s.got=false;
    })
}

function lockAllButtons(){
    document.getElementById("Zone1").innerHTML="It's Locked Boys";
    document.getElementById("Zone1").disabled=true;
    document.getElementById("Zone2").innerHTML="No No No...";
    document.getElementById("Zone2").disabled=true;
    document.getElementById("Zone3").innerHTML="It's not for you today";
    document.getElementById("Zone3").disabled=true;
    document.getElementById("Rebirth").innerHTML="don't click me";
    document.getElementById("Rebirth").disabled=true;
    document.getElementById("RebirthShop").innerHTML="Don't click me 2";
    document.getElementById("RebirthShop").disabled=true;
    document.getElementById("DojoShop").innerHTML="You gotta Learn...";
    document.getElementById("DojoShop").disabled=true;
}

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}


function setDev(){
    version = "DEV"
    lifeStats.totalDojoEnemies=10
    values.boss=1000
    unlockAll();
}