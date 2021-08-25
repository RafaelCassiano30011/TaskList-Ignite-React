const generateId = (limit = 20) => {
  const characts = "1234567890";

  let id = "";

  for (let i = 0; i < limit; i++) {
    const randomNumber = Math.floor(Math.random() * characts.length);

    id += characts[randomNumber];
  }
  return parseInt(id);
};
export default generateId;
