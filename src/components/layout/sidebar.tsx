// ** Icons
import { User, FileText, FolderKanban, Send } from "lucide-react";

const menuItems = [
  { icon: <User />, label: "About" },
  { icon: <FileText />, label: "Resume" },
  { icon: <FolderKanban />, label: "Project" },
  { icon: <Send />, label: "Contact" },
];

const Sidebar = () => {
  return (
    <div className="fixed h-screen w-[78px]">
      <ul className="border-border flex flex-col rounded border">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="border-border text-muted flex flex-col items-center gap-1 border-b bg-gradient-to-r from-[#00000061] via-[#ffffff1c] bg-[length:200%_100%] bg-right-top px-1 py-4">
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
