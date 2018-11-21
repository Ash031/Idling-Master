const player = {
    strength : 1,
    hp : 10,
    curhp : 10,
    defense : 1,
    maxClones : 1,
    idleClones : 1,
    money : 0,
    hpRegen : 1,
    train : {
        attack : {
            punch : 0,
            kick : 0,
            jumpKick : 0
        },
        defense : {
            eat : 0,
            rest : 0,
            sleep : 0
        }
    }
}

const options = {
    menu : 'none',
    interval : 1000
}

const values = {
    boss:1
}

const curBoss = {
    attack : 10,
    hp : 100,
    curhp : 100
}

const action = {
    attacking : false
}