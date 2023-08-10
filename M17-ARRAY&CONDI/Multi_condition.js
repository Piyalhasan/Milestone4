// M17-7:Handle multiple conditions, and or 
var isGraduate = true;

  if(isGraduate == true){
    console.log('eso biye kore feli');
 }else{
    console.log('tor kopale biya nai');
 }



var isGraduate = true;
var salary = 75000;
 if(isGraduate == true && salary>90000){
    console.log('eso biye kore feli');
 }else{
   console.log('tor kopale biya nai');
 }



var isGraduate = true;
var salary = 75000;
 var cars = 1;
 if(isGraduate == true && salary > 60000  && cars >= 1){
    console.log('eso biye kore feli')
 }else{
   console.log('tor kopale biya nai')
 }

 

var isGraduate = true;
var salary = 75000;
 var cars = 1;

 if(isGraduate == false|| salary >= 75000 || cars <= 1){
    console.log('eso biye kore feli')

 }else{
    console.log('tor kopale biya nai')
 }

//  && all condition true than output true,otherwise false
// || any one condition true than output true