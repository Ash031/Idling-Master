function train(){
    trainScream();
    trainPunch();
    trainKick();
    trainJumpKick();
    trainTornadoKick();
    trainEat();
    trainFall();
    trainBeat();
    trainRest();
    trainSleep();
}

function unlockedTraining(string){
    if(string=="Punch") return (player.train.attack.scream.level>10||player.train.defense.eat.level>10);
    if(string=="Kick") return (player.train.attack.punch.level>100||player.train.defense.rest.level>100);
    if(string=="JumpKick") return (player.train.attack.kick.level>1000||player.train.defense.sleep.level>1000);
    return (player.train.attack.jumpKick.level>10000||player.train.defense.fall.level>10000);
}

function trainScream(){
    player.train.attack.scream.progress+=player.train.mult*assignedClones.train.attack.scream*10000;
    if(player.train.attack.scream.progress>=100000){
        if(player.train.attack.scream.progress>=1000000){
            player.train.attack.scream.progress=0;
            player.train.attack.scream.level+=10;
            player.strength+=10;
        }
        else{
            player.train.attack.scream.progress=0;
            player.train.attack.scream.level++;
            player.strength++;
        }
    }
}

function trainPunch(){
    player.train.attack.punch.progress+=player.train.mult*assignedClones.train.attack.punch*1000;
    if(player.train.attack.punch.progress>=100000){
        if(player.train.attack.punch.progress>=1000000){
            player.train.attack.punch.progress=0;
            player.train.attack.punch.level+=10;
            player.strength+=110;
        }
        else{
            player.train.attack.punch.progress=0;
            player.train.attack.punch.level++;
            player.strength+=11;
        }
    }
}

function trainKick(){
    player.train.attack.kick.progress+=player.train.mult*assignedClones.train.attack.kick*100;
    if(player.train.attack.kick.progress>=100000){
        if(player.train.attack.kick.progress>=1000000){
            player.train.attack.kick.progress=0;
            player.train.attack.kick.level+=10;
            player.strength+=1210;
        }
        else{
            player.train.attack.kick.progress=0;
            player.train.attack.kick.level++;
            player.strength+=121;
        }
    }
}

function trainJumpKick(){
    player.train.attack.jumpKick.progress+=player.train.mult*assignedClones.train.attack.jumpKick*10;
    if(player.train.attack.jumpKick.progress>=100000){
        if(player.train.attack.jumpKick.progress>=1000000){
            player.train.attack.jumpKick.progress=0;
            player.train.attack.jumpKick.level+=10;
            player.strength+=13310;
        }
        else{
            player.train.attack.jumpKick.progress=0;
            player.train.attack.jumpKick.level++;
            player.strength+=1331;
        }
    }
}

function trainTornadoKick(){
    player.train.attack.tornadoKick.progress+=parseFloat(player.train.mult*assignedClones.train.attack.tornadoKick);
    if(player.train.attack.tornadoKick.progress>=100000){
        if(player.train.attack.tornadoKick.progress>=1000000){
            player.train.attack.tornadoKick.progress=0;
            player.train.attack.tornadoKick.level+=10;
            player.strength+=146410;
        }
        else{
            player.train.attack.tornadoKick.progress=0;
            player.train.attack.tornadoKick.level++;
            player.strength+=14641;
        }
    }
}


function trainEat(){
    player.train.defense.eat.progress+=player.train.mult*assignedClones.train.defense.eat*10000;
    if(player.train.defense.eat.progress>=100000){
        if(player.train.defense.eat.progress>=1000000){
            player.train.defense.eat.progress=0;
            player.train.defense.eat.level+=10;
            player.defense+=10;
            player.hp+=10;
        }
        else{
            player.train.defense.eat.progress=0;
            player.train.defense.eat.level++;
            player.defense++;
            player.hp++;
        }
    }
}

function trainRest(){
    player.train.defense.rest.progress+=player.train.mult*assignedClones.train.defense.rest*1000;
    if(player.train.defense.rest.progress>=100000){
        if(player.train.defense.rest.progress>=1000000){
            player.train.defense.rest.progress=0;
            player.train.defense.rest.level+=10;
            player.defense+=110;
            player.hp+=100;
        }
        else{
            player.train.defense.rest.progress=0;
            player.train.defense.rest.level++;
            player.defense+=11;
            player.hp+=10;
        }
    }
}

function trainSleep(){
    player.train.defense.sleep.progress+=player.train.mult*assignedClones.train.defense.sleep*100;
    if(player.train.defense.sleep.progress>=100000){
        if(player.train.defense.sleep.progress>=1000000){
            player.train.defense.sleep.progress=0;
            player.train.defense.sleep.level+=10;
            player.defense+=1210;
            player.hp+=1000;
            player.hpRegen+=3;
        }
        else{
            player.train.defense.sleep.progress=0;
            player.train.defense.sleep.level++;
            player.defense+=121;
            player.hp+=100;
            player.hpRegen++;
        }
    }
}

