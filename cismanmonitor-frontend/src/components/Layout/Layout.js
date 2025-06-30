import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

function Layout({ children }) {
  const token = localStorage.getItem('token');
  let usuario = 'Usuario';

  if (token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      usuario = payload.sub;
    } catch (e) {}
  }

  return (
    <div className="layout">
      <Header usuario={usuario} />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
