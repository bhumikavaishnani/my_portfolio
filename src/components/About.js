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
                    As a senior developer with 9 years of professional experience, I have a robust background in React.js, Node.js, Vue.js, PHP, Laravel, Express.js, TypeScript, and Shopify. My diverse expertise extends across multiple domains, including Hospitality, Real Estate, Media, Job Portal, and Ecommerce. I possess hands-on experience in various domains such as cloud computing, blockchain technology and web development. Proficient in project deployment on AWS, I seamlessly navigate both Windows and Ubuntu (Linux) operating systems. My interactions with customers have significantly enhanced my communication skills, enabling me to confidently contribute to daily stand-up meetings and provide project updates. Feel free to connect with me on LinkedIn or via email if you are seeking a developer eager to show their skill set with considerable experience. I am consistently enthusiastic about taking new opportunities and applying my expertise to fresh endeavors.
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