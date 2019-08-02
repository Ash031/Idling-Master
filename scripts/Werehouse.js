function printWerehouse(){
    var string = '<h1 style="text-align:center">Werehouse</h1>';
    string += getWerehouseTable();
    document.getElementById('Screen').innerHTML=string;
}