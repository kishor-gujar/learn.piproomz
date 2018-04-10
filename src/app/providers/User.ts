export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  phone?: string;
  age?: string;
  address: Address;
  roles: Roles;
  active: boolean
}

export interface Roles {
  subscriber?: boolean;
  admin?: boolean;
}

export interface Address {
  full_address?: string;
  street_name?: string;
  city?: string;
  country?: string;
  postal?: number;
}