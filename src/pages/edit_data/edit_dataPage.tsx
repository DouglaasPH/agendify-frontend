// react
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// shadcn/ui
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// lucide
import { ArrowLeft, Briefcase, Phone, Save, User } from "lucide-react";

// motion
import { motion } from "motion/react";

// redux
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { modifyUserData } from "../../services/authApi";
import { updateUserData } from "../../features/auth/userDataSlice";

// utils
import { goToErrorPage } from "@/lib/utils";

function EditDataPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );
  const data_user = useSelector((state: RootState) => state.userData);

  const [name, setName] = useState(data_user.name);
  const [phoneNumber, setPhoneNumber] = useState(data_user.phoneNumber);
  const [profession, setProfession] = useState(data_user.profession);
  const [validatePhoneNumber, setValidatePhoneNumber] = useState<
    null | boolean
  >(true);

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

    if (newValue.length === 0) setValidatePhoneNumber(null);
    else if (newValue.length === 18) setValidatePhoneNumber(true);
    else setValidatePhoneNumber(false);
  };

  const handleSaveChanges = async () => {
    if (name !== "" && validatePhoneNumber && profession !== "") {
      try {
        const response = await modifyUserData(access_token, {
          name,
          phoneNumber,
          profession,
        });
        dispatch(updateUserData(response.data));
        navigate("/user/profile/");
      } catch (error) {
        goToErrorPage(error);
      }
    } else return;
  };

  return (
    <main className="py-30 flex flex-col gap-25 items-center">
      <section className="flex flex-col gap-3">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-5xl md:text-6xl text-center font-semibold leading-tight"
        >
          Update Personal Information
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="px-10 md:px-0 text-center text-md md:text-xl text-gray-500 leading-relaxed"
        >
          Update your name, profession, or phone number. You don't need to
          change all fields to save.
        </motion.p>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.9 }}
        className="w-8/9 md:w-2/5 bg-white rounded-xl shadow-2xl flex flex-col gap-15 justify-center"
      >
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 flex flex-col items-center justify-center gap-5 py-10 rounded-t-3xl">
          <div className="text-white p-4 bg-white/20 rounded-full">
            <User className="size-8" />
          </div>
          <h4 className="bg-gradient-to-r text-white text-2xl md:text-3xl text-center font-semibold leading-tight">
            Personal Information
          </h4>
          <p className="px-10 md:px-0 text-center text-md md:text-md text-white/70 leading-relaxed">
            Keep your data always up to date
          </p>
        </div>
        <form>
          <div className="flex flex-col gap-8 px-5 md:px-15">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="grid gap-2"
            >
              <Label htmlFor="name" className="font-medium text-lg">
                <User className="text-blue-600 size-5" /> Name
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(input) => setName(input.target.value)}
                className="bg-[#F0F2F5] rounded-xl p-3 w-full py-4 md:py-0"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="grid gap-2"
            >
              <Label htmlFor="profession" className="font-medium text-lg">
                <Briefcase className="text-blue-600 size-5" /> Profession
              </Label>
              <Input
                id="profession"
                type="text"
                value={profession}
                onChange={(input) => setProfession(input.target.value)}
                className="bg-[#F0F2F5] rounded-xl p-3 w-full py-4 md:py-0"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="grid gap-2"
            >
              <Label htmlFor="phoneNumber" className="font-medium text-lg">
                <Phone className="text-blue-600 size-5" /> Phone Number
              </Label>
              <Input
                id="phoneNumber"
                type="text"
                value={phoneNumber}
                onKeyDown={(e) => handleInsertPhoneNumber(e.key)}
                required
                className={`rounded-xl p-3 w-full py-4 md:py-0 ${
                  validatePhoneNumber == null || validatePhoneNumber
                    ? ""
                    : "border-2 border-red-800 focus:border-red-800"
                } bg-[#F0F2F5] rounded-xl p-3 w-full`}
              />
            </motion.div>
          </div>
        </form>
        <div className="px-5 md:px-15 pb-5 flex flex-col gap-5">
          <Button
            className="w-full py-6 md:py-5 rounded-xl text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700"
            onClick={() => handleSaveChanges()}
          >
            <Save /> Save Changes
          </Button>
          <Button
            className="w-full py-6 md:py-5 rounded-xl text-xl"
            variant="outline"
            onClick={() => navigate("/user/profile")}
          >
            <ArrowLeft className="size-4" /> Back to Profile
          </Button>
          <p className="px-10 md:px-0 text-center text-md md:text-md text-gray-400 leading-relaxed">
            Change only the fields you want to update. All fields are optional.
          </p>
        </div>
      </motion.section>
    </main>
  );
}

export default EditDataPage;
