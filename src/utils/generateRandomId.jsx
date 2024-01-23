export const generateRandomId = () =>
  Math.random().toString(36).substring(2, 8);
//   Date.new().toString().substring(9);

export const assignId = (obj) => ({...obj, id: generateRandomId()});
