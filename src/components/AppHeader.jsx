import React, { useEffect, useLayoutEffect } from "react";
import "../assets/style/app_header.sass";
import HeaderTopBar from "./HeaderTopBar";
import HeaderDesktop from "./HeaderDesktop";
import HeraderMob from "./HeraderMob";
export default (function AppHeader() {
  return (
    <header id="app-header">
      <HeaderTopBar />
      <HeaderDesktop />
      <HeraderMob />
    </header>
  );
});
