function printFarm(){
    var string = '<h1 style="text-align:center">Farm</h1><hr/>';
    string += '<div class="w3-col m3 l2"><p style="text-align:center">Seed Selector</p>';
    string += getSeeds();
    string += '</div><div class="w3-col m9 l10"><table class="w3-table-all">';
    string+="<tr><th>Crop</th><th>Time growing</th><th>Plot Level</th><th>Option</th></tr>"
    string+=printPlots();
    string+='</table>';
    string+='<h3>Bonuses:</h3>'
    string+=getFarmBonusesText();
    string+="</div>";
    document.getElementById('Screen').innerHTML=string;
}
function printFarmHelp(){
    var string = '<h1 style="text-align:center">Farm</h1><hr/>';
    string += '<p>On this Screen you can buy plots and grow your crops to get bonuses</p><p>Every Seed has a different Growing time, Barley for example, takes 5 minutes to grow, and if you give it more time it will harvest more than once, but remember, after the initial 5 minutes it will start taking more time to grow to another level</p><p>Plots can level by harvesting crops, leveling up plots will unlock different seeds for you to grow which takes more times and give bonus to other areas</p>'
    document.getElementById('Screen').innerHTML=string;
}

function getFarmBonusesText(){
    string = '';
    if(farmStats.attack>1)string+='<p>Attack Multiplier: '+printNumber(farmStats.attack)+"</p>"
    if(farmStats.defense>1) string+="<p>Defense Multiplier: "+printNumber(farmStats.defense)+"</p>"
    if(farmStats.hp>1) string+="<p>HP Multiplier: "+printNumber(farmStats.hp)+"</p>"
    if(farmStats.mining>1) string+="<p>Mining Multiplier: "+printNumber(farmStats.mining)+"</p>"
    if(farmStats.farmDropMult>1) string+="<p>Farming Drops Multiplier: "+printNumber(farmStats.farmDropMult)+"</p>"
    if(farmStats.GoldMult>1) string+="<p>Gold Multiplier: "+printNumber(farmStats.GoldMult)+"</p>"
    if(farmStats.ClonesAmountMult>1) string+="<p>Clones Gaining Multiplier: "+printNumber(farmStats.ClonesAmountMult)+"</p>"
    if(farmStats.ClonesPowerMult>1) string+="<p>Clones Power Multiplier: "+printNumber(farmStats.ClonesPowerMult)+"</p>"
    if(farmStats.dojoMult>1) string+="<p>Dojo Multiplier: "+printNumber(farmStats.dojoMult)+"</p>"
    if (string == "") return "<p>No Bonuses for now bub.</p>";
    return string;
}

function getAllPlotsLevels(){
    var ret = 0;
    plots.forEach(p=>{
        if (p.got) ret +=p.level;
    })
    return ret;
}

function getSeeds(){
    var str="";
    var plotsLvl = getAllPlotsLevels();
    for(var i=0;i<crops.length;i++){
        if(crops[i].unlockAt<=plotsLvl){
            str+="<label onClick='selectSeed("+i+")'><input type='radio' name='seed' ";
            if(i==cropSelected)str+="checked";
            str+=">"+crops[i].name+"</label><br/>"
        }
    }
    str+="<hr/><p>Growth Time: "+printTime(crops[cropSelected].growthTime*getArenaFarmTimeRedMultiplier())+"</p><p>Bonus: "+getSeedBonus()+"</p>"
    return str;
}

function getSeedBonus(){
    var t = crops[cropSelected].type
    if(t=="Attack")return "Strength";
    if(t=="FarmDrop") return "Farm";
    if(t=="GoldMult")return "Gold Multiplier";
    if(t=="CloneAmount") return "Clone Amount";
    if(t=="ClonePower") return "Clone Power";
    return t;
}

function selectSeed(seed){
    cropSelected=seed;
    loadScreen();
}

