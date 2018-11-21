// Logic Functions
function loadBoss(){
    curBoss.attack = Math.pow(10,values.boss);
    curBoss.hp = curBoss.curhp = Math.pow(10,values.boss+1);
    action.attacking=false;
}


function load(){
    player.strength=1;
    player.hp=10;
    action.attacking=false;
}

function killBoss(){
    values.boss++;
    loadBoss();
}

function killPlayer(){
    action.attacking=false;
}

function passTime(){
    loadScreen();
    player.curhp+=player.hpRegen;
    if(player.curhp>player.hp)player.curhp=player.hp;
    if(action.attacking){
        if(player.defense<curBoss.attack){
            player.curhp-=(curBoss.attack-player.defense);
            if(player.curhp<=0){
                player.curhp=0;
                killPlayer();
                return;
            }
        }
        curBoss.curhp -= player.strength;
        if(curBoss.curhp<=0) killBoss();
    }
}

//SET GAME INTERVAL
function initGame(){
    options.menu="Bosses";
    action.attacking=true;
    var game = setInterval(passTime,options.interval);
}
