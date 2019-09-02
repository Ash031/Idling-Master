function printArena(){
    var string = '<h1 style="text-align:center">Arena</h1><hr/><div style="padding-left: 10px;"><p><b>Available Vouchers:</b>'+printNumber(Math.floor(arenaVouchers))+'</p>';
    if(arenaScreen=="Fight"){
        string += printArenaFight();
    }
    else{
        string += getArenaButtons();
        if(arenaScreen=="Choice"){
            string += '<p><b>Choose a Fighter to spar from the table below:</b></p>'
            string += getArenaFightersTable();  
        }
        else if(arenaScreen=="Shop"){
            string+=printArenaShop();
        }
        else if(arenaScreen=="Skills"){
            string +=printSkillChoosingMenu()
        }
    }
    string+="</div>"
    document.getElementById('Screen').innerHTML=string;
}

function printArenaHelp(){
    var string = '<h1 style="text-align:center">Arena</h1><hr/>';
    string += '<p>Arena is divided into 3 main menus, the Figthing Menu, the Skill Shop and the Area Shop</p><p>Each Area has a set of fighters and a shop, each Area has it\'s own tokens, so defeating 1 Dojo Arena Boss gives you Dojo Tokens to buy bonuses on Dojo Shop</p><p>On The Skill Shop you buy and select Skills to use on fights. As Fighters, skills have types, so using a Rock skill on a Paper Fighter will only do half Damage, but against a scissors enemy will do double damage</p><p>Some Skills have effects, Salt for example, gives you an extra 50% of your health, some Counters, some block, try to discover them all!</p><p>You need vouchers to fight, you get an Arena Voucher every 2 hours, so use them wisely!</p><p>You hit first on the Arena</p>'
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
    string += '<button onClick="goToArenaSkills()">Skills</button></p><hr/><p><b>Visit Arena Shop:</b></p><p>'
    for(var i=0;i<4;i++){
        if((i==1 && values.boss<8) ||(i==2 && values.boss<13)||(i==3 && values.boss<20)) break;
        string += '<button onClick="goToArenaShop('+i+')">'+getArenaName(i)+'</button>'
    }
    return string+"</p>";
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
    if(arenaVouchers<1)return;
    arenaVouchers--;
    if(arenaType=="Dojo") copyArenaEnemy(arenaFighters.dojo[num],num)
    if(arenaType=="Mine") copyArenaEnemy(arenaFighters.Mine[num],num)
    if(arenaType=="Farm") copyArenaEnemy(arenaFighters.farm[num],num)
    if(arenaType=="Warehouse") copyArenaEnemy(arenaFighters.warehouse[num],num)
    copySelf();
    startArenaFight();
    loadScreen();
}

function startArenaFight(){
    coolDowns = [0,0,0,0,0,0]
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
    var string = "<div class=\"w3-col l9 m9\"><img style=\"display: block;margin-left: auto;margin-right: auto;height:40%\" src=\""+getArenaImgPath(arenaEnemy.name)+"\"></img><p style=\"text-align:center\">"+arenaEnemy.name+"</p><p style=\"text-align:center\">Health:"+printNumber(arenaEnemy.curhealth)+"/"+printNumber(arenaEnemy.maxhealth)+"</p><hr/>"
    string += '<p style=\"text-align:center\"><b>You:</b></p><p style=\"text-align:center\">Health:'+printNumber(arenaSelf.curhealth)+'/'+printNumber(arenaSelf.maxhealth)+'</p><p style=\"text-align:center\"><b>Moves:</b></p>'
    string += printArenaSkills();
    string += "</div><div>"+arenaLog+"</div>"
    return string;
}

function getArenaImgPath(boss){
    return "https://raw.githubusercontent.com/Ash031/Idling-Master/master/Bosses/"+boss+".png";

}

