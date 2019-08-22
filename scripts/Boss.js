//BOSS MENU
function loadBoss(){
    if(values.boss>stats.highestBoss)stats.highestBoss=values.boss;
    if(values.boss>=3) unlockButton("Zone1");
    else lockButton("Zone1");
    if(stats.highestBoss>=5) unlockButton("Rebirth");
    if(values.boss>=8){
        unlockButton("Zone2");
        unlockButton("Zone5");
    }
    else {
        lockButton("Zone2");
        lockButton("Zone5");
    }
    if(values.boss>=13) unlockButton("Zone3");
    else lockButton("Zone3");
    if(values.boss>=20) unlockButton("Zone4");
    else lockButton("Zone4");
    if(values.boss>=25) unlockButton("Zone6");
    else lockButton("Zone6");
    curBoss.attack = Math.pow(8,values.boss-1);
    curBoss.hp = curBoss.curhp = Math.pow(9,values.boss);
    action.attacking=false;
    loadScreen();
}

function attack(){
    if(getDefense()<curBoss.attack){
        pastConsole = "<p style='font-size: small'>You took "+printNumber(curBoss.attack-getDefense())+' damage.</p>'+pastConsole;
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
    pastConsole="<p style='font-size: small'>The Boss took "+printNumber(getStrength())+" damage.</p>"+pastConsole;
    if(curBoss.curhp<=0) killBoss();
}
function killBoss(){
    stats.totalBossesKilles++;
    lifeStats.totalBossesKilles++;
    addClones(1);
    values.boss++;
    pastConsole = ""
    loadBoss();
}

function killPlayer(){
    action.attacking=false;
    curBoss.curhp=curBoss.hp;
}