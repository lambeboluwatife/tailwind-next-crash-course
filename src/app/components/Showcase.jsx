import Image from "next/image";
import image from "@/app/img/J2L64jYz_400x400.jpg";

const Showcase = () => {
  return (
    <section>
      <div className="flex flex-col-reverse p-6 container items-center justify-between align-center md:flex-row">
        <div className="p-6 flex-1">
          <h1 className="text-3xl text-black tracking-widest mb-4">I am</h1>
          <h2 className="text-6xl text-black tracking-wide">
            Lambe Boluwatife
          </h2>
          <p className="text-gray-600 text-justify mt-6 tracking-widest">
            I am a dedicated and versatile software developer with expertise in
            front-end and back-end development. I specialize in the MERN stack
            (MongoDB, Express, React, and Node.js). With a background in
            building and maintaining scalable web applications, I bring a
            balanced approach to software development that prioritizes
            performance, user experience, and maintainability.
          </p>
        </div>
        <div className="p-6 flex-1">
          <Image src={image} className="md:h-100 rounded-xl" alt="avatar" />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
