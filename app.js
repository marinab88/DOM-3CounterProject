let count = 0;

// Increases the element
plus = () => {
count += 1;
document.getElementById('currentValue').innerHTML = count;
};

// Decreases the element
minus = () => {
  
  //Counter value should always be greater than zero
   if (count > 0) {
    count -= 1;
  }
 
  document.getElementById('currentValue').innerHTML = count;
   
};