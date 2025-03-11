"use client"
import Head from 'next/head';
import { useEffect, useState } from 'react';
import anime from 'animejs';
import Navbar from "@/Components/Navbar";
// import TypingAnimationSection from '@/Components/TypingAnimationSection';
// import Typed from 'react-typed';
import Image from 'next/image';
import { ReactTyped } from "react-typed";
  
const skills = [
  { name: 'Web Development', image: '/webdevelopment.jpg' },
  { name: 'Content Writing', image: '/contentwrite.webp' },
  { name: 'Web Designing', image: '/webdesigning.png' },
  { name: 'Graphic Designing', image: '/graphicdesigning.jpg' },
  { name: 'Programming', image: '/programming.jpg' },
];
export default function Home(){
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
      }, 3000); // Match this to the typing animation duration
      return () => clearInterval(interval);
    }, []);


  useEffect(() => {
    // Animation for server data
    anime({
      targets: '.server-animation',
      translateY: [-10, 10],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
    });

    anime({
      targets: '.data-packet',
      translateX: [0, 200],
      opacity: [1, 0],
      loop: true,
      delay: anime.stagger(200),
      easing: 'easeInOutQuad',
    });
  }, []);

  return (
    <>
    <Navbar/>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main className="font-inter bg-gray-100">
        {/* <TypingAnimationSection/> */}
        {/* 1st Section */}
        <section className='flex flex-wrap lg:flex-nowrap w-full max-w-6xl mx-auto h-[85vh]'>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h1>

    <ReactTyped
      strings={[
        "Web Development",
        "Content Writing",
        "Web Designing",
        "Graphic Designing",
        "Programming",
      ]}
      typeSpeed={50}
      backSpeed={30}
      loop
      className="text-2xl font-medium text-purple-700"
    >
    </ReactTyped>

            <p className="mt-4 text-gray-600 text-lg">
              Explore my diverse skillset tailored to meet modern challenges and create impactful solutions.
            </p>
          </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
            <div className="relative w-full max-w-sm h-64 lg:h-80">
              {skills.map((skill, index) => (
                <Image
                  key={index}
                  src={skill.image}
                  alt={skill.name}
                  width={300} 
                  height={300}
                  className={`absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-1000 ${
                    index === currentSkillIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 2nd Section: Testimonials */}
        <section className="py-10 bg-gray-100">
          <h2 className="text-3xl font-bold text-center text-gray-800">Testimonials</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Graphic Designer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Web Developer</p>
            </div>
          </div>
        </section>

        {/* 3rd Section: Projects */}
        <section className="py-10 bg-white">
          <h2 className="text-3xl font-bold text-center text-gray-800">Projects</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {[
              { name: "Racing Game Site", img: "/carracing.avif" },
              { name: "Movies Site", img: "/movies.webp" },
              { name: "Music Site", img: "/musicsite.png" },
              { name: "Gaming Site", img: "/gamingsite.jpg" },
              { name: "AI Voiceover Site", img: "/aivoiceover.avif" },
              { name: "Shopping Store", img: "/onlinestores.avif" },
            ].map((project, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg transform transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                <Image src={project.img} alt={project.name} width={300} height={300} className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-gray-800 mt-2">{project.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* 4th Section: Animation */}
        <section className="py-10 bg-gray-100 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center text-gray-800">Data Animation</h2>
          <div className="mt-6 flex justify-center space-x-4 relative w-[50vw]">
            <div className="server-animation w-32 h-32 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold">
              Server
            </div>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="data-packet w-6 h-6 bg-green-500 rounded-full absolute top-1/2 left-10 transform -translate-y-1/2"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-gray-800 text-white text-center">
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
