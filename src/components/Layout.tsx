'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ReactNode } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import ThemeSwitch from './theme-switch-btn';
import BreadcrumbUtil from './BreadCrumbs';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <BreadcrumbUtil />
        <main>{children}</main>
        <Footer />
        <ThemeSwitch />
      </ThemeProvider>
    </>
  );
}

export default Layout;
