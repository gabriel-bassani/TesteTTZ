import axios from "axios";
import { OKRResponse } from "@/types/okr";

const API_URL = process.env.NEXT_PUBLIC_MOCK_API;

export async function getOKRs(): Promise<OKRResponse>  {
    // console.log('API_URL:', API_URL);
    
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

export async function postObjetivo(objetivo: string) {
    
    if (!API_URL) {
      throw new Error("API não definida.");
    }

    try {
      const response = await axios.post(`${API_URL}/okrs`,
        {
            name: objetivo
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao criar objetivo:", error);
      throw error;
    }

}