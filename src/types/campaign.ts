// Define a interface Campaign (Campanha) com as propriedades esperadas
interface Campaign {
  id?: number, 
  name: string; 
  description: string; 
  startDate: string; 
  endDate: string; 
  budget: number; 
  expecLikes: number; 
  expecComments: number;
  expecSaves: number; 
  status: string;
  image?: string;
  logo?: string;
}

export default Campaign;
