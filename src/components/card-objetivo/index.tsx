import { Box, Typography, Card, CardContent, Divider } from "@mui/material";

export function CardObjetivo(){
    const percentage = 50;
    return(
        <Card>
            <CardContent>
            <Typography variant="h5" gutterBottom>
                Melhorar a satisfação do cliente
            </Typography>
            <div className="relative w-full h-10 bg-custom_light_blue rounded-full overflow-hidden">
            {/* Barra de preenchimento */}
            <div
                className="h-full bg-custom_dark_blue rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
            ></div>
            {/* Texto da porcentagem */}
            <Typography
                variant="body1"
                className="absolute inset-0 flex justify-center items-center font-bold text-custom_dark_grey"
            >
                {percentage}%
            </Typography>
            </div>
            <Divider  className="text-custom_grey">Resultados-Chave</Divider>
            <Typography variant="h5"  gutterBottom className="text-custom_dark_grey font-semibold">
                Aumentar o NPS de 60 para 80
            </Typography>
            <div className="flex justify-between">
                <Typography variant="subtitle1" gutterBottom className="text-custom_grey">
                    Implementar pesquisas de satisfação pós atendimento
                </Typography>
                <Typography variant="subtitle1" gutterBottom className="text-custom_light_grey">
                    25%
                </Typography>
            </div>
            <div>
                <Typography variant="subtitle1" gutterBottom>
                    Criar um programa de fidelidade para clientes recorrentes
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    10%
                </Typography>
            </div>
            <Divider/>
            <Typography variant="h5" gutterBottom className="text-custom_dark_grey">
                Reduzir o tempo de resposta no suporte de 10h para 2h
            </Typography>
            <div>
                <Typography variant="subtitle1" gutterBottom>
                    Implementar pesquisas de satisfação pós atendimento
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    25%
                </Typography>
            </div>
            <div>
                <Typography variant="subtitle1" gutterBottom>
                    Criar um programa de fidelidade para clientes recorrentes
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    10%
                </Typography>
            </div>
            <div>
                <Typography variant="subtitle1" gutterBottom>
                    Criar um programa de fidelidade para clientes recorrentes
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    5%
                </Typography>
            </div>

            </CardContent>

        </Card>
    )
}


{/* <Box className="bg-white">
<Typography variant="h5" gutterBottom>
    Melhorar a satisfação do cliente
</Typography>
<Typography variant="h4" gutterBottom>
    Aumentar o NPS de 60 para 80
</Typography>
<div>
    <Typography variant="subtitle1" gutterBottom>
        Implementar pesquisas de satisfação pós atendimento
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
        25%
    </Typography>
</div>
<div>
    <Typography variant="subtitle1" gutterBottom>
        Criar um programa de fidelidade para clientes recorrentes
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
        10%
    </Typography>
</div>
<Typography variant="h5" gutterBottom>
    Reduzir o tempo de resposta no suporte de 10h para 2h
</Typography>
<div>
    <Typography variant="subtitle1" gutterBottom>
        Implementar pesquisas de satisfação pós atendimento
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
        25%
    </Typography>
</div>
<div>
    <Typography variant="subtitle1" gutterBottom>
        Criar um programa de fidelidade para clientes recorrentes
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
        10%
    </Typography>
</div>
<div>
    <Typography variant="subtitle1" gutterBottom>
        Criar um programa de fidelidade para clientes recorrentes
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
        5%
    </Typography>
</div>

</Box> */}