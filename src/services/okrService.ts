import axios from "axios";
import { OKRResponse } from "@/types/okr";


export async function getOKRs(): Promise<OKRResponse>  {
    const API_URL = process.env.NEXT_PUBLIC_MOCK_API;
    console.log('API_URL:', API_URL);
    
    if (!API_URL) {
      throw new Error("API não definida.");
    }

    try {
      const response = await axios.get<OKRResponse>(`${API_URL}/okrs`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar os OKRs:", error);
      throw error;
    }
}