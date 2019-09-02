function printStats(){
    var string = '<h1 style="text-align: center">Statistics</h1><hr/>';
    if(statsPage=="") string += printNormalStats();
    if(statsPage=="Strength") string+= printStatsStrength();
    if(statsPage=="Dojo") string+= printStatsDojo();
    if(statsPage=="Mine") string+= printStatsMine();
    if(statsPage=="Misc") string+= printStatsMisc();
    document.getElementById('Screen').innerHTML=string;
}

function printNormalStats(){
    var string = '<p><b>Total Bosses Defeated:</b>'+stats.totalBossesKilles+' ('+lifeStats.totalBossesKilles+')</p>';
    string += '<p><b>Total Dojo Enemies Defeated:</b>'+stats.totalDojoEnemies+' ('+lifeStats.totalDojoEnemies+')</p>';
    string += '<p><b>Total Time:</b>'+printTime(stats.totalSeconds)+' ('+printTime(lifeStats.totalSeconds)+')</p>';
    string += '<p><b>Total Ores Mined:</b>'+printNumber(stats.totalOresMined)+' ('+printNumber(lifeStats.totalOresMined)+')</p>';
    string += '<p><b>Total Crops Grown:</b>'+printNumber(stats.totalCropsGrown)+' ('+printNumber(lifeStats.totalCropsGrown)+')</p>';
    string += '<p><b>Total Arena Bosses Killed:</b>'+printNumber(stats.totalArenaBosses)+' ('+printNumber(lifeStats.totalArenaBosses)+')</p>';
    string += '<p><b>Total Contracts Finished:</b>'+printNumber(stats.totalContractsDone)+' ('+printNumber(lifeStats.totalContractsDone)+')</p>';
    string += '<p><b>Total Warehouse Rank Ups:</b>'+printNumber(stats.totalRankUpsWarehouse)+' ('+printNumber(lifeStats.totalRankUpsWarehouse)+')</p>';
    '<hr/>';
    string+='<button style="width: 100%" class="w3-button w3-dark-gray" onclick="changeNotation()">Notation: '
    if(options.number== undefined || options.number==0) string += "Scientific Notation"
    if(options.number==1) string += "Short Number Notation"
    string += '</button><button style="width: 100%" class="w3-button w3-dark-gray" onClick="SeeAllStats()">Display Multipliers</button><hr/>';
    string+='<button style="width: 100%" class="w3-button w3-dark-gray" onclick="newGame()">Reset Save</button>'
    return string;
}

function printStatsStrength(){
    var string = getStatsButtons();
    string += "<hr/><div class='w3-row'><div class='w3-col l6 m6'><h5>Strength:</h5><table class='w3-table-all'><tr><td>Base:</td><td>"+printNumber(player.strength)+"</td></tr>"
    string += "<tr><td>Regroup Multi:</td><td>"+printNumber(getRBAttack())+"</td></tr>"
    string += "<tr><td>Dojo Multi:</td><td>"+printNumber(1+dojoStats.attack/100)+"</td></tr>"
    string += "<tr><td>Crafting Multi:</td><td>"+printNumber(getCraftingAttack())+"</td></tr>"
    string += "<tr><td>Farm Multi:</td><td>"+printNumber(getFarmAttack())+"</td></tr>"
    string += "<tr><td>Warehouse Multi:</td><td>"+printNumber(getWarehouseStrength())+"</td></tr>"
    string += "<tr><td>City Multi:</td><td>"+printNumber(getCityStrength())+"</td></tr>"
    string += "<tr><td>Bounty Multi:</td><td>"+printNumber(getBountyMainStats())+"</td></tr>"
    string += "<tr><td>Total Strenght:</td><td>"+printNumber(getRawStrength())+"</td></tr></table></div><div class='w3-col l6 m6'><h5>Defense:</h5>"
    string += "<table class='w3-table-all'><tr><td>Base:</td><td>"+printNumber(player.defense)+"</td></tr>"
    string += "<tr><td>Regroup Multi:</td><td>"+printNumber(getRBDefense())+"</td></tr>"
    string += "<tr><td>Dojo Multi:</td><td>"+printNumber(1+dojoStats.defense/100)+"</td></tr>"
    string += "<tr><td>Crafting Multi:</td><td>"+printNumber(getCraftingDefense())+"</td></tr>"
    string += "<tr><td>Farm Multi:</td><td>"+printNumber(getFarmDefense())+"</td></tr>"
    string += "<tr><td>Warehouse Multi:</td><td>"+printNumber(getWarehouseDefense())+"</td></tr>"
    string += "<tr><td>City Multi:</td><td>"+printNumber(getCityDefense())+"</td></tr>"
    string += "<tr><td>Bounty Multi:</td><td>"+printNumber(getBountyMainStats())+"</td></tr>"
    string += "<tr><td>Total Strenght:</td><td>"+printNumber(getRawDefense())+"</td></tr></table></div></div>"
    return string;
}
function printStatsMisc(){
    var string = getStatsButtons();
    string += "<hr/><div class='w3-row'><div class='w3-col l6 m6'><h5>Money:</h5><table class='w3-table-all'><tr><td>Base:</td><td>1</td></tr>"
    string += "<tr><td>Regroup Multi:</td><td>"+printNumber(getBonusRebirth("MoneyMult"))+"</td></tr>"
    string += "<tr><td>Farm Multi:</td><td>"+printNumber(farmStats.GoldMult)+"</td></tr>"
    string += "<tr><td>City Multi:</td><td>"+printNumber(getCityMoneyMult())+"</td></tr>"
    string += "<tr><td>Bounty Multi:</td><td>"+printNumber(getBountyMoney())+"</td></tr>"
    string += "<tr><td>Total Money Multipliers:</td><td>"+printNumber(getBonusRebirth("MoneyMult")*farmStats.GoldMult*getCityMoneyMult()*getBountyMoney())+"</td></tr></table></div><div class='w3-col l6 m6'><h5>Base:</h5>"
    string += "<table class='w3-table-all'><tr><td>Base:</td><td>1</td></tr>"
    string += "<tr><td>Farm Multi:</td><td>"+printNumber(farmStats.ClonesAmountMult)+"</td></tr>"
    string += "<tr><td>City Multi:</td><td>"+printNumber(getCityClonesAmount())+"</td></tr>"
    string += "<tr><td>Total Clones Multiplier:</td><td>"+printNumber(farmStats.ClonesAmountMult*getCityClonesAmount())+"</td></tr></table></div></div>"
    return string;
}

