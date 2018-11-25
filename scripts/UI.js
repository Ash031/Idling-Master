function loadScreen(){
    loadPlayerScreen();
    if(options.menu=="Bosses"){
        printBoss();
    }
    else if(options.menu=="Training"){
        printTraining();
    }
    else if(options.menu=="Dojo"){
        printDojo();
    }
    else if(options.menu=="Shop"){
        printShop();
    }
    else if(options.menu=="Stats"){
        printStats();
    }
    else if(options.menu=="Farm"){
        printFarm();
    }
}

function printStats(){
    var string = '<h1 style="text-align: center">Statistics</h1><hr/>';
    string += '<p><b>Total Bosses Defeated:</b>'+stats.totalBossesKilles+'</p>';
    string += '<p><b>Total Dojo Enemies Defeated:</b>'+stats.totalDojoEnemies+'</p>';
    string += '<p><b>Total Seconds Online:</b>'+stats.totalSeconds+'</p>';
    document.getElementById('Screen').innerHTML=string;
}


function loadTutorial(){
    var string = '<h1 style="text-align: center">Tutorial</h1><hr/';
    document.getElementById('Screen').innerHTML=string;
}


//MENU SWITCHING
function goToTraining(){
    options.menu="Training";
    loadScreen();
}

function goToBosses(){
    options.menu="Bosses";
    loadScreen();
}

function goToDojo(){
    options.menu="Dojo";
    loadScreen();
}

function goToShop(){
    options.menu="Shop";
    loadScreen();
}

function goToStats(){
    options.menu="Stats";
    loadScreen();
}

function goToFarm(){
    options.menu="Farm";
    loadScreen();
}

function printBoss(){
    var string = '<h1 style="text-align: center">Boss Menu</h1><hr/>';
    string += '<h1>Boss Number '+values.boss+'</h1>';
    string += '<h3>Boss Attack: '+curBoss.attack+'</h3><br/>';
    string += '<h3>Boss Health: '+curBoss.curhp+'/'+curBoss.hp+'</h2>';
    string += '<button class="w3-button w3-red" onclick="action.attacking=true;">Figth</button><hr/>';
    string += pastConsole;
    document.getElementById('Screen').innerHTML=string;
}


//Player UI

function loadPlayerScreen(){
    var string = "<h1>Player Stats:</h1><hr/>";
    string+= '<h4>HP:'+player.curhp+'/'+player.hp+'</h4>';
    string+= '<h4>Strength:'+getStrength()+'</h4>';
    string+= '<h4>Defense:'+getDefense()+'</h4>';
    string+= '<h4>Clone Counter:'+player.idleClones+'/'+player.maxClones+'</h4>';
    string+= '<h4>Moneys:'+player.money+'</h4>'
    string+= '<button style="width: 100%" class="w3-button w3-dark-gray" onclick="rebirth()" disabled>Don\'t click me</button><hr/>'
    string+='<button style="width: 100%" class="w3-button w3-dark-gray" onclick="newGame()">Reset Save</button>'
    document.getElementById('Player').innerHTML=string;
}

function unlockButton(string){
    if(string=="Zone1"){
        document.getElementById(string).innerHTML="Dojo";
        document.getElementById(string).disabled=false;
    }
    if(string=="Zone2"){
        document.getElementById(string).innerHTML="Farm";
        document.getElementById(string).disabled=false;
    }
}