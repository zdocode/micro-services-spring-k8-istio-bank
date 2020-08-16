import { State } from 'app/shared/model/enumerations/state.model';

export interface ICustomer {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: State;
  country?: string;
}

export const defaultValue: Readonly<ICustomer> = {};
