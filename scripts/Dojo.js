function printDojo(){
    var string = '<h1 style="text-align: center">Dojo</h1><hr/>';
    string += '<button class="w3-button w3-red" onclick="previousZone();" '
    if(values.zone==0)string+="disabled"
    string +='>&lt</button><button style="float:right"class="w3-button w3-red" onclick="nextZone()"'
    if(!canGoToNextZone())string +="disabled"
    string += '>&gt</button><h2 style="text-align:center">'+dojoZones[values.zone].name+'</h2><p>'+dojoZones[values.zone].desc+'</p><hr/><div id="Fight"></div>';
    string += '<hr/><div><p><b>'+getNextZoneInfo()+'</b></p></div>'
    document.getElementById('Screen').innerHTML=string;   
    printDojoFight();
}   
function printDojoHelp(){
    var string = '<h1 style="text-align: center">Dojo</h1><hr/>';
    string += '<p>In the Dojo you can get money and bonuses to Strength and Defense for bosses.</p><p>You start out in the Zone "Shady Guy". The Red Arrows on the sides allow you to switch between Dojo Zones. Different Zones have different Enemies which drop different amounts of money.</p><p>The Fight Screen is where everything happens, your info and the enemy\'s info is shown there. The enemy always attacks first.</p>'
    string +="<img style=\"display: block;margin-left: auto;margin-right: auto;height:40%\" src=\""+getImgPath("DojoScreenHelp")+"\"></img>"
    document.getElementById('Screen').innerHTML=string;  
}

function getNextZoneInfo(){
    var string = "Reach Boss #"
    if(values.boss<5) string+= "5"
    else if(values.boss<8) string+= "8"
    else if(values.boss<10) string+= "10"
    else if(values.boss<13) string+= "13"
    else if(values.boss<16) string+= "16"
    else if(values.boss<20) string+= "20"
    else if(values.boss<22) string+= "22"
    else if(values.boss<25) string+= "25"
    else return "You have unlocked all zones, congratz?!?"
    return string+= " so you can unlock the next zone!";
}

function getDojoAttackStatRaw(){
    return Math.floor(dojoStats.attack
        *farmStats.dojoMult
        *getArenaDojoAttackMultiplier()
        *getCityDojo()
        *getBountyDojo());
}

function getDojoDefenseStatRaw(){
    return Math.floor(dojoStats.defense
        *farmStats.dojoMult
        *getArenaDojoDefenseMultiplier()
        *getCityDojo()
        *getBountyDojo());
}

function getDojoAttack(){
    return getDojoAttackStatRaw()*crit();
}

function dojoFight(){
    if(dojoEnemy.curhp<=0) generateEnemy();
    else{
        if(dojoEnemy.attack>getDojoDefenseStatRaw())dojoStats.curhp-=(dojoEnemy.attack-getDojoDefenseStatRaw());
        if(dojoStats.curhp<=0) dojoDeath();
        else {
            var att = getDojoAttack();
            if(att>dojoEnemy.defense) dojoEnemy.curhp-= (att-dojoEnemy.defense);
        }
        if(dojoEnemy.curhp<=0) killDojoEnemy();
    }
    dojoStats.curhp+=Math.ceil(dojoStats.hp/60);
    if(dojoStats.curhp>=dojoStats.hp)dojoStats.curhp=dojoStats.hp;
}

function killDojoEnemy(){
    stats.totalDojoEnemies++;
    lifeStats.totalDojoEnemies++;
    AddAction(1,"Kill");
    addMoney(dojoEnemy.prize);
    generateEnemy();
}

function dojoDeath(){
    values.zone=0;
    dojoStats.curhp=0;
    generateEnemy();

}

function previousZone(){
    if(values.zone!=0) values.zone--;
    generateEnemy();
}

function nextZone(){
    values.zone++;
    printDojo();
    generateEnemy();
}

function canGoToNextZone(){
    if(values.zone==0) return true;
    else if(values.zone==1 && values.boss>=5) return true;
    else if(values.zone==2 && values.boss>=8) return true;
    else if(values.zone==3 && values.boss>=10) return true;
    else if(values.zone==4 && values.boss>=13) return true;
    else if(values.zone==5 && values.boss>=16) return true;
    else if(values.zone==6 && values.boss>=20) return true;
    else if(values.zone==7 && values.boss>=22) return true;
    else if(values.zone==8 && values.boss>=25) return true;
    return false;
}

function generateEnemy(){
    var num = Math.floor(Math.random()*dojoZones[values.zone].enemies.length);
    var rarity = getRarity();
    var enemy = enemies[dojoZones[values.zone].enemies[num]];
    dojoEnemy.hp=dojoEnemy.curhp = enemy.hp;
    dojoEnemy.name = enemy.name;
    dojoEnemy.attack = enemy.attack;
    dojoEnemy.defense = enemy.defense;
    dojoEnemy.prize = enemy.prize * rarity;
    dojoEnemy.rarity = rarity;
    if(lifeStats.totalDojoEnemies>=10)unlockButton("DojoShop")
    loadScreen();
}

function printDojoFight(){
    var string = '<div class="w3-col m6 l6">';
    string += '<h1><b>You</b></h1>';
    string += '<h2><b>HP</b>: '+printNumber(dojoStats.curhp)+'/'+printNumber(dojoStats.hp)+'</h2>';
    string += '<h2><b>Attack</b>: '+printNumber(getDojoAttackStatRaw())+'</h2>';
    string += '<h2><b>Defense</b>: '+printNumber(getDojoDefenseStatRaw())+'</h2>';
    string += '</div><div class="w3-col m6 l6">';
    string += '<h1 '
    if(dojoEnemy.rarity==2) string+= "style='color:green'"
    if(dojoEnemy.rarity==3) string+= "style='color:blue'"
    if(dojoEnemy.rarity==4) string+= "style='color:yellow'"
    if(dojoEnemy.rarity==5) string+= "style='color:orange'"
    string += '><b>'+dojoEnemy.name+'</b></h>';
    string += '<h2><b>HP</b>: '+printNumber(dojoEnemy.curhp)+'/'+printNumber(dojoEnemy.hp)+'</h2>';
    string += '<h2><b>Attack</b>: '+printNumber(dojoEnemy.attack)+'</h2>';
    string += '<h2><b>Defense</b>: '+printNumber(dojoEnemy.defense)+'</h2>';
    string += '</div>';
    document.getElementById('Fight').innerHTML=string; 
}
