import NavHead from "../elements/Navbar/Header";
import NavBody from "../elements/Navbar/Body";
import NavBg from "../elements/Navbar/Background";

const Navbar = () => {
  return (
    <>
      <div className="absolute w-full mx-auto mt-2 ">
        <NavHead />
        <NavBody />
      </div>
      <NavBg />
    </>
  );
};

export default Navbar;
