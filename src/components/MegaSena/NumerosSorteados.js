function NumerosmegaSena() {
  const vet = []
  while (vet.length == 0 || vet.length < 6) {
    let num = parseInt(Math.random() * 60);
    if (vet.indexOf(num) != -1) {
      continue;
    } else {
      vet.push(num);
    }
  }
  return vet.sort((a, b) => a - b)
};
