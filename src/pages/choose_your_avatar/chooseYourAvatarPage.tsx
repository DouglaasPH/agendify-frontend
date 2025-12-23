import ChooseYourAvatarMobile from "./layouts/chooseYourAvatarMobile";
import ChooseYourAvatarDesktop from "./layouts/chooseYourAvatarDesktop";

type Props = {
  mode: "register" | "updateAccount";
};

function ChooseYourAvatarPage({ mode }: Props) {
  return (
    <div>
      <div className="hidden md:block">
        <ChooseYourAvatarDesktop mode={mode} />
      </div>
      <div className="block md:hidden">
        <ChooseYourAvatarMobile mode={mode} />
      </div>
    </div>
  );
}

export default ChooseYourAvatarPage;
