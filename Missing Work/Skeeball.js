function bowl(){
  var num = Math.random()
  var points = num*5;
  points = Math.floor(points);
  points = points*10;
  return points;
}

funciton totalPoints(){
  var runningTotal = 0;
  for(var b=0;b<5;b++){
    runningTotal = runningTotal+bowl();
  }
  return runningTotal;
}

function skeeBall(mypoints){
  var tickets = 0;
  if(mypoints<=50){
    tickets = 2;
  }
  else if(mypoints<=100){
    tickets = 3
  }
  else if(mypoints<=150){
    tickets = 5
  }
  else if(mypoints<=200){
    tickets = 7
  }
  else if(mypoints<=250){
    tickets = 9
  }
  else{
    tickets = 12
  }
  return tickets
}
