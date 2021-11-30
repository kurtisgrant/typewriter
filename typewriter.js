const typewriter = function(sentence) {

  let time = 0;
  const charArr = sentence.split('').map(char => {
    const charObj = { char: char, timeout: time };
    time += Math.random() * 80 + 60;
    return charObj;
  });
  charArr.push({ char: '\n', timeout: time++ });

  for (const charObj of charArr) {
    setTimeout(() => {
      process.stdout.write(charObj.char);
    }, charObj.timeout);
  }
};

typewriter("Choose not to be harmed — and you won’t feel harmed. Don’t feel harmed — and you haven’t been. -Marcus Aurelius");