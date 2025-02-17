"use client";

import { CardObjetivo } from "@/components/card-objetivo";
import { ModalAdicionarObjetivo } from "@/components/modal-adicionar-objetivo";
import { ModalAdicionarResultado } from "@/components/modal-adicionar-resultado";
import { useEffect, useState } from "react";
import { getOKRs } from "@/services/okrService";
import { OKRResponse } from "@/types/okr";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { AddOutlined } from "@mui/icons-material";

export default function Home() {
  const [openModalAdicionarResultado, setOpenModalAdicionarResultado] = useState<boolean>(false);
  const [selectedOkrId, setSelectedOkrId] = useState<string | null>(null);
  const [openModalAdicionarObjetivo, setOpenModalAdicionarObjetivo] = useState<boolean>(false);
  const [okrs, setOkrs] = useState<OKRResponse>([]);
  const [loading, setLoading] = useState(true);

  // Função que traz as OKRs, estou usando quando quero atualizar a listagem
  const fetchOKRs = async () => {
    setLoading(true);
    try {
      const data = await getOKRs();
      setOkrs(data);
    } catch (error) {
      console.error("Erro ao carregar os OKRs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOKRs();
  }, []);

  return (
    <div className="bg-neutral-200 w-full h-screen flex justify-center items-center">
      <div className="relative w-3/4 h-5/6 flex flex-col  p-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold text-gray-700">Lista de OKRs</p>
          {/* Abre o Modal de Criar Objetivo */}
          <button
            className="bg-custom_dark_blue text-white px-4 py-2 rounded-lg hover:bg-custom_darkest_blue flex items-center justify-center space-x-2"
            onClick={() => setOpenModalAdicionarObjetivo(true)}
          >
            <AddOutlinedIcon />
            <span>Criar Objetivo</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto pr-2">
          {loading ? (
            <p>Carregando...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Renderiza os cards de OKRs */}
              {okrs.map((okr) => (
                <div key={okr.id} className="relative">
                  <CardObjetivo 
                    refresh={() => {
                      fetchOKRs();
                    }} 
                    data={okr} />
                    <div
                      className="text-right mt-2 flex items-center justify-end cursor-pointer"
                      onClick={() => {
                        setSelectedOkrId(okr.id);
                        setOpenModalAdicionarResultado(true);
                      }}
                    >
                      <AddOutlined className="mr-2"  style={{ color: "#178195" }}/>
                      <p className="text-custom_darkest_blue hover:underline">Adicionar Resultado-Chave</p>
                    </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Modal para adicionar um resultado-chave desejado */}
      <ModalAdicionarResultado
        open={openModalAdicionarResultado}
        onClose={() => {
          setOpenModalAdicionarResultado(false);
          setSelectedOkrId(null);
        }}
        onSave={() => {
          setOpenModalAdicionarResultado(false);
          fetchOKRs();
        }}
        id={selectedOkrId} 
      />
      {/* Modal para criar um novo objetivo */}
      <ModalAdicionarObjetivo
        open={openModalAdicionarObjetivo}
        onClose={() => setOpenModalAdicionarObjetivo(false)}
        onSave={() => {
          setOpenModalAdicionarObjetivo(false);
          fetchOKRs();
        }}
      />
    </div>
  );
}
