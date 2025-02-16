export type Delivery = {
    name: string;
    value: string;
  };
  
export type ResultKey = {
    createdAt: string;
    name: string;
    deliveries: Delivery[];
    id: string;
    okrId: string;
  };
  
export type OKR = {
    createdAt: string;
    name: string;
    id: string;
    resultKeys: ResultKey[];
  };
  
export type OKRResponse = OKR[];
  