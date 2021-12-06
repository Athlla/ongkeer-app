export default interface ICost {
  query: Query;
  status: Status;
  origin_details: OriginDetails;
  destination_details: DestinationDetails;
  results: Result[];
}

export interface Query {
  origin: string;
  destination: string;
  weight: number;
  courier: string;
}

export interface Status {
  code: number;
  description: string;
}

export interface OriginDetails {
  city_id: string;
  province_id: string;
  province: string;
  type: string;
  city_name: string;
  postal_code: string;
}

export interface DestinationDetails {
  city_id: string;
  province_id: string;
  province: string;
  type: string;
  city_name: string;
  postal_code: string;
}

export interface Result {
  code: string;
  name: string;
  costs: Cost[];
}

export interface Cost {
  service: string;
  description: string;
  cost: Cost2[];
}

export interface Cost2 {
  value: number;
  etd: string;
  note: string;
}
