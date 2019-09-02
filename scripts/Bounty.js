function printBounty(){
    string = getBountyTable();
    string += getBountyBonuses();
    return string;
}

function getBountyTable(){
    if(availableBounties.length==0) rebirthBounty();
    string = "<table class='w3-table-all'><tr><th>Description</th><th>Progress</th><th>Bonuses</th><th>Effect</th></tr>"
    availableBounties.forEach(b=>{
        string += "<tr><td>"+getBountyDesc(b.objective)+"</td>"
        if(b.cur<b.amount) string += "<td>"+printNumber(b.cur)+"/"+printNumber(b.amount)+"</td>"
        else string += "<td>Done!</td>"
        string += "<td>"+getBountyBonus(b)+"</td><td>"
        if(b.time==-1) string += "Permanent"
        else string += printTime(b.time)
        string += "</tr>"
    })    
    string+="</table>"
    return string;
}

function getBountyBonus(bounty){
    var string = "X"+(1+bounty.bonus)+" ";
    if(bounty.type=="Dojo") return string + "Dojo Stats"
    if(bounty.type=="Farm") return string + "Farm Drops"
    if(bounty.type=="WarehouseSpeed") return string + "Warehouse Speed"
    if(bounty.type=="UpgradeCratesMulti") return string + "Warehouse Upgrade Crates Multiplier"
    if(bounty.type=="GoldMulti") return string + "Money Multiplier"
    if(bounty.type=="MainStats") return string + "Strength & Defense"
    if(bounty.type=="ArenaTokens") return string + "Arena Tokens"
    return string + bounty.type;
}

function getBountyDesc(objective){
    if(objective=="Kill") return "Defeat Dojo Enemies"
    if(objective=="Harvest") return "Harvest Crops"
    if(objective=="Contracts") return "Finish Warehouse Contracts"
    if(objective=="Upgrade") return "Rank up your Warehouse"
    if(objective=="Mine") return "Mine Ores"
    if(objective=="MineDiamantium") return "Mine Diamantium Ore"
    if(objective=="SpendGold") return "Spend Money"
    if(objective=="KillArenaBoss") return "Defeat Arena Bosses"
    if(objective=="SpendArenaTokens") return "Spend Token in the Arena"
    return objective
} 

function getBountyBonuses(){
    string = "<h4>Bonuses</h4><div class='w3-col m6 l6'><h5>Permanent</h5>"+getBountyPerm()+"</div><div class='w3-col m6 l6'><h5>Temporary</h5>"+getBountyTemp()+"</div>"
    return string;
}

function getBountyTemp(){
    var string = "<table class='w3-table-all'><tr><th>Bonus</th><th>Time</th></tr>"
    bountyStats.temp.forEach(b=>{
        string += "<tr><td>"+getBountyBonus(b)+"</td><td>"+printTime(b.time)+"</td></tr>"
    })
    return string;
}

function getBountyPerm(){
    var string = "<table class='w3-table-all'><tr><th>Bonus</th><th>Amount</th></tr>"
    string += "<tr><td>Strength and Defense</td><td>X"+bountyStats.perm.mainStats+"</td></tr>"
    string += "<tr><td>Mining</td><td>X"+bountyStats.perm.mining+"</td></tr>"
    string += "<tr><td>Farm Drops</td><td>X"+bountyStats.perm.farm+"</td></tr>"
    string += "<tr><td>Upgrade Crates Value</td><td>X"+bountyStats.perm.cratesMulti+"</td></tr>"
    string += "<tr><td>Warehouse Speed</td><td>X"+bountyStats.perm.warehouseSpeed+"</td></tr></table>"
    return string;
}

function rebirthBounty(){
    for(var i = 0;i<3+getBonusRebirthSum("ExtraBounty",0);i++){
        availableBounties[i] = getRandomBounty();
    }
}

function getRandomBounty(){
    var bounty =  clone(bounties[Math.floor(bounties.length*Math.random())])
    bounty.cur = 0;
    return bounty
}

function AddAction(amount,action){
    availableBounties.forEach(b=>{
        if(b.objective==action && b.cur<b.amount){
            b.cur+=amount;
            if(b.cur>=b.amount) rewardBounty(b);
        }
    })
}

function rewardBounty(bounty){
    if(bounty.time==-1){
        console.log(bounty)
        if(bounty.type=="Dojo") bountyStats.perm.dojo+=bounty.bonus;
        if(bounty.type=="Farm") bountyStats.perm.farm+=bounty.bonus;
        if(bounty.type=="WarehouseSpeed") bountyStats.perm.warehouseSpeed+=bounty.bonus;
        if(bounty.type=="UpgradeCratesMulti") bountyStats.perm.cratesMulti+=bounty.bonus;
        if(bounty.type=="MainStats") bountyStats.perm.mainStats+=bounty.bonus;
        if(bounty.type=="Mining") bountyStats.perm.mining+=bounty.bonus;
    }
    else{
        var bonus = {time: bounty.time,bonus: bounty.bonus,type: bounty.type}
        bountyStats.temp.push(bonus)
    }
}

function tickBounty(){
    bountyStats.temp.forEach(b=>{
        b.time--;
    })
    bountyStats.temp = bountyStats.temp.filter(b=>b.time>0)
}

function getBountyDojo(){
    return bountyStats.perm.dojo;
}

function getBountyFarm(){
    return bountyStats.perm.farm;
}

function getBountyWarehouseSpeeed(){
    return bountyStats.perm.warehouseSpeed;
}

function getBountyWarehouseCrate(){
    return bountyStats.perm.cratesMulti;
}

function getBountyMainStats(){
    return bountyStats.perm.mainStats;
}
function getBountyMining(){
    var ret = 1;
    bountyStats.temp.forEach(b=>{
        if(b.type=="Mining") ret *= (1+b.bonus)
    })
    return ret*bountyStats.perm.mining;
}   
function getBountyMoney(){
    var ret = 1;
    bountyStats.temp.forEach(b=>{
        if(b.type=="GoldMulti") ret *= (1+b.bonus)
    })
    return ret;
}

function getBountyArenaTokens(){
    var ret = 1;
    bountyStats.temp.forEach(b=>{
        if(b.type=="ArenaTokens") ret *= (1+b.bonus)
    })
    return ret;
}