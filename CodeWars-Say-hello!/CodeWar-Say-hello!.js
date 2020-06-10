function greet(name) {
    if(name === '') return null;
    else if ( name !== String(name)){
      return null;
    }
    else return (`hello ${name}!`);
  }