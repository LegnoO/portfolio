// ** Components
import IconButton from "@/components/icon-button";

// ** Icons
import { Sun } from "lucide-react";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="border-border border-b py-4">
          <ul className="flex items-center justify-between">
            <li className="text-3xl">
              <a>Devon</a>
            </li>
            <li>
              <IconButton icon={Sun} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
