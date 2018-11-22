var player = {
    strength : 1,
    hp : 10,
    curhp : 10,
    defense : 1,
    maxClones : 1000,
    idleClones : 1000,
    money : 0,
    hpRegen : 1,
    train : {
        mult : 1,
        attack : {
            scream : {
                level : 0,
                progress : 0
            },
            punch : {
                level : 0,
                progress : 0
            },
            kick : {
                level : 0,
                progress : 0
            },
            jumpKick : {
                level : 0,
                progress : 0
            },
            tornadoKick : {
                level : 0,
                progress : 0
            }
        },
        defense : {
            eat : {
                level : 0,
                progress : 0
            },
            rest : {
                level : 0,
                progress : 0
            },
            sleep : {
                level : 0,
                progress : 0
            },
            fall : {
                level : 0,
                progress : 0
            },
            beat : {
                level : 0,
                progress : 0
            }
        }
    }
}

var assignedClones = {
    train : {
        attack : {
            scream : 0,
            punch : 0,
            kick : 0,
            jumpKick : 0,
            tornadoKick : 0
        },
        defense : {
            eat : 0,
            rest : 0,
            sleep : 0,
            fall : 0,
            beat : 0
        }
    }
}


var options = {
    menu : 'none',
    interval : 1000
}

var values = {
    boss:1
}

var curBoss = {
    attack : 10,
    hp : 100,
    curhp : 100
}

var action = {
    attacking : false
}

var pastConsole = "";