function printArenaSkills(){
    var string='<table class="w3-table-all"><tr>';
    for(var i = 0;i<6;i++){
        if(i<skillsChosen.length){
            var skill = skills[skillsChosen[i]]
            string +='<td style="width:33%;text-align:center"><p><b>'+skill.name+'</b></p><p>Power: '+skill.mult+'</p><p><button onClick="useSkill('+i+')"'
            if(coolDowns[i]>0)string += "disabled"
            string+='>Use</button></p></td>'
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
    var theSkill = skills[skillsChosen[i]]
    for(var j=0;j<6;j++) coolDowns[j] = coolDowns[j]-1;
    if(i==-1){
        arenaLog= "<p>You wait a turn</p>"+arenaLog
        if(arenaEnemy.par<=0){
            arenaSelf.curhealth-=arenaEnemy.attack;
            arenaLog = '<p>The enemy attack you and did '+printNumber(arenaEnemy.attack)+' damage</p>'+arenaLog
            if(arenaSelf.curhealth<=0)loseArena();
            loadScreen();
        }
        else{
            arenaLog="<p>The enemy is Paralyzed</p>"+arenaLog 
            arenaEnemy.par--;
        }
        return;
    }
    var attack = Math.floor(theSkill.mult * arenaSelf.attack * getMult(theSkill.type,arenaEnemy.type));
    var enemyAttack = arenaEnemy.attack;
    if(theSkill.effect!=""){
        var property = theSkill.effect.split(" ")[0];
        if(property=="Heal"){
            arenaLog = '<p>You healed yourself</p>'+arenaLog
            var amount = parseInt(theSkill.effect.split(" ")[1])
            arenaSelf.curhealth+=(arenaSelf.maxhealth*amount/100)
        }
        else if(property=="Block"){
            arenaLog = '<p>You Blocked some damage</p>'+arenaLog
            var amount = parseInt(theSkill.effect.split(" ")[1])
            enemyAttack-=(enemyAttack*100/amount)
        }
        else if(property=="Vamp"){
            arenaLog = '<p>You healed yourself with some of the damage done</p>'+arenaLog
            var amount = parseInt(theSkill.effect.split(" ")[1])
            arenaSelf.curhealth+=attack*100/amount;
        }
        else if(property=="Paralyze"){
            arenaLog = '<p>The enemy Got Paralyzed!</p>'+arenaLog
            var amount = parseInt(theSkill.effect.split(" ")[1])
            arenaEnemy.par=amount;
        } 
        else if(property=="Counter"){
            arenaLog = '<p>You Countered some damage</p>'+arenaLog
            var amount = parseInt(theSkill.effect.split(" ")[1])
            attack+=(enemyAttack*100/amount);
        }
    }
    arenaEnemy.curhealth-=attack;
    if(attack!=0)arenaLog = '<p>You dealt '+printNumber(attack)+' points of damage</p>'
    if(arenaEnemy.curhealth<=0) winArena();
    else{
        if(arenaEnemy.par<=0){
            arenaSelf.curhealth-=arenaEnemy.attack;
            arenaLog = '<p>The enemy attack you and did '+printNumber(arenaEnemy.attack)+' damage</p>'+arenaLog
            if(arenaSelf.curhealth<=0)loseArena();
            loadScreen();
        }
        else{
            arenaLog="<p>The enemy is Paralyzed</p>"+arenaLog 
            arenaEnemy.par--;
        }
    }
    coolDowns[i] = theSkill.coolDown;
    loadScreen();
}

function winArena(){
    arenaLog=""
    var amount = 1;
    var i=1;
    AddAction(1,"KillArenaBoss");
    if(arenaType=="Dojo"){
        arenaFighters.dojo.forEach(fig=>{
            if(fig.name==arenaEnemy.name){
                fig.defeated=true
                amount=i*i*getBountyArenaTokens();
            }
            i++;
        })
        arenaTokens.dojo+=amount;
    }
    if(arenaType=="Mine"){
        arenaFighters.Mine.forEach(fig=>{
            if(fig.name==arenaEnemy.name){
                fig.defeated=true
                amount=i*i*getBountyArenaTokens();
            }
            i++;
        })
        arenaTokens.mine+=amount;
    }
    if(arenaType=="Farm"){
        arenaFighters.farm.forEach(fig=>{
            if(fig.name==arenaEnemy.name){
                fig.defeated=true
                amount=i*i*getBountyArenaTokens();
            }
            i++;
        })
        arenaTokens.farm+=amount;
    }
    if(arenaType=="Warehouse"){
        arenaFighters.warehouse.forEach(fig=>{
            if(fig.name==arenaEnemy.name){
                fig.defeated=true
                amount=i*i*getBountyArenaTokens();
            }
            i++;
        })
        arenaTokens.warehouse+=amount;
    }
    lifeStats.totalArenaBosses++;
    stats.totalArenaBosses++;
    arenaScreen=""
}

function loseArena(){
    arenaLog=""
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
        string+="<tr><td>"+p.name+"</td><td>"+p.desc+"</td><td>"+p.lvl+"</td><td>"+printNumber(getPrice(p))+"<td><button onClick=\"buyArenaUpgrade("+i+")\" "+isAvailableToPurchase(p)
        if(p.lvl>=p.maxLvl&& p.maxLvl!=-1) string += ">Maxed"
        else string += ">Buy"
        string += "</button></td></tr>"
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
    AddAction(price,"SpendArenaTokens");
    if(arenaType=="Dojo"){
        if(arenaTokens.dojo>=price){
            arenaTokens.dojo-=price;
            return true;
        }
    }
    else if(arenaType=="Mine"){
        if(arenaTokens.mine>=price){
            arenaTokens.mine-=price;
            return true;
        }
    }
    else if(arenaType=="Farm"){
        if(arenaTokens.farm>=price){
            arenaTokens.farm-=price;
            return true;
        }
    }
    if(arenaType=="Warehouse"){
        if(arenaTokens.warehouse>=price){
            arenaTokens.warehouse-=price;
            return true;
        }
    }
    return false;
}
function buyArenaUpgrade(num){
    var perks = []
    if(arenaType=="Dojo")perks=arenaShop.dojo
    if(arenaType=="Mine")perks=arenaShop.mine
    if(arenaType=="Farm")perks=arenaShop.Farm
    if(arenaType=="Warehouse")perks=arenaShop.warehouse;
    var perk = perks[num];
    if(spendArenaTokens(getPrice(perk))) perk.lvl++;
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
    arenaShop.Farm.forEach(p=>{
        if(p.type=="TimeTaken")ret*=(1-p.Bonus*p.lvl);
    })
    return ret;
}

function getArenaFarmXPMultiplier(){
    var ret = 1;
    arenaShop.Farm.forEach(p=>{
        if(p.type=="XP")ret*=(1+p.Bonus*p.lvl);
    })
    return ret;
}

function getArenaFarmDropMultiplier(){
    var ret = 1;
    arenaShop.Farm.forEach(p=>{
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

function goToArenaSkills(){
    arenaScreen="Skills"

    loadScreen();
}

function printSkillChoosingMenu(){
    var string = '<p><b>Skills:</b></p><table class="w3-table-all"><tr><th>Name</th><th>Description</th><th>Type</th><th>Power</th><th>Cooldown</th><th></th></tr>'
    for(var i=skillPage*10;i<skills.length&&i<(10+skillPage*10);i++){
        var s =skills[i]
        string+= '<tr><td>'+s.name+'</td><td>'+s.desc+'</td><td>'+getTypeName(s.type)+'</td><td>'+s.mult+'</td><td>'+s.coolDown+'</td><td>'
        if(!s.got)string+="<button onClick=\"buySkill("+i+")\">Buy Skill For "+printNumber(s.price)+" Money</button>"
        else{
            if(skillsChosen.indexOf(i)==-1){
                string+='<button onClick="selectSkill('+i+')"'
                if(skillsChosen.length>=5) string +="disabled"
                string+=">Select</button>"
            }
            else{
                string+="<button onClick=\"deSelectSkill("+i+")\""
                if(skillsChosen.length<=1) string+= "disabled"
                string+=">Remove</button>"
            }
        }
        string+='</tr>'
    }
    string+='</table><button onClick="BackSkills()"><</button><button style="float:right" onClick="NextSkills()">></button>'
    return string;
}

function BackSkills(){
    if(skillPage>0)skillPage--;
    loadScreen();
}

function NextSkills(){
    if(skillPage<1)skillPage++;
    loadScreen();
}

function selectSkill(num){
    skillsChosen.push(num);
    loadScreen();
}
function deSelectSkill(num){
    skillsChosen = skillsChosen.filter((n)=>n!=num);
    loadScreen();
}

function buySkill(num){
    if(spendMoney(skills[num].price)){
        skills[num].got=true;
    }
    loadScreen();
}