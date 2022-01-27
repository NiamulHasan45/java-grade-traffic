var alia=95, Dalia=66, Salia=80, Malia= 59, Lilia=47, Jalaiya= 77;

if (90<=alia){
    console.log("She got A+");
}
else if(80<alia && 90>alia){
    console.log("She got A");
}
else if(70<alia && 80>alia){
    console.log("She got B");
}
else if(60<alia && 70>alia){
    console.log("She got C");
}
else if(50<alia && 60>alia){
    console.log("She got D");
}
else if(40<alia && 50>alia){
    console.log("She got E");
}
else{
    console.log("Ahare Fail Korla")
}


var signal = ["red", "yellow", "green"];
var index = signal.indexOf("yellow");
if(signal[index] == "green"){
    console.log("You are safe");
}
else if(signal[index] == "yellow"){
    console.log("Wait sometimes");
}
else{
    console.log("Crossing road in this time is dengerous!")
}