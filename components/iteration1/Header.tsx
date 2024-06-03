import { JSX } from "preact";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="text-2xl font-bold">Bento</div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search Task"
          className="p-2 border rounded-lg"
        />
        <div className="flex items-center ml-4">
          <img
            src="/images/image-1.png"
            alt="Profile Picture"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div className="text-right">
            <p>Kim Dokja</p>
            <p>South Korea</p>
          </div>
        </div>
        <div className="text-right ml-4">
          <p>Thu, December 21</p>
          <p>Dec 21 - Sep 25</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
