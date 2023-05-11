"use client";

import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

import Loader from "@/components/Loader";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Email from "@/components/email";
import Social from "@/components/social";

import { GlobalStyle, theme } from "@/styles";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({
  children,
  pathname,
}: React.PropsWithChildren<{ pathname: string }>) => {
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"));

    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer");
          link.setAttribute("target", "_blank");
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) return;

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'

      setTimeout(() => {
        const el = document.getElementById(id);

        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);

  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <a className="skip-to-content" href="#content">
          Skip to Content
        </a>

        {isLoading && isHome ? (
          <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
          <StyledContent>
            <Nav isHome={isHome} />
            <Social isHome={isHome} />
            <Email isHome={isHome} />

            <div id="content">
              {children}
              <Footer />
            </div>
          </StyledContent>
        )}
      </ThemeProvider>
    </div>
  );
};

export default Layout;
