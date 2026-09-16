import type { TItem } from "@/types/route-menu.type";

export const items: TItem[] = [
  {
    menuType: "title",
    name: "Dashboard",
  },
  {
    icon: "layout-template",
    index: true,
    name: "Dashboard",
  },
  {
    roles: ["super-admin", "admin"],
    menuType: "title",
    name: "Management",
  },
  {
    roles: ["super-admin", "admin"],
    icon: "users",
    path: "users",
    name: "Users",
    routeType: "layout",
    menuType: "item-without-children",
    children: [
      {
        index: true,
        name: "Users",
        menuType: "invisible",
      },
      {
        path: ":id",
        menuType: "invisible",
      },
    ],
  },
  {
    roles: ["super-admin", "admin"],
    icon: "wallet",
    path: "user-wallets",
    name: "User Wallets",
    routeType: "layout",
    menuType: "item-without-children",
    children: [
      {
        index: true,
        name: "User Wallets",
        menuType: "invisible",
      },
      {
        path: ":id",
        menuType: "invisible",
      },
    ],
  },
  {
    roles: ["super-admin", "admin"],
    menuType: "title",
    name: "Payment System",
  },
  {
    roles: ["super-admin", "admin"],
    icon: "cpu",
    path: "ai-models",
    name: "AI Models",
  },
  {
    roles: ["super-admin", "admin"],
    icon: "calendar",
    path: "plans",
    name: "Plans",
    routeType: "layout",
    menuType: "item-without-children",
    children: [
      {
        index: true,
        name: "Plans",
        menuType: "invisible",
      },
    ],
  },
  {
    roles: ["super-admin", "admin"],
    icon: "package",
    path: "packages",
    name: "Packages",
    routeType: "layout",
    menuType: "item-without-children",
    children: [
      {
        index: true,
        name: "Packages",
        menuType: "invisible",
      },
      {
        path: ":id",
        menuType: "invisible",
      },
    ],
  },
  {
    roles: ["super-admin", "admin"],
    icon: "layers",
    path: "package-prices",
    name: "Package Prices",
  },
  {
    roles: ["super-admin", "admin"],
    icon: "ticket",
    path: "coupons",
    name: "Coupons",
  },
  {
    roles: ["super-admin", "admin"],
    icon: "layout-template",
    path: "features",
    name: "Features",
    routeType: "layout",
    menuType: "item-without-children",
    children: [
      {
        index: true,
        name: "Features",
        menuType: "invisible",
      },
      {
        path: ":id",
        menuType: "invisible",
      },
    ],
  },
  {
    roles: ["super-admin", "admin"],
    icon: "square-stack",
    path: "feature-popups",
    name: "Feature Popups",
    routeType: "layout",
    menuType: "item-without-children",
    children: [
      {
        index: true,
        name: "Feature Popups",
        menuType: "invisible",
      },
    ],
  },
  {
    roles: ["super-admin", "admin"],
    icon: "credit-card",
    path: "payment-methods",
    name: "Payment Methods",
    routeType: "layout",
    menuType: "item-without-children",
    children: [
      {
        index: true,
        name: "Payment Methods",
        menuType: "invisible",
      },
    ],
  },
  {
    roles: ["super-admin", "admin"],
    icon: "percent",
    path: "credits-profits",
    name: "Credits Profits",
    routeType: "layout",
    menuType: "item-without-children",
    children: [
      {
        index: true,
        name: "Credits Profits",
        menuType: "invisible",
      },
      {
        path: ":id",
        menuType: "invisible",
      },
    ],
  },
  {
    roles: ["super-admin", "admin"],
    icon: "settings",
    path: "billing-settings",
    name: "Billing Settings",
  },
  {
    roles: ["super-admin", "admin"],
    menuType: "title",
    name: "Activities",
  },
  {
    roles: ["super-admin", "admin"],
    icon: "receipt",
    path: "payment-transactions",
    name: "Payment Transactions",
    routeType: "layout",
    menuType: "item-without-children",
    children: [
      {
        index: true,
        name: "Payment Transactions",
        menuType: "invisible",
      },
      {
        path: ":id",
        menuType: "invisible",
      },
    ],
  },
  {
    roles: ["super-admin", "admin"],
    icon: "shopping-bag",
    path: "package-transactions",
    name: "Package Transactions",
    routeType: "layout",
    menuType: "item-without-children",
    children: [
      {
        index: true,
        name: "Package Transactions",
        menuType: "invisible",
      },
    ],
  },
  {
    roles: ["super-admin", "admin"],
    icon: "coins",
    path: "credits-transactions",
    name: "Credits Transactions",
    routeType: "layout",
    menuType: "item-without-children",
    children: [
      {
        index: true,
        name: "Credits Transactions",
        menuType: "invisible",
      },
      {
        path: ":id",
        menuType: "invisible",
      },
    ],
  },
  {
    roles: ["super-admin", "admin"],
    icon: "activity",
    path: "credits-usages",
    name: "Credits Usages",
  },
  {
    roles: ["super-admin", "admin"],
    icon: "history",
    path: "feature-usage-logs",
    name: "Feature Usage Logs",
  },
  {
    roles: ["supper-admin", "admin"],
    menuType: "title",
    name: "FEATURE CONFIGS",
  },
  {
    roles: ["super-admin", "admin"],
    icon: "mail",
    path: "contacts",
    name: "Contacts",
  },
  {
    roles: ["super-admin", "admin"],
    icon: "hard-drive",
    path: "files",
    name: "Files",
  },
  {
    roles: ["supper-admin", "admin"],
    menuType: "title",
    name: "RECYCLE BIN",
  },
  {
    roles: ["super-admin", "admin"],
    icon: "bell",
    path: "notifications",
    name: "Notifications",
  },
  {
    roles: ["super-admin", "admin"],
    icon: "message-square",
    path: "feature-feedbacks",
    name: "Feature Feedbacks",
  },
  {
    roles: ["super-admin", "admin"],
    icon: "trash",
    path: "bin",
    name: "Recycle Bin",
  },
];
