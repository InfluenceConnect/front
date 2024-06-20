import { usersType } from "./users";

//esses dados vão ficar salvo no navegador, armazenado em cache
interface UserData {
  id: number;
  name: string;
  userType?: usersType
  profilePhoto?: string;
}

export default UserData;
