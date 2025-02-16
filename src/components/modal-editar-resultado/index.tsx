import { Modal, Card, CardContent, TextField, IconButton, CardHeader } from "@mui/material";
import { useEffect, useState } from "react";
import { DeleteOutline, CloseOutlined, AddOutlined } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { getResult, putResult } from "@/services/okrService";

interface ModalEditarResultadoProps {
  id: string | null;
  okrId: string | null;
  open: boolean;
  onClose: () => void;
}

interface Delivery {
  name: string;
  value: string;
}

export function ModalEditarResultado({ id, okrId, open, onClose }: ModalEditarResultadoProps) {
  const [name, setName] = useState<string>("");
  const [deliveries, setDeliveries] = useState<Delivery[]>([{ name: "", value: "" }]);

  useEffect(() => {
    if (open && id) {
      getResultData();
    }
  }, [open, id]);

  const handleDeliveryChange = (index: number, field: keyof Delivery, value: string) => {
    const updatedDeliveries = [...deliveries];
    updatedDeliveries[index][field] = value;
    setDeliveries(updatedDeliveries);
  };

  const addDelivery = () => {
    setDeliveries([...deliveries, { name: "", value: "" }]);
  };

  const deleteDelivery = (index: number) => {
    const updatedDeliveries = deliveries.filter((_, i) => i !== index);
    setDeliveries(updatedDeliveries);
  };

  const getResultData = async () => {
    console.log('test id:', id);
    
    if(id && okrId){
      let result = await getResult(okrId, id);
      console.log('result:', result);
      
      setName(result.name);
      console.log('name:', name);
      
      setDeliveries(result.deliveries);
      console.log('deliveries:', deliveries);

    }
    
  }

  const handleSave = () => {
    console.log({ name, deliveries });
    if(id )putResult(name, deliveries, id)
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Card className="w-1/3 mx-auto mt-32 p-4">
        <CardHeader
          title={<p className="text-xl font-semibold text-gray-700">Editar Resultado-Chave</p>}
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
                value={delivery.name}
                onChange={(e) => handleDeliveryChange(index, "name", e.target.value)}
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
