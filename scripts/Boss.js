//BOSS MENU
function loadBoss(){
    if(values.boss>stats.highestBoss)stats.highestBoss=values.boss;
    if(values.boss>=3) unlockButton("Zone1");
    if(stats.highestBoss>=5) unlockButton("Rebirth");
    if(values.boss>=8) unlockButton("Zone2");
    if(values.boss>=13) unlockButton("Zone3");
    curBoss.attack = Math.pow(8,values.boss-1);
    curBoss.hp = curBoss.curhp = Math.pow(9,values.boss);
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
    lifeStats.totalBossesKilles++;
    player.idleClones++;
    player.maxClones++;
    player.baseClones++;
    values.boss++;
    pastConsole = ""
    loadBoss();
}

function killPlayer(){
    action.attacking=false;
}