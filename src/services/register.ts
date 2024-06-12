import axios from "axios";

const verifyEmailIsAvailable = async (email: string) => {
  try {
    const req = { email: email };
    let { data } = await axios.post(
      "http://localhost:8001/users/is-email-available",
      req
    );
    
    console.log(data.isAvailable);
    return data.isAvailable;
  } catch (error) {
    console.log(error);
    return new Promise(() => {});
  }
};

export default verifyEmailIsAvailable;
