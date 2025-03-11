import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Navbar from "@Components/Navbar"
const page = () => {
  return (
    <>
    <Navbar/>
    <div>
      <Head>
        <title>About Me</title>
      </Head>
      <main className="bg-gray-100 min-h-screen py-10 px-6 text-center">
        {/* Header Section */}
        <section className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
          <p className="text-lg text-gray-600 mt-2">Discover my journey, skills, and current role.</p>
        </section>

        {/* Current Role Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Current Role</h2>
          <p className="text-gray-700 mt-4">
            I am currently working as a <span className="font-medium text-indigo-600">Senior Web Developer</span> at <span className="font-medium text-indigo-600">Google</span>. I specialize in creating scalable and efficient web solutions to meet modern-day challenges.
          </p>
        </section>

        {/* Work Time Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Work Time</h2>
          <p className="text-gray-700 mt-4">
            I am available for collaboration and freelance opportunities between <span className="font-medium">9 AM to 5 PM PST</span>. Reach out to discuss potential projects or ideas.
          </p>
        </section>

        {/* Experience Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Experience & Expertise</h2>

          {/* Frontend Technologies */}
          <h3 className="text-xl font-semibold text-gray-700 mt-6">Frontend Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
            {[
              { name: 'HTML', img: '/html.webp' },
              { name: 'CSS', img: '/css.jpg' },
              { name: 'JavaScript', img: '/js.png' },
              { name: 'React', img: '/react.png' },
              { name: 'Vue.js', img: '/vue.webp' },
              { name: 'Anime.js', img: '/anime.png' },
            ].map((tech, index) => (
              <div key={index} className="relative group bg-gray-50 p-4 border border-gray-200 rounded-lg shadow transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                <Image src={tech.img} alt={tech.name} width={200} height={200} className="w-20 h-20 mx-auto rounded-lg" />
                <h4 className="text-lg font-medium text-gray-800 mt-2">{tech.name}</h4>
                <p className="text-gray-600 text-sm">Brief description of {tech.name}.</p>
              </div>
            ))}
          </div>

          {/* Backend Technologies */}
          <h3 className="text-xl font-semibold text-gray-700 mt-10">Backend Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
            {[
              { name: 'Node.js', img: '/nodejs.jpg' },
              { name: 'PHP', img: '/php.png' },
              { name: 'MongoDB', img: '/mongodb.png' },
              { name: 'NoSQL', img: '/nosql.png' },
              { name: 'SQL', img: '/sql.png' },
              { name: 'Next.js', img: '/nextjs.png' },
            ].map((tech, index) => (
              <div key={index} className="relative group bg-gray-50 p-4 border border-gray-200 rounded-lg shadow transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                <Image src={tech.img} alt={tech.name} width={200} height={200} className="w-20 h-20 mx-auto rounded-lg" />
                <h4 className="text-lg font-medium text-gray-800 mt-2">{tech.name}</h4>
                <p className="text-gray-600 text-sm">Brief description of {tech.name}.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Address Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Address</h2>
          <p className="text-gray-700 mt-4">
            Based in <span className="font-medium">Mountain View, California</span>. Feel free to connect for both online and in-person discussions.
          </p>
        </section>

        {/* Social Links Section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Connect with Me</h2>
          <div className="flex justify-center gap-6 mt-6">
            {[
              { name: 'Facebook', img: '/facebook.avif', link: '#' },
              { name: 'Instagram', img: '/instagram.webp', link: '#' },
              { name: 'LinkedIn', img: '/linkedin.webp', link: '#' },
              { name: 'GitHub', img: '/github.webp', link: '#' },
              { name: 'Docker', img: '/docker.png', link: '#' },
              { name: 'Pinterest', img: '/pinterest.png', link: '#' },
            ].map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="text-center transform transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                <Image src={social.img} alt={social.name} width={200} height={200} className="w-12 h-12 mx-auto" />
                <p className="text-gray-600 text-sm mt-2">{social.name}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
    </>
  )
}

export default page
