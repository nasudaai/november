async function asyncMain () {
  const value = await Promise.resolve(42);
  console.log(value);
}

asyncMain();
