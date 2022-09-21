import IconLandingPage from "./assets/Logo.png";
import Ilustration1 from "./assets/Illustration_1.png";

function App() {
  const menus = ["About", "Features", "Pricing", "Testimonial", "Help"];
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
      <main className="container max-w-5xl mx-auto grid grid-cols-2">
        <div className="py-24">
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
      </main>
    </div>
  );
}

export default App;
