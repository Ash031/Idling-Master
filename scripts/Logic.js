// Logic Functions
function assignAllClones(){
    document.getElementById('NClones').value=player.maxClones;
}

function getClones(){
    var clones = parseInt(document.getElementById('NClones').value)
    if(isNaN(clones)) clones=0;
    return clones;
}


//BOSS MENU
function loadBoss(){
    if(values.boss>=3) unlockButton("Zone1");
    if(values.boss>=8) unlockButton("Zone2");
    curBoss.attack = Math.pow(10,values.boss-1);
    curBoss.hp = curBoss.curhp = Math.pow(10,values.boss);
    action.attacking=false;
}

function attack(){
    if(getDefense()<curBoss.attack){
        pastConsole = "<p style='font-size: small'>You took "+(curBoss.attack-getDefense())+' damage.</p>'+pastConsole;
        player.curhp-=(curBoss.attack-getDefense());
        if(player.curhp<=0){
            player.curhp=0;
            killPlayer();
            return;
        }
    }
    else{
        pastConsole="<p style='font-size: small'>You didn't take any damage, NICE!</p>"+pastConsole;
    }
    curBoss.curhp -= getStrength();
    pastConsole="<p style='font-size: small'>The Boss took "+getStrength()+" damage.</p>"+pastConsole;
    if(curBoss.curhp<=0) killBoss();
}
function killBoss(){
    stats.totalBossesKilles++;
    player.idleClones++;
    player.maxClones++;
    player.baseClones++;
    values.boss++;
    loadBoss();
}

function killPlayer(){
    action.attacking=false;
}

//GAME SAVING, LOADING AND RESETING
function load(){
    if(localStorage.getItem('player')){
        player = JSON.parse(localStorage.getItem('player'));
        assignedClones = JSON.parse(localStorage.getItem('assignedClones'));
        options = JSON.parse(localStorage.getItem('options'));
        values = JSON.parse(localStorage.getItem('value'));
        stats = JSON.parse(localStorage.getItem('stats'));
        dojoStats = JSON.parse(localStorage.getItem('dojoStats'));
        offlineTime = (new Date().getTime()/1000)-parseInt(JSON.parse(localStorage.getItem('time')));
        ores = JSON.parse(localStorage.getItem('ores'));
        generateOffline(offlineTime);
    }
}

function generateOffline(offlineTime){
    var i;
    mineOffline(offlineTime);
    for(i=0;i<offlineTime;i++){
        train();
    }
}

function save(){
    localStorage.setItem('player',JSON.stringify(player));
    localStorage.setItem('assignedClones',JSON.stringify(assignedClones));
    localStorage.setItem('options',JSON.stringify(options));
    localStorage.setItem('value',JSON.stringify(values));
    localStorage.setItem('stats',JSON.stringify(stats));
    localStorage.setItem('dojoStats',JSON.stringify(dojoStats));
    localStorage.setItem('time',new Date().getTime() / 1000);
    localStorage.setItem('ores',JSON.stringify(ores));
}

function newGame(){
    values.boss=1;
    values.zone=0;
    loadBoss();
    resetAssignedClones();
    resetPlayer();
    save();
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
    0;
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

function getStrength(){
    return Math.floor(player.strength
        *(1+dojoStats.attack/100)
        *getCraftingAttack());
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
        *(getCraftingDefense()));
}

//SET GAME INTERVAL
function initGame(){
    load();
    loadBoss();
    loadPlayerScreen();
    loadTutorial();
    options.menu="none";
    setInterval(passSecond,1000);
    setInterval(save,10000);
}

function passSecond(){
    stats.totalSeconds++;
    dojoFight();
    mine();
    loadScreen();
    train();
    player.curhp+=player.hpRegen;
    if(player.curhp>player.hp)player.curhp=player.hp;
    if(action.attacking){
        attack();
    }
}   