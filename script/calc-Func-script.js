function addNumber(num) {
    document.querySelector("#results").value += num;
}
  
function clearResults() {
    document.querySelector("#results").value = "";
}
  
function addition() {
    var current_value = document.querySelector("#results").value.trim();
  if (current_value !== ''){
    var last_digit = current_value.slice(current_value.length - 1);
    if (last_digit !== '+' && last_digit !== '-' && last_digit !== '*' && last_digit !== '/'){
      document.querySelector("#results").value += "+";
    }
  }
  else{
    document.querySelector("#results").value += "+";
  }
}

function subtraction() {
    var current_value = document.querySelector("#results").value.trim();
  if (current_value !== ''){
    var last_digit = current_value.slice(current_value.length - 1);
    if (last_digit !== '+' && last_digit !== '-' && last_digit !== '*' && last_digit !== '/'){
      document.querySelector("#results").value += "-";
    }
  }
  else{
    document.querySelector("#results").value += "-";
  }
  
}

function multiplication() {
    var current_value = document.querySelector("#results").value.trim();
  if (current_value !== ''){
    var last_digit = current_value.slice(current_value.length - 1);
    if (last_digit !== '+' && last_digit !== '-' && last_digit !== '*' && last_digit !== '/'){
      document.querySelector("#results").value += "*";
    }
  }  
}

function division() {
    var current_value = document.querySelector("#results").value.trim();
  if (current_value !== ''){
    var last_digit = current_value.slice(current_value.length - 1);
    if (last_digit !== '+' && last_digit !== '-' && last_digit !== '*' && last_digit !== '/'){
      document.querySelector("#results").value += "/";
    }
  }  
  
}

function changeSigns() {
    var current_value = document.querySelector("#results").value.trim();
  if (current_value !== ''){  
  var sign_pos = Math.max(document.querySelector("#results").value.lastIndexOf('+'),
                         document.querySelector("#results").value.lastIndexOf('-'),
                         document.querySelector("#results").value.lastIndexOf('*'),
                         document.querySelector("#results").value.lastIndexOf('/'));
    switch (sign_pos){
       
      case -1: 
      case 0:
        document.querySelector("#results").value = 
          document.querySelector("#results").value * (-1);
        break;
        
      default:
        var last_number = document.querySelector("#results").value.slice(sign_pos+1);
        var rest_value = document.querySelector("#results").value.slice(0,sign_pos);
        var sign = document.querySelector("#results").value.slice(sign_pos,sign_pos+1);
        
        if (sign === '+'){
          sign = '-';
        }
        else if (sign=== '-'){
          sign = '+';
        }
        else{
          last_number = -1*last_number;
        }
        document.querySelector("#results").value = rest_value + sign + last_number;
        break;
        
    }
    
  }
  
  
}

function equals() {
    document.querySelector("#results").value = eval(document.querySelector("#results").value);
}
  
function deleteLast() {
    let current = document.querySelector("#results").value;
    document.querySelector("#results").value = current.slice(0, -1);
}