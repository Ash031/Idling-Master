function printArena(){
    var string = '<h1 style="text-align:center">Arena</h1><hr/>';
    if(arenaScreen=="Fight"){
        string += printArenaFight();
    }
    else{
        string += getArenaButtons();
        if(arenaScreen=="Choice"){
            string += getArenaChoiceScreen();
            string += getArenaFightersTable();  
        }
        else if(arenaScreen=="Shop"){
            string+=printArenaShop();
        }
    }
    document.getElementById('Screen').innerHTML=string;
}

function getArenaName(num){
    if(num==0) return "Dojo"
    if(num==1) return "Mine"
    if(num==2) return "Farm"
    if(num==3) return "Warehouse"

}

function getArenaButtons(){
    var string = '';
    string += '<p><b>Challenge Arena:</b></p><p>'
    for(var i=0;i<4;i++){
        if((i==1 && values.boss<8) ||(i==2 && values.boss<13)||(i==3 && values.boss<20)) break;
        string += '<button onClick="goToArenaFighters('+i+')">'+getArenaName(i)+'</button>'
    }
    string += '</p><hr/><p><b>Visit Arena Shop:</b></p><p>'
    for(var i=0;i<4;i++){
        if((i==1 && values.boss<8) ||(i==2 && values.boss<13)||(i==3 && values.boss<20)) break;
        string += '<button onClick="goToArenaShop('+i+')">'+getArenaName(i)+'</button>'
    }
    return string+"</p>";
}

function getArenaChoiceScreen(){
    var string = '<p><b>Choose a Fighter to spar from the table below:</b></p>'
    return string;
}

function getArenaFightersTable(){
    var string = '<table class="w3-table-all"><tr>'
    string+='<tr><th>Name</th><th>Type</th><th>Health</th><th>Attack</th><th></th></tr>'
    if(arenaType=="Dojo"&&arenaScreen=="Choice"){
        string+=printArenaFighters(arenaFighters.dojo);
    }
    else if(arenaType=="Mine"&&arenaScreen=="Choice"){
        string+=printArenaFighters(arenaFighters.Mine);
    }
    else if(arenaType=="Farm"&&arenaScreen=="Choice"){
        string+=printArenaFighters(arenaFighters.farm);
    }
    else if(arenaType=="Warehouse"&&arenaScreen=="Choice"){
        string+=printArenaFighters(arenaFighters.warehouse);
    }
    string+='</table>';
    return string;
}

function printArenaFighters(fighters){
    var string = ''
    for(var i=0;i<fighters.length;i++){
        var fig = fighters[i]
        string+='<tr><td>'+fig.name+'</td><td>'+getTypeName(fig.type)+'</td><td>'+printNumber(fig.health)+'</td><td>'+printNumber(fig.attack)+'</td><td><button onClick="ArenaFight('+i+')">Fight!</button></td></tr>'
        if(!fig.defeated) break;
    }
    return string;
}

function goToArenaFighters(num){
    if(num==0)arenaType="Dojo"
    if(num==1)arenaType="Mine"
    if(num==2)arenaType="Farm"
    if(num==3)arenaType="Warehouse"
    arenaScreen="Choice"
    loadScreen();
}

function getTypeName(type){
    if(type==1) return "Rock";
    if(type==2) return "Paper";
    if(type==3) return "Scissors";
    return "None";
}

function ArenaFight(num){
    if(arenaType=="Dojo") copyArenaEnemy(arenaFighters.dojo[num],num)
    copySelf();
    startArenaFight();
    loadScreen();
}

function startArenaFight(){
    arenaScreen = "Fight"
}


function copySelf(){
    arenaSelf.attack = getStrength();
    arenaSelf.maxhealth = arenaSelf.curhealth = player.hp;
}
function copyArenaEnemy(enemy,num){
    arenaEnemy.attack = enemy.attack;
    arenaEnemy.maxhealth = arenaEnemy.curhealth = enemy.health;
    arenaEnemy.type = enemy.type;
    arenaEnemy.name = enemy.name;
    arenaEnemy.gain = num*num;
}

