function changeState(current) {
    const arrState=['red','green','yellow']
    let nextState=""
    if (typeof current !== 'string') {
        console.log("the input should be string")
        return;
    }
  const light=current.toLowerCase()
 if(light===arrState[0]){
    nextState=arrState[1]
 }else if(light===arrState[1]){
    nextState=arrState[2]
 }else if(light===arrState[2]){
    nextState=arrState[0]
 }
  return nextState


}
changeState("green")