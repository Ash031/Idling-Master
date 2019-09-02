function loadScreen(){
    loadPlayerScreen();
    if(options.menu=="Bosses"){
        if(!options.help)printBoss();
        else printBossHelp();
    }
    else if(options.menu=="Training"){
        if(!options.help)printTraining();
        else printTrainingHelp();
    }
    else if(options.menu=="Dojo"){
        if(!options.help)printDojo();
        else printDojoHelp();
    }
    else if(options.menu=="Shop"){
        printShop();
    }
    else if(options.menu=="Stats"){
        printStats();
    }
    else if(options.menu=="Mine"){
        if(!options.help)printMine();
        else printMineHelp();
    }
    else if(options.menu=="Crafting"){
        if(!options.help)printCrafting();
        else printCraftingHelp();
        
    }
    else if(options.menu=="Farm"){
        if(!options.help) printFarm();
        else printFarmHelp();
    }
    else if(options.menu=="Regroup"){
        printRegroup();
    }
    else if(options.menu=="RegroupShop"){
        printRegroupShop();
    }
    else if(options.menu=="Warehouse"){
        if(!options.help) printWarehouse();
        else printWarehouseHelp();
    }
    else if(options.menu=="Arena"){
        if(!options.help) printArena();
        else printArenaHelp();
    }
    else if(options.menu=="City"){
        printCity();
    }
}

function goToHelp(){
    options.help=!options.help;
    loadScreen();
}

function changeNotation(){
    if(options.number==undefined) options.number=1;
    else if(options.number==1) options.number=0;
    else options.number++;
}

function loadTutorial(){
    var string = '<h1 style="text-align: center">Welcome to Idling Master</h1><hr/>';
    string += "<p> Welcome to Idling Master, on this game you have the power to multiply yourself, with that power you decide to fight the local Bosses League. Do you have what it takes to overtake the challenge?</p>"
    string+= "<p>You should start by heading out to the Training Area and get stronger to defeat the bosses on the Bosses Area.</p>"
    string+="<p>There are some locked areas too that you unlock by beating bosses. These new Menus unlock new ways to get stronger using your clones.</p>"
    string+="<p>If the game tries to Download a file automatically when you open the game, please download it since it happens when you open an old SaveFile to a new version. It is design this way so if an update somehow brakes your save you automatically have a backup save.</p>"
    string+="<p>I hope you have fun with the game.</p><p>Have any questions or want to suggest stuff? Go to <a href=\"https://discord.gg/Txmw5ny\">Discord</a> and tell me.</p>"
    string+="<p>Thanks for trying this game out!</p><hr/>"
    document.getElementById('Screen').innerHTML=string;
}


//MENU SWITCHING
function goToTraining(){
    options.reset = undefined;
    options.help=false;
    options.menu="Training";
    loadScreen();
}

function goToMine(){
    options.reset = undefined;
    options.help=false;
    options.menu="Mine";
    loadScreen();
}

function goToCrafting(){
    options.reset = undefined;
    options.help=false;
    options.menu="Crafting";
    loadScreen();
}

function goToBosses(){
    options.reset = undefined;
    options.help=false;
    options.menu="Bosses";
    loadScreen();
}

function goToDojo(){
    options.reset = undefined;
    options.help=false;
    options.menu="Dojo";
    loadScreen();
}

function goToShop(){
    options.reset = undefined;
    options.help=false;
    options.menu="Shop";
    loadScreen();
}

function goToStats(){
    statsPage=""
    options.reset = undefined;
    options.help=false;
    options.menu="Stats";
    loadScreen();
}

function goToFarm(){
    options.reset = undefined;
    options.help=false;
    options.menu="Farm";
    loadScreen();
}

function goToWarehouse(){
    options.reset = undefined;
    options.help=false;
    options.menu="Warehouse";
    loadScreen();
}

function goToArena(){
    options.reset = undefined;
    options.help=false;
    options.menu="Arena";
    loadScreen();
}

