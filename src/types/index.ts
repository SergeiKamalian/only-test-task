export type MockDataItemEvent = {
  id: number;
  year: number;
  value: string;
};
export type MockDataItem = {
  id: number;
  name: string;
  period: [number, number];
  events: MockDataItemEvent[];
};
