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

function getOreTables(){
    var string = '<table class="w3-table-all">';
    for(var i = 0;i<4;i++){
        string += '<tr>';
        for(var j=0;j<3;j++){
            string +='<td><p style="text-align:center">'+ores[i*3+j].name+'</p><button class="w3-button w3-green" onclick="removeCloneToOre('+i*3+j+');">-</button>'+printNumber(ores[i*3+j].clones)+'<button style="float:right"class="w3-button w3-green" onclick="addCloneToOre('+i*3+j+')">+</button></td>';
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
}

function removeCloneToOre(ore){
    var clones = getClones();
    if(clones>ores[ore].clones)clones = ores[ore].clones;
    player.idleClones+=clones;
    ores[ore].clones-=clones;
}

function getOres(){
    var string = '';
    for(var i = 0;i< 12; i++){
        string += '<p>'+ores[i].name+':'+printNumber(Math.floor(ores[i].quant))+'</p>'
    }
    return string;
}
    
function minePerSec(i){
    return ores[i].mult*ores[i].clones*farmStats.mining*getBonusRebirth("Mining")*getWerehouseMining();
}

function mineOffline(time){
    for(var i=0;i<12;i++){
        mined = minePerSec(i);
        ores[i].quant += time;
        stats.totalOresMined+=time*mined;
        lifeStats.totalOresMined+=time*mined;
    }
}

function mine(){
    for(var i=0;i<12;i++){
        mined = minePerSec(i);
        ores[i].quant += mined;
        stats.totalOresMined+=mined;
        lifeStats.totalOresMined+=mined;
    }
}