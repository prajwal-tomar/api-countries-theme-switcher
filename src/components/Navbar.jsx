import regularMoon from "../assets/moon-regular.svg";
import solidMoon from "../assets/moon-solid.svg";

const Navbar = ({ theme, setTheme }) => {
  const handleThemeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <nav className="py-4 shadow-lg flex items-center justify-between px-20 bg-white mb-10 dark:bg-dark-blue">
      <h1 className="font-bold text-xl dark:text-white">Where in the world?</h1>
      <div className="flex items-center space-x-2">
        {theme === "light" ? (
          <img
            src={regularMoon}
            alt="regularMoon"
            className="h-5 w-5"
            onClick={handleThemeChange}
          />
        ) : (
          <img
            src={solidMoon}
            alt="solidMoon"
            className="h-5 w-5"
            onClick={handleThemeChange}
            style={{ color: "#ffffff" }}
          />
        )}

        <h1 className="font-semibold dark:text-white">Dark Mode</h1>
      </div>
    </nav>
  );
};

export default Navbar;
