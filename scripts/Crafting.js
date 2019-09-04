function printCrafting(){
    var string = '<h1 style="text-align:center">Crafting</h1><hr/><div style="padding-left: 10px;">'
    string += '<div class="w3-col l3 m3"><h2>Ores</h2>'
    string += getOres();
    string += '<button onClick="goToMine()">Go back</button></div>';
    string += '<div class = "w3-col l9 m9"><h2>Crafting Recipes</h2>'
    string += '<table class="w3-table-all">';
    string += getCraftingTable();
    string += '</table></div>'
    string += '<button onclick="previousCraftingPage();">&lt</button><button style="float:right" onclick="nextCraftingPage()">&gt</button></div>';
    document.getElementById('Screen').innerHTML=string;
}
function printCraftingHelp(){
    var string = '<h1 style="text-align:center">Crafting</h1><hr/>';
    string += '<p>On This Screen you use the ores you gathered from mining to craft equipment</p><p>Equipment can enhance the next attributes:<p><ul><li>Attack</li><li>Defense</li><li>HP</li></ul></p><p>The Effect is the multiplicator the equipment gives by the next formula:</p><p> Bonus Attack = (1+Iron Dog Effect)*(1+Smelted Axe Effect)*...</p><p> Mixed stats means that the bonus affects all stats</p>'
    document.getElementById('Screen').innerHTML=string;
}

function getCraftingTable(){
    var string = '<tr><th>Name</th><th>Cost</th><th>Effect</th><th>Craft</th></tr>'
    for(var i=crafting.page*5;i<crafting.items.length&&i<(crafting.page+1)*5;i++){
        var item = crafting.items[i];
        string += '<tr><td>'+item.name+'</td><td>';
        for(var j = 0;j<item.cost.length;j++){
            string += '<p>'+printNumber(Math.floor(Math.pow(item.level,1.1)*item.cost[j].baseCost*getArenaCraftingMultiplier()))+' '+ ores[item.cost[j].ore].name+'</p>';
        }
        string += '</td><td>'+printNumber(1+(item.level-1)*item.perLevel)+'X '+item.bonus+'</td><td><button onclick="craft('+i+')">Craft</button><button onclick="craftMax('+i+')">Craft Max</button></td></tr>';
    }
    return string;
}

function previousCraftingPage(){
    if(crafting.page!=0)crafting.page--;
    loadScreen();
}
function nextCraftingPage(){
    if(crafting.page!=3)crafting.page++;
    loadScreen();
}

function craftMax(itemN){
    for(var i = 0;i<100 && craft(itemN);i++);
}

function craft(itemN){
    var item = crafting.items[itemN];
    for(var i = 0;i<item.cost.length;i++){
        if(ores[item.cost[i].ore].quant<Math.floor(Math.pow(item.level,1.1)*item.cost[i].baseCost*getArenaCraftingMultiplier())) return false;
    }
    for(var i = 0;i<item.cost.length;i++){
        ores[item.cost[i].ore].quant-=Math.floor(Math.pow(item.level,1.1)*item.cost[i].baseCost*getArenaCraftingMultiplier());
    }
    crafting.items[itemN].level++;
    loadScreen();
    return true;
}