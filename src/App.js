import IconLandingPage from "./assets/Logo.png";
import Ilustration1 from "./assets/Illustration_1.png";
import IconMaps from "./assets/location.png";
import IconUser from "./assets/user.png";
import IconServer from "./assets/Server.png";
import Ilustration2 from "./assets/Illustration_2.png";
import Check from "./assets/check.png";
import IconFree from "./assets/Huge_Global.png";
import CheckSucces from "./assets/check-success.png";

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

  const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN.",
    "No specific time limits."
  ];

  const plans = [
    {
      title: 'Free Plan',
      features:["Unlimited Bandwith", 
                "Encrypted Connection", 
                "No Traffic Logs", 
                "Works on All Devices"
              ],
              price:"Free",
    },
    {
      title: 'Standard Plan',
      features:["Unlimited Bandwith", 
                "Encrypted Connection", 
                "No Traffic Logs", 
                "Works on All Devices",
                "Connect Anywhere"
              ],
              price:"$9 / mo",
    },
    {
      title: 'Premium Plan',
      features:["Unlimited Bandwith", 
                "Encrypted Connection", 
                "No Traffic Logs", 
                "Works on All Devices",
                "Connect Anywhere",
                "Connect Anywhere"
              ],
              price:"$12 / mo",
    },
  ];

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
        <div className="grid grid-cols-2 py-24 items-center">
          <img src={Ilustration2} alt={"features-landingpage-vpn"} />
          <div className="px-16 space-y-4">
            <div className="font-medium text-3xl">
              We Provide Many Features You Can Use
            </div>
            <div className="text-sm font-normal">
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
                  <div className="text-xs">{val}</div>
                </div>
            );
            })}
          </div>
        </div>
        <div>
          <div>Chose Your Plan</div>
          <div>
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </div>
          <div className="grid grid-cols-3 space-x-6">
            {plans.map((val, index) => {
                return (
                  <CardPlan 
                    key={index} 
                    {...val} 
                    isSelect={index+1 === plans.length} 
                  />
                );
              })}
          </div>
        </div>
      </main>
    </div>
  );
}

function CardPlan({ title, price, features }) {
  return (
    <div 
        className={` rounded-md flex flex-col justify-between items-center pt-16 pb-8 border ${
          isSelect ? "border-red-500" : "border-gray-300"
        }`}
    >
      <div className="spce-y-5 flex flex-col justify-center items-center">
      <img src={IconFree} alt="" className="w-24" />
      <h3>{title}</h3>
      <div className="space-y-2">
        {features.map((val, index) => {
          return (
            <div 
              key={index} 
              className="flex flex-row mr-2 items-center space-x-2"
            >
              <img 
                src={CheckSucces} 
                alt="check-success" 
                className="w-3 h-2"
              />
              <div>
                {val} <div />
              </div>
            </div>
          );
        })}
        </div>
      </div>
      <div className="mt-8">
        <div className="text-center mb-3">{price}</div>
        <button className={`border rounded-full py-1 px-10 border-red-500 text-red-500 ${isSelect?' bg-red-500':'bg-white'}`}>
          Select
        </button>
      </div>
    </div>
  );
}

export default App;
