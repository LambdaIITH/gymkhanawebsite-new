import React from "react";
import TCard from "./teamCard";
// 2026-27 team heads ("Heads Announcement Media Council 2026-27", 28 May 2026; emails are the addresses that announcement was sent to).
// TODO: phone numbers not announced for most heads — left blank.
// TODO: no coordinator list has been announced yet — get it from the Media Secretary.
// TODO: Web Development team has no head announced (confirm the team still exists).
const teams = {
  PR: [
    ["Namitha Mannepalli", "", "ma24btech11015@iith.ac.in", "head"],
    ["Guhan Dhanasekharan", "+91 7010801963", "ep24btech11011@iith.ac.in", "head"],
  ],
  Multimedia: [
    ["Naren Karthik T", "+91 7200023407", "ic24btech11017@iith.ac.in", "head"],
    ["Viraj Rajpure", "", "ic24btech11020@iith.ac.in", "head"],
  ],
  Edit: [
    ["Darshan V", "+91 9972234708", "me24btech11021@iith.ac.in", "head"],
    ["Shanyu Pankaj Bihani", "", "bd24bdes11019@iith.ac.in", "head"],
  ],
  Design: [
    ["Nishika Verma", "", "md25mdes11007@iith.ac.in", "head"],
    ["Chinmayi K", "", "me24btech11015@iith.ac.in", "head"],
  ],
  ICT: [
    ["Sai Shanmukhi Angara", "", "es24btech11008@iith.ac.in", "head"],
    ["Hemika Dipa Chilla", "", "co24btech11005@iith.ac.in", "head"],
  ],
  Logistics: [
    ["Yeruva Venkata Vamsi Reddy", "", "ep24btech11034@iith.ac.in", "head"],
  ],
};

const teamTitles = {
  PR: "Public Relations & Networking Team",
  Multimedia: "Multimedia Team",
  Edit: "Editorial Team",
  Design: "Design Team",
  ICT: "Interview & Hosting Team",
  Logistics: "Logistics Team",
};

function Media() {
  return (
    <div className="my-8">
      <h2 className="lg:text-4xl text-3xl font-bold text-center  lg:text-left">
        Media & Public Relations Secretary
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
        <div className="bg-[#2F2F2F] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
          <h4 className=" text-p">Media & Public Relations Secretary</h4>
          <h3 className="lg:text-2xl text-xl font-semibold ">Jagan Bevara</h3>
          <address className="pt-3">
            <h4 className="lg:text-xl text-lg font-semibold">+91 7569789859</h4>
            <a
              href="mailto:media_secy@gymkhana.iith.ac.in"
              className=" lg:text-xl text-[1rem]"
            >
              media_secy@gymkhana.iith.ac.in
            </a>
          </address>
        </div>
      </div>
      <div className="mx-5">
        <h2 className="mt-9 lg:text-4xl text-3xl font-bold text-center  lg:text-left">
          Team
        </h2>
        {Object.keys(teams).map((key, index) => {
          const info = teams[key];
          return (
            <div key={key}>
              <h3 className="font-semibold text-3xl mt-5">{teamTitles[key]}</h3>
              <div className="flex flex-wrap gap-6 flex-col md:flex-row">
                {info.map((member) => {
                  return (
                    <TCard
                      key={member[0]}
                      name={member[0]}
                      mobile={member[1]}
                      email={member[2]}
                      position={member[3]}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Media;
