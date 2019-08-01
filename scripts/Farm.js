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

function getFarmBonusesText(){
    string = '';
    if(farmStats.attack>1)string+='<p>Attack Multi: '+printNumber(farmStats.attack)+"</p>"
    if(farmStats.defense>1) string+="<p>Defense Mult: "+printNumber(farmStats.defense)+"</p>"
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
    return str;
}

function selectSeed(seed){
    cropSelected=seed;
}

function printPlots(){
    var str = "";
    for(var i = 0;i<plots.length;i++){
        var p = plots[i];
        str+="<tr><td>"
        if(p.crop==-1) str+="None</td>"
        else str+=(crops[p.crop].name+"</td>")
        str+="<td>"+p.curTime+"</td><td>"+p.level+"</td>"
        if(p.got){
            if(p.crop==-1) str+="<td><button onClick='Plant("+i+")'>Plant Crop</button></td></tr>"
            else{
                if(p.curTime>=crops[p.crop].growthTime)str+="<td><button onClick='Harvest("+i+")'>Harvest</button></td></tr>"
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
        plots[plotN].xp = 1;
        plots[plotN].level = 1;
    }
}

function Plant(plotN){
    if (plots[plotN].crop==-1){
        plots[plotN].crop = cropSelected;
    }
}

function Harvest(plotN){
    if (plots[plotN].crop!=-1){
        var growth = getCrop(plots[plotN].crop,plots[plotN].curTime,plotN);
        giveXPToPlot(plotN,growth);
        plots[plotN].crop = -1;
        plots[plotN].curTime=0;
    }
}

function giveXPToPlot(plotN,xp){
    plots[plotN].xp += xp;
    plots[plotN].level = Math.floor(Math.sqrt(plots[plotN].xp)*farmStats.farmXPMult);
}

function getCrop(cropN,time){
    var crop = crops[cropN];
    var growthAmount = getGrowth(crop.growthTime,time)
    var bonus = crop.bonus * growthAmount * crop.level * farmStats.farmDropMult;
    var type = crop.type;
    if(type=="Attack")  farmStats.attack+=bonus;
    else if(type=="Defense")    farmStats.defense+=bonus;
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