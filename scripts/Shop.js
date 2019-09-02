function printShop(){
    var string = "<h1 style='text-align:center'>Welcome to The Shop</h1><hr/>";
    string += "<table class='w3-table-all'>";
    string += "<tr><td><p>+1 Attack</p><button onclick=\"buy('1Attack')\">20 Moneys</button></td><td>"
    string += "<p>"+printNumber(getClones())+" Attack</p><button onclick=\"buyMax('Attack',"+getClones()+")\">"+printNumber(getClones()*20)+" Moneys</button></td><td>"
    string += "<p>+"+printNumber(Math.floor(player.money/20))+" Attack</p><button onclick=\"buyMax('Attack',"+Math.floor(player.money/20)+")\">"+printNumber(player.money-player.money%20)+" Moneys</button></td></tr>"
    string += "<tr><td><p>+1 HP</p><button onclick=\"buy('1HP')\">10 Moneys</button></td><td>"
    string += "<p>"+printNumber(getClones())+" HP</p><button onclick=\"buyMax('HP',"+getClones()+")\">"+printNumber(getClones()*10)+" Moneys</button></td><td>"
    string += "<p>+"+printNumber(Math.floor(player.money/10))+" HP</p><button onclick=\"buyMax('HP',"+Math.floor(player.money/10)+")\">"+printNumber(player.money-player.money%10)+" Moneys</button></td></tr>"
    string += "<tr><td><p>+1 Defense</p><button onclick=\"buy('1Defense')\">30 Moneys</button></td><td>"
    string += "<p>"+printNumber(getClones())+" Defense</p><button onclick=\"buyMax('Defense',"+getClones()+")\">"+printNumber(getClones()*30)+" Moneys</button></td><td>"
    string += "<p>+"+printNumber(Math.floor(player.money/30))+" Defense</p><button onclick=\"buyMax('Defense',"+Math.floor(player.money/30)+")\">"+printNumber(player.money-player.money%30)+" Moneys</button></td></tr>"
    string += "<tr><td><p>+1 Clone</p><button onclick=\"buy('1Clone')\">150 Moneys</button></td>"
    string += "<td><p>"+printNumber(getClones())+" Clone</p><button onclick=\"buyMax('Clone',"+getClones()+")\">"+printNumber(getClones()*150)+" Moneys</button></td>"
    string += "<td><p>+"+printNumber(Math.floor(player.money/150))+" Clone</p><button onclick=\"buyMax('Clone',"+Math.floor(player.money/150)+")\">"+printNumber(player.money-player.money%150)+" Moneys</button></td>"
    string += "</tr></table>";
    document.getElementById('Screen').innerHTML=string;
}

function buyMax(item,amount){
    console.log(1)
    if(item==='Attack' && spendMoney(amount*20)){
        player.strength+=amount;
        dojoStats.attack+=amount;
    }
    if(item==='Defense' && spendMoney(amount*30)){
        player.defense+=amount;
        dojoStats.defense+=amount;
    }
    if(item==='HP' && spendMoney(amount*10)){
        player.hp+=amount;
        dojoStats.hp+=amount;
    }
    if(item==='Clone' && spendMoney(amount*150)) addClones(amount)
    loadScreen();
}

function buy(item){
    if(item==='1Attack'){
        if(spendMoney(20)){
            dojoStats.attack++;
            player.strength++;
        }    
    }
    if(item==='10Attack'){
        if(spendMoney(200)){
            dojoStats.attack+=10;
            player.strength+=10;
        }    
    }
    if(item==='1HP'){
        if(spendMoney(10)){
            dojoStats.hp++;
            player.hp++;
        }    
    }
    if(item==='10HP'){
        if(spendMoney(100)){
            dojoStats.hp+=10;
            player.hp+=10;
        }    
    }
    if(item==='1Defense'){
        if(spendMoney(30)){
            dojoStats.defense++;
            player.defense++;
        }    
    }
    if(item==='10Defense'){
        if(spendMoney(300)){
            dojoStats.defense+=10;
            player.defense+=10;
        }    
    }
    if(item==='1Clone'){
        if(spendMoney(150)){            
            addClones(1)

        }    
    }
    if(item==='10Clone'){
        if(spendMoney(1500)){
            addClones(10)
        }    
    }
    loadScreen();
}