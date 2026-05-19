import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <title>Portfolio</title>
      <div className="bg-white p-4 w-full h-screen font-serif">
        <h1 className="text-4xl  text-blue-600">My Portfolio</h1>
        <p className="text-lg text-blue-950">Welcome to my portfolio!</p>
        <h1 className="text-2xl font-bold text-blue-950">Nithesh Kumar R</h1>
        <p className="text-lg text-blue-950">Software Developer</p>
        <p className="text-lg text-blue-950">7745755721</p>
        <p className="text-lg text-blue-950">nitheshkumarr10@gmail.com</p>
        <Link
          href="https://www.linkedin.com/in/nitheshkumar-r-433658349/"
          className="text-lg text-blue-950"
          target="_blank"
        >
          LinkedIn: https://www.linkedin.com/in/nitheshkumar-r-433658349/
        </Link>
        <br />
        <Link
          href="https://github.com/nithesh1911"
          className="text-lg text-blue-950"
          target="_blank"
        >
          GitHub: https://github.com/nithesh1911
        </Link>
        <ul className="Skill pl-5">
          <h1 className="text-xl font-bold text-blue-950">Skills</h1>
          <li className="text-lg text-blue-950">JavaScript</li>
          <li className="text-lg text-blue-950">tailwind CSS</li>
          <li className="text-lg text-blue-950">HTML</li>
        </ul>
        <p className="text-lg text-blue-950">
          I am a passionate developer with experience in creating web
          applications.
        </p>

        <ul className="Projects pl-5">
          <h1 className="text-2xl font-bold text-blue-950">Projects</h1>
          <p className="text-lg text-blue-950">Here are some of my projects:</p>
          <li className="text-lg text-blue-950">
            Project A: A web application for managing tasks.
          </li>
          <li className="text-lg text-blue-950  ">
            Project C: An e-commerce website for selling products online.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
