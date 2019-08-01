// Logic Functions
function assignAllClones(){
    document.getElementById('NClones').value=player.maxClones;
}

function getClones(){
    var clones = parseInt(document.getElementById('NClones').value)
    if(isNaN(clones)) clones=0;
    return clones;
}



//GAME SAVING, LOADING AND RESETING
function load(){
    if(localStorage.getItem('player')){
        plots = JSON.parse(localStorage.getItem('farm'))
        farmStats=JSON.parse(localStorage.getItem('farmStats'))
        rebirthPerks = JSON.parse(localStorage.getItem('perks'))
        player = JSON.parse(localStorage.getItem('player'));
        assignedClones = JSON.parse(localStorage.getItem('assignedClones'));
        options = JSON.parse(localStorage.getItem('options'));
        rebirth = JSON.parse(localStorage.getItem('Rebirth'));
        values = JSON.parse(localStorage.getItem('value'));
        stats = JSON.parse(localStorage.getItem('stats'));
        dojoStats = JSON.parse(localStorage.getItem('dojoStats'));
        offlineTime = (new Date().getTime()/1000)-parseInt(JSON.parse(localStorage.getItem('time')));
        ores = JSON.parse(localStorage.getItem('ores'));
        lifeStats=JSON.parse(localStorage.getItem('lifeStat'));
        updateVersion();
        generateOffline(offlineTime);
    }
}
function updateVersion(){
    if(localStorage.getItem('Version')){
        versionUpdated = localStorage.getItem('Version');

    }
}

function generateOffline(offlineTime){
    mineOffline(offlineTime);
    for(var i=0;i<offlineTime;i++){
        train();
    }
}

function save(){
    localStorage.setItem('farm',JSON.stringify(plots));
    localStorage.setItem('farmStats',JSON.stringify(farmStats))
    localStorage.setItem('perks',JSON.stringify(rebirthPerks));
    localStorage.setItem('player',JSON.stringify(player));
    localStorage.setItem('assignedClones',JSON.stringify(assignedClones));
    localStorage.setItem('options',JSON.stringify(options));
    localStorage.setItem('value',JSON.stringify(values));
    localStorage.setItem('stats',JSON.stringify(stats));
    localStorage.setItem('dojoStats',JSON.stringify(dojoStats));
    localStorage.setItem('time',new Date().getTime() / 1000);
    localStorage.setItem('ores',JSON.stringify(ores));
    localStorage.setItem('Rebirth',JSON.stringify(rebirth));
    localStorage.setItem('lifeStat',JSON.stringify(lifeStats));
}

// Get Stats with Multiplier
function getCraftingAttack(){
    var ret = 1.0;
    for(var i = 0;i<crafting.items.length;i++){
        if(crafting.items[i].bonus=="Attack"){
            ret += (crafting.items[i].level-1)*crafting.items[i].perLevel;
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
        *crit());
}

function getRawStrength(){
    return Math.floor(player.strength
        *(1+dojoStats.attack/100)
        *getCraftingAttack()
        *getFarmAttack()
        *getRBAttack());
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
        *getRBDefense());
}

function getRawDefense(){
    return Math.floor(player.defense
        *(1+dojoStats.defense/100)
        *getCraftingDefense()
        *getFarmDefense()
        *getRBDefense());
}

//Add Values with multipliers

function addClones(num){
    num = Math.floor(num
        *farmStats.ClonesAmountMult)
    player.baseClones+=num;
    player.idleClones+=num;
    player.maxClones+=num;
}

function addMoney(num){
    num = Math.floor(num
        *farmStats.GoldMult);
    player.money+=num;
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
    dojoFight();
    mine();
    loadScreen();
    train();
    grow();
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
    save();
}

function resetRebirth(){
    rebirth.canRebirth = false
    rebirth.rbPoints=0
    rebirthPerks.forEach(perk=>{
        perk.lvl = 0;
    })
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
    lifeStats.totalDojoEnemies=lifeStats.totalOresMined=lifeStats.totalSeconds=
    0;
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