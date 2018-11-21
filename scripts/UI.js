function goToBosses(){
    options.menu="Bosses";
    loadScreen();
}

function loadScreen(){
    loadPlayerScreen();
    if(options.menu=="Bosses"){
        printBoss();
    }
    else if(options.menu=="Training"){
        var string = '<h1>Training</h1><hr/>';
        document.getElementById('Screen').innerHTML=string;
    }
}

function printBoss(){
    var string = '<h1 style="text-align: center">Boss Menu</h1><hr/>';
    string += '<h1>Boss Number '+values.boss+'</h1>';
    string += '<h3>Boss Attack'+curBoss.attack+'</h3><br/>';
    string += '<h3>Boss Health'+curBoss.curhp+'/'+curBoss.hp+'</h2>';
    string += '<button class="w3-button w3-red" onclick="action.attacking=true;">Figth</button>';
    document.getElementById('Screen').innerHTML=string;
}

function goToTraining(){
    options.menu="Training";
    loadScreen();
}

//Player UI

function loadPlayerScreen(){
    var string = "<h1>Player Stats:</h1><hr/>";
    string+= '<h4>HP:'+player.curhp+'/'+player.hp+'</h4>';
    string+= '<h4>Strength:'+player.strength+'</h4>';
    string+= '<h4>Defense:'+player.defense+'</h4>';
    string+= '<h4>Clone Counter:'+player.idleClones+'/'+player.maxClones+'</h4>';
    string+= '<h4>Moneys:'+player.money+'</h4>'
    document.getElementById('Player').innerHTML=string;
}