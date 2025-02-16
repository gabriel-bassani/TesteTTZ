import { Modal, Typography, Card, CardContent, TextField, Button, CardActions, CardHeader } from "@mui/material";

interface ModalAdicionarObjProps {
  open: boolean;
  onClose: () => void;
}

export function ModalAdicionarObj({ open, onClose }: ModalAdicionarObjProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card className="w-96 mx-auto mt-32 p-4">
        <CardHeader title="Criar Novo Objetivo" />
        <CardContent>
          <TextField fullWidth id="outlined-basic" label="Digite o objetivo" variant="outlined" />
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
