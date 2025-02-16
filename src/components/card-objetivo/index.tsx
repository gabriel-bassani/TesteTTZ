"use client";
import { Typography, Card, CardContent, Divider } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useState } from "react";
import { ModalAdicionarObjetivo } from "../modal-adicionar-objetivo";
import { ModalAdicionarResultado } from "../modal-adicionar-resultado";
import { ModalEditarResultado } from "../modal-editar-resultado";
import { OKR } from "@/types/okr";

export function CardObjetivo({ data }: { data: OKR }) {
  const percentage = 50;
  const [openModalAdicionarResultado, setOpenModalAdicionarResultado] = useState(false);
  const [openModalEditarResultado, setOpenModalEditarResultado] = useState(false);

  return (
    <div className="relative w-full">
      <Card className="w-full">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {data.name}
          </Typography>
          <div className="flex justify-between items-center">
            <div className="relative w-full h-6 bg-custom_light_blue rounded-full overflow-hidden">
              <div
                className="h-full bg-custom_dark_blue rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              ></div>
              <Typography
                variant="body1"
                className="absolute inset-0 flex justify-center items-center font-extrabold text-custom_dark_grey"
              >
                {percentage}%
              </Typography>
            </div>
            <div
              className="w-10 h-10 border border-gray-300 hover:border-gray-400 text-gray-600 flex items-center justify-center rounded-md cursor-pointer ml-6"
              onClick={() => setOpenModalEditarResultado(true)}
            >
              <EditOutlinedIcon fontSize="small" />
            </div>
          </div>

          <Divider className="text-custom_grey">Resultados-Chave</Divider>
            {data.resultKeys.map((result, index) => (
                <div key={index}>
                    <Typography variant="h5" gutterBottom className="text-custom_dark_grey font-extrabold">
                        {result.name}
                    </Typography>
                    {result.deliveries.map((delivery, index) => (
                            <div key={index} className="flex justify-between">
                            <Typography variant="subtitle1" gutterBottom className="text-custom_grey">
                                {delivery.name}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom className="text-custom_light_grey">
                                {delivery.value}%
                            </Typography>
                        </div>
                    ))}
                </div>
            
            ))}
          {/* <Typography variant="h5" gutterBottom className="text-custom_dark_grey font-extrabold">
            Aumentar o NPS de 60 para 80
          </Typography>

          <div className="flex justify-between">
            <Typography variant="subtitle1" gutterBottom className="text-custom_grey">
              Implementar pesquisas de satisfação pós atendimento
            </Typography>
            <Typography variant="subtitle1" gutterBottom className="text-custom_light_grey">
              25%
            </Typography>
          </div> */}

          <Divider />
        </CardContent>
      </Card>
      {/* <div className="absolute right-0 mt-2" onClick={() => setOpenModalAdicionarResultado(true)}>
        <Typography variant="subtitle1" className="text-blue-500 cursor-pointer hover:underline">
          Adicionar Resultado-Chave
        </Typography>
      </div> */}
      <ModalEditarResultado open={openModalEditarResultado} onClose={() => setOpenModalEditarResultado(false)} />
    </div>
  );
}
