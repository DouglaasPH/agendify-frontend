// react
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// components
import LoginChat from "../components/loginChat";
import AppointmentChat from "../components/appointmentChat";
import NotFoundChat from "../components/notFoundChat";

//  API
import { request_to_get_professional_data_by_chat_code } from "../../professional/services_professional";
import { request_to_login_with_id_for_customer } from "../services";

// redux
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { update_customer_data, update_professional_data } from "../slice";

// utils
import { go_to_error_page } from "@/shared/utils/utils";

function ChatPage() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.customer.customer_data.is_authenticated
  );
  const dispatch = useDispatch();
  const { chat_code } = useParams<string>();
  const [isValidChatCode, setIsValidChatCode] = useState(false);

  useEffect(() => {
    const verifyChatCode = async () => {
      if (!chat_code) return setIsValidChatCode(false);

      try {
        const fetchAPI = await request_to_get_professional_data_by_chat_code(
          chat_code
        );

        if (fetchAPI.data) {
          setIsValidChatCode(true);
          dispatch(update_professional_data(fetchAPI.data));
        }
      } catch (error) {
        go_to_error_page(error);
      }
    };
    verifyChatCode();

    const customer_id = localStorage.getItem("customer_id");

    if (customer_id !== null) {
      const fetch = async () => {
        try {
          const fetchAPI = await request_to_login_with_id_for_customer(
            Number(customer_id)
          );
          localStorage.setItem(
            "customer_id",
            String(fetchAPI.data.customer_data.id)
          );
          dispatch(
            update_customer_data({
              access_token: fetchAPI.data.access_token.access_token,
            })
          );
          dispatch(update_customer_data(fetchAPI.data.customer_data));
        } catch (error) {
          go_to_error_page(error);
        }
      };
      fetch();
    }
  });

  return (
    <main className="h-screen w-full px-5 lg:px-0">
      {isValidChatCode && isAuthenticated ? (
        <AppointmentChat />
      ) : isValidChatCode && !isAuthenticated ? (
        <LoginChat />
      ) : (
        <NotFoundChat />
      )}
    </main>
  );
}

export default ChatPage;
