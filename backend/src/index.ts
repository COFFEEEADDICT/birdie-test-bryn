import app from './application';

const port = process.env.PORT || 8000;

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(``);
  console.log(`*************************************************`);
  console.log(`**  Bryn's Birdie API at http://localhost:${port} **`);
});
