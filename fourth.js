function greeting(num){
  if (num <= 10){
    return "Good Morning!";
  }
  else if (num <= 20){
    return "Good Evening!";
  }
  else if (num <= 30){
    return "Good Night!";
  }
  else {
      return "Its midnight, You should sleep!!!";
  }
}

console.log(greeting(31));
