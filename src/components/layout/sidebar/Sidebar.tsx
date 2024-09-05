"use client";

import { GrHomeRounded } from "react-icons/gr";
import { FiPieChart, FiFileText } from "react-icons/fi";
import React, { useState } from "react";
import type { MenuItemProps } from "./SidebarMenuItem";
import SidebarMenuItem from "./SidebarMenuItem";

type MenuSection = {
  title: string;
  items: Omit<MenuItemProps, "open" | "onClick">[];
};

const menu: MenuSection[] = [
  {
    title: "General",
    items: [
      {
        id: "dashboard",
        title: "Dashboard",
        path: "/",
        icon: GrHomeRounded,
        subItems: [
          {
            title: "Default",
            path: "/",
          },
          {
            title: "Ecommerce",
            path: "/",
          },
          {
            title: "Education",
            path: "/",
          },
        ],
      },
      {
        id: "widgets",
        title: "Witgets",
        path: "/",
        icon: FiPieChart,
        subItems: [
          {
            title: "General",
            path: "/",
          },
          {
            title: "Chart",
            path: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Applications",
    items: [
      {
        id: "file-manager",
        title: "File Manager",
        path: "/",
        icon: FiFileText,
      },
    ],
  },
];

const Sidebar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>();

  const handleMenuItemClick = (id: string) => {
    if (selectedMenuItem === id) {
      setSelectedMenuItem(undefined);
    } else {
      setSelectedMenuItem(id);
    }
  };

  return (
    <aside className="py-4 px-6 flex flex-col gap-2 tracking-wider">
      {menu.map((section, sIndex) => (
        <React.Fragment key={`${section.title}-${sIndex}`}>
          <h2 className="text-muted uppercase font-bold text-sm mt-2">
            {section.title}
          </h2>
          <ul className="pl-2 text-font-color font-medium">
            {section.items.map((item, mnItem) => (
              <SidebarMenuItem
                key={`${item.title}-${mnItem}`}
                {...item}
                open={item.id === selectedMenuItem}
                onClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </React.Fragment>
      ))}
    </aside>
  );
};

export default Sidebar;
