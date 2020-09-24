var input1=prompt("Enter marks in CD");
var input2=prompt("Enter marks in DAA");
var input3=prompt("Enter marks in DBMS");
var input4=prompt("Enter marks in WD");
var input5=prompt("Enter marks in MLT");

var total=parseInt(input1)+parseInt(input2)+parseInt(input3)+parseInt(input4)+parseInt(input5);
var per=(total/500)*100;
document.write(per+"<br>");
if(per>=90){
    document.write("Grade A");
}
else if(per>=75 && per<=89){
    document.write("Grade B");
}
else if(per>=60 && per<=74){
    document.write("Grade C");
}
else if(per>=33 && per<=59){
    document.write("Grade D");
}
else{
    document.write("Grade E");
}
