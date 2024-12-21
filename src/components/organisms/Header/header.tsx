import Container from "@/components/atoms/container/container";
import Logo from "@/components/atoms/logo/logo";
import NavigationMenu from "@/components/molecules/navigationMenu/navigationMenu";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Logo />
          <NavigationMenu items={navigationItems} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
