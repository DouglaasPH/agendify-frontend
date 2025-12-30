// react
import { useState } from "react";

// API
import {
  request_to_get_data_by_id_via_access_token_for_professional,
  request_to_login_for_professional,
} from "../../services_professional";

// Redux
import { update_professional_data } from "../../slice";
import { useDispatch } from "react-redux";

// shadcn/ui
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/shared/ui/alert";

// motion
import { motion } from "motion/react";

// utils
import { go_to_error_page } from "@/shared/utils/utils";
import LoadingScreen from "@/shared/components/loading/LoadingScreen";

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorApi, setErrorApi] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle_login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const login_response = await request_to_login_for_professional({
        email,
        password,
      });
      const professional_data_response =
        await request_to_get_data_by_id_via_access_token_for_professional(
          login_response.data.access_token
        );
      dispatch(
        update_professional_data({
          access_token: login_response.data.access_token,
          is_authenticated: true,
          chat_code: professional_data_response.chat_code,
          email: professional_data_response.email,
          id: Number(professional_data_response.id),
          name: professional_data_response.name,
          phone_number: professional_data_response.phone_number,
          profession: professional_data_response.profession,
          profile_avatar_id: Number(
            professional_data_response.profile_avatar_id
          ),
        })
      );
    } catch (error: any) {
      console.log(error);
      if (
        error.response.status == 400 &&
        (error.response.data.detail === "Invalid email" ||
          error.response.data.detail === "invalid password")
      ) {
        setErrorApi(true);
        setTimeout(() => {
          setErrorApi(false);
        }, 3000);
      } else go_to_error_page(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? <LoadingScreen /> : null}
      {errorApi ? (
        <div className="fixed w-full h-full flex justify-center top-0 pointer-events-none z-99999">
          <div className="w-full max-w-sm mt-4">
            <Alert variant="destructive">
              <AlertTitle>Credentials Invalid!</AlertTitle>
              <AlertDescription>Email or password invalid.</AlertDescription>
            </Alert>
          </div>
        </div>
      ) : null}

      <main className="h-screen w-full px-5 md:px-0 my-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full h-full flex justify-center items-center"
        >
          <Card className="w-full md:w-md">
            <CardHeader>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-3xl font-normal">Welcome to Agendify</h1>
                <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                  Access your account to manage appointments simply and quickly.
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-10 md:gap-6">
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
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="/forgot-your-password"
                        className="ml-auto text-sm underline-offset-4 hover:underline font-medium text-blue-600"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </form>
              <div className="mt-8 w-full">
                <Button
                  variant="default"
                  className="w-full"
                  onClick={handle_login}
                >
                  Sign In
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center items-center">
              <div className=" text-center text-sm leading-relaxed">
                Don&apos;t have an account?{" "}
                <a
                  href="/register"
                  className="hover:underline hover:underline-offset-4 font-medium text-blue-600"
                >
                  Sign up
                </a>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </main>
    </>
  );
}

export default LoginPage;
