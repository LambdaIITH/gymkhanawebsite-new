import React, { useState, useEffect } from "react";
import TCard from "./teamCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface club {
  name: string;
  desc: string;
}
const clubs: club[] = [
  {
    name: "aero",
    desc: "Aeronautics and Drone Designing Club of IIT Hyderabad, is a community dedicated to explore the world of planes and drones. We build cool stuff in our projects, organize interesting and engaging events explaining aerodynamics in a simple way and conduct exciting competitions.",
  },
  {
    name: "cepheid",
    desc: "The Astronomy & Astrophysics Club of IIT Hyderabad. Here at Cepheid we try to bring awareness in the field of Astronomy and Astrophysics.We conduct various Events, Talks and other activities as a group.",
  },
  {
    name: "elektronica",
    desc: "Elektronica is the Electronics & Signal Processing club of IIT Hyderabad. Here people interested in electronics & signal processing work together, build projects and learn from one another. We also conduct sessions & contests to spread the knowledge with the rest of the community. We also participate and represent IIT Hyderabad in various other competitions and even Inter IIT Tech Meet.",
  },
  {
    name: "kludge",
    desc: "Welcome to Kludge, the information security and networking club of IIT Hyderabad - Our mission is to provide a forum for students to explore and deepen their understanding of the fields of information security and networking. Through a variety of events, workshops, and talks, we aim to foster a community of learners and practitioners who are passionate about these rapidly evolving fields. The world of information security and networking can be daunting, but here at Kludge, we’re here to help.",
  },
  {
    name: "infero",
    desc: "Infero is the Competitive Programming Club of IIT Hyderabad. We are a bunch who take care of everyone’s problems in our own nice geeky way, we think logically, we talk reasonably but well, we are too clumsy and lazy to act, our programs do it instead ;)",
  },
  {
    name: "lambda",
    desc: "Lambda is the software development club at IIT Hyderabad, focusing on building software, applications, and websites that benefit the entire IITH community. As part of these efforts, we have developed the Main Gate Application, IITH Dashboard, and many others. Whether you're a seasoned coder or a complete beginner, Lambda provides an inclusive environment to grow. Join us to dream, develop, and accomplish extraordinary things with technology.",
  },
  {
    name: "epoch",
    desc: "Epoch is a club at IITH that helps students learn and grow in AI and Data Science. Members can join hands-on sessions, hackathons, and work on projects in areas like Computer Vision, NLP, and more. It's a great place to connect with peers and gain practical experience.",
  },
  // {
  //   name: "prakriti",
  //   desc: "Nature club of IITH. Bringing naturalists together to enjoy, appreciate and be grateful for nature.Club to increase awareness regarding current pressing issues surrounding nature, sustainable technology and real life problem statements surrounding nature",
  // },
  {
    name: "robotix",
    desc: "The Robotix Club at the Indian Institute of Technology Hyderabad (IITH) is a dynamic hub for enthusiasts passionate about robotics, machine learning, electronics, and mechanical modeling. Our club is dedicated to fostering innovation and technical excellence through hands-on projects and collaborative learning. At the Robotix Club, we take pride in our diverse portfolio of cutting-edge projects, ranging from the intricate design and flight of Ornithopters to the advanced engineering of Drones. Our members gain practical experience in integrating machine learning algorithms with robotics, developing sophisticated electronic circuits, and constructing robust mechanical systems.",
  },
  {
    name: "torque",
    desc: "Torque, the automobile club at IIT Hyderabad, is dedicated to fostering the passion of automobile enthusiasts. Our mission is to enhance mechanical knowledge among students. We conduct regular sessions, work on hands-on projects, and participate in competitions. Like other college automobile clubs, we host workshops, collaborate on vehicle design and construction, and engage in industry visits and networking events to provide a comprehensive learning experience.",
  },
  {
    name: "glitch",
    desc: "The esports and game dev club of IITH.",
  },
  {
    name: "mobius",
    desc: "Möbius is the Mathematics club of IIT Hyderabad.",
  },
  {
    name: "qet",
    desc: "QET is the Quantum Technologies club of IIT Hyderabad.",
  },
  {
    name: "blockspace",
    desc: "Blockspace is the Web3, Blockchain and Crypto club of IIT Hyderabad, dedicated to making blockchain and cryptocurrency understandable for everyone. From DeFi to DAOs, we explore the decentralized world together — no background required.",
  },
  {
    name: "alpha",
    desc: "ALPHA is the Quant club of IIT Hyderabad, focused on the mathematical and computational side of quantitative finance — probability, statistics, stochastic processes, optimization, algorithmic trading and machine learning — with hands-on projects, competitions and research discussions.",
  },
];

