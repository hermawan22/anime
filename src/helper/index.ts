export const isClient = typeof window !== 'undefined';

export const safeGet = (object: any, path = "", defaultValue = null) => {
  return path.split(".").reduce((o, x) => {
    if (o == undefined || o[x] === undefined) {
      return defaultValue;
    }

    return o[x];
  }, object);
};