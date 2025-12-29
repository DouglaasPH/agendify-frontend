// react
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// redux slice
import { request_to_check_email_of_professional } from "../../services_professional";
import { update_professional_data as update_data_to_register_professional } from "../../slice";

// shadcn/ui
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/ui/alert-dialog";

// motion
import { motion } from "motion/react";

// utils
import { go_to_error_page, handle_validate_email } from "@/shared/utils/utils";

interface Validate {
  name: null | boolean;
  email: null | boolean;
  phone_number: null | boolean;
  profession: null | boolean;
  password: null | boolean;
}

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [professional, setProfessional] = useState({
    name: "",
    email: "",
    phone_number: "",
    profession: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validateData, setValidateData] = useState<Validate>({
    name: null,
    email: null,
    phone_number: null,
    profession: null,
    password: null,
  });
  const [emailExists, SetEmailExists] = useState<null | boolean>(null);

  const handle_change_professional_data = (
    prop: keyof typeof professional,
    value: string
  ) => {
    setProfessional((prev) => ({
      ...prev,
      [prop]: value,
    }));
  };

  const handle_change_professional_validation = (
    prop: keyof typeof validateData,
    value: null | boolean
  ) => {
    setValidateData((prev) => ({
      ...prev,
      [prop]: value,
    }));
  };

  const handle_validate_data = (data_type: keyof typeof validateData) => {
    let state = false;

    switch (data_type) {
      case "name":
        state = professional.name !== "";
        break;
      case "phone_number":
        state = professional.phone_number.length === 18;
        break;
      case "profession":
        state = professional.profession !== "";
        break;
      case "password":
        state = professional.password == confirmPassword;
        break;
      case "email":
        state = handle_validate_email(professional.email);
    }

    handle_change_professional_validation(data_type, state);
    return state;
  };

  const handle_insert_phone_number = (caracter: string) => {
    let new_phone_number = "";
    const typeCaracter = Number(caracter);

    if (caracter === "Backspace") {
      if (professional.phone_number.length == 2) {
        new_phone_number = "";
      } else if (
        professional.phone_number.length === 5 ||
        professional.phone_number.length === 9
      ) {
        new_phone_number = professional.phone_number.slice(0, -3);
      } else if (professional.phone_number.length === 14) {
        new_phone_number = professional.phone_number.slice(0, -2);
      } else {
        new_phone_number = professional.phone_number.slice(0, -1);
      }
    } else if (typeof typeCaracter === "number" && !isNaN(typeCaracter)) {
      if (professional.phone_number.length == 0) {
        new_phone_number = "+" + typeCaracter;
      } else if (professional.phone_number.length === 2) {
        new_phone_number = professional.phone_number + typeCaracter + " (";
      } else if (professional.phone_number.length === 6) {
        new_phone_number = professional.phone_number + typeCaracter + ") ";
      } else if (professional.phone_number.length === 12) {
        new_phone_number = professional.phone_number + typeCaracter + "-";
      } else if (professional.phone_number.length === 18) {
        new_phone_number =
          professional.phone_number.slice(0, -1) + typeCaracter;
      } else {
        new_phone_number = professional.phone_number + typeCaracter;
      }
    } else return;

    handle_change_professional_data("phone_number", new_phone_number);
  };

  const handleRegister = async () => {
    if (
      handle_validate_data("name") &&
      handle_validate_data("email") &&
      handle_validate_data("phone_number") &&
      handle_validate_data("profession") &&
      handle_validate_data("password")
    ) {
      handle_change_professional_validation("email", true);
      try {
        const response = await request_to_check_email_of_professional(
          professional.email
        );
        if (!response.exists) {
          dispatch(update_data_to_register_professional(professional));
          navigate("accept-terms-of-use");
        } else {
          SetEmailExists(true);
        }
      } catch (error) {
        go_to_error_page(error);
      }
    } else {
      handle_change_professional_validation("email", false);
    }
  };

  return (
    <>
      {emailExists ? (
        <div className="fixed w-full h-full flex justify-center top-0 pointer-events-none z-99999">
          <div className="w-full max-w-sm mt-4">
            <AlertDialog open={emailExists} onOpenChange={SetEmailExists}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Existing email!</AlertDialogTitle>
                  <AlertDialogDescription>
                    The email address you entered already exists in our
                    database. Please try a new email address.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      ) : null}
      <main className="min-h-screen w-full px-5 md:px-0 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full h-full flex justify-center items-center"
        >
          <Card className="w-full max-w-sm">
            <CardHeader>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-3xl font-normal">Create your account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                  Enter your information to get started
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="name"
                      placeholder="Name"
                      value={professional.name}
                      onChange={(e) =>
                        handle_change_professional_data("name", e.target.value)
                      }
                      required
                    />
                    {validateData.name == false ? (
                      <Label className="text-red-800">Add your name.</Label>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        value={professional.email}
                        onChange={(e) =>
                          handle_change_professional_data(
                            "email",
                            e.target.value
                          )
                        }
                        required
                      />
                      {validateData.email == false ? (
                        <Label className="text-red-800">Invalid email.</Label>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input
                        id="phoneNumber"
                        type="phoneNumber"
                        placeholder="+00 00 90000-0000"
                        value={professional.phone_number}
                        onKeyDown={(e) => handle_insert_phone_number(e.key)}
                        required
                      />
                      {validateData.phone_number == false ? (
                        <Label className="text-red-800">
                          Incomplete phone number.
                        </Label>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="profession">Profession</Label>
                      <Input
                        id="profession"
                        type="profession"
                        placeholder="Your profession"
                        value={professional.profession}
                        onChange={(e) =>
                          handle_change_professional_data(
                            "profession",
                            e.target.value
                          )
                        }
                        required
                      />
                      {validateData.profession == false ? (
                        <Label>Add your profession.</Label>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={professional.password}
                      onChange={(e) =>
                        handle_change_professional_data(
                          "password",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    {validateData.password == false ? (
                      <Label htmlFor="password" className="text-red-800">
                        Different passwords.
                      </Label>
                    ) : null}
                  </div>
                </div>
              </form>
              <div className="mt-8 w-full">
                <Button
                  variant="default"
                  className="w-full"
                  onClick={() => handleRegister()}
                >
                  Create Account
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center items-center">
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="hover:underline hover:underline-offset-4 text-blue-600 font-medium"
                >
                  Sign in
                </a>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </main>
    </>
  );
}

export default RegisterPage;
