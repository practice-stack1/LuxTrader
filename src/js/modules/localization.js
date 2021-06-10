
function localization(data){
  for(let key in data){
    const lang = getElem(key).dataset.loc;
    if(checkList(key)){
      setTranslateOfItems(data[key][lang], key);
    } else {
      setTranslate(data[key][lang], key);
    }
    if(checkInput(key)){
      console.log(true);
      setInputTranslate(data[key][lang], key);
    }

  }
}

function getElem(key){
  const elem = document.querySelector(key);
  return elem;
}
function getElemsOfMenu(key){
  const elems = document.querySelectorAll(key + '[data-item]');
  return elems;
}
function setTranslateOfItems(language, key) {
  getElemsOfMenu(key).forEach((item, index) => {
    item.textContent = language[index];
  });
}

function setTranslate(language, key){
  getElem(key).textContent = language;
}
function setInputTranslate(language, key){
  getElem(key).setAttribute('placeholder', `${language}`)
}
function checkList(key){
  if(getElem(key).getAttribute('data-item')){ return true; } else { return false; }
}

function checkInput(key){
  if(getElem(key).getAttribute('name')){ return true; } else { return false; }
}

export default localization;
