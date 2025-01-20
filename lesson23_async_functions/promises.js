function func_with_promise1() {
  return new Promise((res, rej) => {
    db_get((data) => {
      res(data);
    });
  });
}

function db_get(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback("Data from db");
    }, 2000);
  });
}
func_with_promise1().then((result) => {
  console.log(result);
});
