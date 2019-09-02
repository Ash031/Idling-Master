function printWarehouse(){
    var string = '<h1 style="text-align:center">Warehouse</h1><hr/>';
    string += getWarehouseInfo();
    string += "<hr/>"
    string += getWarehouseTable();
    string +="<hr/><p><b>Multipliers:</b></p>"
    string += getWarehouseMult();
    document.getElementById('Screen').innerHTML=string;
}
function printWarehouseHelp(){
    var string = '<h1 style="text-align:center">Warehouse</h1><hr/>';
    string += '<p>On this screen you get to complete contracts to get bonuses or expand your warehouse with Upgrade Crates.</p><p>In Warehouse you pay for a contract and assign clones to do them for you, you only need to pay once and can pause them at any time to use the clones elsewhere and resume when you have the clones necessarily for it.</p><p>Ranking up your warehouse will unlock higher Tiers of Contracts, these need more clones, gold and time but will also award you bigger bonuses and different ones, Tier 1 only has main stats bonuses and tier 2 will give better bonuses for these and for extra areas like Mining</p>'
    document.getElementById('Screen').innerHTML=string;
}

function getWarehouseSpace(){
    return warehouse.capacity
        +getBonusRebirthSum("WarehouseSpace",0)
}

function neededToUpgradeWarehouse(){
    return (warehouse.upgradesNeeded
        -getArenaWarehouseUpgradesDecMultiplier()
        -getBonusRebirthSum("WarehouseCrateRed",0))
}

function getWarehouseInfo(){
    var string = "<p><b>Warehouse Info:</b></p><p>Rank:"+warehouse.rank+" ("+warehouse.upgradeCrates+"/"+neededToUpgradeWarehouse()+")</p>"
    string += "<p>Capacity: "+warehouse.used+"/"+getWarehouseSpace()+"</p>"
    if(getBonusRebirthSum("AutoContract",0)==1){
        string += "<button onClick='switchedContractor()'>Auto Contractor: "
        if(autoContract) string+= "ON"
        else string += "OFF"
        string += "</button>"
    }
    return string;
}

function switchedContractor(){
    autoContract=!autoContract;
    loadScreen();
}

function getWarehouseMult(){
    var string = ""
    if(getWarehouseStrength()!=1) string += "<p>Strength Multiplier: "+printNumber(getWarehouseStrength())+"</p>"
    if(getWarehouseDefense()!=1) string += "<p>Mining Multiplier: "+printNumber(getWarehouseDefense())+"</p>"
    if(getWarehouseDojoAttack()!=1) string += "<p>Dojo Attack Multiplier: "+printNumber(getWarehouseDojoAttack())+"</p>"
    if(getWarehouseDojoDefense()!=1) string += "<p>Dojo Defense Multiplier: "+printNumber(getWarehouseDojoDefense())+"</p>"
    if(getWarehouseMining()!=1) string += "<p>Mining Multiplier: "+printNumber(getWarehouseMining())+"</p>"
    if(getWarehouseFarmingDrops()!=1) string += "<p>Farming Multiplier: "+printNumber(getWarehouseFarmingDrops())+"</p>"
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
    if(contract==undefined){
        contract = ChooseRandomContract();
        choosableContracts[num] = contract
    }
    var string = "<tr><td>"+contract.gold+"</td><td>"+contract.clones+"</td><td>"+printTime(Math.floor(contract.time))+"</td><td>"
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
    if(contract.type=="Strength" || contract.type=="Defense" || contract.type=="Upgrade" || contract.type=="Mining") string+=contract.type
    if(contract.type=="DojoAttack") string+="Dojo Attack"
    if(contract.type=="DojoDefense") string+="Dojo Defense"
    if(contract.type=="FarmDrops") string+="Crops"
    if(contract.type!="Upgrade") string+=" Multiplier"
    return string;
}

function workOnWarehouse(){
    for(var i = 0;i<warehouse.rank+2;i++){
        if(choosableContracts.length<=i){
            choosableContracts[i]=ChooseRandomContract();
        }
        else if(choosableContracts[i].onGoing){
              choosableContracts[i].time-=(1+(getBonusRebirthSum("ContractSpeed",0)+getBountyWarehouseSpeeed()));
              if(choosableContracts[i].time<=0) reedemContract(i);
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
    loadScreen();
}

function reedemContract(i){
    lifeStats.totalContractsDone++;
    stats.totalContractsDone++;
    AddAction(1,"Contract");
    var contract = choosableContracts[i];
    if(contract.type == "Strength") warehouseStats.strength += contract.bonus;
    if(contract.type == "Defense") warehouseStats.defense += contract.bonus;
    if(contract.type == "DojoAttack") warehouseStats.dojoAttack += contract.bonus;
    if(contract.type == "DojoDefense") warehouseStats.dojoDefense += contract.bonus;
    if(contract.type == "FarmDrops") warehouseStats.farmDrop += contract.bonus;
    if(contract.type == "Mining") warehouseStats.Mining += contract.bonus;
    if(contract.type == "Upgrade") {
        warehouse.upgradeCrates += Math.floor(contract.bonus*getBountyWarehouseCrate());
        if( warehouse.upgradeCrates >= neededToUpgradeWarehouse()){
            warehouse.rank++;
            AddAction(1,"Upgrade")
            lifeStats.totalRankUpsWarehouse++;
            stats.totalRankUpsWarehouse++;
            warehouse.capacity*=5;
            warehouse.upgradesNeeded*=5;
            workOnWarehouse();
        }
    }
    else warehouse.used++;
    player.idleClones+=contract.clones;
    choosableContracts[i] = ChooseRandomContract();
    loadScreen();
}

function ChooseRandomContract(){
    var r = Math.floor(Math.random()*warehouse.rank);
    if(getWarehouseSpace()==warehouse.used) return Contrats[r][Contrats[r].length-1]
    var contract = clone(Contrats[r][Math.floor(Math.random()*Contrats[r].length)])
    contract.time*=(1-getBonusRebirthSum("ContractTimeRed",0))
    if(autoContract && contract.clones<=player.idleClones && spendMoney(contract.gold)){
        player.idleClones-=contract.clones
        contract.paid = true;
        contract.onGoing = true;
    }
    else{
        contract.paid = false;
        contract.onGoing = false;
    }
    return contract
}

function getWarehouseMining(){
    return 1+((warehouseStats.Mining-1)*getArenaWarehouseMultiplier());
}
function getWarehouseFarmingDrops(){
    return 1+((warehouseStats.farmDrop-1)*getArenaWarehouseMultiplier());
}
function getWarehouseStrength(){
    return 1+((warehouseStats.strength-1)*getArenaWarehouseMultiplier());
}
function getWarehouseDefense(){
    return 1+((warehouseStats.defense-1)*getArenaWarehouseMultiplier());
}
function getWarehouseDojoAttack(){
    return 1+((warehouseStats.dojoAttack-1)*getArenaWarehouseMultiplier());
}
function getWarehouseDojoDefense(){
    return 1+((warehouseStats.dojoDefense-1)*getArenaWarehouseMultiplier());
}

function warehouseOffline(time){
    choosableContracts.forEach(c=>{
        if(c.onGoing){
            c.time-=time;
        }
    })
}