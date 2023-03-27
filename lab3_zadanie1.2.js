function nwd(a, b) {
  if (b === 0) {
    return a;
  }
  return nwd(b, a % b);
}


console.log(nwd(28,24));
