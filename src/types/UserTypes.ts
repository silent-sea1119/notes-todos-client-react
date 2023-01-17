export interface AuthUserTypes {
  fullName?: string;
  email?: string;
  imageUrl?: string | null;
  token: string;
}

export interface AuthAlertTypes {
  message: string | null;
  status: string;
}

export interface IUserTypes {
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  picture?: { id: string; url: string };
  createdAt?: any;
  projects?: number;
  notes?: number;
  todos?: number;
  id?: string;
  _id?: string;
}
