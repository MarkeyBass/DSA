// Algorithem to find the first prime numbers between 2 and 100

const findPrimes = (n) => {
  const primes = []
  for (let i = 2; i < n + 1; i++) {
    let isPrime = true;
    for(let j = 2; j <= i; j++) {
      if(i !== j && i % j === 0 ) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) {
      primes.push(i)
    }
  }
  console.log(primes);
  
};

findPrimes(100)

// node prime-nums.js