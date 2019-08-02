function printWerehouse(){
    var string = '<h1 style="text-align:center">Werehouse</h1>';
    string += getWerehouseInfo();
    string += "<hr/>"
    string += getWerehouseTable();
    string +="<hr/><p><b>Multipliers:</b></p>"
    string += getWerehouseMult();
    document.getElementById('Screen').innerHTML=string;
}

function getWerehouseInfo(){
    var string = "<p><b>Werehouse Info:</b></p><p>Rank:"+werehouse.rank+" ("+werehouse.upgradeCrates+"/"+werehouse.upgradesNeeded+")</p>"
    string += "<p>Capacity: "+werehouse.used+"/"+werehouse.capacity+"</p>"
    return string;
}

function getWerehouseMult(){
    var string = ""
    if(werehouseStats.strength!=1) string += "<p>Strength Multiplier: "+werehouseStats.strength+"</p>"
    if(werehouseStats.defense!=1) string += "<p>Mining Multiplier: "+werehouseStats.defense+"</p>"
    if(werehouseStats.dojoAttack!=1) string += "<p>Mining Multiplier: "+werehouseStats.dojoAttack+"</p>"
    if(werehouseStats.dojoDefense!=1) string += "<p>Mining Multiplier: "+werehouseStats.dojoDefense+"</p>"
    if(werehouseStats.Mining!=1) string += "<p>Mining Multiplier: "+werehouseStats.Mining+"</p>"
    if(werehouseStats.farmDrop!=1) string += "<p>Mining Multiplier: "+werehouseStats.farmDrop+"</p>"
    if(string=="") return "<p>I'm sorry, but there is nothing here :(</p>"
    return string;
}

function getWerehouseTable(){
    var string = '<p><b>Contrats:</b></p><table class="w3-table-all"><tr><th>Money Needed</th><th>Clones Needed</th><th>Time Remaining</th><th>Bonus</th><th></th></tr>'
    for(var i = 0;i<werehouse.rank+2;i++){
        string+= getWerehouseRowInfo(i);
    }
    string +='</table>';
    return string
}

function getWerehouseRowInfo(num){
    var contract = choosableContracts[num];
    var string = "<tr><td>"+contract.gold+"</td><td>"+contract.clones+"</td><td>"+printTime(contract.time)+"</td><td>"
    string+=getWerehouseRowBonus(contract);
    string +="</td><td><button onClick=\"toggleContract("+num+")\">"
    if(contract.onGoing) string += "Pause"
    else{
        if(contract.paid) string += "Continue"
        else string+="Start"
    }
    string +="</button></tr>"
    return string;
}

function getWerehouseRowBonus(contract){
    var string = "+"+contract.bonus+" ";
    if(contract.type=="Strength" || contract.type=="Defense" || contract.type=="Upgrade") string+=contract.type
    if(contract.type=="DojoAttack") string+="Dojo Attack"
    if(contract.type=="DojoDefense") string+="Dojo Defense"
    if(contract.type!="Upgrade") string+=" Multiplier"
    return string;
}

function workOnWerehouse(){
    for(var i = 0;i<werehouse.rank+2;i++){
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
    if(contract.type == "Strength") werehouseStats.strength += contract.bonus;
    if(contract.type == "Defense") werehouseStats.defense += contract.bonus;
    if(contract.type == "DojoAttack") werehouseStats.dojoAttack += contract.bonus;
    if(contract.type == "DojoDefense") werehouseStats.dojoDefense += contract.bonus;
    if(contract.type == "Upgrade") {
        werehouse.upgradeCrates += contract.bonus;
        if( werehouse.upgradeCrates >= werehouse.upgradesNeeded){
            werehouse.rank++;
            werehouse.capacity*=5;
            werehouse.upgradesNeeded*=5;
            workOnWerehouse();
        }
    }
    else werehouse.used++;
    player.idleClones+=contract.clones;
    choosableContracts[i] = ChooseRandomContract();
}

function ChooseRandomContract(){
    var r = Math.floor(Math.random()*werehouse.rank);
    if(werehouse.capacity==werehouse.used) return Contrats[r][Contrats[r].length-1]
    var contract = clone(Contrats[r][Math.floor(Math.random()*Contrats[r].length)])
    contract.onGoing = false;
    contract.paid = false;
    return contract
}

function getWerehouseMining(){
    return werehouseStats.Mining;
}
function getWerehouseFarmingDrops(){
    return werehouseStats.farmDrop;
}
function getWerehouseStrength(){
    return werehouseStats.strength;
}
function getWerehouseDefense(){
    return werehouseStats.defense;
}
function getWerehouseDojoAttack(){
    return werehouseStats.dojoAttack;
}
function getWerehouseDojoDefense(){
    return werehouseStats.dojoDefense;
}