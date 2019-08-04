function printWarehouse(){
    var string = '<h1 style="text-align:center">Warehouse</h1>';
    string += getWarehouseInfo();
    string += "<hr/>"
    string += getWarehouseTable();
    string +="<hr/><p><b>Multipliers:</b></p>"
    string += getWarehouseMult();
    document.getElementById('Screen').innerHTML=string;
}

function getWarehouseInfo(){
    var string = "<p><b>Warehouse Info:</b></p><p>Rank:"+warehouse.rank+" ("+warehouse.upgradeCrates+"/"+warehouse.upgradesNeeded+")</p>"
    string += "<p>Capacity: "+warehouse.used+"/"+warehouse.capacity+"</p>"
    return string;
}

function getWarehouseMult(){
    var string = ""
    if(warehouseStats.strength!=1) string += "<p>Strength Multiplier: "+warehouseStats.strength+"</p>"
    if(warehouseStats.defense!=1) string += "<p>Mining Multiplier: "+warehouseStats.defense+"</p>"
    if(warehouseStats.dojoAttack!=1) string += "<p>Mining Multiplier: "+warehouseStats.dojoAttack+"</p>"
    if(warehouseStats.dojoDefense!=1) string += "<p>Mining Multiplier: "+warehouseStats.dojoDefense+"</p>"
    if(warehouseStats.Mining!=1) string += "<p>Mining Multiplier: "+warehouseStats.Mining+"</p>"
    if(warehouseStats.farmDrop!=1) string += "<p>Mining Multiplier: "+warehouseStats.farmDrop+"</p>"
    if(string=="") return "<p>I'm sorry, but there is nothing here :(</p>"
    return string;
}

function getWarehouseTable(){
    var string = '<p><b>Contrats:</b></p><table class="w3-table-all"><tr><th>Money Needed</th><th>Clones Needed</th><th>Time Remaining</th><th>Bonus</th><th></th></tr>'
    for(var i = 0;i<warehouse.rank+2;i++){
        string+= getWarehouseRowInfo(i);
    }
    string +='</table>';
    return string
}

function getWarehouseRowInfo(num){
    var contract = choosableContracts[num];
    var string = "<tr><td>"+contract.gold+"</td><td>"+contract.clones+"</td><td>"+printTime(contract.time)+"</td><td>"
    string+=getWarehouseRowBonus(contract);
    string +="</td><td><button onClick=\"toggleContract("+num+")\">"
    if(contract.onGoing) string += "Pause"
    else{
        if(contract.paid) string += "Continue"
        else string+="Start"
    }
    string +="</button></tr>"
    return string;
}

function getWarehouseRowBonus(contract){
    var string = "+"+contract.bonus+" ";
    if(contract.type=="Strength" || contract.type=="Defense" || contract.type=="Upgrade") string+=contract.type
    if(contract.type=="DojoAttack") string+="Dojo Attack"
    if(contract.type=="DojoDefense") string+="Dojo Defense"
    if(contract.type!="Upgrade") string+=" Multiplier"
    return string;
}

function workOnWarehouse(){
    for(var i = 0;i<warehouse.rank+2;i++){
        if(choosableContracts.length<=i){
            choosableContracts[i]=ChooseRandomContract();
        }
        else if(choosableContracts[i].onGoing){
              choosableContracts[i].time--;
              if(choosableContracts[i].time==0) reedemContract(i);
        }
    }
}

function toggleContract(i){
    var contract = choosableContracts[i];
    if(!contract.paid){
        if(player.money>=contract.gold){ 
            player.money-=contract.gold;
            contract.gold=0;
            contract.paid = true;
            choosableContracts[i] = contract
        }
        else return;
    }
    if(!contract.onGoing){
        if(!putClonesToWork(contract.clones)) return;
    }
    else player.idleClones += contract.clones
    contract.onGoing = !contract.onGoing;
    choosableContracts[i] = contract;
}

function reedemContract(i){
    var contract = choosableContracts[i];
    if(contract.type == "Strength") warehouseStats.strength += contract.bonus;
    if(contract.type == "Defense") warehouseStats.defense += contract.bonus;
    if(contract.type == "DojoAttack") warehouseStats.dojoAttack += contract.bonus;
    if(contract.type == "DojoDefense") warehouseStats.dojoDefense += contract.bonus;
    if(contract.type == "Upgrade") {
        warehouse.upgradeCrates += contract.bonus;
        if( warehouse.upgradeCrates >= warehouse.upgradesNeeded){
            warehouse.rank++;
            warehouse.capacity*=5;
            warehouse.upgradesNeeded*=5;
            workOnWarehouse();
        }
    }
    else warehouse.used++;
    player.idleClones+=contract.clones;
    choosableContracts[i] = ChooseRandomContract();
}

function ChooseRandomContract(){
    var r = Math.floor(Math.random()*warehouse.rank);
    if(warehouse.capacity==warehouse.used) return Contrats[r][Contrats[r].length-1]
    var contract = clone(Contrats[r][Math.floor(Math.random()*Contrats[r].length)])
    contract.onGoing = false;
    contract.paid = false;
    return contract
}

function getWarehouseMining(){
    return warehouseStats.Mining;
}
function getWarehouseFarmingDrops(){
    return warehouseStats.farmDrop;
}
function getWarehouseStrength(){
    return warehouseStats.strength;
}
function getWarehouseDefense(){
    return warehouseStats.defense;
}
function getWarehouseDojoAttack(){
    return warehouseStats.dojoAttack;
}
function getWarehouseDojoDefense(){
    return warehouseStats.dojoDefense;
}