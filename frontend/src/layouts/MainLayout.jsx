import PropTypes from 'prop-types';
import Header from "../components/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{marginTop: '64px', overflowX: 'hidden' }}>
        {children}
      </main>
    </>
  );

};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;