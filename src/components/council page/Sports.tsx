import React from "react";
import TCard from "./teamCard";

// 2026-27 sport coordinators. Columns: name, roll no, email, phone, position.
// TODO: coordinators were announced by first name only — get full names and emails.
//       ("Subasis" = Subhasis Basa: same phone as the Infocus head in the 2026-27 cultural heads announcement.)
// TODO: Squash and Weightlifting coordinators not announced.
const teams = {
  "Team": [
    ["Bharadwaj", "", "", "9346279511", "Athletics Coordinator"],
    ["Stalin", "", "", "9550060338", "Cricket Coordinator"],
    ["Mehul", "", "", "9943530486", "Football Coordinator"],
    ["Pritam", "", "", "8766590645", "Hockey Coordinator"],
    ["Tejas", "", "", "7558611359", "Tennis Coordinator"],
    ["Divyansh", "", "", "6283868657", "Table Tennis Coordinator"],
    ["Azaahan", "", "", "8637007433", "Badminton Coordinator"],
    ["Prasad", "", "", "8080987024", "Volleyball Coordinator"],
    ["Subhasis Basa", "", "ic24btech11022@iith.ac.in", "7978217289", "Basketball Coordinator"],
    ["Artangan", "", "", "7219021212", "Aquatics Coordinator"],
    ["Pooshan", "", "", "6290761740", "Chess Coordinator"],
    ["Jaswant", "", "", "9398345652", "Gym Coordinator"],
    ["Parth", "", "", "9270592970", "Indoor (Carrom/Snooker/Pool) Coordinator"],
    ["Humendro", "", "", "7477417164", "MMA / Boxing Coordinator"],
    ["Sasa", "", "", "8714048597", "Calisthenics Coordinator"],
    ["Faheem", "", "", "9745349088", "Ultimate Frisbee Coordinator"],
    ["Dhruv", "", "", "7588494786", "Skating Coordinator"],
  ]
};

function Sports() {
  return (
    <>
      <div className="my-8">
        <h2 className="lg:text-4xl text-3xl font-bold text-center  lg:text-left">
          Sports Secretary
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
          <div className="bg-[#2f2f2f] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
            <h4 className=" text-p">Sports Secretary </h4>
            <h3 className="lg:text-2xl text-xl font-semibold ">
              Shashank Javaji
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">
                +91 9347974643
              </h4>
              <a
                href="mailto:sports_secy@gymkhana.iith.ac.in"
                className=" lg:text-xl text-[1rem]"
              >
                sports_secy@gymkhana.iith.ac.in
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
              <div className="mt-2" key={key}>
                {/* <h3 className="font-semibold text-3xl mt-5">{key}</h3> */}
                <div className="flex flex-wrap [&>div]:flex-shrink-0   md:[&>div]:basis-[19.75rem] xs:[&>div]:basis-[4.75rem] flex-col md:flex-row gap-2">
                  {info.map((member, i) => {
                    return (
                      <TCard
                        key={i}
                        name={member[0]}
                        email={member[2]}
                        mobile={member[3] ? "+91 " + member[3] : ""}
                        position={member[4]}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Sports;
