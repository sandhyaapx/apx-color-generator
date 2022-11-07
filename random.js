const colors=document.querySelectorAll('.single-div h3');
function generate(){
    colors.forEach((color)=>{
        let hexCode = '#' + Math.random().toString(16).substring(2,8);//generating a random 6 value hexcode
        // document.getElementById("input1").value=hexCode;
        color.style.backgroundColor=hexCode; //change background color by assigning the hexcode value that we have generated
        color.innerHTML=hexCode;//to get the code value to be dispalyed
        
    })
}
generate();

function copyToClipboard(elementId) {
    var element = document.createElement("input"); // Create a input
    element.setAttribute("value", document.getElementById(elementId).innerHTML);// Assign it the value of the specified element
    document.body.appendChild(element);// Append it to the body
    
    element.select();// Highlight its content  
    document.execCommand("copy");// Copy the highlighted text

    // document.body.removeChild(element);// Remove it from the body
  
  }

