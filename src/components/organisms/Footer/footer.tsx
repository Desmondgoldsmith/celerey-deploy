import Container from "@/components/atoms/container/container";
import Logo from "@/components/atoms/logo/logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-500">
              Making the world a better place through innovative solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Products</h3>
            <ul className="space-y-2">
              {["Features", "Pricing", "Solutions", "Enterprise"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-900"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-2">
              {["Privacy", "Terms", "Security", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Company Name. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
