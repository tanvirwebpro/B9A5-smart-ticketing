function hideElementById(elementId){
    const element= document.getElementById(elementId);  
    element.classList.add('hidden');
  }
  function showElementById(elementId){
    const element= document.getElementById(elementId);  
    element.classList.remove('hidden');
  }
  
  
  function setInnerTextById(elementId){
    const element=document.getElementById(elementId).innerText;
    return element;
  }
  function setInnerTextValueById(elementId, value){
    const element=document.getElementById(elementId);
    element.innerText=value;
  }
  function setInnerValueById(elementId, value){
    const element=document.getElementById(elementId);
    element.value=value;
  }
  