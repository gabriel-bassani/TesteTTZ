import { Modal, Typography, Card, CardContent, TextField, Button, CardActions, CardHeader } from "@mui/material";
import { useState } from "react";
import { DeleteOutline } from "@mui/icons-material";

interface ModalAdicionarResultadoProps {
  open: boolean;
  onClose: () => void;
}

export function ModalAdicionarResultado({ open, onClose }: ModalAdicionarResultadoProps) {
  const [ resultado, setResultado ] = useState<string>();
  const [ entrega, setEntrega ] = useState<string>();
  const [ valor, setValor ] = useState<string>();

  const deleteEntrega = () => {
    console.log('deleteEntrega');
    
  }
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card className="w-96 mx-auto mt-32 p-4">
        <CardHeader title="Criar Novo Resultado-Chave" />
        <CardContent>
          <TextField fullWidth id="outlined-basic" label="Digite o Resultado-Chave" variant="outlined" value={resultado} />
          <div className="flex">
            <TextField fullWidth id="outlined-basic" label="Digite a entrega" variant="outlined" value={entrega} />
            <TextField fullWidth id="outlined-basic" label="Valor (%)" variant="outlined" value={valor} type="number" />
            <div
                onClick={() => deleteEntrega }
            >
                <DeleteOutline/>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={onClose}>
            Salvar
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
}
