import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css"
import section1Img from "../assets/section1img.png"
import Section2Img from "../assets/sectiion2.png"
import section4Img1 from "../assets/section4Img1.png"
import section4Img2 from "../assets/section4Img2.png"
import section4Img3 from "../assets/section4Img3.png"
import XIcon from '@mui/icons-material/X';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import LockIcon from '@mui/icons-material/Lock';
import SettingsIcon from '@mui/icons-material/Settings';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import SecurityIcon from '@mui/icons-material/Security';
import { table } from "./table";
import { review } from "./review";
import DoneIcon from '@mui/icons-material/Done';
import section2Img1 from "../assets/airtable.png"
import section2Img2 from "../assets/gem.png"
import section2Img3 from "../assets/notion.png"
import section2Img4 from "../assets/compass.png"
import section2Img5 from "../assets/deel.png"
import section2Img6 from "../assets/Brex.png"
const Home = () => {
  return (
    <>
      <div className="nav">
        <div className="nav1">
          <div className="logo">
            <h3>Superhuman</h3>
          </div>
          <div className="navitem">
            <Link>Products</Link>
            <Link>Resources</Link>
            <Link>Pricing</Link>
            <Link>Love</Link>
          </div>
        </div>
        <div className="getstarted">
          <button>Get Started</button>
        </div>
      </div>
       <div className="section1Light"></div>
      <div className="section1">
        <div className="section1Cont">
            <h2>Superhuman for <br /> Outlook</h2>
            <p>Superhuman integrates with Outlook to get you  through your email blazingly fast.</p>
            <button>Get Started</button>
        </div>
        <img src={section1Img} alt="section1Img" />
      </div>
      <div className="Section2">
        <img src={section2Img1} alt="section2Img1" />
        <img src={section2Img2} alt="section2Img1" />
        <img src={section2Img3} alt="section2Img1" />
        <img src={section2Img4} alt="section2Img1" />
        <img src={section2Img5} alt="section2Img1" />
        <img src={section2Img6} alt="section2Img1" />
      </div>
      <div className="section3light"></div>
      <div className="section3">
        <div className="section3Cont">
            <h1>See how <span>Superhuman </span>enhances Outlook</h1>
            <p>Superhuman’s intuitive, fast, and stress-free experience boosts your productivity, so you can focus on what matters most. Get 4 hours back every week.</p>
        </div>
        <div className="table">
            <div className="heading">
                <h4>Superhuman</h4>
                <h4>Outlook</h4>
            </div>
            <div className="tableCont">
                {
                    table.map((i)=>{
                        return(
                            <div className="tableRow">
                                <div className="line"></div>
                                <div className="tablevalue">
                                <h3>{i.value}</h3>
                                <h3><DoneIcon className="DoneIcon"/></h3>
                                <h3>{i.outlook}</h3>  
                                </div>
                            </div>
                        )
                    })
                }
               
            </div>
        </div>
      </div>
      <div className="section4">
        <div className="section4contBox">
            <div className="contbox">
                <h3>4+ hours</h3>
                <h3>Saved per week</h3>
            </div>
            <div className="contbox">
                <h3>2 day</h3>
                <h3>Faster response time</h3>
            </div>
            <div className="contbox">
                <h3>2.35x</h3>
                <h3>Emails responded to</h3>
            </div>
        </div>
        <div className="section4Cont">
            <h1>Superhuman make <span>teams</span> more productive</h1>
            <p>Uncover the features that make Superhuman the fastest email experience ever made.</p>
        </div>
      </div>
      <div className="section5">
        <div className="section5Light"></div>
        <div className="section5Box">
            <div className="section5Cont">
                <h4>Keyboard Shortcuts</h4>
                <h2><span>Do more </span>by clicking less</h2>
                <p>Fly through your inbox using intuitive keyboard shortcuts. Free up time from excessive clicking, streamline your workflow, and unlock new opportunities!</p>
            </div>
        <img src={section4Img1} alt="section4Img1" />
        </div>
        <div className="section5Box">
            <div className="section5Cont">
                <h4>Keyboard Shortcuts</h4>
                <h2><span>Focus</span> on what needs your attention</h2>
                <p>Fly through your inbox using intuitive keyboard shortcuts. Free up time from excessive clicking, streamline your workflow, and unlock new opportunities!</p>
            </div>
        <img src={section4Img2} alt="section4Img1" />
        </div>
        <div className="section5Box">
            <div className="section5Cont">
                <h4>Keyboard Shortcuts</h4>
                <h2>Turn thoughts <span> into emails </span></h2>
                <p>Fly through your inbox using intuitive keyboard shortcuts. Free up time from excessive clicking, streamline your workflow, and unlock new opportunities!</p>
            </div>
        <img src={section4Img3} alt="section4Img1" />
        </div>
      </div>
      <div className="section6">
        <div className="section6Light"></div>
        <div className="section6cont">
            <h2>What our customers are saying…</h2>
        </div>
        <div className="reviewDiv">
                {
                    review.map((i)=>{
                        return(
                            <div className="reviewBox">
                                <div className="message">
                                    <XIcon/>
                                    <p>{i.message}</p>
                                </div>
                                <div className="user">
                                    <PersonIcon/>
                                    <div className="username">
                                        <h4>{i.user}</h4>
                                        <h4>{i.userId}</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
      </div>
      <div className="section7">
        <h2>Enterprise Grade</h2>
        <div className="section7Light"></div>
        <div className="section7Div">
        <div className="section7Div1">
                <div className="setion7Box">
                    <MessageIcon />
                    <div>
                    <h4>Dedicated Account Team</h4>
                    <p>Get premium support, regular check-ins, concierge onboarding, and productivity training for your whole team.</p>
                    </div>
                </div>
                <div className="setion7Box">
                    <LockIcon />
                    <div>
                    <h4>Dedicated Account Team</h4>
                    <p>Get premium support, regular check-ins, concierge onboarding, and productivity training for your whole team.</p>
                    </div>
                </div>
                <div className="setion7Box">
                    <SettingsIcon />
                    <div>
                    <h4>Dedicated Account Team</h4>
                    <p>Get premium support, regular check-ins, concierge onboarding, and productivity training for your whole team.</p>
                    </div>
                </div>
        </div>
        <div className="section7Div2">
        <div className="setion7Box">
                    <CreditCardIcon />
                    <div>
                    <h4>Dedicated Account Team</h4>
                    <p>Get premium support, regular check-ins, concierge onboarding, and productivity training for your whole team.</p>
                    </div>
                </div>
                <div className="setion7Box">
                    <StarOutlineIcon />
                    <div>
                    <h4>Dedicated Account Team</h4>
                    <p>Get premium support, regular check-ins, concierge onboarding, and productivity training for your whole team.</p>
                    </div>
                </div>
                <div className="setion7Box">
                    <SecurityIcon />
                    <div>
                    <h4>Dedicated Account Team</h4>
                    <p>Get premium support, regular check-ins, concierge onboarding, and productivity training for your whole team.</p>
                    </div>
                </div>
        </div>
        </div>
      </div>
      <div className="section8">
        <div className="section8Cont">
            <h2>Turn your Outlook inbox into a top productivity tool with Superhuman</h2>
            <button>Get started</button>
        </div>
      </div>
      <div className="mainfooter">
        <div className="footerlight"></div>
      <div className="footer">
        <div className="footerCont">
            <h1>The Fastest Email Experience Ever Made</h1>
        </div>
        <div className="footerDiv">
            <div className="head">
                <h3>Company</h3>
                <div className="company">
                    <h4>Blog</h4>
                    <h4>Careers</h4>
                    <h4>Love</h4>
                </div>
            </div>
            <div className="head">
                <h3>Product</h3>
                <div className="company">
                    <h4>Download</h4>
                    <h4>AI</h4>
                    <h4>Sales</h4>
                    <h4>Enterprise</h4>
                    <h4>Outlook</h4>
                </div>
            </div>
            <div className="head">
                <h3>Support</h3>
                <div className="company">
                    <h4>Help Center</h4>
                    <h4>Contact Us</h4>
                    <h4>Tutorials</h4>
                </div>
            </div>
            <div className="head">
                <h3>Legal</h3>
                <div className="company">
                    <h4>Privacy</h4>
                    <h4>Terms</h4>
                </div>
            </div>
        </div>
      </div>
      <div className="outro">
      <div className="outroline"></div>
      <div className="outocont">
        <h3>ReduxPay</h3>
        <div className="social">
            <TwitterIcon/>
            <YouTubeIcon/>
            <LinkedInIcon/>
            <InstagramIcon/>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Home;

