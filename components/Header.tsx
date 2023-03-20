import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-row gap-4 items-center pt-6 px-8 grow-0 justify-between">
      <div className="flex flex-row gap-4 items-center grow-0">
        <Image
          src="/logo-sidebar-open.svg"
          alt="360dialog logo"
          width={80}
          height={40}
        />
        {/* <h1 className="text-xl font-bold text-gray-300 mb-1">
            Explore Integrated Onboarding
          </h1> */}
      </div>
      <h1 className="text-xl font-bold text-black-300 mb-1">
        Explore Integrated Onboarding
      </h1>
      <a
        className="text-sm text-gray-400 px-3 py-1 outline-none hover:text-gray-500"
        href="https://www.360dialog.com/contact#dataprivacy"
        target="_blank"
        rel="noreferrer"
      >
        Privacy Policy →
      </a>
    </div>
  );
};

export default Header;
