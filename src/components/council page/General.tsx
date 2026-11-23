import { useState } from 'react';

// TODO: phone numbers for the UG Reps (not in their email signatures).
// Doctoral Representative: no nomination received in the 2026 elections (Dean Students results mail) — section hidden while empty.

const sections = [
  {
    title: 'President',
    members: [
      {
        role: 'President',
        name: 'NIKETH ACHANTA',
        phone: '6366015679',
        email: 'president@gymkhana.iith.ac.in',
      },
    ],
  },
  {
    title: 'General Secretaries',
    members: [
      {
        role: 'General Secretary 1',
        name: 'Bandi Sai Prasanna',
        phone: '8374384689',
        email: 'general_secy_1@gymkhana.iith.ac.in',
      },
      {
        role: 'General Secretary 2',
        name: 'Rohith Suresh',
        phone: '7538867625',
        email: 'general_secy_2@gymkhana.iith.ac.in',
      },
    ],
  },
  {
    title: 'Undergraduate Representatives',
    members: [
      {
        role: 'Undergraduate Representative 1',
        name: 'Aratrika Basu',
        phone: '',
        email: 'ug_rep@gymkhana.iith.ac.in',
      },
      {
        role: 'Undergraduate Representative 2',
        name: 'Budde Dhathvi Charan',
        phone: '',
        email: 'ug_rep@gymkhana.iith.ac.in',
      },
    ],
  },
  {
    title: 'Postgraduate Representative',
    members: [
      {
        role: 'Postgraduate Representative',
        name: 'Sambita Laha',
        phone: '9073705838',
        email: 'pg_rep@gymkhana.iith.ac.in',
      },
    ],
  },
  {
    title: 'Doctoral Representative',
    members: [
      // { role: 'Doctoral Representative', name: '', phone: '', email: 'phd_rep@gymkhana.iith.ac.in' },
    ],
  },
];

function MemberCard({ role, name, phone, email }) {
  return (
    <div className="bg-[#2F2F2F] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
      <h4 className="italic text-p">{role}</h4>
      <h3 className="lg:text-2xl text-xl font-semibold">{name}</h3>
      <address className="pt-3">
        {phone && (
          <h4 className="lg:text-xl text-lg font-semibold">{phone}</h4>
        )}
        <a href={`mailto:${email}`} className="lg:text-xl text-[1rem]">
          {email}
        </a>
      </address>
    </div>
  );
}

function General() {
  const [councilState, setCouncilState] = useState('general');
  return (
    <div className="my-8">
      {sections
        .filter((section) => section.members.length > 0)
        .map((section, i) => (
          <div key={section.title}>
            <h2
              className={`lg:text-4xl text-3xl font-bold text-center lg:text-left${
                i > 0 ? ' mt-8' : ''
              }`}
            >
              {section.title}
            </h2>
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
              {section.members.map((member) => (
                <MemberCard key={member.role} {...member} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default General;