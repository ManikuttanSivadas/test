export const ReducerTest = () => {
  const number = [1, 2, 3, 4, 5, 9];
  const sum = number.reduce((acc, cum) => acc + cum, 0);
return sum
};
