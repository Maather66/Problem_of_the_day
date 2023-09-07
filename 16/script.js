function checkPower(N) {

    const check = N > 0 && (N & (N - 1)) === 0;
    return check;
  }
  
  const N = 8;
  if (checkPower(N)) {
    console.log("Yes");
  } else {
    console.log("No");
  }