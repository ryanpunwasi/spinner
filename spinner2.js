let time = -100;
const chars = ["|", '/', '-', '\\', '|'];
for(let j = 0; j < 2; j++) {
  for(let i = 0; i < chars.length; i++) {
    time += 200;
    setTimeout(() => {
      process.stdout.write(`\r${chars[i]}`);
    }, time);
  }
}