function printArenaFight(){
    var string = "<img style=\"display: block;margin-left: auto;margin-right: auto;height:40%\" src=\""+getArenaImgPath(arenaEnemy.name)+"\"></img><p style=\"text-align:center\">"+arenaEnemy.name+"</p><p style=\"text-align:center\">Health:"+arenaEnemy.curhealth+"/"+arenaEnemy.maxhealth+"</p><hr/>"
    string += '<p style=\"text-align:center\"><b>You:</b></p><p style=\"text-align:center\">Health:'+arenaSelf.curhealth+'/'+arenaSelf.maxhealth+'</p><p style=\"text-align:center\"><b>Moves:</b></p>'
    string += printArenaSkills();
    return string;
}

function getArenaImgPath(boss){
    return "https://raw.githubusercontent.com/Ash031/Idling-Master/master/Bosses/"+boss+".png";

}

function printArenaSkills(){
    var string='<table class="w3-table-all"><tr>';
    var i = 0;
    for(;i<6;i++){
        if(i<skillsChosen.length){
            console.log(i)
            var skill = skills[skillsChosen[i]]
            string +='<td style="width:33%;text-align:center"><p><b>'+skill.name+'</b></p><p>Power: '+skill.mult+'</p><p><button onClick="useSkill('+i+')">Use</button></p></td>'
        }
        else if(i==5){
            string+='<td style="text-align:center;width:33%"><p><button onClick="useSkill(-1)">Pass Turn</button></p>'
        }
        else string+="<td style=\"width:33%;\"></td>"
        if(i==2) string+="</tr><tr>"
        
    }
    string+='</table>'
    return string
}

function useSkill(i){
    if(i==-1){
        arenaSelf.curhealth-=arenaEnemy.attack;
        if(arenaSelf.curhealth<=0)loseArena();
        loadScreen();
        return;
    }
    var attack = Math.floor(skills[skillsChosen[i]].mult * arenaSelf.attack * getMult(skills[skillsChosen[i]].type,arenaEnemy.type));
    arenaEnemy.curhealth-=attack;
    if(arenaEnemy.curhealth<=0) winArena();
    else{
        arenaSelf.curhealth-=arenaEnemy.attack;
        if(arenaSelf.curhealth<=0)loseArena();
    }
    loadScreen();
}

function winArena(){
    if(arenaType=="Dojo"){
        arenaFighters.dojo.forEach(fig=>{
            if(fig.name==arenaEnemy.name)fig.defeated=true
        })
        arenaTokens.dojo++;
    }
    arenaScreen=""
}

function loseArena(){
    arenaScreen=""
}

function getMult(attackType,defendType){
    if((attackType==1&&defendType==3) || (attackType==3&&defendType==2) ||(attackType==2&&defendType==1)) return 2;
    if((attackType==3&&defendType==1) || (attackType==2&&defendType==3) ||(attackType==1&&defendType==2)) return 0.5;
    return 1;
}

function goToArenaShop(num){
    if(num==0)arenaType="Dojo"
    if(num==1)arenaType="Mine"
    if(num==2)arenaType="Farm"
    if(num==3)arenaType="Warehouse"
    arenaScreen="Shop"
    loadScreen();
}

