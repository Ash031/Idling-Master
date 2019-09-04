function printRegroup(){
    var string = "<h1 style='text-align:center'>Regroup Menu</h1><hr/>";
    string+="<h3>If you regroup with all your clones you will lose:</h3>";
    string+="<ul><li>All your Clones</li><li>All your training levels</li><li>All your Money</li><li>Most Bonuses from other Screens</li></ul>";
    string+="<h3>You will keep:</h3>";
    string +="<ul><li>Arena Perks</li></ul>";
    string +="<ul><li>Regroup Perks</li></ul>";
    string+="<h3>You will get:</h3>";
    string +="<ul><li>"+RBPointsAmount()+" Regroup Points</li></ul>";
    string+="<button style='width: 100%' class='w3-button w3-dark-gray' onclick='rebirthNow()'>Regroup!</button>"
    document.getElementById('Screen').innerHTML=string;
}


function getStartClones(){
    var ret = 1;
    rebirthPerks.forEach(perk=>{
        if(perk.type=="StartClones"){
            ret+=perk.Bonus*perk.lvl;
        }
    })
    return ret;
}

function printRegroupShop(){
    var string = "<h1 style='text-align:center'>Regroup Shop</h1><hr/>";
    string+="<h2>You have "+rebirth.rbPoints+" Regroup Points</h2>";
    string+="<table class='w3-table-all'><tr><th style=\"width:10%\">Name</th><th>Level</th><th>Price</th><th>Description</th><th>Total Bonus</th><th>Upgrade!</th></tr>";
    string+=getRBTable();
    string+="</table>";
    string+='<button onclick="previousRebirthPage();"'
    if(rebirthPage==0) string+='disabled'
    string+='>&lt</button><button style="float:right" onclick="nextRebirthPage()"'
    if(!canGoToNextRebirthPage()) string +="disabled"
    string+='>&gt</button></div>';
    document.getElementById('Screen').innerHTML=string;
}

function previousRebirthPage(){
    if(rebirthPage!=0)rebirthPage--;
    loadScreen();
}
function nextRebirthPage(){
    if(canGoToNextRebirthPage()) rebirthPage++;
    loadScreen();
}
function canGoToNextRebirthPage(){
    if(rebirthPage==0&&stats.highestBoss>13) return true;
    return false;
}

function getRBTable(){
    var string="";
    for(var i = rebirthPage*10;i<rebirthPerks.length&&i<(rebirthPage+1)*10;i++){
        var e = rebirthPerks[i];
        if(stats.highestBoss>=e.boss){
            string+="<tr><td>"+e.name+"</td><td style='text-align:center'>"+e.lvl+"</td><td style='text-align:center'>"+printNumber(getPrice(e))+"</td><td style='text-align:center'>"+e.Description+"</td><td style='text-align:center'>"+printNumber(e.Bonus*e.lvl)+"</td><td><button onClick='upgradeRP("+i+")'"
            if(getPrice(e)>rebirth.rbPoints || (e.maxLevel!=-1 && e.maxLevel<=e.lvl)) string += "disabled"
            string += ">"
            if(e.maxLevel!=-1 && e.maxLevel<=e.lvl)string += "Maxed"
            else string += "Level Up!"
            string += "</button></td></tr>";
        }
    }
    return string;
}

function upgradeRP(perkN){
    var obj = rebirthPerks[perkN];
    var price = getPrice(obj);
    if(rebirth.rbPoints>=price && (obj.lvl<obj.maxLevel || obj.maxLevel==-1)){
        rebirth.rbPoints-=price;
        rebirthPerks[perkN].lvl++;
        if(perkN==0) addClonesRaw(3)
    }
    loadScreen();
}

function crit(){
    var r = Math.random(0,100);
    if(r<(getBonusRebirthSum("CritChance",0))) return 2;
    return 1;
}

function getRBAttack(){
    return getBonusRebirth("Strength")
}
function getRBHP(){
    return getBonusRebirth("HP")
}
function getRBDefense(){
    return getBonusRebirth("Defense")
}

function getBonusRebirth(perkType){
    var ret = 1;
    rebirthPerks.forEach(perk=>{
        if(perk.type==perkType) ret *= (1+(perk.Bonus*perk.lvl));
    })
    return ret;
}

