const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <footer className="footer">
        <img src="/Footer.png" />
        <div className="bottom-part"></div>
      </footer>
    </div>
  );
};

export default Layout;