const clubLogos = {
  aero: "/images/councils/aero.png",
  cepheid: "https://scitech-iith.netlify.app/images/cepheid.jpg",
  elektronica: "https://scitech-iith.netlify.app/images/elektronica.png",
  kludge: "https://scitech-iith.netlify.app/images/kludge.jpeg",
  infero: "https://scitech-iith.netlify.app/images/infero_logo.png",
  lambda: "/images/councils/lambda.png",
  //prakriti: "https://scitech-iith.netlify.app/images/prakriti_logo.png",
  robotix: "https://scitech-iith.netlify.app/images/robotix_logo.png",
  torque: "https://scitech-iith.netlify.app/images/torque_logo.png",
  glitch: "/images/councils/glitch.png",
  epoch: "/images/councils/epoch.png",
  mobius: "/images/councils/mobius.jpg",
  qet: "/images/councils/qet.jpg",
  blockspace: "/images/councils/blockspace.png",
  alpha: "/images/councils/alpha.png",
};

// 2026-27 club heads (from the Gymkhana teams list, 23 Nov 2026).
// TODO: Elektronica heads not announced — John Bobby and Harsha are the contacts on its May 2026 recruitment mail.
// TODO: confirm Kludge heads (signed as contacts on its 2026-27 recruitment mails, not announced as heads).
// TODO: Blockspace — Annant Pathak & Tejaswi sign its 2026-27 mails as contacts (not announced as heads); emails not found.
// TODO: Alpha (new Quant club, announced 15 Sep 2026) — no heads named yet.
// TODO: Prakriti heads not found.
type Member = { name: string; email?: string; mobile?: string; position: string };
const coords: Record<string, Member[]> = {
  aero: [
    { name: "Manish Garinapally", mobile: "+91 8374309975", position: "Overall Head" },
    { name: "Adithya Preetham", mobile: "+91 7022010269", position: "Technical Head" },
    { name: "Naren Karthik T", email: "ic24btech11017@iith.ac.in", mobile: "+91 7200023407", position: "Technical Head" },
  ],
  cepheid: [
    { name: "Sameer Choudhary", mobile: "+91 6005206550", position: "Overall Head" },
    { name: "Jyothish J", email: "me24btech11029@iith.ac.in", mobile: "+91 7012228022", position: "Technical Head" },
    { name: "Guntha Sai Vedanth", mobile: "+91 9440488691", position: "Community Head" },
  ],
  elektronica: [
    { name: "John Bobby", email: "ee24btech11032@iith.ac.in", mobile: "+91 8281962639", position: "Contact" },
    { name: "Harsha", mobile: "+91 8142389645", position: "Contact" },
  ],
  kludge: [
    { name: "Aditya Tripathy", mobile: "+91 9599891710", position: "Head" },
    { name: "Vivaswan Rai", mobile: "+91 8052880844", position: "Head" },
    { name: "Rayan Halder", mobile: "+91 9836025700", position: "Head" },
  ],
  infero: [
    { name: "Praneeth Kodavati", email: "cs24btech11034@iith.ac.in", mobile: "+91 8828994589", position: "Head" },
    { name: "Nimish Agarwal", email: "cs24btech11044@iith.ac.in", mobile: "+91 7645031566", position: "Head" },
  ],
  lambda: [
    { name: "Guddeti Sreeteja", email: "co24btech11009@iith.ac.in", position: "Head" },
    { name: "Aric Maji", email: "cs24btech11007@iith.ac.in", position: "Head" },
    { name: "Ganeswar Velvapudu", email: "ms23btech11034@iith.ac.in", position: "Mentor" },
    { name: "Pranjal Prajapati", email: "cs23btech11048@iith.ac.in", position: "Mentor" },
    { name: "Ankush Singh", email: "ma23btech11002@iith.ac.in", position: "Mentor" },
    { name: "Abdul Muqeeth", email: "es23btech11028@iith.ac.in", position: "Mentor" },
  ],
  epoch: [
    { name: "Adithi Yellai", email: "es24btech11005@iith.ac.in", mobile: "+91 7337454037", position: "Overall Head" },
    { name: "Devansh Tripathi", email: "cs24btech11022@iith.ac.in", mobile: "+91 8123589578", position: "Overall Head" },
    { name: "Harshvardhan Patidar", email: "ai24btech11015@iith.ac.in", mobile: "+91 9351260076", position: "Overall Head" },
  ],
  robotix: [
    { name: "Siddhanth Yellanki", email: "ee24btech11059@iith.ac.in", position: "Overall Head" },
    { name: "Bharath S Hegde", email: "me24btech11010@iith.ac.in", position: "Overall Head" },
    { name: "Nithin Surya S", email: "ep24btech11018@iith.ac.in", position: "Overall Head" },
  ],
  torque: [
    { name: "Dhanush", email: "torque@iith.ac.in", position: "Overall Head" },
    { name: "Vishnu", email: "torque@iith.ac.in", position: "Overall Head" },
  ],
  glitch: [
    { name: "Vijay S. Badde", mobile: "+91 7036017739", position: "Overall Coordinator" },
    { name: "Devadath Sabarish", mobile: "+91 6364814117", position: "Game Dev Head" },
    { name: "Dhwanith M. Doddahundi", mobile: "+91 7619372999", position: "eSports Head" },
  ],
  mobius: [
    { name: "Harshit Hirpara", mobile: "+91 8320282691", position: "Overall Head" },
    { name: "Balaji B", mobile: "+91 9182338579", position: "Overall Head" },
    { name: "Krish Agarwal", mobile: "+91 9676731537", position: "Overall Head" },
  ],
  qet: [
    { name: "Samyak", mobile: "+91 9315093035", position: "Head & Mentor" },
    { name: "Jaideep", mobile: "+91 7022835787", position: "Head & Mentor" },
  ],
  blockspace: [
    { name: "Annant Pathak", mobile: "+91 6261162593", position: "Contact" },
    { name: "Tejaswi", mobile: "+91 8247274135", position: "Contact" },
    { name: "Blockspace", email: "blockspace@gymkhana.iith.ac.in", position: "Club email" },
  ],
  alpha: [],
};

