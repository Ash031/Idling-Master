function printCity(){
    var string = '<h1 style="text-align: center">City</h1><hr/>'
    string += getCityButtons();
    string += printBuilding();
    document.getElementById('Screen').innerHTML=string;
}

function getCityButtons(){
    string  = '<p><button onClick="goToTownHall()">Town Hall</button><button onClick="goToConstrutionOffice()">Contruction Office</button>'
    string += '<button onClick="goToBank()">Bank</button><button onClick="goToImmigrationOffice()">Immigration Office</button>'
    string +='</p><hr/>'
    return string;
}

function printBuilding(){
    if(selectedBuilding=="TownHall") return printTownHall();
}

function printTownHall(){
    var string = "<p><b>Money Available:</b>"+city.money+"</p><p><b>Workers Available:</b>"+city.clones+"</p>"
    string += ""
    return string;
}

function goToTownHall(){
    selectedBuilding = "TownHall"
    loadScreen();
}
function goToConstrutionOffice(){
    selectedBuilding = "Constrution"
}