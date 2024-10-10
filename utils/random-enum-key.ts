export const randomEnumKey = (enumeration: object) => {
  const keys = Object.keys(enumeration).filter(
    (k) => !(Math.abs(Number.parseInt(k)) + 1),
  );
  return keys[Math.floor(Math.random() * keys.length)];
};
