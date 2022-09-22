import IconLandingPage from "./assets/Logo.png";
import Ilustration1 from "./assets/Illustration_1.png";
import IconMaps from "./assets/location.png";
import IconUser from "./assets/user.png";
import IconServer from "./assets/Server.png";
import Ilustration2 from "./assets/Illustration_2.png";
import Check from "./assets/check.png";

function App() {
  const menus = ["About", "Features", "Pricing", "Testimonial", "Help"];
  const section3 = [
    {
      icon: IconMaps,
      table: "users",
      total: "30+",
    },
    {
      icon: IconUser,
      table: "users",
      total: "30+",
    },
    {
      icon: IconServer,
      table: "users",
      total: "30+",
    },
  ];

  const features = ["Powerfull online protection.","Internet without borders.","Supercharged VPN.","No specific time limits."]

  return (
    <div className="bg-white">
      <header className="container max-w-5xl mx-auto flex flex-row pt-12 items-center space-x-36">
        <img alt="icon-landingpage" src={IconLandingPage} className="w-36" />
        <div className="flex-1">
          <ul className="flex flex-row space-x-6">
            {menus.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div className="space-x-6 flex flex-row items-center">
          <button className="font-bold">Sign In</button>
          <button className="border border-red-500 rounded-full py-2 px-6">
            Sign Up
          </button>
        </div>
      </header>
      <main className="container max-w-5xl mx-auto">
        <div className=" grid grid-cols-2 py-24">
          <div>
            <h1 className="font-bold text-4xl pb-5">
              Want anything to be easy
              <br />
              With LaslesVPN.
            </h1>
            <div className="font-normal text-xs pb-12">
              Provide a network for all your needs with ease and fun using
              LaslessVPN discover interesting features from us.
            </div>
            <button className="py-4 px-16 bg-red-500 rounded-md text-white drop-shadow-3xl">
              Get Started
            </button>
          </div>
          <div>
            <img src={Ilustration1} alt="ilustration-laslesvpn" />
          </div>
        </div>
        <div className="grid grid-cols-3 shadow-2xl rounded-md py-4">
          {section3.map((val, index) => {
            return (
            <div 
              key={index} 
              className={`flex flex-row py-8 space-x-6 justify-center ${
                index + 1 !== section3.length && "border-r border-gray-200"
              }`}
            >
              <div className="rounded-full bg-red-100 p-3">
                <img alt={val.lable} src={val.icon} className="w-6 h-6" />
              </div>
              <div>
                <div>{val.total}</div>
                <div>{val.lable}</div>
              </div>
            </div>
          );
          })}
        </div>
        <div className="grid grid-cols-2 py-24">
          <img src={Ilustration2} alt={"features-landingpage-vpn"} />
          <div>
            <div>We Provide Many Features You Can Use</div>
            <div>
              You can explore the features that we provide with fun and have 
              their own functions each feature.
            </div>
            {features.map((val, index) => {
              return (
                <div className="flex space-x-3" key={index}>
                  <img
                    src={Check}
                    alt="features-check-landingpage"
                    className="w-6 h-6"
                  />
                  <div>
                    {val}
                  </div>
                </div>
            );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