function printStatsMine(){
    var string = getStatsButtons();
    string += "<hr/><div class='w3-row'><div class='w3-col l6 m6'><h5>Mine:</h5><table class='w3-table-all'><tr><td>Base:</td><td>1</td></tr>"
    string += "<tr><td>Regroup Multi:</td><td>"+printNumber(getBonusRebirth("Mining"))+"</td></tr>"
    string += "<tr><td>Arena Multi:</td><td>"+printNumber(getArenaMineDropMultiplier())+"</td></tr>"
    string += "<tr><td>Farm Multi:</td><td>"+printNumber(farmStats.mining)+"</td></tr>"
    string += "<tr><td>Warehouse Multi:</td><td>"+printNumber(getWarehouseMining())+"</td></tr>"
    string += "<tr><td>Bounty Multi:</td><td>"+printNumber(getBountyMining())+"</td></tr>"
    string += "<tr><td>Total Mining Multipliers:</td><td>"+printNumber(farmStats.mining*getBonusRebirth("Mining")*getWarehouseMining()*getArenaMineDropMultiplier()*getBountyMining())+"</td></tr></table></div><div class='w3-col l6 m6'><h5>Farm:</h5>"
    string += "<table class='w3-table-all'><tr><td>Base:</td><td>1</td></tr>"
    string += "<tr><td>Regroup Multi:</td><td>"+printNumber(getBonusRebirth("FarmDrops"))+"</td></tr>"
    string += "<tr><td>Arena Multi:</td><td>"+printNumber(getArenaFarmDropMultiplier())+"</td></tr>"
    string += "<tr><td>Farm Multi:</td><td>"+printNumber(farmStats.farmDropMult)+"</td></tr>"
    string += "<tr><td>Warehouse Multi:</td><td>"+printNumber(getWarehouseFarmingDrops())+"</td></tr>"
    string += "<tr><td>Bounty Multi:</td><td>"+printNumber(getBountyFarm())+"</td></tr>"
    string += "<tr><td>Total Farm Multiplier:</td><td>"+printNumber(farmStats.farmDropMult *getBonusRebirth("FarmDrops") *getWarehouseFarmingDrops() *getArenaFarmDropMultiplier() *getBountyFarm())+"</td></tr></table></div></div>"
    return string;
}

function printStatsDojo(){
    var string = getStatsButtons();
    string += "<hr/><div class='w3-row'><div class='w3-col l6 m6'><h5>Attack:</h5><table class='w3-table-all'><tr><td>Base:</td><td>"+dojoStats.attack+"</td></tr>"
    string += "<tr><td>Arena Multi:</td><td>"+printNumber(getArenaDojoAttackMultiplier())+"</td></tr>"
    string += "<tr><td>Farm Multi:</td><td>"+printNumber(farmStats.dojoMult)+"</td></tr>"
    string += "<tr><td>City Multi:</td><td>"+printNumber(getCityDojo())+"</td></tr>"
    string += "<tr><td>Bounty Multi:</td><td>"+printNumber(getBountyDojo())+"</td></tr>"
    string += "<tr><td>Total Attack:</td><td>"+printNumber(getDojoAttackStatRaw())+"</td></tr></table></div><div class='w3-col l6 m6'><h5>Defense:</h5>"
    string += "<table class='w3-table-all'><tr><td>Base:</td><td>"+dojoStats.defense+"</td></tr>"
    string += "<tr><td>Arena Multi:</td><td>"+printNumber(getArenaDojoDefenseMultiplier())+"</td></tr>"
    string += "<tr><td>Farm Multi:</td><td>"+printNumber(farmStats.dojoMult)+"</td></tr>"
    string += "<tr><td>City Multi:</td><td>"+printNumber(getCityDojo())+"</td></tr>"
    string += "<tr><td>Bounty Multi:</td><td>"+printNumber(getBountyDojo())+"</td></tr>"
    string += "<tr><td>Total Clones Multiplier:</td><td>"+printNumber(getDojoDefenseStatRaw())+"</td></tr></table></div></div>"
    return string;
}

/*function getDojoDefenseStatRaw(){
    return Math.floor(dojoStats.defense
        *farmStats.dojoMult
        *getArenaDojoDefenseMultiplier()
        *getCityDojo()
        *getBountyDojo());
} */

function SeeAllStats(){
    statsPage = "Strength"
    loadScreen()
}
function CheckStrength(){
    statsPage = "Strength"
    loadScreen()
}
function CheckDojo(){
    statsPage = "Dojo"
    loadScreen()
}
function CheckMineFarm(){
    statsPage = "Mine"
    loadScreen()
}
function CheckMisc(){
    statsPage = "Misc"
    loadScreen()
}

function getStatsButtons(){
    var string = "<p><button onClick='CheckStrength()'>Main Stats</button><button onClick='CheckDojo()'>Dojo Stats</button><button onClick='CheckMineFarm()'>Mining/Farming</button><button onClick='CheckMisc()'>Misc.</button></p>"
    return string
}