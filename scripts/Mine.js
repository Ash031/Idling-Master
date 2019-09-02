function printMine(){
    var string = '<h1 style="text-align:center">Mine</h1>';
    string += '<div class="w3-col l3 m3"><h2>Ores</h2>'
    string += getOres();
    string += '</div>';
    string += '<div class="w3-col l9 m9"><h2>Mining Menu</h2>'
    string += getOreTables();
    string += '<button class="w3-button w3-green" onclick="goToCrafting()">Crafting</button>';
    string += '</div>'
    document.getElementById('Screen').innerHTML=string;
}
function printMineHelp(){
    var string = '<h1 style="text-align:center">Mine</h1>';
    string += '<p>On Mining you assign clones to get you ores</p><p>Every Ore has a different Multiplier to itself, so ores like Coal and Copper are easier to mine than Diamantium, try to start out with the first 2.</p>'
    document.getElementById('Screen').innerHTML=string;
}

function getOreTables(){
    var string = '<table class="w3-table-all">';
    for(var i = 0;i<4;i++){
        string += '<tr>';
        for(var j=0;j<3;j++){
            var ore = i*3+j;
            string +='<td><p style="text-align:center">'+ores[ore].name+' ('+printNumber(minePerSec(ore))+'/s)</p><button class="w3-button w3-red" onclick="removeCloneToOre('+ore+');">-</button>'+printNumber(ores[ore].clones+getArenaMiners())+'<button style="float:right"class="w3-button w3-green" onclick="addCloneToOre('+ore+')">+</button></td>';
        }
        string += '</tr>';
    }
    string += '</table>';
    return string;
}

function addCloneToOre(ore){
    var clones = getClones();
    if(clones>player.idleClones)clones = player.idleClones;
    ores[ore].clones+=clones;
    player.idleClones-=clones;
    loadScreen();
}

function removeCloneToOre(ore){
    var clones = getClones();
    if(clones>ores[ore].clones)clones = ores[ore].clones;
    player.idleClones+=clones;
    ores[ore].clones-=clones;
    loadScreen();
}

function getOres(){
    var string = '';
    for(var i = 0;i< 12; i++){
        string += '<p>'+ores[i].name+':'+printNumber(Math.floor(ores[i].quant))+'</p>'
    }
    return string;
}
    
function minePerSec(i){
    return ores[i].mult*(ores[i].clones+getArenaMiners())*farmStats.mining*getBonusRebirth("Mining")*getWarehouseMining()*getArenaMineDropMultiplier()*getBountyMining();
}

function mineOffline(time){
    for(var i=0;i<12;i++){
        mined = minePerSec(i);
        ores[i].quant += mined*time;
        stats.totalOresMined+=time*mined;
        lifeStats.totalOresMined+=time*mined;
    }
}

function mine(){
    for(var i=0;i<12;i++){
        var mined = minePerSec(i);
        AddAction(mined,"Mine");
        if(i==11) AddAction(mined,"MineDiamantium")
        ores[i].quant += mined;
        stats.totalOresMined+=mined;
        lifeStats.totalOresMined+=mined;
    }
}