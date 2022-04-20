function greet(name){
    let greeting = "";
    if(name === null){
        greeting = `Hello there!`;
    }
    else if(Array.isArray(name)){
        greeting = `Hello`;
        for(let i = 0; i<name.length; i++){
            greeting += ", "+name[i];
        }
    }
    else{
        if(name == name.toUpperCase()){
            greeting = `HELLO ${name}!`
        }
        else {
            greeting = `Hello, ${name}`;
        }
    }
    return greeting;
}