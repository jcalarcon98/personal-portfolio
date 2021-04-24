import PropTypes from 'prop-types';

const Layout = ({ children }) => <div>{ children }</div>;

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
