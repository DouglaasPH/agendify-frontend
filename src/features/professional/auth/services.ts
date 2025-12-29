// Api data of connection
import api from "@/app/api_config";

// All routes
import { ROUTES } from "@/app/routes";

// types
import type { RefreshResponse } from "./types";

export const refresh_token_request = async (): Promise<RefreshResponse> => {
  return await api.post(ROUTES.refresh_token, {
    withCredentials: true,
  });
};
