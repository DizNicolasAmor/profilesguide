export const getFromStorage = (key: string): void | null => {
  if (!key) return null;

  try {
    const valueStr = localStorage.getItem(key);
    if (valueStr) return JSON.parse(valueStr);
    return null;
  } catch (reason) {
    // eslint-disable-next-line no-console
    console.error(reason);
    return null;
  }
};

export const setInStorage = (
  key: string,
  obj: { [key: string]: unknown }
): void => {
  // eslint-disable-next-line no-console
  if (!key) console.error("Key is missing.");

  try {
    localStorage.setItem(key, JSON.stringify(obj));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};
