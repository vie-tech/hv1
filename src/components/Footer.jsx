import image1 from "../assets/images/Group-4.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-black p-16  md:p-16 lg:p-24 text-gray-400 font-body relative">
      <div className=" p-4">
        <div className="flex items-center gap-2 mb-4">
          <img src={image1} alt="Logo" className="w-6 h-6" />
          <h3 className="text-xl font-bold text-white">Harvesta</h3>
        </div>
        <p className="text-sm leading-6">
          HARVESTA prioritizes convenience and transparency, enhancing the
          overall shopping experience. Our product also offers real-time order
          tracking, secure payment options, and eco-friendly delivery choices,
          aligning with the values of today's environmentally conscious
          consumers.
        </p>
      </div>

      <div className=" p-4">
        <h3 className="text-xl font-semibold text-white mb-4">
          Featured Links
        </h3>
        <ul className="text-sm leading-6 space-y-2">
          <li className="flex items-center">
            <ChevronRightIcon color="success" />
            <span className="ml-2">Home</span>
          </li>
          <li className="flex items-center">
            <ChevronRightIcon color="success" />
            <span className="ml-2">About</span>
          </li>
          <li className="flex items-center">
            <ChevronRightIcon color="success" />
            <span className="ml-2">News</span>
          </li>
          <li className="flex items-center">
            <ChevronRightIcon color="success" />
            <span className="ml-2">Partner</span>
          </li>
          <li className="flex items-center">
            <ChevronRightIcon color="success" />
            <span className="ml-2">Contact</span>
          </li>
        </ul>
      </div>

      <div className=" p-4">
        <h3 className="text-xl font-semibold text-white mb-4">
          Information HQ
        </h3>
        <div className="text-sm space-y-4">
          <div className="flex items-start gap-2">
            <TelegramIcon fontSize="small" color="success" />
            <p>17 Kaffi Street, Behind ICM, Alausa, Ikeja, Lagos State.</p>
          </div>
          <div className="flex items-center gap-2">
            <LocalPhoneIcon fontSize="small" color="success" />
            <span>07011096453</span>
          </div>
          <div className="flex items-center gap-2">
            <MailOutlineIcon fontSize="small" color="success" />
            <span>harvestahq.com</span>
          </div>
        </div>
      </div>

      <div className=" p-4">
        <h3 className="text-xl font-semibold text-white mb-4">Subscribe</h3>
        <span className="flex pt-8">
          <input
            type="text"
            placeholder="Enter email address"
            className="text-xs p-2 font-light w-48 rounded-l focus:outline-none"
          />
          <TelegramIcon
            className="bg-harvestaLightGreen p-2 text-white rounded-r"
            fontSize="large"
          />
        </span>
        <div className="flex space-x-4 my-6">
          <span className="border-2 border-slate-800 w-8 h-8 flex items-center justify-center">
            <FacebookIcon fontSize="small" />
          </span>
          <span className="border-2 border-slate-800 w-8 h-8 flex items-center justify-center">
            <TwitterIcon fontSize="small" />
          </span>
          <span className="border-2 border-slate-800 w-8 h-8 flex items-center justify-center">
            <LinkedInIcon fontSize="small" />
          </span>
          <span className="border-2 border-slate-800 w-8 h-8 flex items-center justify-center">
            <AlternateEmailIcon fontSize="small" />
          </span>
        </div>
      </div>
      <div className="w-full h-auto bg-harvestaDarkGreen absolute bottom-0 left-0 text-xs text-center align-middle p-2">
        © Copyright 2024 Designed By Noel Amobeda
      </div>
    </footer>
  );
};

export default Footer;
