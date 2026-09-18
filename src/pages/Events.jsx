import { motion } from "framer-motion";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

import prayer from "../assets/Events/event1.jpeg";
import school from "../assets/Events/event2.jpeg";
import orphanage from "../assets/Events/event3.jpeg";
import evangelism from "../assets/Events/event4.jpeg";

function Events() {
  const events = [
    {
      image: prayer,
      title: "PGD Annual Conference",
      location: "All part of the country",
      description:
        "A powerful gathering of young believers for worship, prayer, revival and spiritual growth as we seek God's presence together.",
    },

    {
      image: school,
      title: "School Outreach",
      location: "All Schools",
      description:
        "Reaching students with hope, mentorship, leadership and purpose discovery through the transforming power of Jesus Christ.",
    },

    {
      image: orphanage,
      title: "Orphanage Visits",
      location: "Children's Homes",
      description:
        "Showing God's love through practical care, encouragement, food support and fellowship with children.",
    },

    {
      image: evangelism,
      title: "Evangelism Programs",
      location: "Communities",
      description:
        "Taking the Gospel to communities, markets and streets while winning souls for Christ through evangelism.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-100 py-20 dark:bg-[#0E1518] sm:py-24 lg:py-28">
      {/* Background Glow */}

      <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .8,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Our Events
          </p>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Join Our Outreach Programs
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Every gathering is an opportunity to encounter God,
            impact lives, build faith and spread the Gospel of Jesus Christ.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          {events.map((event, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-3xl shadow-2xl"
            >

              {/* Background Image */}

              <img
              src={event.image}
              loading="lazy"
              alt={event.title}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-all
                duration-700
                blur-sm
                brightness-50
                group-hover:scale-105
                group-hover:blur-0
                group-hover:brightness-75
              "
            />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}

              <div className="relative z-10 flex h-[320px] flex-col justify-end p-6 sm:h-[340px] lg:h-[360px] lg:p-8">

                <motion.div
                  initial={{
                    opacity:0,
                    y:15,
                  }}
                  whileInView={{
                    opacity:1,
                    y:0,
                  }}
                  transition={{
                    delay:.2,
                  }}
                  className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-yellow-500/90 px-5 py-2 text-sm font-semibold text-slate-900 backdrop-blur-md"
                >
                  <FaMapMarkerAlt />

                  {event.location}
                </motion.div>

                <motion.h2
                  initial={{
                    opacity:0,
                    y:20,
                  }}
                  whileInView={{
                    opacity:1,
                    y:0,
                  }}
                  transition={{
                    delay:.3,
                  }}
                  className="text-2xl font-bold leading-tight text-white sm:text-3xl"
                >
                  {event.title}
                </motion.h2>

                <motion.p
                  initial={{
                    opacity:0,
                  }}
                  whileInView={{
                    opacity:1,
                  }}
                  transition={{
                    delay:.45,
                  }}
                  className="mt-5 leading-8 text-gray-200"
                >
                  {event.description}
                </motion.p>

                <motion.button
                  whileHover={{
                    scale:1.05,
                  }}
                  whileTap={{
                    scale:.96,
                  }}
                  className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-white/15 px-7 py-3 font-semibold text-white backdrop-blur-lg transition duration-300 hover:bg-yellow-500"
                >
                  Learn More

                  <FaArrowRight />
                </motion.button>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="mt-24 overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-16 text-center shadow-2xl sm:px-10"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Be Part of What God Is Doing
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
            Join us as we worship, pray, evangelize, disciple believers,
            and transform lives through the Gospel of Jesus Christ.
            There is a place for you in the Purpose Driven Generation family.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="mt-10 rounded-full bg-yellow-500 px-10 py-4 font-semibold text-slate-900 shadow-xl transition-all duration-300 hover:bg-white"
          >
            Register For Upcoming Events
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}

export default Events;