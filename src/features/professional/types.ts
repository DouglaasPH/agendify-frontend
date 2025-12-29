export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    access_token: string;
    token_type: string;
    expires_in: number;
  };
}

export interface ProfessionalData {
  data: {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    profession: string;
    profile_avatar_id: number;
    chat_code: string;
    status?: string;
  };
}

export interface ProfessionalDataToModifyData {
  name?: string;
  phone_number?: string;
  profession?: string;
  profile_avatar_id?: number;
}

export interface RegisterData {
  name: string;
  email: string;
  phone_number: string;
  profession: string;
  password: string;
  profile_avatar_id: number;
}

export interface CheckEmailResponse {
  exists: boolean;
}

export interface UpdateProfessionalData {
  access_token?: string;
  is_authenticated?: boolean;
  id?: number;
  name?: string;
  email?: string;
  phone_number?: string;
  profession?: string;
  profile_avatar_id?: number;
  chat_code?: string;
}

export interface ProfessionalDataSlice {
  access_token: string | null;
  is_authenticated: boolean;
  id: number | null;
  name: string;
  email: string;
  phone_number: string;
  profession: string;
  profile_avatar_id: number;
  chat_code: string;
}
