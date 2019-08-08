// Logic Functions
function assignAllClones(){
    document.getElementById('NClones').value=player.maxClones;
}

function getClones(){
    var clones = parseInt(document.getElementById('NClones').value)
    if(isNaN(clones)) clones=0;
    return clones;
}

function setRLevels(perks){
    for(var i=0;i<perks.length;i++){rebirthPerks[i].lvl=perks[i]}
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

function setUnlockedSkills(aSkills){
    for(var i=0;i<aSkills.length;i++){skills[i].got=aSkills[i]}    
}

//GAME SAVING, LOADING AND RESETING
function load(){
    Importload(localStorage.getItem('save'));
}

function Importload(save){
    save = JSON.parse(save);
    if(save){
        plots=save.farm; farmStats=save.farmStats; setRLevels(save.perks);
        player=save.player; assignedClones=save.assignedClones; options=save.options;
        values=save.value; stats=save.stats; dojoStats=save.dojoStats; ores=save.ores;
        rebirth=save.rebirth; lifeStats=save.lifeStat; skillsChosen=save.choosen;
        arenaTokens=save.arenaTokens; setArenaShopLevels(save.arenaShop);
        choosableContracts=save.contracts; warehouse=save.warehouse;
        warehouseStats=save.warehouseStats; arenaVouchers=save.arenaVouchers;
        setArenaDefeated(save.arenaDefeated)
        setUnlockedSkills(save.skills)
        updateVersion(save.version);
        generateOffline((new Date().getTime()/1000)-save.time);
    }
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
    if(version!=oldVersion) ExportData()
}

function generateOffline(offlineTime){
    arenaVouchers+=offlineTime/36000;
    mineOffline(offlineTime);
    growOffline(offlineTime);
    warehouseOffline(offlineTime);
    for(var i=0;i<offlineTime;i++){
        train();
    }
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
        arenaDefeated: getArenaDefeated(arenaFighters)
    }
    localStorage.setItem('save',JSON.stringify(save));
}

// Get Stats with Multiplier
function getCraftingAttack(){
    var ret = 1.0;
    for(var i = 0;i<crafting.items.length;i++){
        if(crafting.items[i].bonus=="Attack"){
            ret *= 1+(crafting.items[i].level-1)*crafting.items[i].perLevel;
        }
    }
    return ret;
}

function getFarmAttack(){
    return farmStats.attack;
}

function getFarmDefense(){
    return farmStats.defense;
}


function getStrength(){
    return Math.floor(player.strength
        *(1+dojoStats.attack/100)
        *getCraftingAttack()
        *getRBAttack()
        *getFarmAttack()
        *getWarehouseStrength()
        *crit());
}

function getRawStrength(){
    return Math.floor(player.strength
        *(1+dojoStats.attack/100)
        *getCraftingAttack()
        *getFarmAttack()
        *getRBAttack()
        *getWarehouseStrength());
}

function getCraftingDefense(){
    var ret = 1.0;
    for(var i = 0;i<crafting.items.length;i++){
        if(crafting.items[i].bonus=="Defense"){
            ret += (crafting.items[i].level-1)*crafting.items[i].perLevel;
        }
    }
    return ret;
}

function getDefense(){
    return Math.floor(player.defense
        *(1+dojoStats.defense/100)
        *getCraftingDefense()
        *getFarmDefense()
        *getRBDefense()
        *getWarehouseDefense());
}

function getRawDefense(){
    return Math.floor(player.defense
        *(1+dojoStats.defense/100)
        *getCraftingDefense()
        *getFarmDefense()
        *getRBDefense()
        *getWarehouseDefense());
}

//Add Values with multipliers

function addClones(num){
    num = Math.floor(num
        *farmStats.ClonesAmountMult)
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
    num = Math.floor(num
        *farmStats.GoldMult);
    player.money+=num;
}

function getPrice(perk){
    var priceUp = perk.step[0];
    if(priceUp=='*')return (perk.lvl+1)*perk.basePrice*Number(perk.step.slice(1));
    if(priceUp=='^')return Math.pow(perk.basePrice,perk.lvl+1*Number(perk.step.slice(1)));
}

//SET GAME INTERVAL
function initGame(){
    load();
    loadBoss();
    loadPlayerScreen();
    loadTutorial();
    options.menu="none";
    setInterval(passSecond,1000);
    setInterval(save,60000);
}

function passSecond(){
    stats.totalSeconds++;
    lifeStats.totalSeconds++;
    arenaVouchers+=1/36000;
    dojoFight();
    mine();
    loadScreen();
    train();
    grow();
    workOnWarehouse();
    player.curhp+=player.hpRegen;
    if(player.curhp>player.hp)player.curhp=player.hp;
    if(action.attacking){
        attack();
    }
}   

//RESET GAME, DONT HOOK ANYTHING TO THESE

function newGame(){
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
}

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}
