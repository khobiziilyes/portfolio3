"use client";

import React from "react";
import { usePathname } from "next/navigation";
import styled from "styled-components";

import {
  Layout,
  // Hero,
  // About,
  // Jobs,
  // Featured,
  // Projects,
  // Contact,
} from "@/components";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function Home() {
  const pathname = usePathname();

  return (
    <Layout pathname={pathname}>
      <StyledMainContainer className="fillHeight">
        {/* <Hero />
        <About />
        <Jobs />
        <Featured />
        <Projects />
        <Contact /> */}
      </StyledMainContainer>
    </Layout>
  );
}
