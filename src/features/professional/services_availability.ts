// Api data of connection
import api from "@/app/api_config";

// All routes
import { ROUTES } from "@/app/routes";

// Types used in more than one file
import type { AvailabilityCreate } from "./availability/types";
import type {
  Availability,
  AvailabilitiesListResponse,
  AvailabilityListData,
  Succesfully,
} from "@/shared/types/types";

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

export const request_to_list_availability_for_customer = async (
  access_token: string | null,
  professional_id: number,
  availability_data?: Partial<AvailabilityListData>
): Promise<AvailabilitiesListResponse> => {
  return await api.get(ROUTES.availability.list_for_customer(professional_id), {
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

export const request_to_list_availability_for_professional = async (
  access_token: string | null,
  availability_data?: Partial<AvailabilityListData>
): Promise<AvailabilitiesListResponse> => {
  console.log(access_token);
  return await api.get(ROUTES.availability.list_for_professional, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    params: { ...availability_data },
    withCredentials: true,
  });
};
