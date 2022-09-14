let goals = 0;

function harry() {
  goals = goals + 1;
  return goals
}

for (let i=  0; goals < 100; i++) { 
    harry();
    let value = harry()
    console.log({value})
}
