import axios from "axios";
import { OKRResponse, ResultKey } from "@/types/okr";

const API_URL = process.env.NEXT_PUBLIC_MOCK_API || 'https://67a67e77510789ef0dfb8c44.mockapi.io/api';

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

export async function postObjective(objetivo: string) {
    
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

export async function getResult(okrId: string, id: string): Promise<ResultKey>  {
    console.log('API_URL:', API_URL, id);
    
    if (!API_URL) {
      throw new Error("API não definida.");
    }

    try {
      const response = await axios.get<ResultKey>(`${API_URL}/okrs/${okrId}/resultKeys/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar os resultados:", error);
      throw error;
    }
}

export async function postResult(name: string, deliveries: {name: string, value: string}[], id: string) {
    
    if (!API_URL) {
      throw new Error("API não definida.");
    }

    try {
      const response = await axios.post(`${API_URL}/okrs/${id}/resultKeys`,
        {
            name,
            deliveries,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao criar resultado:", error);
      throw error;
    }

}

export async function putResult(name: string, deliveries: {name: string, value: string}[], id: string) {
    
    if (!API_URL) {
      throw new Error("API não definida.");
    }

    try {
      const response = await axios.post(`${API_URL}/okrs/${id}/resultKeys`,
        {
            name,
            deliveries,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao criar resultado:", error);
      throw error;
    }

}