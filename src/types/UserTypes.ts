export interface UserTypes {
  fullName?: string;
  email?: string;
  imageUrl?: string | null;
}

export interface AuthAlertType {
  message: string | null;
  status: string;
}
