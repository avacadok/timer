const arg = process.argv.slice(2);

const timeoutOnBeep = function(delay) {
  //we need to convert the input as a num otherwise the program
  //will think the input is a string bc of the if statement
  delay = Number(delay);
  //ensure theres no sound if input isNaN and a negative num
  if (!isNaN(delay) && delay >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay * 1000);
  }
};

for (let i of arg) {
  timeoutOnBeep(i);
}
