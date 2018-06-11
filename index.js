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
  var shout = 'HELLO';
  var whisper = 'hello';

  
  if(whisper){
  return string.toLowerCase();
  }
  
  else if(shout){
    return string.toUpperCase();
    
  }
  
  else {
    return "I love you, Grandma.";
  }
}