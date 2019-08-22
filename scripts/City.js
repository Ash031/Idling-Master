function printCity(){
    var string = '<h1 style="text-align: center">City</h1><hr/>'
    string += getCityInfo();
    string += getCityButtons();
    string += printBuilding();
    document.getElementById('Screen').innerHTML=string;
}

function getCityInfo(){
    return "<p><b>Workers Available:</b>"+city.clones+"</p>"
}

function getCityButtons(){
    string  = '<p><button onClick="goToTownHall()">Town Hall</button><button onClick="goToConstrutionOffice()">Contruction Office</button>'
    string +='</p><hr/>'
    return string;
}

function printBuilding(){
    if(selectedBuilding=="TownHall") return printTownHall();
    else if(selectedBuilding=="Constrution") return printConstruction();
}

function printTownHall(){
    string  = "<h3>Clones:</h3><button onClick=\"AddClonesToCity()\">Add Clones</button><button onClick='RemoveClonesOnCity()'>Remove Clones</button>"
    return string;
}

function printConstruction(){
    var string = "<table class='w3-table-all'><tr><th>Name</th><th>Level</th><th>Cost</th><th>Time Remaining</th><th>Bonus</th><th></th></tr>";
    string += getConstructionTable();
    string += "</table>"
    return string;
}

function getConstructionTable(){
    var string = "";
    cityBuildings.forEach(b=>{
        string += "<tr><td>"+b.name+"</td><td>"+b.lvl+"</td><td>"+b.cost*(1+b.lvl)+"</td><td>"+printTime(b.curTime)+"</td><td>"+printNumber(1+b.lvl*b.bonus)+"</td><td><button"
        if(!b.paid)string += " onClick='buyConstruction("+cityBuildings.indexOf(b)+")''>Buy</button></td></tr>"
        else{
            string += " onClick='toggleBuilding("+cityBuildings.indexOf(b)+") '"
            if(b.curTime==0)" disabled>Regroup!"
            else if(b.working) string += ">Stop"
            else string += ">Work"
            string += "</button></td></tr>"
        }
    })
    return string;
}

function buyConstruction(i){
    if(spendMoney(cityBuildings[i].cost*(cityBuildings[i].lvl+1))){
        cityBuildings[i].paid=true
    }
    loadScreen();
}

function toggleBuilding(i){
    cityBuildings[i].working = !cityBuildings[i].working
    loadScreen();
}

function workOnCity(){
    var working = 0;
    cityBuildings.forEach(b=>{
        if (b.working) working++;
    })
    working= city.clones/working;
    cityBuildings.forEach(b=>{
        if(b.working){
            b.curTime-=working;
            if(b.curTime<0){
                b.working=false;
                b.curTime=0;
                b.lvl++;
            }
        }
    })
}

function goToTownHall(){
    selectedBuilding = "TownHall"
    loadScreen();
}
function goToConstrutionOffice(){
    selectedBuilding = "Constrution"
    loadScreen();
}

function AddClonesToCity(){
    var clones = getClones();
    if (clones>player.idleClones) clones = player.idleClones;
    city.clones += clones;
    player.idleClones-= clones;
}

function RemoveClonesOnCity(){
    var clones = getClones();
    if(clones>city.clones) clones = city.clones;
    city.clones-=clones;
    player.idleClones+=clones;
}