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
                    As a senior developer with extensive industry experience, I have spent the last 5 years as a Senior Laravel Developer with total 8 years of experience in PHP as well as experience in React.js with 1 year of experience. Currently, I am working on NodeJS, Express.js and mongo DB project as backend along with Shopify and React.js as frontend on e-commerce website for my internship.   

I am experienced in deploying projects on AWS and have seamlessly worked on both Windows and Ubuntu operating systems.

My experience working with clients has honed my communication skills, and I am confident in my ability to participate in daily stand-up meetings and provide updates on project progress.

If you're looking for a developer who is both experienced and eager to expand their skill set, please don't hesitate to reach out on LinkedIn. I am always excited to explore new opportunities and contribute my expertise to new projects.
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