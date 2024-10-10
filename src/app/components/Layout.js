const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <footer className="footer">
        <div className="top-part"></div>
        <div className="bottom-part"></div>
      </footer>
    </div>
  );
};

export default Layout;
