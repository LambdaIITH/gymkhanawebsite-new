import { useState, useEffect } from "react";
import TCard from "./teamCard";

interface club {
  name: string;
  desc: string;
}
const clubs: club[] = [
  {
    name: "infocus",
    desc: "The photography club of IIT Hyderabad",
  },
  {
    name: "btl",
    desc: "The behind the lens club exists to Foster the appreciation and study of film making. The purpose of our club is to give students the opportunity to approach all aspects of film and film making in a serious, meaningful, and in-depth manner.",
  },
  {
    name: "vibes",
    desc: 'Welcome to VIBES - The music club of IITH! We conduct regular jamming sessions, guitar sessions, vocal sessions etc. to encourage learning new things and having fun. We want to bring out the musician in everyone. Join us if you love to sing, play or write music! Vibes was the winner of the "Best Cultural Club" title in the year 2017-18!',
  },
  {
    name: "shuffle",
    desc: "IIT Hyderabad’s dance club is a lively and vigorous student organization focusing on promoting dance culture in the campus. It offers opportunity for the students to express themselves in different dance categories such as classical or modern and street dances such as hip-hop and break-dancing. A club arranges for weekend classes and dance-offs as well as competitions to create the spirit of teamwork and innovative ideas amongst the dancers.",
  },
  {
    name: "gesture",
    desc: "The Official Art Club of IIT Hyderabad, is a space to create, design and discover oneself in the traditional and modern realms of art and craft. Every year, our team comprises of like-minded people who bring out the best of creativity in themselves for the ultimate betterment of the Gesture. We are deeply passionate about art, and highly encourage people to join the group for any sessions or collaborations. Gesture is a strong platform for artistic talent and exploration.",
  },
  {
    name: "rang",
    desc: "Rang De Manch is the official drama club of IITH which works under the cultural council of IITH. It is a platform where the students can show their extra curricular activities related with acting. It presents a bunch of amazing events round the year from stage and street performances to mimes and comedy acts that entertain the junta thoroughly. The club aims to entertain people and along with that spread messages for the betterment of the society through mimes,street plays etc. Rang De Manch is a home to all the lovers of acting. A plethora of talented individuals who join every year to take forward IITH's rich legacy in dramatics. From writing plays, to direction and performance members get to learn the skills required for each of these jobs.",
  },
  {
    name: "otaku",
    desc: "Otaku is the anime and manga club of IIT Hyderabad. It brings together anime enthusiasts to discuss, watch, and celebrate Japanese animation and pop culture.",
  },
  {
    name: "fashion",
    desc: "Silhouettes, the Fashion Club of IIT Hyderabad, is dedicated to exploring and showcasing fashion trends, organizing fashion shows, and encouraging students to express their style.",
  },
];

const clubLogos = {
  infocus: "/images/councils/infocus.png",
  vibes:
    "https://res.cloudinary.com/dwsverefw/image/upload/c_fit,h_208,q_29,w_318/v1671964501/media%20council/cultural%20clubs/vibes_nr2iou.png",
  btl: "/images/councils/btl.png",
  rang: "/images/councils/rdm.jpg",
  shuffle: "/images/councils/shuffle.png",
  gesture: "/images/councils/gesture.jpg",
  otaku: "/images/councils/otaku.png",
  fashion: "", // TODO: Silhouettes logo not found in mail
};

// 2026-27 club heads ("Announcement of Heads for Cultural and Literary Clubs | Tenure 2026–27", 15 May 2026).
// Personal emails: matched by display name in Gmail; blank = no confident match found.
// TODO: P Siddartha phone — heads list says 95501 28565, IICM Cup Captains mail says 9550238565; confirm.
const coords: Record<string, { name: string; email: string; mobile?: string; position: string }[]> = {
  infocus: [
    { name: "Subhasis Basa", email: "ic24btech11022@iith.ac.in", mobile: "+91 7978217289", position: "Head" },
    { name: "Dhiraj Baid", email: "ic24btech11006@iith.ac.in", mobile: "+91 7680862773", position: "Head" },
    { name: "Neel Patel", email: "ms24btech11024@iith.ac.in", mobile: "+91 9426483992", position: "Head" },
  ],
  btl: [
    { name: "Naren Karthik T", email: "ic24btech11017@iith.ac.in", mobile: "+91 7200023407", position: "Head" },
    { name: "Prasang Das", email: "ep24btech11020@iith.ac.in", mobile: "+91 8259975040", position: "Head" },
  ],
  vibes: [
    { name: "Kshiteesh S", email: "ep24btech11023@iith.ac.in", mobile: "+91 7624813999", position: "Head" },
    { name: "Krish J", email: "bd25bdes11019@iith.ac.in", mobile: "+91 9740227776", position: "Head" },
  ],
  fashion: [
    { name: "Ruchita Lunkad", email: "bd24bdes11007@iith.ac.in", mobile: "+91 9765788808", position: "Head" },
    { name: "Ankush Roy", email: "bd25bdes11007@iith.ac.in", mobile: "+91 8240963806", position: "Head" },
  ],
  shuffle: [
    { name: "Kadali Tejaswi", email: "", mobile: "+91 6303296068", position: "Overall Coordinator" },
    { name: "Adhvaith Vemula", email: "", mobile: "+91 7897747774", position: "Head" },
    { name: "P Siddartha", email: "", mobile: "+91 9550128565", position: "Head" },
    { name: "Maanya Sri", email: "", mobile: "+91 8074087590", position: "Head" },
    { name: "Shreedhanvi Yadlapally", email: "ai24btech11036@iith.ac.in", mobile: "+91 8332873230", position: "Head (Taal Tarang)" },
    { name: "Megha M", email: "", mobile: "+91 9207235132", position: "Head (Taal Tarang)" },
  ],
  gesture: [
    { name: "Mihika Sahasrabuddhe", email: "ic24btech11014@iith.ac.in", mobile: "+91 9606127141", position: "Head" },
    { name: "Sathur Stephen Asher", email: "", mobile: "+91 7815856770", position: "Head" },
  ],
  otaku: [
    { name: "Tanish Verma", email: "", mobile: "+91 6303728196", position: "Head" },
    { name: "Harsha Vardhan", email: "", mobile: "+91 8341577728", position: "Head" },
  ],
  rang: [
    { name: "Navin Joshi", email: "ms23btech11019@iith.ac.in", mobile: "+91 9340256954", position: "Overall Coordinator" },
    { name: "Aditya Deshmukh", email: "", mobile: "+91 8830981635", position: "Head" },
    { name: "Gunmay Singla", email: "", mobile: "+91 9872927539", position: "Head" },
    { name: "Ashutosh Meena", email: "", mobile: "+91 9588270315", position: "Head (Irshaad)" },
  ],
};

