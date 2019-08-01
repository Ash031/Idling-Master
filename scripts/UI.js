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
    else if(options.menu=="Mine"){
        printMine();
    }
    else if(options.menu=="Crafting"){
        printCrafting();
    }
    else if(options.menu=="Farm"){
        printFarm();
    }
    else if(options.menu=="Regroup"){
        printRegroup();
    }
    else if(options.menu=="RegroupShop"){
        printRegroupShop();
    }
}

function printNumber(number){
    if(number<10) return String(number).substr(0,4)
    if(number<100) return String(number).substr(0,5)
    if(number<1000) return String(number).substr(0,6);
    return number.toPrecision(4);
}

function printStats(){
    var string = '<h1 style="text-align: center">Statistics</h1><hr/>';
    string += '<p><b>Total Bosses Defeated:</b>'+stats.totalBossesKilles+'</p>';
    string += '<p><b>Total Dojo Enemies Defeated:</b>'+stats.totalDojoEnemies+'</p>';
    string += '<p><b>Total Seconds:</b>'+stats.totalSeconds+'</p>';
    string += '<p><b>Total Ores Mined:</b>'+printNumber(stats.totalOresMined)+'</p>';
    string+='<button style="width: 100%" class="w3-button w3-dark-gray" onclick="newGame()">Reset Save</button>';
    document.getElementById('Screen').innerHTML=string;
}

function loadTutorial(){
    var string = '<h1 style="text-align: center">Welcome to Idling Master</h1><hr/>';
    string += "<p> Welcome, this game was created by Ash031, if you find any bugs or want to give new Ideas please send me a message on <a href=\"https://www.reddit.com/message/compose/?to=Ashzinho\">Reddit</a>.</p>"
    document.getElementById('Screen').innerHTML=string;
}


//MENU SWITCHING
function goToTraining(){
    options.menu="Training";
    loadScreen();
}

function goToMine(){
    options.menu="Mine";
    loadScreen();
}

function goToCrafting(){
    options.menu="Crafting";
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

function goToRegroup(){
    options.menu="Regroup";
    loadScreen();
}
function goToRegroupShop(){
    options.menu="RegroupShop";
    loadScreen();
}

function printBoss(){
    var string = '<h1 style="text-align: center">Boss Menu</h1><hr/>';
    string += '<h1>Boss Number '+values.boss+'</h1>';
    string += '<h3>Boss Attack: '+printNumber(curBoss.attack)+'</h3><br/>';
    string += '<h3>Boss Health: '+printNumber(curBoss.curhp)+'/'+printNumber(curBoss.hp)+'</h2>';
    string += '<button class="w3-button w3-red" onclick="action.attacking=true;">Figth</button><hr/>';
    string += pastConsole;
    document.getElementById('Screen').innerHTML=string;
}


//Player UI

function loadPlayerScreen(){
    var string = "<h1>Player Stats:</h1><hr/>";
    string+= '<h4>HP:'+printNumber(player.curhp)+'/'+printNumber(player.hp)+'</h4>';
    string+= '<h4>Strength:'+printNumber(getRawStrength())+'</h4>';
    string+= '<h4>Defense:'+printNumber(getRawDefense())+'</h4>';
    string+= '<h4>Clone Counter:'+printNumber(player.idleClones)+'/'+printNumber(player.maxClones)+'</h4>';
    string+= '<h4>Moneys:'+printNumber(player.money)+'</h4>'
    document.getElementById('Player').innerHTML=string;
}

function unlockButton(string){
    if(string=="Zone1"){
        document.getElementById(string).innerHTML="Dojo";
        document.getElementById(string).disabled=false;
    }
    if(string=="Zone2"){
        document.getElementById(string).innerHTML="Mine";
        document.getElementById(string).disabled=false;
    }
    if(string=="Zone3"){
        document.getElementById(string).innerHTML="Farm";
        document.getElementById(string).disabled=false;
    }
    if(string=="Rebirth"){
        document.getElementById(string).innerHTML="Regroup";
        document.getElementById(string).disabled=false;
        document.getElementById("RebirthShop").innerHTML="Regroup Shop";
        document.getElementById("RebirthShop").disabled=false;
    }
}

function lockButton(string){
    if(string=="Zone1"){
        document.getElementById(string).innerHTML="It's Locked Boys";
        document.getElementById(string).disabled=true;
    }
    if(string=="Zone2"){
        document.getElementById(string).innerHTML="No No No...";
        document.getElementById(string).disabled=true;
    }
    if(string=="Zone3"){
        document.getElementById(string).innerHTML="It's not for you today";
        document.getElementById(string).disabled=true;
    }
}