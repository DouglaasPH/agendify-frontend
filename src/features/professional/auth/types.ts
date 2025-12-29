export interface RefreshResponse {
  data: {
    access_token: string;
    token_type: string;
  };
}

export interface UpdateData {
  name?: string;
  email?: string;
  phone_number?: string;
  profession?: string;
  password?: string;
  profile_avatar_id?: null | number;
  accepted_terms_of_use?: boolean;
}

export interface RegisterState {
  name: string;
  email: string;
  phone_number: string;
  profession: string;
  password: string;
  profile_avatar_id: null | number;
  accepted_terms_of_use: boolean;
}
