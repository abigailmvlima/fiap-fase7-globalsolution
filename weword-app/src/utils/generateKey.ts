export const generateKey = (): string => {
  const data = new Date();
  let value = data.toISOString();
  value += data.getMinutes().toString();
  value += data.getSeconds().toString();
  value += data.getMilliseconds().toString();
  return value;
};
