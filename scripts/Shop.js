function printShop(){
    var string = "<h1 style='text-align:center'>Welcome to The Shop</h1><hr/>";
    string += "<button class='w3-button w3-green' onclick='goToDojo()'>Go Back</button>"
    string += "<table class='w3-table-all'>";
    string += "<tr><td><p>+1 Strength</p><button class='w3-button w3-green' onclick='buy(1)'>20 Moneys</button></td><td>"
    string += "<p>+1 HP</p><button class='w3-button w3-green' onclick='buy(2)'>10 Moneys</button></td><td>"
    string += "<p>+1 Defense</p><button class='w3-button w3-green' onclick='buy(3)'>30 Moneys</button></td></tr>"
    string += "<tr><td><p>+10 Strength</p><button class='w3-button w3-green' onclick='buy(4)'>200 Moneys</button></td><td>"
    string += "<p>+10 HP</p><button class='w3-button w3-green' onclick='buy(5)'>100 Moneys</button></td><td>"
    string += "<p>+10 Defense</p><button class='w3-button w3-green' onclick='buy(6)'>300 Moneys</button></td></tr>"
    string += "<tr><td><p>+1 Clone</p><button class='w3-button w3-green' onclick='buy(7)'>15 Moneys</button>"
    string += "</td><td></td><td></td></tr></table>";
    document.getElementById('Screen').innerHTML=string;
}

function buy(item){
    switch(item){
        case(1):
            if(player.money>=20){
                player.money-=20;
                dojoStats.attack++;
                player.strength++;
            }
            break;
        case(2):
            if(player.money>=10){
                player.money-=10;
                dojoStats.hp++;
                player.hp++;
            }
            break;
        case(3):
            if(player.money>=30){
                player.money-=30;
                dojoStats.defense++;
                player.defense++;
            }
            break;
            case(4):
                if(player.money>=200){
                    player.money-=200;
                    dojoStats.attack+=10;
                    player.strength+=10;
                }
                break;
            case(5):
                if(player.money>=100){
                    player.money-=100;
                    dojoStats.hp+=10;
                    player.hp+=10;
                }
                break;
            case(6):
                if(player.money>=300){
                    player.money-=300;
                    dojoStats.defense+=10;
                    player.defense+=10;
                }
                break;
            case(7):
            if(player.money>=15){
                player.money-=15;
                player.maxClones++;
                player.idleClones++;
            }
            break;
    }
}