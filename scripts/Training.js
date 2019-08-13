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
    var lvls = Math.floor(player.train.attack.scream.progress/100000)
    if(lvls>10){
        lvls = 10
        player.train.attack.scream.progress=1000000
    }
    if(lvls>=1){
        player.train.attack.scream.progress-=lvls*100000;
            player.train.attack.scream.level+=lvls;
            player.strength+=lvls;
            player.hp+=100*lvls;
    }
}

function trainPunch(){
    player.train.attack.punch.progress+=player.train.mult*assignedClones.train.attack.punch*1000;
    var lvls = Math.floor(player.train.attack.punch.progress/100000)
    if(lvls>10){
        lvls = 10
        player.train.attack.punch.progress=1000000
    }
    if(lvls>=1){
        player.train.attack.punch.progress-=lvls*100000;
            player.train.attack.punch.level+=lvls;
            player.strength+=lvls*11;
            player.hp+=1100*lvls;
    }
}

function trainKick(){
    player.train.attack.kick.progress+=player.train.mult*assignedClones.train.attack.kick*100;
    var lvls = Math.floor(player.train.attack.kick.progress/100000)
    if(lvls>10){
        lvls = 10
        player.train.attack.kick.progress=1000000
    }
    if(lvls>=1){
        player.train.attack.kick.progress-=lvls*100000;
            player.train.attack.kick.level+=lvls;
            player.strength+=lvls*121;
            player.hp+=12100*lvls;
    }
}

function trainJumpKick(){
    player.train.attack.jumpKick.progress+=player.train.mult*assignedClones.train.attack.jumpKick*10;
    var lvls = Math.floor(player.train.attack.jumpKick.progress/100000)
    if(lvls>10){
        lvls = 10
        player.train.attack.jumpKick.progress=1000000
    }
    if(lvls>=1){
        player.train.attack.jumpKick.progress-=lvls*100000;
            player.train.attack.jumpKick.level+=lvls;
            player.strength+=lvls*1331;
            player.hp+=133100*lvls;
    }
}

function trainTornadoKick(){
    player.train.attack.tornadoKick.progress+=player.train.mult*assignedClones.train.attack.tornadoKick;
    var lvls = Math.floor(player.train.attack.tornadoKick.progress/100000)
    if(lvls>10){
        lvls = 10
        player.train.attack.tornadoKick.progress=1000000
    }
    if(lvls>=1){
        player.train.attack.tornadoKick.progress-=lvls*100000;
            player.train.attack.tornadoKick.level+=lvls;
            player.strength+=lvls*14641;
            player.hp+=1464100*lvls;
    }
}


function trainEat(){
    player.train.defense.eat.progress+=player.train.mult*assignedClones.train.defense.eat*10000;
    var lvls = Math.floor(player.train.defense.eat.progress/100000)
    if(lvls>10){
        lvls = 10
        player.train.defense.eat.progress=1000000
    }
    if(lvls>=1){
        player.train.defense.eat.progress-=lvls*100000;
            player.train.defense.eat.level+=lvls;
            player.defense+=lvls;
            player.hp+=lvls*100;
    }
}

function trainRest(){
    player.train.defense.rest.progress+=player.train.mult*assignedClones.train.defense.rest*1000;
    var lvls = Math.floor(player.train.defense.rest.progress/100000)
    if(lvls>10){
        lvls = 10
        player.train.defense.rest.progress=1000000
    }
    if(lvls>=1){
        player.train.defense.rest.progress-=lvls*100000;
            player.train.defense.rest.level+=lvls;
            player.defense+=lvls*11;
            player.hp+=lvls*1500;
    }
}

