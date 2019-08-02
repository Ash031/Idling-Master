function printWerehouse(){
    var string = '<h1 style="text-align:center">Werehouse</h1>';
    string += getWerehouseTable();
    document.getElementById('Screen').innerHTML=string;
}

function getWerehouseTable(){
    var string = '<table class="w3-table-all"><tr><th>Money Needed</th><th>Clones Needed</th><th>Time Remaining</th><th>Bonus</th><th></th></tr>'
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
    string+=" Multiplier"
    return string;
}

function workOnWerehouse(){
    console.log(1)
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
    console.log("Toggled")
    if(!contract.paid){
        console.log("Toggled2")
        if(player.money>=contract.gold){ 
            player.money-=contract.gold;
            contract.gold=0;
            contract.paid = true;
            choosableContracts[i] = contract
        }
        else return;
        console.log("Toggled3")
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
    if(contract.type == "Upgrade") werehouse.upgradeCrates += contract.bonus;
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
