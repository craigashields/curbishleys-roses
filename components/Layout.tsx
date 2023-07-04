import React, { ReactNode } from 'react';
import SectionContainer from './SectionContainer'

interface LayoutProps {
    children: ReactNode;
  }

  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <SectionContainer>
      <div className="flex h-screen flex-col justify-between">        
        <main className="mb-auto">{children}</main>
       </div>
      </SectionContainer>
    );
  };
  
  export default Layout;  
