// Api data of connection
import api from "./api_config";

// All routes
import { ROUTES } from "./routes";

// Types used in more than one file
import type {
  Availability,
  AvailabilityCreate,
} from "@/types/availability_types";
import type { Succesfully } from "@/types/common_types";

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

export const request_to_create_availability_by_professional = async (
  access_token: string | null,
  availability_data: AvailabilityCreate
): Promise<Succesfully> => {
  return await api.post(
    ROUTES.availability.create_by_professional,
    availability_data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    }
  );
};

export const request_to_get_availability_by_id_for_professional = async (
  access_token: string | null,
  availability_id: number
): Promise<Availability> => {
  return await api.get(
    ROUTES.availability.get_by_id_for_professional(availability_id),
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    }
  );
};

export const request_to_list_availability_for_professional = async (
  access_token: string | null,
  availability_data?: Partial<AvailabilityListData>
): Promise<AvailabilitiesListResponse> => {
  return await api.get(ROUTES.availability.list_for_professional, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    params: { ...availability_data },
    withCredentials: true,
  });
};

export const request_to_list_availability_for_customer = async (
  access_token: string | null,
  availability_data?: Partial<AvailabilityListData>
): Promise<AvailabilitiesListResponse> => {
  return await api.get(ROUTES.availability.list_for_customer, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    params: { ...availability_data },
    withCredentials: true,
  });
};

export const request_to_delete_availability_by_id_via_professional = async (
  access_token: string | null,
  availability_id: number
): Promise<Succesfully> => {
  return await api.delete(
    ROUTES.availability.delete_by_id_via_professional(availability_id),
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    }
  );
};