function trainFall(){
    player.train.defense.fall.progress+=player.train.mult*assignedClones.train.defense.fall*10;
    if(player.train.defense.fall.progress>=100000){
        if(player.train.defense.fall.progress>=1000000){
            player.train.defense.fall.progress=0;
            player.train.defense.fall.level+=10;
            player.defense+=13310;
            player.hp+=10000;
            player.hpRegen+=9;
        }
        else{
            player.train.defense.fall.progress=0;
            player.train.defense.fall.level++;
            player.defense+=1331;
            player.hp+=1000;
            player.hpRegen+=2;
        }
    }
}

function trainBeat(){
    player.train.defense.beat.progress+=parseFloat(player.train.mult*assignedClones.train.defense.beat);
    if(player.train.defense.beat.progress>=100000){
        if(player.train.defense.beat.progress>=1000000){
            player.train.defense.beat.progress=0;
            player.train.defense.beat.level+=10;
            player.defense+=146410;
            player.hp+=100000;
            player.hpRegen+=27
        }
        else{
            player.train.defense.beat.progress=0;
            player.train.defense.beat.level++;
            player.defense+=14641;
            player.hp+=10000;
            player.hpRegen+=4;
        }
    }
}

function assignClonesScream(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.attack.scream+=clonesToAssign;
    player.idleClones-=clonesToAssign;
    loadScreen();
}
function deAssignClonesScream(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.attack.scream)clonesToAssign=assignedClones.train.attack.scream;
    assignedClones.train.attack.scream-=clonesToAssign;
    player.idleClones+=clonesToAssign;
    loadScreen();
}
function assignClonesPunch(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.attack.punch+=clonesToAssign;
    player.idleClones-=clonesToAssign;
    loadScreen();
}
function deAssignClonesPunch(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.attack.punch)clonesToAssign=assignedClones.train.attack.punch;
    assignedClones.train.attack.punch-=clonesToAssign;
    player.idleClones+=clonesToAssign;
    loadScreen();
}
function assignClonesKick(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.attack.kick+=clonesToAssign;
    player.idleClones-=clonesToAssign;
    loadScreen();
}
function deAssignClonesKick(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.attack.kick)clonesToAssign=assignedClones.train.attack.kick;
    assignedClones.train.attack.kick-=clonesToAssign;
    player.idleClones+=clonesToAssign;
    loadScreen();
}
function assignClonesJumpKick(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.attack.jumpKick+=clonesToAssign;
    player.idleClones-=clonesToAssign;
    loadScreen();
}
function deAssignClonesJumpKick(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.attack.jumpKick)clonesToAssign=assignedClones.train.attack.jumpKick;
    assignedClones.train.attack.jumpKick-=clonesToAssign;
    player.idleClones+=clonesToAssign;
    loadScreen();
}
function assignClonesTornadoKick(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.attack.tornadoKick+=clonesToAssign;
    player.idleClones-=clonesToAssign;
    loadScreen();
}
function deAssignClonesTornadoKick(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.attack.tornadoKick)clonesToAssign=assignedClones.train.attack.tornadoKick;
    assignedClones.train.attack.tornadoKick-=clonesToAssign;
    player.idleClones+=clonesToAssign;
    loadScreen();
}

function assignClonesFall(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.defense.fall+=clonesToAssign;
    player.idleClones-=clonesToAssign;
    loadScreen();
}
function deAssignClonesFall(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.defense.fall)clonesToAssign=assignedClones.train.defense.fall;
    assignedClones.train.defense.fall-=clonesToAssign;
    player.idleClones+=clonesToAssign;
    loadScreen();
}
function assignClonesBeat(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.defense.beat+=clonesToAssign;
    player.idleClones-=clonesToAssign;
    loadScreen();
}
function deAssignClonesBeat(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.defense.beat)clonesToAssign=assignedClones.train.defense.beat;
    assignedClones.train.defense.beat-=clonesToAssign;
    player.idleClones+=clonesToAssign;
    loadScreen();
}

function assignClonesEat(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.defense.eat+=clonesToAssign;
    player.idleClones-=clonesToAssign;
    loadScreen();
}
function deAssignClonesEat(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.defense.eat)clonesToAssign=assignedClones.train.defense.eat;
    assignedClones.train.defense.eat-=clonesToAssign;
    player.idleClones+=clonesToAssign;
    loadScreen();
}
function assignClonesRest(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.defense.rest+=clonesToAssign;
    player.idleClones-=clonesToAssign;
    loadScreen();
}
function deAssignClonesRest(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.defense.rest)clonesToAssign=assignedClones.train.defense.rest;
    assignedClones.train.defense.rest-=clonesToAssign;
    player.idleClones+=clonesToAssign;
    loadScreen();
}
function assignClonesSleep(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.defense.sleep+=clonesToAssign;
    player.idleClones-=clonesToAssign;
    loadScreen();
}
function deAssignClonesSleep(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.defense.sleep)clonesToAssign=assignedClones.train.defense.sleep;
    assignedClones.train.defense.sleep-=clonesToAssign;
    player.idleClones+=clonesToAssign;
    loadScreen();
}


