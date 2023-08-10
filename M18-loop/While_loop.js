// M18-2:while loop,debug and understand while loop;
// if= একটা কন্ডিশন ফিলাপ করে আর while একাধিক কন্ডিশন ফিল আপ করে
// loop er condition er variable er value অবশ্যই পরিবর্তন করতে হভে (বাড়ানো/কমানো) না হয়,লুপ আজীবন চলতেই থাকবে

var roastGiven = 0;
while(roastGiven < 7){
    console.log('roastgiven den, please')
    console.log(roastGiven);
    // roastGiven = roastGiven + 1;
    // roastGiven += 1;
    roastGiven++;
}

var pizza = 0;
while(pizza < 5){
    console.log('sobai k pizza dao')
    console.log(pizza);
    pizza = pizza + 1;
}