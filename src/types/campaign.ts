interface Campaign {
  id: number,
  name: string;
  description: string;
  startDate: string; 
  endDate: string; 
  budget: number;
  expecLikes: number;
  expecComments: number;
  expecSaves: number;
}

export default Campaign;