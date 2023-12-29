import React from 'react';

export default function About() {
    return (
            <section id="about">
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Bhumika.
                        <br className="hidden lg:inline-block" />I love to build amazing websites.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    I am a senior developer with 8years of industry experience, having worked with PHP, Laravel, WordPress, Shopify, React.js, and Vue.js. I have experience in a variety of fields, including cloud computing, blockchain technology, application development, and web development. I recently worked on e-commerce website project that used Shopify and React.js as the frontend and Node.js, Express.js, and MongoDB as the backend.

My expertise lies in project deployment on AWS, and I have worked with both Windows and Ubuntu (Linux) operating systems with ease.

My communication skills have improved via working with customers, and I feel secure in my abilities to contribute to daily stand-up meetings and give updates on the status of projects.

Please don’t hesitate to approach out on LinkedIn or via email if you’re seeking for a developer who is keen to enhance their skill set and has experience. I'm constantly eager to take advantage of new chances and lend my experience to fresh endeavors.
                    </p>
                    <div className="flex justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Work With Me
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        See My Past Work
                        </a>
                    </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./assets/bhumika.jpg"
                    />
                    </div>
                </div>
            </section>
            );
}