function printPlots(){
    var str = "";
    for(var i = 0;i<plots.length;i++){
        var p = plots[i];
        str+="<tr><td>"
        if(p.crop==-1) str+="None</td>"
        else str+=(crops[p.crop].name+"</td>")
        str+="<td>"+printTime(p.curTime)+"</td><td>"+p.level+"</td>"
        if(p.got){
            if(p.crop==-1) str+="<td><button onClick='Plant("+i+")'>Plant Crop</button></td></tr>"
            else{
                if(p.curTime>=crops[p.crop].growthTime*getArenaFarmTimeRedMultiplier())str+="<td><button onClick='Harvest("+i+")'>Harvest</button></td></tr>"
                else str+="<td><button onClick='Harvest("+i+")' disabled>Harvest</button></td></tr>"
            }
        }
        else str+="<td><button onClick='unlockPlot("+i+")'>Buy for "+printNumber(Math.pow(1000,i))+"</button></td></tr>";
    }
    return str;
}


function unlockPlot(plotN){
    if(player.money>=Math.pow(1000,plotN)){
        player.money-=Math.pow(1000,plotN);
        plots[plotN].got=true;
        plots[plotN].xp = Math.pow(1+getBonusRebirthSum("PlotLvl",0),2);
        plots[plotN].level = 1+getBonusRebirthSum("PlotLvl",0);
    }
    loadScreen();
}

function Plant(plotN){
    if (plots[plotN].crop==-1){
        plots[plotN].crop = cropSelected;
    }
    loadScreen();
}

function Harvest(plotN){
    if (plots[plotN].crop!=-1){
        AddAction(1,"Harvest");
        var growth = getCrop(plots[plotN].crop,plots[plotN].curTime,plots[plotN].level);
        lifeStats.totalCropsGrown+=growth;
        stats.totalCropsGrown+=growth;
        giveXPToPlot(plotN,growth);
        plots[plotN].crop = -1;
        plots[plotN].curTime=0;
    }
    loadScreen();
}

function giveXPToPlot(plotN,xp){
    plots[plotN].xp += xp*farmStats.farmXPMult*getArenaFarmXPMultiplier();
    plots[plotN].level = Math.floor(Math.sqrt(plots[plotN].xp));
}
function getCrop(cropN,time,lvl){
    var crop = crops[cropN];
    var growthAmount = getGrowth(crop.growthTime,time)
    var bonus = crop.bonus * growthAmount * lvl * farmStats.farmDropMult *getBonusRebirth("FarmDrops") *getWarehouseFarmingDrops() *getArenaFarmDropMultiplier() *getBountyFarm();
    var type = crop.type;
    if(type=="Attack")  farmStats.attack+=bonus;
    else if(type=="Defense")    farmStats.defense+=bonus;
    else if(type=="HP")    farmStats.hp+=bonus;
    else if(type=="Gold")   player.money+=bonus;
    else if(type=="Mining") farmStats.mining+=bonus;
    else if(type=="FarmXP") farmStats.farmXPMult+=bonus;
    else if(type=="FarmDrop") farmStats.farmDropMult+=bonus;
    else if(type=="CloneAmount") farmStats.ClonesAmountMult+=bonus;
    else if(type=="ClonePower") farmStats.ClonesPowerMult+=bonus;
    else if(type=="GoldMult") farmStats.GoldMult+=bonus;
    else if(type=="Dojo") farmStats.dojoMult+=bonus;
    else{
        alert("Bug found, please send the seed name to Ash031")
    }
    return growthAmount;
}

function getGrowth(growth, time){
    var ret = 0;
    time*=getArenaFarmTimeRedMultiplier();
    while(time>=growth){
        ret++;
        growth*=1.5;
    }
    return ret;
}

function grow(){
    plots.forEach(plot =>{
        if (plot.got && plot.crop!=-1) plot.curTime++;
    })
}

function growOffline(time){
    plots.forEach(p=>{
        if(p.got && p.crop!=-1) p.curTime+=time;
    })
}