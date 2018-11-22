// Logic Functions
function assignAllClones(){
    document.getElementById('NClones').value=player.maxClones;
}

function getClones(){
    var clones = parseInt(document.getElementById('NClones').value)
    if(isNaN(clones)) clones=0;
    return clones;
}

//MENU SWITCHING
function goToTraining(){
    options.menu="Training";
    loadScreen();
}

function goToBosses(){
    options.menu="Bosses";
    loadScreen();
}

//BOSS MENU
function loadBoss(){
    curBoss.attack = Math.pow(10,values.boss);
    curBoss.hp = curBoss.curhp = Math.pow(10,values.boss+1);
    action.attacking=false;
}

function attack(){
    if(player.defense<curBoss.attack){
        pastConsole = "<p style='font-size: small'>You took "+(curBoss.attack-player.defense)+' damage.</p>'+pastConsole;
        player.curhp-=(curBoss.attack-player.defense);
        if(player.curhp<=0){
            player.curhp=0;
            killPlayer();
            return;
        }
    }
    else{
        pastConsole="<p style='font-size: small'>You didn't take any damage, NICE!</p>"+pastConsole;
    }
    curBoss.curhp -= player.strength;
    pastConsole="<p style='font-size: small'>The Boss took "+player.strength+" damage.</p>"+pastConsole;
    if(curBoss.curhp<=0) killBoss();
}
function killBoss(){
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
    }
}

function save(){
    localStorage.setItem('player',JSON.stringify(player));
    localStorage.setItem('assignedClones',JSON.stringify(assignedClones));
    localStorage.setItem('options',JSON.stringify(options));
    localStorage.setItem('value',JSON.stringify(values));
}

function newGame(){
    values.boss=1;
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
    0;
}

//SET GAME INTERVAL
function initGame(){
    load();
    loadPlayerScreen();
    loadTutorial();
    setInterval(passSecond,1000);
    setInterval(save,10000);
}

function passSecond(){
    loadScreen();
    train();
    console.log()
    player.curhp+=player.hpRegen;
    if(player.curhp>player.hp)player.curhp=player.hp;
    if(action.attacking){
        attack();
    }
}   