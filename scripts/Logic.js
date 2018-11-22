// Logic Functions
function loadBoss(){
    curBoss.attack = Math.pow(10,values.boss);
    curBoss.hp = curBoss.curhp = Math.pow(10,values.boss+1);
    action.attacking=false;
}


function load(){
    if(localStorage.getItem('player')){
        player = JSON.parse(localStorage.getItem('player'));
        assignedClones = JSON.parse(localStorage.getItem('assignedClones'));
        options = JSON.parse(localStorage.getItem('options'));
        values = JSON.parse(localStorage.getItem('value'));
    }
    else{
        player.strength=1;
        player.hp=10;
        action.attacking=false;
    }
}

function save(){
    localStorage.setItem('player',JSON.stringify(player));
    localStorage.setItem('assignedClones',JSON.stringify(assignedClones));
    localStorage.setItem('options',JSON.stringify(options));
    localStorage.setItem('value',JSON.stringify(values));
}

function killBoss(){
    values.boss++;
    loadBoss();
}

function killPlayer(){
    action.attacking=false;
}

function goToTraining(){
    options.menu="Training";
    loadScreen();
}

function goToBosses(){
    options.menu="Bosses";
    loadScreen();
}

function assignAllClones(){
    document.getElementById('NClones').value=player.maxClones;
}

function getClones(){
    var clones = parseInt(document.getElementById('NClones').value)
    if(isNaN(clones)) clones=0;
    return clones;
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

//SET GAME INTERVAL
function initGame(){
    load();
    loadPlayerScreen();
    loadTutorial();
    setInterval(passSecond,1000);
    setInterval(save,10000);
}
