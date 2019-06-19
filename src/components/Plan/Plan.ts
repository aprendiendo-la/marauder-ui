interface IFeature {
  label: string;
  value: string;
}

export interface IPlan {
  id: number;
  name: string;
  amount: number;
  features: Array<IFeature>;
}
