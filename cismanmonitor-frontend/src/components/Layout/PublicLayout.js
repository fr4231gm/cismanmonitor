import React from 'react';
import Footer from './Footer';
import './Layout.css';

function PublicLayout({ children }) {
  return (
    <div className="layout">
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
