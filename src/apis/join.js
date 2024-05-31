import api from "../components/api";

const baseURL = "/join";

export const join = (
  email,
  street,
  village,
  fullAddress,
  age,
  location,
  phoneNumber
) => {
  console.log(email, street, village, fullAddress, age, location, phoneNumber);
  return api.post(`${baseURL}/join`, {
    email,
    street,
    village,
    fullAddress,
    age,
    location,
    phoneNumber,
  });
};
