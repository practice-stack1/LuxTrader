const raise = (triggers_btn, bet) => {
  const triggers = document.querySelectorAll(triggers_btn);

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const count = trigger.parentElement.querySelector('.price__count');
      raiseBet(bet, count);
    });
  });

  function raiseBet(bet, count_block){
    count_block.textContent = addGap(getSum(count_block, bet));
  }

  function getSum(count, bet){
    return Number(count.textContent.replace(/\s/g, '')) + bet;
  }
  function addGap(num){

    let string = String(num);
    let arrStr = string.split('');
    let arrStr2 = [...arrStr];
    let counter = 1;
    for(let i = arrStr.length - 1; i >= 0 ; i--){

      if(counter === 3 && i - 1 >= 0){
        let newArr = arrStr.splice(0, i);
        newArr.push(' ');
        arrStr2 = newArr.concat(arrStr);
        arrStr = arrStr2;
        counter = 1;
        i--;
      }
      counter++;
    }
    return arrStr2.join('');
  }

};

export default raise;