function trainSleep(){
    player.train.defense.sleep.progress+=player.train.mult*assignedClones.train.defense.sleep*100;
    var lvls = Math.floor(player.train.defense.sleep.progress/100000)
    if(lvls>10){
        lvls = 10
        player.train.defense.sleep.progress=1000000
    }
    if(lvls>=1){
        player.train.defense.sleep.progress-=lvls*100000;
            player.train.defense.sleep.level+=lvls;
            player.defense+=lvls*121;
            player.hp+=lvls*22500;
            player.hpRegen+=1000*lvls;
    }
}

function trainFall(){
    player.train.defense.fall.progress+=player.train.mult*assignedClones.train.defense.fall*10;
    var lvls = Math.floor(player.train.defense.fall.progress/100000)
    if(lvls>10){
        lvls = 10
        player.train.defense.fall.progress=1000000
    }
    if(lvls>=1){
        player.train.defense.fall.progress-=lvls*100000;
            player.train.defense.fall.level+=lvls;
            player.defense+=lvls*1331;
            player.hp+=lvls*337500;
            player.hpRegen+=2000*lvls;
    }
}

function trainBeat(){
    player.train.defense.beat.progress+=player.train.mult*assignedClones.train.defense.beat;
    var lvls = Math.floor(player.train.defense.beat.progress/100000)
    if(lvls>10){
        lvls = 10
        player.train.defense.beat.progress=1000000
    }
    if(lvls>=1){
        player.train.defense.beat.progress-=lvls*100000;
            player.train.defense.beat.level+=lvls;
            player.defense+=lvls*14641;
            player.hp+=lvls*5062500;
            player.hpRegen+=4000*lvls;
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

function calStrengthPerSec(){
    var ret = 0;
    var amount = assignedClones.train.attack.scream*0.1; 
    if(amount>=10)ret +=10;
    else if(amount>=1) ret++;
    else ret+=amount;
    amount = assignedClones.train.attack.punch*0.01; 
    if(amount>=10)ret +=110;
    else if(amount>=1) ret+=11;
    else ret+=amount*11;
    amount = assignedClones.train.attack.kick*0.001; 
    if(amount>=10)ret +=1210;
    else if(amount>=1) ret+=121;
    else ret+=amount*121;
    amount = assignedClones.train.attack.jumpKick*0.0001; 
    if(amount>=10)ret +=13310;
    else if(amount>=1) ret+=1331;
    else ret+=amount*1331;
    amount = assignedClones.train.attack.tornadoKick*0.00001; 
    if(amount>=10)ret +=146410;
    else if(amount>=1) ret+=14641;
    else ret+=amount*14641;
    return ret;
}

function calDefensePerSec(){
    var ret = 0;
    var amount = assignedClones.train.defense.eat*0.1; 
    if(amount>=10)ret +=10;
    else if(amount>=1) ret++;
    else ret+=amount;
    amount = assignedClones.train.defense.rest*0.01; 
    if(amount>=10)ret +=110;
    else if(amount>=1) ret+=11;
    else ret+=amount*11;
    amount = assignedClones.train.defense.sleep*0.001; 
    if(amount>=10)ret +=1210;
    else if(amount>=1) ret+=121;
    else ret+=amount*121;
    amount = assignedClones.train.defense.fall*0.0001; 
    if(amount>=10)ret +=13310;
    else if(amount>=1) ret+=1331;
    else ret+=amount*1331;
    amount = assignedClones.train.defense.beat*0.00001; 
    if(amount>=10)ret +=146410;
    else if(amount>=1) ret+=14641;
    else ret+=amount*14641;
    return ret;
}

function calRegenPerSec(){
    var ret = 0;
    var amount = assignedClones.train.defense.sleep*0.001; 
    if(amount>=10)ret +=100;
    else if(amount>=1) ret+=10;
    else ret+=amount*1;
    amount = assignedClones.train.defense.fall*0.0001; 
    if(amount>=10)ret +=200;
    else if(amount>=1) ret+=20;
    else ret+=amount*20;
    amount = assignedClones.train.defense.beat*0.00001; 
    if(amount>=10)ret +=400;
    else if(amount>=1) ret+=40;
    else ret+=amount*40;
    return ret*100;
}

function calHPPerSec(){
    var ret = 0;
    var amount = assignedClones.train.defense.eat*0.1; 
    if(amount>=10)ret +=10;
    else if(amount>=1) ret++;
    else ret+=amount;
    amount = assignedClones.train.defense.rest*0.01; 
    if(amount>=10)ret +=150;
    else if(amount>=1) ret+=15;
    else ret+=amount*15;
    amount = assignedClones.train.defense.sleep*0.001; 
    if(amount>=10)ret +=2250;
    else if(amount>=1) ret+=225;
    else ret+=amount*225;
    amount = assignedClones.train.defense.fall*0.0001; 
    if(amount>=10)ret +=33750;
    else if(amount>=1) ret+=3375;
    else ret+=amount*3375;
    amount = assignedClones.train.defense.beat*0.00001; 
    if(amount>=10)ret +=506250;
    else if(amount>=1) ret+=50625;
    else ret+=amount*50625;
    amount = assignedClones.train.attack.scream*0.1; 
    if(amount>=10)ret +=10;
    else if(amount>=1) ret++;
    else ret+=amount;
    amount = assignedClones.train.attack.punch*0.01; 
    if(amount>=10)ret +=110;
    else if(amount>=1) ret+=11;
    else ret+=amount*11;
    amount = assignedClones.train.attack.kick*0.001; 
    if(amount>=10)ret +=1210;
    else if(amount>=1) ret+=121;
    else ret+=amount*121;
    amount = assignedClones.train.attack.jumpKick*0.0001; 
    if(amount>=10)ret +=13310;
    else if(amount>=1) ret+=1331;
    else ret+=amount*1331;
    amount = assignedClones.train.attack.tornadoKick*0.00001; 
    if(amount>=10)ret +=146410;
    else if(amount>=1) ret+=14641;
    else ret+=amount*14641;
    return ret*100;
}

//UI 
function printTraining(){
    var string = '<h1 style="text-align: center">Training</h1><hr/>';
    //ATACK TRAINING
    string += '<div class="w3-col m6 l6" style="padding-left: 10px; border-right: 1px solid black;"><h1>Strength</h1><hr/>';
    
    string += '<p>Scream(Level '+player.train.attack.scream.level+'): '+assignedClones.train.attack.scream+' clones assigned</p>';
    string += '<button style="height: 5%" class="w3-button w3-red" onclick="deAssignClonesScream()">-</button>'
    string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesScream()">+</button>'+parseInt(player.train.attack.scream.progress/1000)+'% to Next level<br/>';;
    if(unlockedTraining("Punch")){
        string += '<p>Punch(Level '+player.train.attack.punch.level+'): '+assignedClones.train.attack.punch+' clones assigned</p>';
        string += '<button style="height: 5%" class="w3-button w3-red" onclick="deAssignClonesPunch()">-</button>'
        string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesPunch()">+</button>'+parseInt( player.train.attack.punch.progress/1000)+'% to Next level<br/>';
        if(unlockedTraining("Kick")){
            string += '<p>Kick(Level '+player.train.attack.kick.level+'): '+assignedClones.train.attack.kick+' clones assigned</p>';
            string += '<button style="height: 5%" class="w3-button w3-red" onclick="deAssignClonesKick()">-</button>'
            string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesKick()">+</button>'+parseInt(player.train.attack.kick.progress/1000)+'% to Next level<br/>';
            if(unlockedTraining("JumpKick")){
                string += '<p>JumpKick(Level '+player.train.attack.jumpKick.level+'): '+assignedClones.train.attack.jumpKick+' clones assigned</p>';
                string += '<button style="height: 5%" class="w3-button w3-red" onclick="deAssignClonesJumpKick()">-</button>'
                string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesJumpKick()">+</button>'+parseInt(player.train.attack.jumpKick.progress/1000)+'% to Next level<br/>';
                if(unlockedTraining("Tornado")){
                    string += '<p>TornadoKick(Level '+player.train.attack.tornadoKick.level+'): '+assignedClones.train.attack.tornadoKick+' clones assigned</p>';
                    string += '<button style="height: 5%" class="w3-button w3-red" onclick="deAssignClonesTornadoKick()">-</button>'
                    string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesTornadoKick()">+</button>'+parseInt( player.train.attack.tornadoKick.progress/1000)+'% to Next level<br/>';
                }
            }
        }
    }    
    //DEFENSE TRAINING
    string += '</div><div class="w3-col m6 l6" style="padding-left: 10px;"><h1>Defense</h1><hr/>';
    
    string += '<p>Eat(Level '+player.train.defense.eat.level+'): '+assignedClones.train.defense.eat+' clones assigned</p>';
    string += '<button style="height: 5%" class="w3-button w3-red" onclick="deAssignClonesEat()">-</button>'
    string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesEat()">+</button>'+parseInt( player.train.defense.eat.progress/1000)+'% to Next level<br/>';
        if(unlockedTraining("Punch")){
        string += '<p>Rest(Level '+player.train.defense.rest.level+'): '+assignedClones.train.defense.rest+' clones assigned</p>';
        string += '<button style="height: 5%" class="w3-button w3-red" onclick="deAssignClonesRest()">-</button>'
        string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesRest()">+</button>'+parseInt(player.train.defense.rest.progress/1000)+'% to Next level<br/>';
        if(unlockedTraining("Kick")){
            string += '<p>Sleep(Level '+player.train.defense.sleep.level+'): '+assignedClones.train.defense.sleep+' clones assigned</p>';
            string += '<button style="height: 5%" class="w3-button w3-red" onclick="deAssignClonesSleep()">-</button>'
            string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesSleep()">+</button>'+parseInt( player.train.defense.sleep.progress/1000)+'% to Next level<br/>';
            if(unlockedTraining("JumpKick")){
                string += '<p>Fall(Level '+player.train.defense.fall.level+'): '+assignedClones.train.defense.fall+' clones assigned</p>';
                string += '<button style="height: 5%" class="w3-button w3-red" onclick="deAssignClonesFall()">-</button>'
                string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesFall()">+</button>'+parseInt(player.train.defense.fall.progress/1000)+'% to Next level<br/>';
                if(unlockedTraining("Tornado")){
                    string += '<p>Beat(Level '+player.train.defense.beat.level+'): '+assignedClones.train.defense.beat+' clones assigned</p>';
                    string += '<button style="height: 5%" class="w3-button w3-red" onclick="deAssignClonesBeat()">-</button>'
                    string += '<button style="height: 5%" class="w3-button w3-green" onclick="assignClonesBeat()">+</button>'+parseInt(player.train.defense.beat.progress/1000)+'% to Next level<br/>';
                }
            }
        }
    }
    string += '</div>';
    string+="<br/><hr/><h2>Stats Gained per Second:</h2><p><b>Strength Per Second: </b>"+printNumber(calStrengthPerSec())+'</p><p><b>Defense per Second: </b>'+printNumber(calDefensePerSec())+'</p><p><b>HP per Second: </b>'+printNumber(calHPPerSec())+'</p><p><b>HP Regen per Second: </b>'+printNumber(calRegenPerSec())+'</p>';
    document.getElementById('Screen').innerHTML=string;
}

function printTrainingHelp(){
    var string = '<h1 style="text-align: center">Training</h1><hr/>';
    string += '<p>On this screen you assign clones to training, there are 5 tiers of training to unlock, every tier is more efficient than the last, but takes more time</p><p>Some tiers get more bonuses, like the Tier 2 defense also gives HP</p>'    
    document.getElementById('Screen').innerHTML=string;
}