import type { IconType } from "react-icons";
import { GrHomeRounded } from "react-icons/gr";
import { FiPieChart, FiFileText } from "react-icons/fi";

type MenuSection = {
  title: string;
  items: MenuItem[];
};

type MenuItem = {
  title: string;
  path: string;
  icon?: IconType;
  subItems?: Omit<MenuItem, "subItems" | "icon">[];
};

const menu: MenuSection[] = [
  {
    title: "General",
    items: [
      {
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
        title: "File Manager",
        path: "/",
        icon: FiFileText,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="py-4 px-6 text-sm">
      {menu.map((section, sIndex) => (
        <div key={`${section.title}-${sIndex}`}>
          <h2 className="text-muted uppercase font-bold tracking-wider">
            {section.title}
          </h2>
          <ul className="pl-2">
            {section.items.map((item, mnItem) => (
              <li key={`${item.title}-${mnItem}`} className="border-b">
                {item.subItems ? (
                  <div>
                    <div className="flex items-center gap-2">
                      {item.icon ? <item.icon /> : null} {item.title}
                    </div>
                    <ul className="list-disc list-inside pl-4 hidden">
                      {item.subItems.map((subItem, msiIndex) => (
                        <li key={`${subItem.title}-${msiIndex}`}>
                          {subItem.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    {item.icon ? <item.icon /> : null} {item.title}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
