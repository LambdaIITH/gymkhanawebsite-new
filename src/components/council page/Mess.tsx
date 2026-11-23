import React from "react";
import TCard from "./teamCard";

// TODO: 2026-27 Inspection, Menu and Technical team lists not announced yet —
// ask the Mess Secretary. Format: "Team name": [[name, phone, email, roll no], ...]
const teams: Record<string, string[][]> = {};

function Mess() {
  return (
    <div className="my-8">
      <h2 className="lg:text-4xl text-3xl font-bold text-center  lg:text-left">
        Mess Secretary
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
        <div className="bg-[#2F2F2F] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl ">
          <h4 className=" text-p">Mess Secretary </h4>
          <h3 className="lg:text-2xl text-xl font-semibold ">Samith Prakash</h3>
          <address className="pt-3">
            <h4 className="lg:text-xl text-lg font-semibold">+91 6304858037</h4>
            <a
              href="mailto:mess_secya@gymkhana.iith.ac.in"
              className=" lg:text-xl text-[1rem]"
            >
              mess_secya@gymkhana.iith.ac.in
            </a>
          </address>
        </div>
      </div>
      {Object.keys(teams).length > 0 && (
      <div className="mx-5">
        <h2 className="mt-9 lg:text-4xl text-3xl font-bold text-center  lg:text-left">
          Team
        </h2>
        {Object.keys(teams).map((key, index) => {
          const info = teams[key];
          return (
            <div className="mt-2" key={key}>
              <h3 className="font-semibold text-3xl mt-5">{key}</h3>
              <div className="flex flex-wrap [&>div]:flex-shrink-0   md:[&>div]:basis-[19.75rem] xs:[&>div]:basis-[4.75rem] flex-col md:flex-row gap-2">
                {info.map((member) => {
                  return (
                    <TCard
                      key={member[0]}
                      name={member[0]}
                      mobile={"+91 " + member[1]}
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
      )}
    </div>
  );
}

export default Mess;
