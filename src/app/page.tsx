"use client";

import { CardObjetivo } from "@/components/card-objetivo";
import { ModalAdicionarObjetivo } from "@/components/modal-adicionar-objetivo";
import { ModalAdicionarResultado } from "@/components/modal-adicionar-resultado";
import { useState } from "react";

export default function Home() {
  const [openModalAdicionarResultado, setOpenModalAdicionarResultado] = useState(false);
  const [openModalAdicionarObjetivo, setOpenModalAdicionarObjetivo] = useState(false);
  const objetivos = [1, 2, 3, 4, 5];

  return (
    <div className="bg-neutral-200 w-full h-screen flex justify-center items-center">
      <div className="relative w-3/4">
        <div className="absolute right-0 top-16">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => setOpenModalAdicionarObjetivo(true)}
          >
            Criar Objetivo
          </button>
        </div>
        <div className="mt-12">
          <p className="text-xl font-semibold text-gray-700">
            Lista de OKRs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {objetivos.map((_, index) => (
            <div key={index} className="relative">
              <CardObjetivo />
              <div className="text-right mt-2"
              onClick={() => setOpenModalAdicionarResultado(true)}
              >
                <p className="text-blue-500 cursor-pointer hover:underline">
                  Adicionar Resultado-Chave
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ModalAdicionarResultado open={openModalAdicionarResultado} onClose={() => setOpenModalAdicionarResultado(false)} />
      <ModalAdicionarObjetivo open={openModalAdicionarObjetivo} onClose={() => setOpenModalAdicionarObjetivo(false)} />
    </div>
  );
}
