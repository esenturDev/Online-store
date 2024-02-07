import Footer from '../footer/Footer';
import Header from '../header/Header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
