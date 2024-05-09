import PropTypes from 'prop-types';

const CenterLayout = ({ children }) => {
  return (
    <div className='grid place-items-center h-screen w-screen'>
      {children}
    </div>
  );
};

CenterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CenterLayout;
