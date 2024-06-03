import { JSX } from "preact";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="flex items-center gap-4">
        <div className="menu-icon">
          <img src={MenuIcon} alt="Menu" className="icon w-6 h-6" />
        </div>
        <div className="logo flex items-center gap-2">
          <img src={LogoIcon} alt="Logo" className="logo-icon w-8 h-8" />
          <div>
            <h1 className="text-xl font-bold">Mirai</h1>
            <p className="text-sm text-gray-500">Dashboard</p>
          </div>
        </div>
      </div>
      <div className="search-bar flex items-center bg-gray-100 rounded-lg px-4 py-2">
        <img src={SearchIcon} alt="Search" className="icon w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="Search Task"
          className="bg-transparent outline-none w-full"
        />
        <div className="shortcut flex items-center ml-2">
          <img src={CommandIcon} alt="Command" className="icon w-5 h-5" />
          <span className="ml-1 text-gray-500">K</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img src={AddIcon} alt="Add" className="icon w-6 h-6" />
        <img src={BellIcon} alt="Notifications" className="icon w-6 h-6" />
        <div className="profile-section flex items-center gap-2">
          <img
            src={ProfilePic}
            alt="Profile Picture"
            className="profile-pic w-10 h-10 rounded-full"
          />
          <div className="profile-info text-right">
            <p className="text-sm font-semibold">Kim Dokja</p>
            <p className="text-xs text-gray-500">Seoul, Korea</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