function Cultural() {
  const [club, setClub] = useState("infocus");
  const [desc, setDesc] = useState(clubs[0].desc);

  useEffect(() => {
    console.log({ club });
    let description = clubs.filter((el) => el.name === club);
    setDesc(description[0].desc);
  }, [club]);

  return (
    <div className="my-8 col-span-6 w-full">
      <div>
        <h2 className="lg:text-4xl text-3xl font-bold text-center lg:text-left">
          Cultural and Literary Secretary
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
          <div className="bg-[#2F2F2F] px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
            <h4 className="italic ">Cultural & Literary Secretary</h4>
            <h3 className="lg:text-2xl text-xl font-semibold ">Samarth Gupta</h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">
                +91 7006974318
              </h4>
              <a
                href="mailto:cult_secy@gymkhana.iith.ac.in"
                className="lg:text-xl text-[1rem]"
              >
                cult_secy@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
        </div>
      </div>
      <h2 className="lg:text-2xl text-4xl font-bold text-center lg:text-left mt-[2rem] mb-[1rem]">
        Cultural Clubs
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 pt-4">
        <ul
          className={`lg:col-span-1 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible text-base lg:text-2xl gap-2 lg:gap-3 [&>li]:cursor-pointer [&>li]:shrink-0 [&>li]:whitespace-nowrap bg-[#2F2F2F] p-3 lg:p-8 justify-start lg:justify-center items-center lg:items-start rounded-xl`}
        >
          <li
            className={`px-4 py-2 rounded-md ${club === "infocus" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
            onClick={() => {
              setClub("infocus");
            }}
          >
            Infocus
          </li>
          <li
            className={`px-4 py-2 rounded-md ${club === "vibes" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
            onClick={() => {
              setClub("vibes");
            }}
          >
            Vibes
          </li>
          <li
            className={`px-4 py-2 rounded-md ${club === "rang" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
            onClick={() => {
              setClub("rang");
            }}
          >
            Rang De Manch
          </li>
          <li
            className={`px-4 py-2 rounded-md ${club === "btl" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
            onClick={() => {
              setClub("btl");
            }}
          >
            Behind The Lens
          </li>
          <li
            className={`px-4 py-2 rounded-md ${club === "shuffle" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
            onClick={() => {
              setClub("shuffle");
            }}
          >
            Shuffle
          </li>
          <li
            className={`px-4 py-2 rounded-md ${club === "gesture" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
            onClick={() => {
              setClub("gesture");
            }}
          >
            Gesture
          </li>
          <li
            className={`px-4 py-2 rounded-md ${club === "otaku" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
            onClick={() => {
              setClub("otaku");
            }}
          >
            Otaku
          </li>
          <li
            className={`px-4 py-2 rounded-md ${club === "fashion" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
            onClick={() => {
              setClub("fashion");
            }}
          >
            Silhouettes
          </li>
        </ul>
        <div
          className={`lg:col-span-4 col-span-6 grid grid-cols-6 gap-2 lg:gap-[2rem] items-center relative z-0`}
        >
          <div className="lg:col-span-4 lg:text-[18px] col-span-full lg:row-span-full m-2 lg:m-8">
            <p className="mt-4 lg:mt-8 justify-self-start">{desc}</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
              {coords[club]?.map((coord, index) => {
                return (
                  <TCard
                    key={index}
                    name={coord.name}
                    mobile={coord.mobile ?? ""}
                    position={coord.position}
                    email={coord.email}
                    activePosition="Coordinator"
                  />
                );
              })}
            </div>
          </div>
          <div className="order-first lg:order-none pt-6 lg:pt-0 lg:col-span-2 pointer-events-none h-full col-span-full lg:row-span-full relative flex justify-center items-center">
            <img
              className="w-full max-h-48 lg:max-h-none object-contain"
              src={clubLogos[club]}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cultural;