function getBonusRebirthSum(perkType,num){
    var ret = num;
    rebirthPerks.forEach(perk=>{
        if(perk.type==perkType) ret += perk.Bonus*perk.lvl;
    })
    return ret;
}

function RBPointsAmount(){
    var mult = Math.log10(lifeStats.totalSeconds)*Math.log10(lifeStats.totalDojoEnemies)*lifeStats.totalBossesKilles;
    if (isNaN(mult) || mult ==-Infinity) return 0;
    if(lifeStats.totalOresMined>10)mult*=Math.log10(lifeStats.totalOresMined);
    if(lifeStats.totalCropsGrown>10)mult*=Math.log10(lifeStats.totalCropsGrown);
    if(lifeStats.totalRankUpsWarehouse>0 && lifeStats.totalContractsDone>10)mult*=lifeStats.totalRankUpsWarehouse*Math.log10(lifeStats.totalContractsDone);
    return Math.floor(mult);
}

function rebirthNow(){
    rebirth.rbPoints+=RBPointsAmount();
    resetTraining();
    resetButtons();
    rebirthFarm();
    rebirthWarehouse();
    rebirthCity();
    loadBoss();
    loadScreen();
}

function rebirthFarm(){
    plots.forEach(plot=>{
        plot.crop=-1;
        plot.curTime=plot.xp=plot.level=0;
        plot.got=false;
    })
}

function rebirthWarehouse(){
    warehouse = {capacity: 10,speed: 1,rank: 1,used: 0,level: 1,upgradeCrates: 0,upgradesNeeded: 5}
    choosableContracts = []
    warehouseStats.strength=1+(warehouseStats.strength-1)*0.1
    warehouseStats.defense=1+(warehouseStats.defense-1)*0.1
    warehouseStats.dojoAttack=1+(warehouseStats.dojoAttack-1)*0.1
    warehouseStats.dojoDefense=1+(warehouseStats.dojoDefense-1)*0.1
    warehouseStats.farmDrop=1+(warehouseStats.farmDrop-1)*0.1
    warehouseStats.Mining=1+(warehouseStats.Mining-1)*0.1
}

function resetButtons(){
    document.getElementById("Zone1").innerHTML="It's Locked Boys";
    document.getElementById("Zone1").disabled=true;
    document.getElementById("Zone2").innerHTML="No No No...";
    document.getElementById("Zone2").disabled=true;
    document.getElementById("Zone3").innerHTML="It's not for you today";
    document.getElementById("Zone3").disabled=true;
}


// Regroup Function. TO SOFT-RESET
function resetTraining(){
    assignedClones = {
        train : {
            attack : {
                scream : 0,
                punch : 0,
                kick : 0,
                jumpKick : 0,
                tornadoKick : 0
            },
            defense : {
                eat : 0,
                rest : 0,
                sleep : 0,
                fall : 0,
                beat : 0
            }
        }
    }
    player = {
    strength : 1,
    hp : 10,
    curhp : 10,
    defense : 1,
    maxClones : getStartClones(),
    idleClones : getStartClones(),
    baseClones : getStartClones(),
    money : 0,
    hpRegen : 1,
    train : {
        mult : 1,
            attack : {
                scream : {
                    level : 0,
                    progress : 0
                },
                punch : {
                    level : 0,
                    progress : 0
                },
                kick : {
                    level : 0,
                    progress : 0
                },
                jumpKick : {
                    level : 0,
                    progress : 0
                },
                tornadoKick : {
                    level : 0,
                    progress : 0
                }
            },
            defense : {
                eat : {
                    level : 0,
                    progress : 0
                },
                rest : {
                    level : 0,
                    progress : 0
                },
                sleep : {
                    level : 0,
                    progress : 0
                },
                fall : {
                    level : 0,
                    progress : 0
                },
                beat : {
                    level : 0,
                    progress : 0
                }
            }
        }
    }
    dojoStats = {
        hp : 10,
        curhp : 10,
        attack : 1,
        defense : 1
    }
    values = {
        boss:1,
        zone : 0
    }
    lifeStats = {
        totalBossesKilles : 0,
        totalDojoEnemies : 0,
        totalSeconds : 0,
        totalOresMined : 0,
        totalCropsGrown : 0,
        totalRankUpsWarehouse: 0,
        totalContractsDone: 0,
        totalArenaBosses: 0
    }
    ores.forEach(e=>{
        e.clones=0;
        e.quant=Math.floor(e.quant/2);
    })
}
