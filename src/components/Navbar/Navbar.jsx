import Leftside from "./Leftside";
import Rightside from "./Rightside";

const Navbar = () => {
  return (
    <div className="h-[120px]">
      <nav className="px-16 h-full flex items-center justify-between">
        <Leftside />
        <Rightside />
      </nav>
    </div>
  );
};

export default Navbar;
