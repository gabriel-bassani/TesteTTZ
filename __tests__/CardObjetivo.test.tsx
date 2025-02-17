import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import { CardObjetivo } from "@/components/card-objetivo";
import { OKR } from "@/types/okr";

const mockOKR: OKR = {
  createdAt: "2025-02-07T17:10:55.495Z",
  id: "1",
  name: "Aumentar engajamento do produto",
  resultKeys: [
    {
      createdAt: "2025-02-07T17:10:55.495Z",
      id: "1",
      okrId: "1",
      name: "Aumentar retenção em 20%",
      deliveries: [{ name: "Melhorar onboarding", value: "10" }],
    },
  ],
};

test("deve renderizar o nome do objetivo", () => {
    render(<CardObjetivo data={mockOKR} />);
    expect(screen.getByText(mockOKR.name)).toBeInTheDocument();
});

test("deve renderizar os nomes dos resultados-chave", () => {
    render(<CardObjetivo data={mockOKR} />);
    mockOKR.resultKeys.forEach((result) => {
      expect(screen.getByText(result.name)).toBeInTheDocument();
    });
});

test("deve exibir os valores das entregas", () => {
    render(<CardObjetivo data={mockOKR} />);
  
    mockOKR.resultKeys.forEach((result) => {
      result.deliveries.forEach((delivery) => {
        const values = screen.getAllByText(`${delivery.value}%`);
        expect(values.length).toBeGreaterThan(0); // Verifica se há pelo menos um valor correspondente
      });
    });
});

test("deve abrir o modal ao clicar no botão de editar", async () => {
    render(<CardObjetivo data={mockOKR} />);
  
    // Pegando o botão de editar usando o data-testid
    const editButton = screen.getByTestId("edit-button");
    await userEvent.click(editButton);
    
    expect(screen.getByText("Editar Resultado-Chave")).toBeInTheDocument();
});

