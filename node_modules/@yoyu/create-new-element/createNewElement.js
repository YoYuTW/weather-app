function createNewElement(ele,id,classname){
  const newELe = document.createElement(ele); 
  
  if (id){
    newELe.id = id;
  }
  
  if (classname.length){
    classname.forEach(v => {
      newELe.classList.add(v);
    })
  
  }
  return newELe
}

function appendChildren(parent,children){
    if (Array.isArray(children)){
        children.forEach(v => {
            parent.appendChild(v)
        })
    }
}

export {createNewElement,appendChildren}