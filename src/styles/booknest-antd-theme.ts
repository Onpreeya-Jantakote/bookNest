import type { ThemeConfig } from "antd";

export const booknestAntdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#657c68",
    colorBgBase: "#fafaf8",
    colorBgContainer: "#ffffff",
    colorTextBase: "#292929",
    colorTextSecondary: "#888888",
    colorBorder: "#eaeaea",
    colorBorderSecondary: "#eaeaea",
    borderRadius: 4,
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    boxShadow: "none",
    boxShadowSecondary: "none",
  },
  components: {
    Input: {
      activeShadow: "none",
    },
    Button: {
      boxShadow: "none",
      primaryShadow: "none",
      defaultShadow: "none",
    },
    Pagination: {
      itemActiveBg: "#ffffff",
    },
  },
};
