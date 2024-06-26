import HeroImg from "../../assets/hero.png";
import { AiOutlineTwitter, AiOutlineMail, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {

  // dynamic Content ...
  const config = {
    subTitle: "I'm a Mobile Developer and Designer 📲 📲 📲",
    social: {
      twitter: "https://twitter.com/Sksharujan1108",
      facebook: "https://www.facebook.com/Sksharujan1108",
      linkedin: "https://www.linkedin.com/in/sarujan-thevaraja-428459277/",
    }
  }

  return (
    <section id = "home" className = "flex flex-col md:flex-row px-5 py-40 bg-secondary h-screen justify-center"  >
        
      <div className = "md:w-1/2 flex flex-col">
        <h1 
          className = "text-black text-3xl font-hero-font mt-10"
        >
          Hi, <br /> I am  <span className="text-white "> Thevaraja </span> Sarujan
            <p className="text-6xl font-developer py-5 font-bold"> {config.subTitle} </p>
        </h1>

        <div className = "flex py-6">
            <a href = "#" className = "pr-4 hover:text-white"> <AiOutlineTwitter size={40} /> </a>
            <a href = "#" className = "pr-4 hover:text-white"> <AiOutlineFacebook size={40} /> </a>
            <a href = {config.social.linkedin} className = "pr-4 hover:text-white"> <AiOutlineLinkedin size={40} /> </a>
        </div>
      </div>

      <img className = "md:w-1/3" src={HeroImg} />
    </section>
  );
}
