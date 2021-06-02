const headerH = (header, header_inner) => {
  const head = document.querySelector(header);
  const headerInner = Array.from(head.querySelector(header_inner).children);


  if(head.clientHeight > 75){
    for(let i = 0; i < headerInner.length ; i++){
      headerInner[i].style.cssText += ' align-self: center';
    }
  }
};

export default headerH;