//UI 
function printTraining(){
    var string = '<h1 style="text-align: center">Training</h1><hr/>';
    //ATACK TRAINING
    string += '<div class="w3-col m6 l6"><h1>Attack</h1><hr/>';
    
    string += '<p>Scream(Level '+player.train.attack.scream.level+'): '+assignedClones.train.attack.scream+' clones assigned</p>';
    string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesScream()">+</button>';
    string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesScream()">-</button>'+parseInt(player.train.attack.scream.progress/1000)+'% to Next level<br/>';
    if(unlockedTraining("Punch")){
        string += '<p>Punch(Level '+player.train.attack.punch.level+'): '+assignedClones.train.attack.punch+' clones assigned</p>';
        string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesPunch()">+</button>';
        string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesPunch()">-</button>'+parseInt(player.train.attack.punch.progress/1000)+'% to Next level<br/>';
        if(unlockedTraining("Kick")){
            string += '<p>Kick(Level '+player.train.attack.kick.level+'): '+assignedClones.train.attack.kick+' clones assigned</p>';
            string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesKick()">+</button>';
            string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesKick()">-</button>'+parseInt(player.train.attack.kick.progress/1000)+'% to Next level<br/>';
            if(unlockedTraining("JumpKick")){
                string += '<p>JumpKick(Level '+player.train.attack.jumpKick.level+'): '+assignedClones.train.attack.jumpKick+' clones assigned</p>';
                string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesJumpKick()">+</button>';
                string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesJumpKick()">-</button>'+parseInt(player.train.attack.jumpKick.progress/1000)+'% to Next level<br/>';
                if(unlockedTraining("Tornado")){
                    string += '<p>TonadoKick(Level '+player.train.attack.tornadoKick.level+'): '+assignedClones.train.attack.tornadoKick+' clones assigned</p>';
                    string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesTornadoKick()">+</button>';
                    string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesTornadoKick()">-</button>'+parseInt(player.train.attack.tornadoKick.progress/1000)+'% to Next level<br/>';
                }
            }
        }
    }    
    //DEFENSE TRAINING
    string += '</div><div class="w3-col m6 l6"><h1>Defense</h1><hr/>';
    
    string += '<p>Eat(Level '+player.train.defense.eat.level+'): '+assignedClones.train.defense.eat+' clones assigned</p>';
    string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesEat()">+</button>';
    string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesEat()">-</button>'+parseInt(player.train.defense.eat.progress/1000)+'% to Next level<br/>';
        if(unlockedTraining("Punch")){
        string += '<p>Rest(Level '+player.train.defense.rest.level+'): '+assignedClones.train.defense.rest+' clones assigned</p>';
        string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesRest()">+</button>';
        string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesRest()">-</button>'+parseInt(player.train.defense.rest.progress/1000)+'% to Next level<br/>';
        if(unlockedTraining("Kick")){
            string += '<p>Sleep(Level '+player.train.defense.sleep.level+'): '+assignedClones.train.defense.sleep+' clones assigned</p>';
            string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesSleep()">+</button>';
            string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesSleep()">-</button>'+parseInt(player.train.defense.sleep.progress/1000)+'% to Next level<br/>';
            if(unlockedTraining("JumpKick")){
                string += '<p>Fall(Level '+player.train.defense.fall.level+'): '+assignedClones.train.defense.fall+' clones assigned</p>';
                string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesFall()">+</button>';
                string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesFall()">-</button>'+parseInt(player.train.defense.fall.progress/1000)+'% to Next level<br/>';
                if(unlockedTraining("Tornado")){
                    string += '<p>Beat(Level '+player.train.defense.beat.level+'): '+assignedClones.train.defense.beat+' clones assigned</p>';
                    string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesBeat()">+</button>';
                    string += '<button style="height: 5%" class="w3-button w3-green" onclick="deAssignClonesBeat()">-</button>'+parseInt(player.train.defense.beat.progress/1000)+'% to Next level<br/>';
                }
            }
        }
    }
    string += '</div>';
    document.getElementById('Screen').innerHTML=string;
}

function printTrainingHelp(){
    var string = '<h1 style="text-align: center">Training</h1><hr/>';
    string += '<p>On this screen you assign clones to training, there are 5 tiers of training to unlock, every tier is more efficient than the last, but takes more time</p><p>Some tiers get more bonuses, like the Tier 2 defense also gives HP</p>'    
    document.getElementById('Screen').innerHTML=string;
}