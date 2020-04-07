let raw1 = {
  principal: 2500,
  time: 1.8
};
let raw2 = {
  principal: 1000,
  time: 5
};
let raw3 = {
  principal: 3000,
  time: 1
};
let raw4 = {
  principal: 2000,
  time: 3
};

let data = [raw1, raw2, raw3, raw4];

function interestCalculator(array) {
  let interestData =[];

  for (let i of array){
    if( (i.principal >= 2500) && (i.time > 1) && (i.time <3) ){
      i.rate = 3;
    }
    else if( (i.principal >= 2500) && (i.time >=3) ){
      i.rate = 4;
    }
    else if( (i.principal < 2500) || (i.time >= 1) ){
      i.rate = 2;
    }
    else{
      i.rate = 1;
    }

    let calcInterest = (i.principal*i.time*i.rate)/100;
    interestData.push(
      {
        principal: i.principal,
        time: i.time,
        rate: i.rate,
        interest: calcInterest
      });
  }
  
  console.log(interestData);
  return interestData;
}

interestCalculator(data);