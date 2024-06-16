import RequestSaveCompany from "../types/requestSaveCompany";
import api from "./api";
import RequestSaveInfluencer from "../types/requestSaveInfluencer";

const verifyEmailIsAvailable = async (email: string) => {
  try {
    const req = { email: email };
    let { data } = await api.post("/users/is-email-available", req);

    console.log(data.isAvailable);
    return data.isAvailable;
  } catch (error) {
    console.log(error);
    return new Promise(() => {});
  }
};

const registerInfluencer = async (infData: RequestSaveInfluencer) => {
  try {
    let res = await api.post("/influencers/register", infData);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const registerCompany = async (compData: RequestSaveCompany) => {
  try {
    let res = await api.post("/company", compData);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
export { verifyEmailIsAvailable, registerInfluencer, registerCompany };
