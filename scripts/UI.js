function loadScreen(){
    loadPlayerScreen();
    if(options.menu=="Bosses"){
        printBoss();
    }
    else if(options.menu=="Training"){
        printTraining();
    }
}


function loadTutorial(){
    var string = "<h1>Tutorial</h1><hr/>";
    document.getElementById('Screen').innerHTML=string;
}


function printBoss(){
    var string = '<h1 style="text-align: center">Boss Menu</h1><hr/>';
    string += '<h1>Boss Number '+values.boss+'</h1>';
    string += '<h3>Boss Attack'+curBoss.attack+'</h3><br/>';
    string += '<h3>Boss Health'+curBoss.curhp+'/'+curBoss.hp+'</h2>';
    string += '<button class="w3-button w3-red" onclick="action.attacking=true;">Figth</button><hr/>';
    string += pastConsole;
    document.getElementById('Screen').innerHTML=string;
}

function printTraining(){
    var string = '<h1>Training</h1><hr/>';
    //ATACK TRAINING
    string += '<div class="w3-col m6 l6"><h1>Attack</h1><hr/>';
    
    string += '<p>Scream(Level '+player.train.attack.scream.level+'):'+assignedClones.train.attack.scream+' clones assigned</p>';
    string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesScream()">+</button>';
    string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesScream()">-</button>'+parseInt(player.train.attack.scream.progress/1000)+'% to Next level<br/>';
    if(unlockedTraining("Punch")){
        string += '<p>Punch(Level '+player.train.attack.punch.level+'):'+assignedClones.train.attack.punch+' clones assigned</p>';
        string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesPunch()">+</button>';
        string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesPunch()">-</button>'+parseInt(player.train.attack.punch.progress/1000)+'% to Next level<br/>';
        if(unlockedTraining("Kick")){
            string += '<p>Kick(Level '+player.train.attack.kick.level+'):'+assignedClones.train.attack.kick+' clones assigned</p>';
            string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesKick()">+</button>';
            string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesKick()">-</button>'+parseInt(player.train.attack.kick.progress/1000)+'% to Next level<br/>';
            if(unlockedTraining("JumpKick")){
                string += '<p>JumpKick(Level '+player.train.attack.jumpKick.level+'):'+assignedClones.train.attack.jumpKick+' clones assigned</p>';
                string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesJumpKick()">+</button>';
                string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesJumpKick()">-</button>'+parseInt(player.train.attack.jumpKick.progress/1000)+'% to Next level<br/>';
                if(unlockedTraining("Tornado")){
                    string += '<p>TonadoKick(Level '+player.train.attack.tornadoKick.level+'):'+assignedClones.train.attack.tornadoKick+' clones assigned</p>';
                    string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesTornadoKick()">+</button>';
                    string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesTornadoKick()">-</button>'+parseInt(player.train.attack.tornadoKick.progress/1000)+'% to Next level<br/>';
                }
            }
        }
    }    
    //DEFENSE TRAINING
    string += '</div><div class="w3-col m6 l6"><h1>Defense</h1><hr/>';
    
    string += '<p>Eat(Level '+player.train.defense.eat.level+'):'+assignedClones.train.defense.eat+' clones assigned</p>';
    string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesEat()">+</button>';
    string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesEat()">-</button>'+parseInt(player.train.defense.eat.progress/1000)+'% to Next level<br/>';
        if(unlockedTraining("Punch")){
        string += '<p>Rest(Level '+player.train.defense.rest.level+'):'+assignedClones.train.defense.rest+' clones assigned</p>';
        string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesRest()">+</button>';
        string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesRest()">-</button>'+parseInt(player.train.defense.rest.progress/1000)+'% to Next level<br/>';
        if(unlockedTraining("Kick")){
            string += '<p>Sleep(Level '+player.train.defense.sleep.level+'):'+assignedClones.train.defense.sleep+' clones assigned</p>';
            string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesSleep()">+</button>';
            string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesSleep()">-</button>'+parseInt(player.train.defense.sleep.progress/1000)+'% to Next level<br/>';
            if(unlockedTraining("JumpKick")){
                string += '<p>Fall(Level '+player.train.defense.fall.level+'):'+assignedClones.train.defense.fall+' clones assigned</p>';
                string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesFall()">+</button>';
                string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesFall()">-</button>'+parseInt(player.train.defense.fall.progress/1000)+'% to Next level<br/>';
                if(unlockedTraining("Tornado")){
                    string += '<p>Beat(Level '+player.train.defense.beat.level+'):'+assignedClones.train.defense.beat+' clones assigned</p>';
                    string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesBeat()">+</button>';
                    string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesBeat()">-</button>'+parseInt(player.train.defense.beat.progress/1000)+'% to Next level<br/>';
                }
            }
        }
    }
    string += '</div>';
    document.getElementById('Screen').innerHTML=string;
}

//Player UI

function loadPlayerScreen(){
    var string = "<h1>Player Stats:</h1><hr/>";
    string+= '<h4>HP:'+player.curhp+'/'+player.hp+'</h4>';
    string+= '<h4>Strength:'+player.strength+'</h4>';
    string+= '<h4>Defense:'+player.defense+'</h4>';
    string+= '<h4>Clone Counter:'+player.idleClones+'/'+player.maxClones+'</h4>';
    string+= '<h4>Moneys:'+player.money+'</h4>'
    string+='<button style="width: 100%" class="w3-button w3-dark-gray" onclick="newGame()">Reset Save</button>'
    document.getElementById('Player').innerHTML=string;
}