const frames = ['|', '/', '-', '\\'];
let delay = 100;
for (let frame of frames.concat(frames).concat(['|'])) {
  setTimeout(() => {
    process.stdout.write(`\r${frame}   `);
  }, delay);
  delay += 200;
}