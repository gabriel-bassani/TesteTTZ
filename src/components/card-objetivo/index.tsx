"use client";
import { Typography, Card, CardContent, Divider } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useState } from "react";
import { ModalEditarResultado } from "../modal-editar-resultado";
import { OKR } from "@/types/okr";
import { BarraProgresso } from "../barra-progresso";

export function CardObjetivo({ data }: { data: OKR }) {
  const [openModalEditarResultado, setOpenModalEditarResultado] = useState(false);


  const totalDeliveries = data.resultKeys.flatMap((result) => result.deliveries);
  const totalValue = totalDeliveries.reduce((sum, delivery) => sum + Number(delivery.value), 0);
  const percentage = totalDeliveries.length > 0 ? Math.min((totalValue / totalDeliveries.length), 100) : 0;

  return (
    <div className="relative w-full">
      <Card className="w-full">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {data.name}
          </Typography>
          <div className="flex justify-between items-center">
            <BarraProgresso percentage={percentage} />
          </div>

          <Divider className="text-custom_grey">Resultados-Chave</Divider>

          {data.resultKeys.map((result, index) => {
            const totalDeliveriesInResult = result.deliveries.length;
            const resultValue = result.deliveries.reduce((sum, delivery) => sum + Number(delivery.value), 0);
            const resultPercentage = totalDeliveriesInResult > 0 ? Math.min((resultValue / totalDeliveriesInResult), 100) : 0;

            return (
              <div key={index}>
                <Typography variant="h5" gutterBottom className="text-custom_dark_grey font-extrabold pt-2">
                  {result.name}
                </Typography>
                <div className="flex justify-between items-center pb-4">
                  <BarraProgresso percentage={resultPercentage} />
                  <div
                    className="w-10 h-10 border border-gray-300 hover:border-gray-400 text-gray-600 flex items-center justify-center rounded-md cursor-pointer ml-6"
                    onClick={() => setOpenModalEditarResultado(true)}
                  >
                    <EditOutlinedIcon fontSize="small" />
                  </div>
                </div>

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
                {parseInt(result.id) < data.resultKeys.length &&
                    <Divider className="text-custom_grey" />
                }
              </div>
            );
          })}

        </CardContent>
      </Card>

      <ModalEditarResultado open={openModalEditarResultado} onClose={() => setOpenModalEditarResultado(false)} />
    </div>
  );
}
