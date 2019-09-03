function printCity(){
    var string = '<h1 style="text-align: center">City</h1><hr/>'
    string += getCityInfo();
    string += getCityButtons();
    string += printBuilding();
    document.getElementById('Screen').innerHTML=string;
}

function getCityInfo(){
    return "<p><b>Workers Available:</b>"+city.clones+"</p>"
}

function getCityButtons(){
    string  = '<p><button onClick="goToTownHall()">Town Hall</button><button onClick="goToConstrutionOffice()">Contruction Office</button>'
    string += '<button onClick="goToBulletinBoard()" '
    if(getCityBounty()==1) string += "disabled"
    string += '>Bounties</button><button onClick="goToWishingWell()" '
    if(getCityWishing()==1) string += "disabled"
    string += '>Wishing Well</button><button onClick="goToKiosk()" '
    if(getCityLuck()==1) string += "disabled"
    string += '>Kiosk</button></p><hr/>'
    return string;
}

function printBuilding(){
    if(selectedBuilding=="TownHall") return printTownHall();
    else if(selectedBuilding=="Constrution") return printConstruction();
    else if(selectedBuilding=="Board") return printBounty();
    else if(selectedBuilding=="Well") return printWell();
    else if(selectedBuilding=="Kiosk") return printKisok();
}

function printKisok(){
    var string = "<h3>Kiosk Dojo Chances:</h3>"
    string += "<h5 style='color:green'>Uncommon: "+getUncommonChance()+"%</h5>"
    string += "<h5 style='color:blue'>Rare: "+getRareChance()+"%</h5>"
    string += "<h5 style='color:yellow'>Epic: "+getEpicChance()+"%</h5>"
    string += "<h5 style='color:orange'>Legendary: "+getLegendaryChance()+"%</h5>"
    return string
}
function getUncommonChance(){
    return 10*getCityLuck();
}
function getRareChance(){
    return 5*getCityLuck();
}
function getEpicChance(){
    return 2*getCityLuck();
}
function getLegendaryChance(){
    return 1*getCityLuck();
}

function printWell(){
    string = "<h3>You see the Wishing Well, it's beautifull!</h3><button onClick='TossCoin()'>Toss a Coin</button>"
    string += "<p>"+wishingText+"</p>"
    return string;
}

function TossCoin(){
    if(spendMoney(Math.pow(10,coinTosses))){
        coinTosses++;
        var reward = Math.floor(Math.random()*coinTosses)
        if(reward>=wellRewards.length)reward=wellRewards.length-1; 
        getWishingReward(reward);
    }
    else wishingText="Not wnough money, you need: "+printNumber(Math.pow(10,coinTosses))
    loadScreen()
}

function getWishingReward(i){
    var reward = wellRewards[i];
    if(reward.type=="Money") addMoney(Math.pow(10,coinTosses-1));
    if(reward.type=="Strength") wishingStats.strength+= reward.bonus*getWishingReward();
    if(reward.type=="Defense") wishingStats.defense+= reward.bonus*getWishingReward();
    if(reward.type=="HP") wishingStats.HP+= reward.bonus*getWishingReward();
    if(reward.type=="Mining") wishingStats.mining+= reward.bonus*getWishingReward();
    if(reward.type=="Farm") wishingStats.farm+= reward.bonus*getWishingReward();
    if(reward.type=="Warehouse") wishingStats.warehouseSpeed+= reward.bonus*getWishingReward();
    wishingText = reward.desc
}

function printTownHall(){
    string  = "<h3>Clones:</h3><button onClick=\"AddClonesToCity()\">Add Clones</button><button onClick='RemoveClonesOnCity()'>Remove Clones</button></hr><h3>Bonuses:</h3>"
    string +="BONUSES"
    return string;
}

function printConstruction(){
    var string = "<table class='w3-table-all'><tr><th>Name</th><th>Level</th><th>Cost</th><th>Time Remaining</th><th>Bonus</th><th></th></tr>";
    string += getConstructionTable();
    string += "</table>"
    return string;
}

function getConstructionTable(){
    var string = "";
    var i = 0;
    cityBuildings.forEach(b=>{
        string += "<tr><td>"+b.name+"</td><td>"+b.lvl+"</td><td>"+printNumber(b.cost*(1+b.lvl)*(1-getBonusRebirthSum("CityDiscount",0)))+"</td><td>"+printTime(b.curTime)+"</td><td>"
        if(b.type=="PassiveGold") string += printNumber(b.lvl*b.bonus)
        else string += printNumber(1+b.lvl*b.bonus)
        string += " "+printCityType(b.type)+"</td><td><button"
        if(!b.paid)string += " onClick='buyConstruction("+i+")''>Buy</button></td></tr>"
        else{
            string += " onClick='toggleBuilding("+i+")'"
            if(b.curTime==0)string += " disabled>Regroup!"
            else if(b.working) string += ">Stop"
            else string += ">Work"
            string += "</button></td></tr>"
        }
        i++;
    })
    return string;
}

