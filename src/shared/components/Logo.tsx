// logo img
import logo from "../../../public/logo.png";

function LogoComponent() {
  return (
    <section className="flex gap-1 items-center select-none">
      <img src={logo} alt="logo" className="" />
    </section>
  );
}

export default LogoComponent;
