// Api data of connection
import api from "./api";

// All routes
import { ROUTES } from "./routes";

// Types used in more than one file
import type { Availability, AvailabilityCreate } from "@/types/availability";
import type { Succesfully } from "@/types/common";

interface AvailabilityListData {
  availability_id: number;
  date?: string;
  start_time?: string;
  end_time?: string;
  slot_duration_minutes?: number;
  status?: string;
}

interface AvailabilitiesListResponse {
  data: Availability[];
}

export const availabilityListApi = async (
  access_token: string | null,
  availability_data?: Partial<AvailabilityListData>
): Promise<AvailabilitiesListResponse> => {
  return await api.get(ROUTES.availability.list, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    params: { ...availability_data },
    withCredentials: true,
  });
};

export const availabilityGetApi = async (
  access_token: string | null,
  availability_id: number
): Promise<Availability> => {
  return await api.get(ROUTES.availability.get(availability_id), {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
};

export const availabilityCreateApi = async (
  access_token: string | null,
  availability_data: AvailabilityCreate
): Promise<Succesfully> => {
  return await api.post(ROUTES.availability.create, availability_data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
};

export const availabilityDeleteApi = async (
  access_token: string | null,
  availability_id: number
): Promise<Succesfully> => {
  return await api.delete(ROUTES.availability.delete(availability_id), {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
};
