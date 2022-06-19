import React from "react";
import image from './bernabeu_especial.jpg'
function Home() {
  return (
    <main>
      <img
         className="absolute object-cover w-full h-full"
        src={image}
        alt="Santiago Benrabau"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hello I am Gagandeep Singh</h1>
      </section>
    </main>
  );
}

export default Home;
