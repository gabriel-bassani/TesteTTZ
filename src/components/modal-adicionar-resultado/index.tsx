import { Modal, Card, CardContent, TextField, IconButton, CardHeader } from "@mui/material";
import { useState } from "react";
import { DeleteOutline, CloseOutlined, AddOutlined } from "@mui/icons-material";
import { red } from "@mui/material/colors";

interface ModalAdicionarResultadoProps {
  open: boolean;
  onClose: () => void;
}

interface Delivery {
  delivery: string;
  value: string;
}

export function ModalAdicionarResultado({ open, onClose }: ModalAdicionarResultadoProps) {
  const [name, setName] = useState<string>("");
  const [deliveries, setDeliveries] = useState<Delivery[]>([{ delivery: "", value: "" }]);

  const handleDeliveryChange = (index: number, field: keyof Delivery, value: string) => {
    const updatedDeliveries = [...deliveries];
    updatedDeliveries[index][field] = value;
    setDeliveries(updatedDeliveries);
  };

  const addDelivery = () => {
    setDeliveries([...deliveries, { delivery: "", value: "" }]);
  };

  const deleteDelivery = (index: number) => {
    const updatedDeliveries = deliveries.filter((_, i) => i !== index);
    setDeliveries(updatedDeliveries);
  };

  const handleSave = () => {
    console.log({ name, deliveries });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Card className="w-1/3 mx-auto mt-32 p-4">
        <CardHeader
          title={<p className="text-xl font-semibold text-gray-700">Criar Novo Resultado-Chave</p>}
          action={
            <IconButton onClick={onClose}>
              <CloseOutlined />
            </IconButton>
          }
        />
        <CardContent>
          <TextField
            fullWidth
            label="Digite o Resultado-Chave"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {deliveries.map((delivery, index) => (
            <div key={index} className="flex gap-2 mt-4">
              <TextField
                fullWidth
                label="Digite a entrega"
                variant="outlined"
                value={delivery.delivery}
                onChange={(e) => handleDeliveryChange(index, "delivery", e.target.value)}
              />
              <TextField
                fullWidth
                label="Valor (%)"
                variant="outlined"
                value={delivery.value}
                onChange={(e) => handleDeliveryChange(index, "value", e.target.value)}
                type="number"
              />
              <IconButton onClick={() => deleteDelivery(index)}>
                <DeleteOutline sx={{ color: red[400] }} />
              </IconButton>
            </div>
          ))}
          <div className="flex items-center gap-2 cursor-pointer text-black hover:underline mt-2 justify-end" onClick={addDelivery}>
            <AddOutlined className="w-5 h-5" />
            <p>Adicionar Entrega</p>
          </div>
          <button
            className="bg-custom_dark_blue text-white px-4 py-2 rounded-lg hover:bg-custom_darkest_blue w-full mt-4"
            onClick={handleSave}
          >
            Salvar
          </button>
        </CardContent>
      </Card>
    </Modal>
  );
}
