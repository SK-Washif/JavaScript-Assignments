// You have a function isJavaScriptFile that checks if a given file name has a .js extension. The function should return true if the file name ends with .js and false otherwise. Additionally, if no file name is provided, the function should return false.

function isJavaScriptFile(fileName){

  if(!fileName){
    
    return false;
  }
  
    const JSFile = fileName.endsWith('.js');
    return JSFile;

  

}

const x = isJavaScriptFile('javascript.js');
console.log(x);

const y = isJavaScriptFile('style.css');
console.log(y);

const z = isJavaScriptFile('java');
console.log(z);
console.log('please enter a file name!');