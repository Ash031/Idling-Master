function printFarm(){
    var string = '<h1 style="text-align:center">Farm</h1><hr/>';
    string += '<div class="w3-col m3 l2"><p style="text-align:center">Seed Selector</p>';
    string += '<label><input type="radio" name="seed" value="1">Weak Apple</label><br>';
    string += '<label><input type="radio" name="seed" value="2">Medium Apple</label><br>';
    string += '</div><div class="w3-col m9 l10">';
    string += '<table>'
    var done = 0;
    for(var i=0;i<5;i++){
        for(var j=0;j<4;j++){
            done++;
        }
    }
    string += '</table></div>';
    document.getElementById('Screen').innerHTML=string;
}