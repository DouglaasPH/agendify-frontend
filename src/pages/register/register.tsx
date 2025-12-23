// react
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// redux slice
import { updateRegister } from "../../features/auth/registerSlice";
import { checkEmailApi } from "../../services/authApi";

// shadcn/ui
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// motion
import { motion } from "motion/react";

// utils
import { goToErrorPage, handleValidateEmail } from "@/lib/utils";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profession, setProfession] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validateName, setValidateName] = useState<null | boolean>(null);
  const [validateEmail, setValidateEmail] = useState<null | boolean>(null);
  const [validatePhoneNumber, setValidatePhoneNumber] = useState<
    null | boolean
  >(null);
  const [validateConfirmationPassword, setValidateConfirmationPassword] =
    useState<null | boolean>(null);
  const [validateProfession, setValidateProfession] = useState<null | boolean>(
    null
  );
  const [emailExists, SetEmailExists] = useState<null | boolean>(null);

  const handleValidateName = () => {
    let state = false;

    if (fullName !== "") {
      state = true;
    }

    setValidateName(state);
    return state;
  };

  const handleValidatePhoneNumber = () => {
    let state = false;

    if (phoneNumber.length === 0) {
      state = false;
    } else if (phoneNumber.length === 18) {
      state = true;
    }

    setValidatePhoneNumber(state);
    return state;
  };

  const handleValidateProfession = () => {
    let state = false;

    if (profession !== "") {
      state = true;
    }

    setValidateProfession(state);
    return state;
  };

  const handleValidateConfirmationPassword = () => {
    let state = false;

    if (password == confirmPassword) {
      state = true;
    }

    setValidateConfirmationPassword(state);
    return state;
  };

  const handleInsertPhoneNumber = (caracter: string) => {
    let newValue = "";
    const typeCaracter = Number(caracter);

    if (caracter === "Backspace") {
      if (phoneNumber.length == 2) {
        newValue = "";
      } else if (phoneNumber.length === 5 || phoneNumber.length === 9) {
        newValue = phoneNumber.slice(0, -3);
      } else if (phoneNumber.length === 14) {
        newValue = phoneNumber.slice(0, -2);
      } else {
        newValue = phoneNumber.slice(0, -1);
      }
    } else if (typeof typeCaracter === "number" && !isNaN(typeCaracter)) {
      if (phoneNumber.length == 0) {
        newValue = "+" + typeCaracter;
      } else if (phoneNumber.length === 2) {
        newValue = phoneNumber + typeCaracter + " (";
      } else if (phoneNumber.length === 6) {
        newValue = phoneNumber + typeCaracter + ") ";
      } else if (phoneNumber.length === 12) {
        newValue = phoneNumber + typeCaracter + "-";
      } else if (phoneNumber.length === 18) {
        newValue = phoneNumber.slice(0, -1) + typeCaracter;
      } else {
        newValue = phoneNumber + typeCaracter;
      }
    } else return;

    setPhoneNumber(newValue);
  };

  const handleRegister = async () => {
    if (
      handleValidateName() &&
      handleValidateEmail(email) &&
      handleValidatePhoneNumber() &&
      handleValidateProfession() &&
      handleValidateConfirmationPassword()
    ) {
      setValidateEmail(true);
      try {
        const response = await checkEmailApi(email);
        if (!response.data.exists) {
          dispatch(
            updateRegister({
              fullName,
              email,
              phoneNumber,
              profession,
              password,
            })
          );
          navigate("accept-terms-of-use");
        } else {
          SetEmailExists(true);
        }
      } catch (error) {
        goToErrorPage(error);
      }
    } else {
      setValidateEmail(false);
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
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                    {validateName == false ? (
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      {validateEmail == false ? (
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
                        value={phoneNumber}
                        onKeyDown={(e) => handleInsertPhoneNumber(e.key)}
                        required
                      />
                      {validatePhoneNumber == false ? (
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
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                        required
                      />
                      {validateProfession == false ? (
                        <Label>Add your profession.</Label>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                    {validateConfirmationPassword == false ? (
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
