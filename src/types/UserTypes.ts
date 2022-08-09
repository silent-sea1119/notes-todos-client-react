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
