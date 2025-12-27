// Api data of connection
import api from "./api_config";

// All routes
import { ROUTES } from "./routes";

interface RefreshResponse {
  data: {
    access_token: string;
    token_type: string;
  };
}

export const refresh_token_request = async (): Promise<RefreshResponse> => {
  return await api.post(ROUTES.refresh_token, {
    withCredentials: true,
  });
};
