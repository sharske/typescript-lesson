// let num: number = 500;

// numが素数かどうかを判定する
function isPrime(num: number) {
  if (num == 1) {
    return false;
  }
  if (num == 2) {
    return true;
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

for (let j = 1; j <= 500; j++) {
  const result = isPrime(j);
  if (result == true) {
    console.log(j);
  }
}

// console.log(isPrime(27));
