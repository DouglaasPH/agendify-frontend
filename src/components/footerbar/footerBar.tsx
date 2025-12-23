import logo from "../../../public/logo.png";

function FooterBar() {
  return (
    <footer className="py-20">
      <section className="px-10 flex flex-col md:flex-row justify-between items-start gap-7 border-b-1 border-b-gray-200 pb-10">
        <div className="flex flex-col justify-start gap-4 md:w-1/6">
          <div className="select-none">
            <img src={logo} alt="logo" className="h-7" />
          </div>
          <small className="font-small text-sm text-gray-600 pl-3">
            The complete platform to revolutionize your scheduling and grow your
            business.
          </small>
        </div>
        <div className="flex flex-col justify-start gap-4 w-1/6">
          <h4 className="font-normal text-md text-gray-900">Enterprise</h4>
          <div className="flex flex-col justify-start gap-1">
            <a
              href="about-us"
              className="hover:text-gray-900 font-small text-sm text-gray-600"
            >
              About
            </a>
            <a
              href="contact"
              className="hover:text-gray-900 font-small text-sm text-gray-600"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-4 w-1/6">
          <h4 className="font-normal text-md text-gray-900">Support</h4>
          <div className="flex flex-col justify-start gap-1">
            <a
              href="help-center"
              className="hover:text-gray-900 font-small text-sm text-gray-600"
            >
              Help Center
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-between items-center px-10 pt-10 gap-5 md:gap-0">
        <p className="hover:text-gray-900 font-small text-sm text-gray-600">
          © 2025 Agendify. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="privacy-policy"
            className="hover:text-gray-900 font-small text-sm text-gray-600"
          >
            Privacy
          </a>
          <a
            href="terms-of-use"
            className="hover:text-gray-900 font-small text-sm text-gray-600"
          >
            Terms
          </a>
        </div>
      </section>
    </footer>
  );
}

export default FooterBar;
