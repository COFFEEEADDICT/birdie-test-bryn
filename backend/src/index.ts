import app from './application';
// process.env.PORT ||
const port = 8000;

app.listen(port, () => {
  console.log(``);
  console.log(`*************************************************`);
  console.log(`**  Bryn's Birdie API at http://localhost:${port} **`);
});
