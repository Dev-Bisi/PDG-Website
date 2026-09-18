import { motion } from "framer-motion";
import CEO from "../assets/images/CEO.jpeg";
import {
  FaBullseye,
  FaHandsHelping,
  FaHeart,
  FaPrayingHands,
} from "react-icons/fa";

function About() {
  const values = [
    {
      icon: <FaPrayingHands />,
      title: "Prayer",
      text: "Prayer is the foundation of our relationship with God and the source of divine direction.",
    },
    {
      icon: <FaHeart />,
      title: "Love",
      text: "We demonstrate Christ's love through compassion, unity, and selfless service.",
    },
    {
      icon: <FaBullseye />,
      title: "Purpose",
      text: "We help individuals discover and fulfill God's purpose for their lives.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Service",
      text: "We are committed to serving God and humanity with excellence and integrity.",
    },
  ];

  const stats = [
    { number: "5K+", label: "Lives Impacted" },
    { number: "100+", label: "Outreach Programs" },
    { number: "50+", label: "Leaders Raised" },
    { number: "10+", label: "Years of Ministry" },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="bg-slate-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase text-yellow-400 font-semibold"
          >
            About Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-4xl font-bold mt-4"
          >
            Purpose-Driven Generation (PDG)
          </motion.h1>

          <p className="max-w-4xl mx-auto mt-2 text-gray-300 leading-8">
            Raising a generation committed to fulfilling God's purpose,
            transforming lives, and advancing His Kingdom through faith,
            discipleship, and service.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={CEO}
              loading="lazy"
              alt="About PDG"
              className="w-48 md:w-64 lg:w-100 h-auto rounded-3xl shadow-2xl mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-yellow-500 uppercase font-semibold">Our Story</p>

            <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">
              Raising Men and Women of Purpose
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Purpose-Driven Generation (PDG) is a Christ-centered ministry
              dedicated to helping people discover, embrace, and fulfill God's
              divine purpose for their lives.
            </p>

            <p className="text-gray-600 leading-8">
              Through worship, prayer, discipleship, mentorship, and community
              outreach, we are committed to building believers who live
              intentionally for Christ and positively impact society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            className="bg-white p-10 rounded-3xl shadow-lg"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8">
              To raise a generation of believers who are committed to fulfilling
              God's purpose and advancing His Kingdom through faith, excellence,
              and service.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-3xl shadow-lg"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8">
              To preach the Gospel, disciple believers, empower individuals to
              fulfill God's purpose, and transform communities through love and
              service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-yellow-500 uppercase font-semibold">
              Core Values
            </p>

            <h2 className="text-4xl font-bold text-slate-900 mt-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-3xl text-center hover:shadow-xl transition"
              >
                <div className="text-4xl text-yellow-500 mb-6 flex justify-center">
                  {value.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>

                <p className="text-gray-600 leading-7">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      {/* STATISTICS */}
      <section className="bg-slate-900 pb-8 pt-24 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-yellow-400 sm:text-5xl">
                {stat.number}
              </h2>

              <p className="mt-3 text-sm text-gray-300 sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
