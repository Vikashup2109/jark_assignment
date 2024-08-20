function getMenuList(pathname) {
  return [
    {
      groupLabel: "MY PROFILE",
      menus: [
        {
          href: "/webCards",
          label: "Web Cards",
          active: pathname === "/webCards",
        },
        {
          href: "/nfcCards",
          label: "NFC Cards",
          active: pathname === "/nfcCards",
        },

        {
          href: "/qrCodes",
          label: "QR Codes",
          active: pathname === "/qrCodes",
        },
        {
          href: "/contacts",
          label: "Contacts",
          active: pathname === "/contacts",
        },
        {
          href: "/myleads",
          label: "My Leads",
          active: pathname === "/myleads",
        },
      ],
    },
    {
      groupLabel: "ADMINISTRATION",
      menus: [
        {
          href: "/",
          label: "Overview",
          active: pathname === "/",
        },
        {
          href: "/users",
          label: "Users",
          active: pathname === "/users",
        },
        {
          href: "/teams",
          label: "Teams",
          active: pathname === "/teams",
        },
        {
          href: "/leads",
          label: "Leads",
          active: pathname === "/leads",
        },
      ],
    },
  ];
}

export { getMenuList };
