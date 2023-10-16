import regularMoon from "../assets/moon-regular.svg";
import solidMoon from "../assets/moon-solid.svg";

const Navbar = ({ theme, setTheme }) => {
  const handleThemeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <nav className="md:py-4 py-8 shadow-lg flex items-center justify-between md:px-20 px-5 bg-white dark:bg-dark-blue">
      <h1 className="font-bold md:text-xl text-sm dark:text-white">Where in the world?</h1>
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

        <h1 className="font-semibold dark:text-white md:text-md text-sm">Dark Mode</h1>
      </div>
    </nav>
  );
};

export default Navbar;
