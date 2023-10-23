
import React from 'react';
import julProfile from '../../assets/images/pass3.jpeg';

const Features = [
  {
    id: 1,
    name: 'Samuel M.O',
    pic: julProfile,
    desc: 'I highly recommend Juliet Obi, she built a dynamic website for my organization in Lagos.',
  },
  {
    id: 2,
    name: 'Ijeoma',
    pic: julProfile,
    desc: 'Excellent job delivered on time and good quality product. I recommend Olayemi Johnson!',
  },
  {
    id: 3,
    name: 'Quadri',
    pic: julProfile,
    desc: 'Excellent job delivered on time and good quality product. I recommend Olayemi Johnson!',
  },
  {
    id: 4,
    name: 'Kelvin',
    pic: julProfile,
    desc: 'Excellent job delivered on time and good quality product. I recommend Olayemi Johnson!',
  },
];

function Team() {
  return (
    <div className="bg-secondaryColor my-20">
      <div className="py-20">
        <h1 className="font-medium text-5xl text-center text-white font-secondaryFont ">My Teams</h1>
        <div className="flex items-center justify-center pb-3 lg:pt-3">
          <div className="border-b-2 border-white w-10"></div>
          <span className="mx-2 font-medium text-xl lg:text-xl text-primaryColor">What I Know</span>
          <div className="border-b-2 border-white w-10"></div>
        </div>
      </div>
      <div className="flex justify-center gap-8 pb-40 px-8">
        {Features?.map((teamData) => (
          <div key={teamData.id} className="group rounded-xl bg-[#222222] w-72 lg:w-96 text-lg h-60 pt- lg:h-72 cursor-pointer hover:bg-primaryColor transition-transform ease-in-out duration-300">
            <div className="group-hover:scale-105 transition-transform ease-in-out duration-300">
              <img src={teamData.pic} alt="" className=" w-24 h-24 rounded-full text-primaryColor mx-auto" />
              <h2 className="font-medium text-4xl text-center text-white font-secondaryFont py-4">{teamData.name}</h2>
              <p className="text-center text-white text-sm lg:text-lg">{teamData.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;

