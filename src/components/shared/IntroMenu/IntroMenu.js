import React from "react";
import Box from "../Box/Box";
import * as icon from '../../../assets/img/icon/index'
import Button from "../Button/Button";
export default function IntroMenu() {
  return (
    <Box
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "1.5rem" }}>VISION UI FREE</div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <icon.OverviewIcon />
          <p>DASHBOARD</p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <icon.ProfileIcon width="10" height="10" />
          <p>PROFILE</p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <icon.SignUpPage />
          <p>SIGN UP</p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <icon.SignInPage />
          <p>SIGN IN</p>
        </div>
      </div>
      <Button sx={{ border: "none", backgroundColor: "var(--color-brand--3)" }}>
        Free Download
      </Button>
    </Box>
  );
}
