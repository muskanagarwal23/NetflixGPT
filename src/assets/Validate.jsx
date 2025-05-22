export const checkValidation = (email, password , name) => {
  
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  
  if(!isEmailValid) return "Invalid email format";
  if(!isPasswordValid) return "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
  if(!isNameValid) return "Name must start with a capital letter ";
  return null;
};