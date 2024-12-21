import { BaseProps } from "@/types/common";
import Header from "@/components/organisms/Header/header";
import Footer from "@/components/organisms/Footer/footer";

const Layout = ({ children }: BaseProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
