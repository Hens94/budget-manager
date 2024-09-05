import { cn } from "@/utils/common";
import { type FC } from "react";
import type { IconType } from "react-icons";
import { IoIosArrowForward } from "react-icons/io";

export type MenuItemProps = {
  id: string;
  title: string;
  path: string;
  icon?: IconType;
  subItems?: Omit<
    MenuItemProps,
    "subItems" | "icon" | "id" | "open" | "onClick"
  >[];
  open: boolean;
  onClick: (id: string) => void;
};

const SidebarMenuItem: FC<MenuItemProps> = (item) => {
  return (
    <li className="border-b" onClick={() => item.onClick(item.id)}>
      {item.subItems ? (
        <div>
          <div
            className={cn(
              "flex items-center justify-between gap-2 hover:text-primary hover:bg-primary/15 p-2 rounded-lg transition-colors duration-300 cursor-pointer",
              {
                "bg-primary/15 text-primary": item.open,
              },
            )}
          >
            <span className="flex items-center gap-2">
              {item.icon ? <item.icon /> : null} {item.title}
            </span>
            <IoIosArrowForward
              className={cn("transition-all duration-500", {
                "transform rotate-90": item.open,
              })}
            />
          </div>
          <ul
            className={cn(
              "list-disc list-inside mx-4 my-2 [&>li]:py-1 [&>li]:cursor-pointer [&>li:hover]:text-primary text-sm border-l-2 pl-3 border-primary text-font-color/80 font-semibold",
              {
                hidden: !item.open,
              },
            )}
          >
            {item.subItems.map((subItem, msiIndex) => (
              <li key={`${subItem.title}-${msiIndex}`}>{subItem.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex items-center gap-2 hover:text-primary hover:bg-primary/15 p-2 rounded-lg transition-colors duration-300 cursor-pointer">
          {item.icon ? <item.icon /> : null} {item.title}
        </div>
      )}
    </li>
  );
};

export default SidebarMenuItem;
