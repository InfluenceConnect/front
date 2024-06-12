import axios from "axios";

const API_KEY = "Chave da API";                //Colocar chave da nossa API
const URL_API = 'URL da API de autenticação:'; //Colocar URL da nossa API
 

interface AuthData {
  email: string;
  password: string;
}


interface AuthResponse {
  idToken: string;
}


function handleAuthError(err: Error) {
  console.error('Erro durante a autenticação:', err);
  return undefined;
}


async function authenticate(mode: string, data: AuthData): Promise<AuthResponse | undefined> {
  try {
    const response = await axios.post(`${URL_API}${mode}?key=${API_KEY}`, data);
    return response.data as AuthResponse;
  } catch (err) {
    return handleAuthError(err as Error);
  }
}


export async function createUser(email: string, password: string): Promise<string | undefined> {
  const token = await authenticate('signUp', { email, password });
  return token?.idToken;
}

export async function login(email: string, password: string): Promise<string | undefined> {
  const token = await authenticate('signInWithPassword', { email, password });
  return token?.idToken;
}


// Futuramente implementar a função de redefinição de senha 