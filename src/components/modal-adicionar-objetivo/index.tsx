import { postObjetivo } from "@/services/okrService";
import { Modal, Typography, Card, CardContent, TextField, Button, CardActions, CardHeader, IconButton } from "@mui/material";
import { useState } from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

interface ModalAdicionarObjProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
}

export function ModalAdicionarObjetivo({ open, onClose, onSave }: ModalAdicionarObjProps) {
  const [objetivo, setObjetivo] = useState<string>("");

  const criaObjetivo = async () => {
    console.log("test criaObjetivo:", objetivo);

    if (objetivo.trim()){
      await postObjetivo(objetivo);
      setObjetivo('');
      onSave();
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card className="w-1/3 mx-auto mt-32 p-4">
        <CardHeader
          title={

          <p className="text-xl font-semibold text-gray-700">Criar Novo Objetivo</p>
          }
          action={
            <IconButton
              onClick={() => {
                setObjetivo('');
                onClose();
              }}
            >
              <CloseOutlinedIcon />

            </IconButton>
          }
        />
        <CardContent>
        <Typography variant="subtitle1" className="mb-1 text-gray-700">Objetivo</Typography>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Digite o objetivo"
            variant="outlined"
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value)}
          />
          <button
            className="bg-custom_dark_blue text-white px-4 py-2 rounded-lg hover:bg-custom_darkest_blue w-full mt-4"
            onClick={criaObjetivo}
          >
            Salvar
          </button>
        </CardContent>
        {/* <CardActions>
          <button
            className="bg-custom_dark_blue text-white px-4 py-2 rounded-lg hover:bg-custom_darkest_blue w-full"
            onClick={criaObjetivo}
          >
            Salvar
          </button>
        </CardActions> */}
      </Card>
    </Modal>
  );
}
