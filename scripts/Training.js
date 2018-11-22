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
    if(string=="Punch") return (player.train.attack.scream.level>10||player.train.defense.eat>10);
    if(string=="Kick") return (player.train.attack.punch>100||player.train.defense.rest>100);
    if(string=="JumpKick") return (player.train.attack.kick>1000||player.train.defense.sleep>1000);
    return (player.train.attack.jumpKick>10000||player.train.defense.fall>10000);
}

function trainScream(){
    player.train.attack.scream.progress+=player.train.mult*assignedClones.train.attack.scream*10000;
    if(player.train.attack.scream.progress>=100000){
        player.train.attack.scream.progress=0;
        player.train.attack.scream.level++;
        player.strength++;
    }
}

function trainPunch(){
    player.train.attack.punch.progress+=player.train.mult*assignedClones.train.attack.punch*1000;
    if(player.train.attack.punch.progress>=100000){
        player.train.attack.punch.progress=0;
        player.train.attack.punch.level++;
        player.strength+=11;
    }
}

function trainKick(){
    player.train.attack.kick.progress+=player.train.mult*assignedClones.train.attack.kick*100;
    if(player.train.attack.kick.progress>=100000){
        player.train.attack.kick.progress=0;
        player.train.attack.kick.level++;
        player.strength+=121;
    }
}

function trainJumpKick(){
    player.train.attack.jumpKick.progress+=player.train.mult*assignedClones.train.attack.jumpKick*10;
    if(player.train.attack.jumpKick.progress>=100000){
        player.train.attack.jumpKick.progress=0;
        player.train.attack.jumpKick.level++;
        player.strength+=1331;
    }
}

function trainTornadoKick(){
    player.train.attack.tornadoKick.progress+=parseFloat(player.train.mult*assignedClones.train.attack.tornadoKick);
    if(player.train.attack.tornadoKick.progress>=100000){
        player.train.attack.tornadoKick.progress=0;
        player.train.attack.tornadoKick.level++;
        player.strength+=14641;
    }
}


function trainEat(){
    player.train.defense.eat.progress+=player.train.mult*assignedClones.train.defense.eat*10000;
    if(player.train.defense.eat.progress>=100000){
        player.train.defense.eat.progress=0;
        player.train.defense.eat.level++;
        player.defense++;
    }
}

function trainRest(){
    player.train.defense.rest.progress+=player.train.mult*assignedClones.train.defense.rest*1000;
    if(player.train.defense.rest.progress>=100000){
        player.train.defense.rest.progress=0;
        player.train.defense.rest.level++;
        player.defense+=11;
        player.hp++;
    }
}

function trainSleep(){
    player.train.defense.sleep.progress+=player.train.mult*assignedClones.train.defense.sleep*100;
    if(player.train.defense.sleep.progress>=100000){
        player.train.defense.sleep.progress=0;
        player.train.defense.sleep.level++;
        player.defense+=121;
        player.hp+=4;
        player.hpRegen++;
    }
}

function trainFall(){
    player.train.defense.fall.progress+=player.train.mult*assignedClones.train.defense.fall*10;
    if(player.train.defense.fall.progress>=100000){
        player.train.defense.fall.progress=0;
        player.train.defense.fall.level++;
        player.defense+=1331;
        player.hp+=16;
        player.hpRegen+=2;
    }
}

function trainBeat(){
    player.train.defense.beat.progress+=parseFloat(player.train.mult*assignedClones.train.defense.beat);
    if(player.train.defense.beat.progress>=100000){
        player.train.defense.beat.progress=0;
        player.train.defense.beat.level++;
        player.defense+=14641;
        player.hp+=64;
        player.hpRegen+=4;
    }
}

function assignClonesScream(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.attack.scream+=clonesToAssign;
    player.idleClones-=clonesToAssign;
}
function deAssignClonesScream(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.attack.scream)clonesToAssign=assignedClones.train.attack.scream;
    assignedClones.train.attack.scream-=clonesToAssign;
    player.idleClones+=clonesToAssign;
}
function assignClonesPunch(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.attack.punch+=clonesToAssign;
    player.idleClones-=clonesToAssign;
}
function deAssignClonesPunch(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.attack.punch)clonesToAssign=assignedClones.train.attack.punch;
    assignedClones.train.attack.punch-=clonesToAssign;
    player.idleClones+=clonesToAssign;
}
function assignClonesKick(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.attack.kick+=clonesToAssign;
    player.idleClones-=clonesToAssign;
}
function deAssignClonesKick(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.attack.kick)clonesToAssign=assignedClones.train.attack.kick;
    assignedClones.train.attack.kick-=clonesToAssign;
    player.idleClones+=clonesToAssign;
}
function assignClonesJumpKick(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.attack.jumpKick+=clonesToAssign;
    player.idleClones-=clonesToAssign;
}
function deAssignClonesJumpKick(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.attack.jumpKick)clonesToAssign=assignedClones.train.attack.jumpKick;
    assignedClones.train.attack.jumpKick-=clonesToAssign;
    player.idleClones+=clonesToAssign;
}
function assignClonesTornadoKick(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.attack.tornadoKick+=clonesToAssign;
    player.idleClones-=clonesToAssign;
}
function deAssignClonesTornadoKick(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.attack.tornadoKick)clonesToAssign=assignedClones.train.attack.tornadoKick;
    assignedClones.train.attack.tornadoKick-=clonesToAssign;
    player.idleClones+=clonesToAssign;
}

function assignClonesFall(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.defense.fall+=clonesToAssign;
    player.idleClones-=clonesToAssign;
}
function deAssignClonesFall(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.defense.fall)clonesToAssign=assignedClones.train.defense.fall;
    assignedClones.train.defense.fall-=clonesToAssign;
    player.idleClones+=clonesToAssign;
}
function assignClonesBeat(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.defense.beat+=clonesToAssign;
    player.idleClones-=clonesToAssign;
}
function deAssignClonesBeat(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.defense.beat)clonesToAssign=assignedClones.train.defense.beat;
    assignedClones.train.defense.beat-=clonesToAssign;
    player.idleClones+=clonesToAssign;
}

function assignClonesEat(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.defense.eat+=clonesToAssign;
    player.idleClones-=clonesToAssign;
}
function deAssignClonesEat(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.defense.eat)clonesToAssign=assignedClones.train.defense.eat;
    assignedClones.train.defense.eat-=clonesToAssign;
    player.idleClones+=clonesToAssign;
}
function assignClonesRest(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.defense.rest+=clonesToAssign;
    player.idleClones-=clonesToAssign;
}
function deAssignClonesRest(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.defense.rest)clonesToAssign=assignedClones.train.defense.rest;
    assignedClones.train.defense.rest-=clonesToAssign;
    player.idleClones+=clonesToAssign;
}
function assignClonesSleep(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>player.idleClones)clonesToAssign=player.idleClones;
    assignedClones.train.defense.sleep+=clonesToAssign;
    player.idleClones-=clonesToAssign;
}
function deAssignClonesSleep(){
    var clonesToAssign =getClones();
    if(clonesToAssign==NaN)clonesToAssign=0;
    if(clonesToAssign>assignedClones.train.defense.sleep)clonesToAssign=assignedClones.train.defense.sleep;
    assignedClones.train.defense.sleep-=clonesToAssign;
    player.idleClones+=clonesToAssign;
}