function Scitech() {
  const [club, setClub] = useState("aero");
  const [desc, setDesc] = useState(clubs[0].desc);

  useEffect(() => {
    console.log({ club });
    let description = clubs.filter((el) => el.name === club);
    setDesc(description[0].desc);
  }, [club]);
  return (
    <div className="my-8">
      <div>
        <h2 className="lg:text-4xl text-3xl font-bold text-center lg:text-left">
          Technical Affairs Secretary
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
          <div className="bg-[#2F2F2F] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
            <h4 className=" text-p">Technical Affairs Secretary </h4>
            <h3 className="lg:text-2xl text-xl font-semibold">Akaanksh M Adarsh</h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">
                +91 8073170153
              </h4>
              <a
                href="mailto:tech.affairs.secretary@gymkhana.iith.ac.in"
                className=" lg:text-xl text-[1rem]"
              >
                tech.affairs.secretary@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
        </div>
        <h2 className="hidden lg:block lg:text-4xl text-4xl font-bold text-center lg:text-left mt-[2rem] mb-[1rem]">
          Clubs
        </h2>
        <div className="lg:grid lg:grid-cols-5 pt-4 hidden z-0 relative">
          <ul
            className={`lg:col-span-1 hidden text-2xl lg:flex lg:flex-col gap-3 [&>li]:cursor-pointer bg-[#2F2F2F] p-8 flex-col justify-center items-start rounded-xl`}
          >
            <li
              className={`px-4 py-2 rounded-md ${club === "aero" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("aero");
              }}
            >
              Aero Club
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "cepheid" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("cepheid");
              }}
            >
              Cepheid
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "elektronica" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("elektronica");
              }}
            >
              Elektronica
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "kludge" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("kludge");
              }}
            >
              Kludge
            </li>

            <li
              className={`px-4 py-2 rounded-md ${club === "infero" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("infero");
              }}
            >
              Infero
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "lambda" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("lambda");
              }}
            >
              Lambda
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "epoch" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("epoch");
              }}
            >
              Epoch
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "robotix" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("robotix");
              }}
            >
              Robotix
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "torque" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("torque");
              }}
            >
              Torque
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "glitch" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("glitch");
              }}
            >
              Glitch
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "mobius" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("mobius");
              }}
            >
              Möbius
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "qet" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("qet");
              }}
            >
              QET
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "blockspace" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("blockspace");
              }}
            >
              Blockspace
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "alpha" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("alpha");
              }}
            >
              Alpha
            </li>
          </ul>
          <div className="lg:col-span-4 col-span-6 grid grid-cols-6 gap-6 lg:gap-[2rem] items-center relative">
            <div className="lg:col-span-4 lg:text-[18px] col-span-full lg:row-span-full m-8">
              <p className="mt-8 justify-self-start">{desc}</p>
              <div className="grid grid-cols-2 gap-2">
                {coords[club]?.map((coord) => {
                  return (
                    <TCard
                      name={coord.name}
                      key={coord.name + coord.position}
                      mobile={coord.mobile ?? ""}
                      position={coord.position}
                      email={coord.email ?? ""}
                      activePosition="Coordinator"
                    />
                  );
                })}
              </div>
            </div>
            <div className="lg:col-span-2 pointer-events-none h-full col-span-full lg:row-span-full relative flex justify-center items-center">
              <img
                className="w-full object-contain"
                src={clubLogos[club]}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

function Card({ title, imgUrl, desc }) {
  return (
    <div className="">
      <div className="">
        <h2 className="">{title}</h2>
      </div>
      <div className="">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Scitech;
