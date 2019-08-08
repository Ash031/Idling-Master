function printNumber(number){
    if(options.number == undefined || options.number == 0){
        return SciNot(number)
    }
    if(options.number == 1){
        return smallNumNot(number)
    }
}

function SciNot(number){
    if(number<10) return String(number).substr(0,4)
    if(number<100) return String(number).substr(0,5)
    if(number<1000) return String(number).substr(0,6);
    return number.toPrecision(4);
}
function smallNumNot(number){
    if(number<1000) return number;
    if(number<1e6) return String(number/1e3).substr(0,5) + "K"
    if(number<1e9) return String(number/1e6).substr(0,5) + "M"
    if(number<1e12) return String(number/1e9).substr(0,5) + "T"
    if(number<1e15) return String(number/1e12).substr(0,5) + "Qa"
    if(number<1e18) return String(number/1e15).substr(0,5) + "Qi"
    if(number<1e21) return String(number/1e18).substr(0,5) + "Sx"
    if(number<1e24) return String(number/1e21).substr(0,5) + "Sp"
    if(number<1e27) return String(number/1e24).substr(0,5) + "Oc"
    if(number<1e30) return String(number/1e27).substr(0,5) + "No"
    if(number<1e33) return String(number/1e30).substr(0,5) + "Dc"
    if(number<1e36) return String(number/1e33).substr(0,5) + "Ud"
    if(number<1e39) return String(number/1e36).substr(0,5) + "Dd"
    if(number<1e42) return String(number/1e39).substr(0,5) + "Td"
    if(number<1e45) return String(number/1e42).substr(0,5) + "Qad"
    if(number<1e48) return String(number/1e45).substr(0,5) + "Qid"
    if(number<1e51) return String(number/1e48).substr(0,5) + "Sxd"
    if(number<1e54) return String(number/1e51).substr(0,5) + "Spd"
    if(number<1e57) return String(number/1e54).substr(0,5) + "Ocd"
    if(number<1e60) return String(number/1e57).substr(0,5) + "Nod"
    if(number<1e63) return String(number/1e60).substr(0,5) + "Vg"
    if(number<1e66) return String(number/1e63).substr(0,5) + "Uvg"
    if(number<1e69) return String(number/1e66).substr(0,5) + "Dvg"
    if(number<1e72) return String(number/1e69).substr(0,5) + "Tvg"
    if(number<1e75) return String(number/1e72).substr(0,5) + "Qavg"
    if(number<1e78) return String(number/1e75).substr(0,5) + "Qivg"
    if(number<1e81) return String(number/1e78).substr(0,5) + "Sxvg"
    if(number<1e84) return String(number/1e81).substr(0,5) + "Spvg"
    if(number<1e87) return String(number/1e84).substr(0,5) + "Ocvg"
    if(number<1e90) return String(number/1e87).substr(0,5) + "Novg"
}