function goToRegroup(){
    options.reset = undefined;
    options.help=false;
    options.menu="Regroup";
    loadScreen();
}
function goToRegroupShop(){
    options.reset = undefined;
    options.help=false;
    options.menu="RegroupShop";
    loadScreen();
}

function goToCity(){
    options.reset = undefined;
    options.help=false;
    options.menu="City";
    loadScreen();
}

function printBoss(){
    var string = '<h1 style="text-align: center">Boss Menu</h1><hr/>';
    string += '<h1>Boss Number '+values.boss+'</h1>';
    string += '<h3>Boss Attack: '+printNumber(curBoss.attack)+'</h3><br/>';
    string += '<h3>Boss Health: '+printNumber(curBoss.curhp)+'/'+printNumber(curBoss.hp)+'</h2>';
    string += '<button class="w3-button w3-red" onclick="action.attacking=true;">Fight</button><hr/>';
    string += pastConsole;
    document.getElementById('Screen').innerHTML=string;
}
function printBossHelp(){
    var string = '<h1 style="text-align: center">Boss Menu</h1><hr/>';
    string += '<p>On this screen you fight Bosses to unlock different Areas of the game.</p><p>The enemy Boss attacks first and doesn\'t regenerate healh, so you can take your time!</p>'
    document.getElementById('Screen').innerHTML=string;
}

function printTime(seconds){
    seconds = Math.ceil(seconds)
    if(seconds<10) return "00:0"+seconds
    if(seconds<60) return "00:"+seconds
    if(seconds<600) {
        var minutes = Math.floor(seconds/60);
        seconds=Math.ceil(seconds%60);
        if(seconds<10) return "0"+minutes+":0"+seconds;
        return "0"+minutes+":"+seconds;
    }
    if(seconds<3600) {
        var minutes = Math.floor(seconds/60)
        seconds -= minutes*60;
        if(seconds<10) return minutes+":0"+seconds
        return minutes+":"+Math.ceil(seconds%60)
    }
    var hours = Math.floor(seconds/3600);
    seconds-=hours*3600
    return hours+":"+printTime(seconds)
}

//Player UI 

function loadPlayerScreen(){
    var string = "<h3>Player Stats:</h3><hr/>";
    string+= '<h4>HP: '+printNumber(player.curhp)+'/'+printNumber(getHP())+'</h4>';
    string+= '<h4>Strength: '+printNumber(getRawStrength())+'</h4>';
    string+= '<h4>Defense: '+printNumber(getRawDefense())+'</h4>';
    string+= '<h4>Clones: '+printNumber(player.idleClones)+'/'+printNumber(player.maxClones)+'</h4>';
    string+= '<h4>Moneys: '+printNumber(Math.floor(player.money))+'</h4>'
    document.getElementById('Player').innerHTML=string;
}

function unlockAll(){
    for(var i=1;i<=6;i++)unlockButton("Zone"+i);
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
    if(string=="Zone4"){
        document.getElementById(string).innerHTML="Warehouse";
        document.getElementById(string).disabled=false;
    }
    if(string=="Zone5"){
        document.getElementById(string).innerHTML="Arena";
        document.getElementById(string).disabled=false;
    }
    if(string=="Zone6"){
        document.getElementById(string).innerHTML="City";
        document.getElementById(string).disabled=false;
    }
    if(string=="DojoShop"){
        document.getElementById(string).innerHTML="Dojo Shop";
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
    if(string=="Zone4"){
        document.getElementById(string).innerHTML="Cmon, unlock me";
        document.getElementById(string).disabled=true;
    }
    if(string=="Zone5"){
        document.getElementById(string).innerHTML="Wow, I'm locked";
        document.getElementById(string).disabled=true;
    }
    if(string=="DojoShop"){
        document.getElementById(string).innerHTML="You Gotta Learn...";
        document.getElementById(string).disabled=true;
    }
    if(string=="Zone6"){
        document.getElementById(string).innerHTML="Pfff, you know it's fun, right?";
        document.getElementById(string).disabled=true;
    }
}

function getImgPath(img){
    return "https://raw.githubusercontent.com/Ash031/Idling-Master/master/RandomImages/"+img+".png";
}
