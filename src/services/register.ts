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

const registerInfluencer = async (infData: RequestSaveInfluencer) => {
  try {
    let res = await axios.post(
      "http://localhost:8001/influenceconnect/influencers/register",
      infData
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export {verifyEmailIsAvailable, registerInfluencer};