function printCityType(type){
    if(type=="Money") return "Money Multiplier"
    if(type=="CityTime") return "Constrution Time Multiplier"
    if(type=="ClonesAmount") return "Clones Multiplier"
    if(type=="PassiveGold") return "Gold/s"
    if(type=="Dojo") return "Dojo Stats Multiplier"
    if(type=="Bounty" || type=="Wishing") return printCityType(type+" Rewards")
    return type+" Multiplier"
}

function buyConstruction(i){
    if(spendMoney(cityBuildings[i].cost*getBonusRebirthSum("CityDiscount",0)*(cityBuildings[i].lvl+1))){
        cityBuildings[i].paid=true
    }
    loadScreen();
}

function toggleBuilding(i){
    cityBuildings[i].working = !cityBuildings[i].working
    loadScreen();
}

function workOnCity(){
    var working = 0;
    tickBounty();
    cityBuildings.forEach(b=>{
        if (b.working) working++;
    })
    working= (city.clones/working)*getBonusRebirth("CitySpeed");
    cityBuildings.forEach(b=>{
        if(b.working){
            b.curTime-=working;
            if(b.curTime<0){
                b.working=false;
                b.curTime=0;
                b.lvl++;
            }
        }
    })
    addMoney(getCityPassiveGold())
}

function goToTownHall(){
    selectedBuilding = "TownHall"
    loadScreen();
}
function goToBulletinBoard(){
    selectedBuilding = "Board"
    loadScreen();
}
function goToWishingWell(){
    selectedBuilding = "Well"
    loadScreen();
}
function goToKiosk(){
    selectedBuilding = "Kiosk"
    loadScreen();
}
function goToConstrutionOffice(){
    selectedBuilding = "Constrution"
    loadScreen();
}

function AddClonesToCity(){
    var clones = getClones();
    if (clones>player.idleClones) clones = player.idleClones;
    city.clones += clones;
    player.idleClones-= clones;
}

function RemoveClonesOnCity(){
    var clones = getClones();
    if(clones>city.clones) clones = city.clones;
    city.clones-=clones;
    player.idleClones+=clones;
}

function getCityStrength(){
    var ret = 1;
    cityBuildings.forEach(b=>{
        if(b.type=="Strength") ret *= 1+(b.bonus*b.lvl)
    })
    return ret;
}

function getCityDefense(){
    var ret = 1;
    cityBuildings.forEach(b=>{
        if(b.type=="Defense") ret *= 1+(b.bonus*b.lvl)
    })
    return ret;
}
function getCityMoneyMult(){
    var ret = 1;
    cityBuildings.forEach(b=>{
        if(b.type=="Money") ret *= 1+(b.bonus*b.lvl)
    })
    return ret;
}
function getCityTime(){
    var ret = 1;
    cityBuildings.forEach(b=>{
        if(b.type=="CityTime") ret *= 1+(b.bonus*b.lvl)
    })
    return ret;
}
function getCityClonesAmount(){
    var ret = 1;
    cityBuildings.forEach(b=>{
        if(b.type=="ClonesAmount") ret *= 1+(b.bonus*b.lvl)
    })
    return ret;
}
function getCityDojo(){
    var ret = 1;
    cityBuildings.forEach(b=>{
        if(b.type=="Dojo") ret *= 1+(b.bonus*b.lvl)
    })
    return ret;
}
function getCityBounty(){
    var ret = 1;
    cityBuildings.forEach(b=>{
        if(b.type=="Bounty") ret *= 1+(b.bonus*b.lvl)
    })
    return ret;
}
function getCityWishing(){
    var ret = 1;
    cityBuildings.forEach(b=>{
        if(b.type=="Wishing") ret *= 1+(b.bonus*b.lvl)
    })
    return ret;
}
function getCityLuck(){
    var ret = 1;
    cityBuildings.forEach(b=>{
        if(b.type=="Luck") ret *= 1+(b.bonus*b.lvl)
    })
    if(ret>5)return 5;
    return ret;
}
function getCityPassiveGold(){
    var ret = 0;
    cityBuildings.forEach(b=>{
        if(b.type=="PassiveGold") ret += b.bonus*b.lvl
    })
    return ret;
}

function getRarity(){
    if(stats.highestBoss<5) return 1;
    var random = Math.random()*100;
    if(random<getUncommonChance())return 2;
    random-=getUncommonChance();
    if(random<getRareChance()) return 3;
    random-=getRareChance();
    if(random<getEpicChance()) return 4;
    random -= getEpicChance();
    if(random<getLegendaryChance()) return 5;
    return 1;
}

function rebirthCity(){
    city.clones=0;
    cityBuildings.forEach(b=>{
        b.curTime=b.time*(1+b.lvl);
        b.paid=false;
        b.working= false;
    })
    coinTosses=0;  
    rebirthBounty(); 
}
