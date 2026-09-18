import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBible,
  FaCheckCircle,
  FaCalendarAlt,
  FaUsers,
  FaGlobe,
  FaArrowLeft,
} from "react-icons/fa";

import aboutImage from "../assets/images/img3.jpg";

/* ================= SCRIPTURES ================= */

const scriptures = [
  {
    reference: "John 15:16",
    text: "You did not choose me, but I chose you and appointed you so that you might go and bear fruit—fruit that will last—and so that whatever you ask in my name the Father will give you.",
  },

  {
    reference: "Mark 16:15-18",
    text: "He said to them, “Go into all the world and preach the gospel to all creation. Whoever believes and is baptized will be saved, but whoever does not believe will be condemned. And these signs will accompany those who believe: In my name they will drive out demons; they will speak in new tongues; they will pick up snakes with their hands; and when they drink deadly poison, it will not hurt them at all; they will place their hands on sick people, and they will get well.”",
  },

  {
    reference: "Luke 4:18",
    text: "The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free.",
  },

  {
    reference: "Jeremiah 1:1-5",
    text: "The words of Jeremiah son of Hilkiah, one of the priests at Anathoth in the territory of Benjamin. The word of the Lord came to me, saying, “Before I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.”",
  },

  {
    reference: "1 Peter 2:9",
    text: "But you are a chosen people, a royal priesthood, a holy nation, God’s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
  },

  {
    reference: "James 1:27",
    text: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted by the world.",
  },
];

/* ================= STATS ================= */

const stats = [
  {
    icon: <FaCalendarAlt />,
    value: "2021",
    title: "Founded",
  },

  {
    icon: <FaUsers />,
    value: "All",
    title: "Ages Welcome",
  },

  {
    icon: <FaGlobe />,
    value: "Both",
    title: "Male & Female",
  },
];

/* ================= COMPONENT ================= */

function AboutSection() {
  const [selectedScripture, setSelectedScripture] = useState(null);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        dark:bg-black
        sm:py-20
        lg:py-24
      "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-64
          w-64
          rounded-full
          bg-yellow-400/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-72
          w-72
          rounded-full
          bg-green-500/10
          blur-3xl
        "
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
          "
        >
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-yellow-500
            "
          >
            Get A Glance At PDG
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              text-slate-900
              dark:text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Purpose Driven Generation
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-7
              text-gray-600
              dark:text-gray-300
              sm:text-lg
            "
          >
            Purpose Driven Generation Platform is a divine mandate inspired by
            Scriptures to communicate God's mind, raise godly leaders, transform
            lives, and empower believers to fulfill their purpose.
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
          "
        >
          {/* ================= IMAGE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex justify-center"
          >
            <div
              className="
                relative
                w-full
                max-w-md
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  bg-yellow-400/20
                  blur-3xl
                "
              />

              <motion.img
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.3,
                }}
                src={aboutImage}
                alt="Purpose Driven Generation"
                className="
                  relative
                  w-full
                  rounded-3xl
                  object-cover
                  shadow-2xl
                "
              />
            </div>
          </motion.div>

          {/* =====================================================
              SCRIPTURE SECTION
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-xl
                dark:border-gray-700
                dark:bg-slate-900
                sm:p-8
              "
            >
              {/* =================================================
                  SCRIPTURE LIST
              ================================================= */}

              {!selectedScripture && (
                <>
                  {/* Header */}

                  <div
                    className="
                      mb-6
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <FaBible
                      className="
                        text-3xl
                        text-yellow-500
                      "
                    />

                    <div>
                      <h3
                        className="
                          text-xl
                          font-bold
                          text-slate-900
                          dark:text-white
                          sm:text-2xl
                        "
                      >
                        Foundation Scriptures
                      </h3>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-gray-500
                          dark:text-gray-400
                        "
                      >
                        Click a scripture to read
                      </p>
                    </div>
                  </div>

                  {/* Scripture Buttons */}

                  <div className="space-y-3">
                    {scriptures.map((scripture, index) => (
                      <motion.button
                        key={scripture.reference}
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: index * 0.08,
                        }}
                        whileHover={{
                          x: 5,
                        }}
                        onClick={() => setSelectedScripture(scripture)}
                        className="
                          flex
                          w-full
                          cursor-pointer
                          items-center
                          gap-3
                          rounded-xl
                          bg-slate-100
                          px-4
                          py-4
                          text-left
                          transition
                          duration-300
                          hover:bg-yellow-100
                          dark:bg-slate-800
                          dark:hover:bg-slate-700
                        "
                      >
                        <FaCheckCircle
                          className="
                            shrink-0
                            text-yellow-500
                          "
                        />

                        <span
                          className="
                            text-sm
                            font-semibold
                            text-gray-700
                            dark:text-gray-300
                            sm:text-base
                          "
                        >
                          {scripture.reference}
                        </span>

                        <span
                          className="
                            ml-auto
                            text-xs
                            text-gray-400
                          "
                        >
                          Read
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </>
              )}

              {/* =================================================
                  SCRIPTURE READING VIEW
              ================================================= */}

              {selectedScripture && (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  {/* Back Button */}

                  <button
                    onClick={() => setSelectedScripture(null)}
                    className="
                      mb-6
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-gray-300
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-gray-700
                      transition
                      hover:border-yellow-500
                      hover:bg-yellow-500
                      hover:text-white
                      dark:border-gray-600
                      dark:text-gray-300
                    "
                  >
                    <FaArrowLeft />
                    Back to Scriptures
                  </button>

                  {/* Scripture Icon */}

                  <div
                    className="
                      mb-6
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-yellow-500
                      text-2xl
                      text-black
                    "
                  >
                    <FaBible />
                  </div>

                  {/* Scripture Reference */}

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-slate-900
                      dark:text-white
                      sm:text-3xl
                    "
                  >
                    {selectedScripture.reference}
                  </h3>

                  {/* Scripture Text */}

                  <div
                    className="
                      mt-6
                      rounded-2xl
                      bg-slate-100
                      p-5
                      dark:bg-slate-800
                      sm:p-6
                    "
                  >
                    <p
                      className="
                        text-base
                        leading-8
                        text-gray-700
                        dark:text-gray-300
                        sm:text-lg
                      "
                    >
                      {selectedScripture.text}
                    </p>
                  </div>

                  {/* Back Button At Bottom */}

                  <button
                    onClick={() => setSelectedScripture(null)}
                    className="
                      mt-6
                      w-full
                      rounded-xl
                      bg-yellow-500
                      px-5
                      py-3
                      font-semibold
                      text-white
                      transition
                      hover:bg-yellow-600
                    "
                  >
                    Back to Foundation Scriptures
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* ================= STATS ================= */}

        <div
          className="
            mt-16
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                rounded-3xl
                bg-slate-900
                p-6
                text-center
                text-white
                shadow-xl
              "
            >
              <div
                className="
                  mx-auto
                  mb-4
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-yellow-500
                  text-xl
                  text-black
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                  text-3xl
                  font-bold
                  text-yellow-400
                "
              >
                {item.value}
              </h3>

              <p className="mt-2 text-gray-300">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
