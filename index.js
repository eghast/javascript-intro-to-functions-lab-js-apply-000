function shout(string){
  
  return string.toUpperCase();
}

function whisper(string){
  
  return string.toLowerCase();
}

function logShout(string){
  
  console.log(string.toUpperCase());
}

function logWhisper(string){
  
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var upperCase = 'HELLO'

  
  if(string === upperCase){
  return string.toUpperCase();
  }
  
  else if(string != upperCase){
    return string.toLowerCase();
    
  }
  
  else {
    return "I love you, too.";
  }
}