function printArenaShop(){
    var string = ''
    var selling = []
    if(arenaType=="Dojo") selling = arenaShop.dojo
    if(arenaType=="Mine") selling = arenaShop.mine
    if(arenaType=="Farm") selling = arenaShop.Farm
    if(arenaType=="Warehouse") selling = arenaShop.warehouse
    string = '<p><b>Token Available:</b>'+getArenaTokens()+'</p>'
    string += '<table class="w3-table-all"><tr><th>Name</th><th>Description</th><th>Level</th><th>Cost</th><th></th></tr>'
    var i = 0;
    selling.forEach(p=>{
        string+="<tr><td>"+p.name+"</td><td>"+p.desc+"</td><td>"+p.lvl+"</td><td>"+getPrice(p)+"<td><button onClick=\"buyArenaUpgrade("+i+")\" "+isAvailableToPurchase(p)+">Buy</button></td></tr>"
        i++;
    })
    string+="</table>"
    return string;
}
function isAvailableToPurchase(p){
    if((p.lvl>=p.maxLvl && p.maxLvl!=-1) || getArenaTokens()<getPrice(p)) return "disabled"
}
function getArenaTokens(){
    if(arenaType=="Dojo")return arenaTokens.dojo;
    if(arenaType=="Mine")return arenaTokens.mine;
    if(arenaType=="Farm")return arenaTokens.farm;
    if(arenaType=="Warehouse")return arenaTokens.warehouse;
}
function spendArenaTokens(price){
    if(arenaType=="Dojo")arenaTokens.dojo-=price;
    if(arenaType=="Mine")arenaTokens.mine-=price;
    if(arenaType=="Farm")arenaTokens.farm-=price;
    if(arenaType=="Warehouse")arenaTokens.warehouse-=price;
}
function buyArenaUpgrade(num){
    var perks = []
    if(arenaType=="Dojo")perks=arenaShop.dojo
    if(arenaType=="Mine")perks=arenaShop.mine
    if(arenaType=="Farm")perks=arenaShop.farm
    if(arenaType=="Warehouse")perks=arenaShop.warehouse;
    var perk = perks[num];
    spendArenaTokens(getPrice(perk));
    perk.lvl++;
}

function getArenaDojoAttackMultiplier(){
    var ret = 1;
    arenaShop.dojo.forEach(p=>{
        if(p.type=="Attack")ret*=(1+p.Bonus*p.lvl);
    })
    return ret;
}

function getArenaDojoDefenseMultiplier(){
    var ret = 1;
    arenaShop.dojo.forEach(p=>{
        if(p.type=="Defense")ret*=(1+p.Bonus*p.lvl);
    })
    return ret;
}

function getArenaMineDropMultiplier(){
    var ret = 1;
    arenaShop.mine.forEach(p=>{
        if(p.type=="Drop")ret*=(1+p.Bonus*p.lvl);
    })
    return ret;
}

function getArenaCraftingMultiplier(){
    var ret = 1;
    arenaShop.mine.forEach(p=>{
        if(p.type=="Crafting")ret*=(1-p.Bonus*p.lvl);
    })
    return ret;
}

function getArenaMiners(){
    var ret = 0;
    arenaShop.mine.forEach(p=>{
        if(p.type=="Miner")ret+=p.Bonus*p.lvl;
    })
    return ret;
}


function getArenaFarmTimeRedMultiplier(){
    var ret = 1;
    arenaShop.mine.forEach(p=>{
        if(p.type=="TimeTaken")ret*=(1-p.Bonus*p.lvl);
    })
    return ret;
}

function getArenaFarmXPMultiplier(){
    var ret = 1;
    arenaShop.mine.forEach(p=>{
        if(p.type=="XP")ret*=(1+p.Bonus*p.lvl);
    })
    return ret;
}

function getArenaFarmDropMultiplier(){
    var ret = 1;
    arenaShop.farm.forEach(p=>{
        if(p.type=="Drop")ret*=(1+p.Bonus*p.lvl);
    })
    return ret;
}

function getArenaWarehouseSlotsMultiplier(){
    var ret = 0;
    arenaShop.warehouse.forEach(p=>{
        if(p.type=="Space")ret+=p.Bonus*p.lvl;
    })
    return ret;
}

function getArenaWarehouseUpgradesDecMultiplier(){
    var ret = 0;
    arenaShop.warehouse.forEach(p=>{
        if(p.type=="Crates")ret+=p.Bonus*p.lvl;
    })
    return ret;
}
function getArenaWarehouseClonesDecMultiplier(){
    var ret = 0;
    arenaShop.warehouse.forEach(p=>{
        if(p.type=="Clones")ret+=p.Bonus*p.lvl;
    })
    return ret;
}
function getArenaWarehouseMultiplier(){
    var ret = 1;
    arenaShop.warehouse.forEach(p=>{
        if(p.type=="Mult")ret*=(1+p.Bonus*p.lvl);
    })
    return ret;
}
