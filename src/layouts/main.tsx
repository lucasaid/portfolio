import React from "react";
import Helmet from "./Helmet";

import CanvasBg from "../components/CanvasBg";
import "../stylesheets/all.scss";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <Helmet />
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
        onFocus={(e) => {
          const el = e.currentTarget;
          el.style.left = '16px';
          el.style.top = '16px';
          el.style.width = 'auto';
          el.style.height = 'auto';
          el.style.overflow = 'visible';
        }}
        onBlur={(e) => {
          const el = e.currentTarget;
          el.style.left = '-9999px';
          el.style.top = 'auto';
          el.style.width = '1px';
          el.style.height = '1px';
          el.style.overflow = 'hidden';
        }}
      >
        Skip to content
      </a>
      <main id="main-content">{children}</main>
      <CanvasBg />
    </div>
  )
}

export default MainLayout;
