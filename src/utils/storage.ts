import UserData from "../types/userData";

function setUserSessionStorage(user: UserData) {
  sessionStorage.setItem("user", JSON.stringify(user));
}

function getUserSessionStorage() {
  const userJSON: string | null = sessionStorage.getItem("user");
  console.log("user json "+ userJSON);
  let user: UserData | null = null;

  if (userJSON != null) user = JSON.parse(userJSON) as UserData;
  return user;
}

function setUserLocalStorage(user: UserData) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUserLocalStorage() {
  const userJSON: string | null = localStorage.getItem("user");
  let user: UserData | null = null;

  if (userJSON != null) user = JSON.parse(userJSON);
  return user;
}

function emptyStorage(){
  sessionStorage.clear()
  localStorage.clear();
}

export {
  setUserLocalStorage,
  getUserLocalStorage,
  setUserSessionStorage,
  getUserSessionStorage,
  emptyStorage
};
