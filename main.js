const sumEx = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }


  // Using rest parameter
  const sum = (...args) => args.reduce((a, b) => a + b, 0);
