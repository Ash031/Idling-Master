function printCrafting(){
    var string = '<h1 style="text-align:center">Crafting</h1><hr/><table class="w3-table-all">';
    string += getCraftingTable();
    string += '</table>'
    string += '<button  onclick="previousCraftingPage();">&lt</button><button style="float:right" onclick="nextCraftingPage()">&gt</button>';
    document.getElementById('Screen').innerHTML=string;
}
function printCraftingHelp(){
    var string = '<h1 style="text-align:center">Crafting</h1><hr/>';
    string += '<p>On This Screen you use the ores you gathered from mining to craft equipment</p><p>Equipment can enhance the next attributes:<p><ul><li>Attack</li><li>Defense</li><li>HP</li></ul></p><p>Mixed stats means that the bonus affects all stats</p>'
    document.getElementById('Screen').innerHTML=string;
}

function getCraftingTable(){
    var string = '<tr><th>Name</th><th>Cost</th><th>Effect</th><th>Craft</th></tr>'
    for(var i=crafting.page*5;i<crafting.items.length&&i<(crafting.page+1)*5;i++){
        var item = crafting.items[i];
        string += '<tr><td>'+item.name+'</td><td>';
        for(var j = 0;j<item.cost.length;j++){
            string += '<p>'+printNumber(Math.floor(Math.pow(item.level,1.5)*item.cost[j].baseCost*getArenaCraftingMultiplier()))+' '+ ores[item.cost[j].ore].name+'</p>';
        }
        string += '</td><td>'+(item.level-1)*item.perLevel+' '+item.bonus+'</td><td><button onclick="craft('+i+')">Craft</button></td></tr>';
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

function craft(itemN){
    var item = crafting.items[itemN];
    for(var i = 0;i<item.cost.length;i++){
        if(ores[item.cost[i].ore].quant<Math.floor(Math.pow(item.level,1.5)*item.cost[i].baseCost*getArenaCraftingMultiplier())) return;
    }
    for(var i = 0;i<item.cost.length;i++){
        ores[item.cost[i].ore].quant-=Math.floor(Math.pow(item.level,1.5)*item.cost[i].baseCost*getArenaCraftingMultiplier());
    }
    crafting.items[itemN].level++;
    loadScreen();
}