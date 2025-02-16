"use client";

import { CardObjetivo } from "@/components/card-objetivo";
import { ModalAdicionarObjetivo } from "@/components/modal-adicionar-objetivo";
import { ModalAdicionarResultado } from "@/components/modal-adicionar-resultado";
import { useEffect, useState } from "react";
import { getOKRs } from "@/services/okrService";
import { OKRResponse } from "@/types/okr";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function Home() {
  const [openModalAdicionarResultado, setOpenModalAdicionarResultado] = useState<boolean>(false);
  const [openModalAdicionarObjetivo, setOpenModalAdicionarObjetivo] = useState<boolean>(false);
  const [okrs, setOkrs] = useState<OKRResponse>([]);
  const [loading, setLoading] = useState(true);

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
          <button
            className="bg-custom_dark_blue text-white px-4 py-2 rounded-lg hover:bg-custom_darkest_blue"
            onClick={() => setOpenModalAdicionarObjetivo(true)}
          >
            <AddOutlinedIcon/>
            Criar Objetivo
          </button>
        </div>
        <div className="flex-1 overflow-y-auto pr-2">
          {loading ? (
            <p>Carregando...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {okrs.map((okr) => (
                <div key={okr.id} className="relative">
                  <CardObjetivo data={okr} />
                  <div className="text-right mt-2" onClick={() => setOpenModalAdicionarResultado(true)}>
                    <p className="text-blue-500 cursor-pointer hover:underline">Adicionar Resultado-Chave</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <ModalAdicionarResultado open={openModalAdicionarResultado} onClose={() => setOpenModalAdicionarResultado(false)} />

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