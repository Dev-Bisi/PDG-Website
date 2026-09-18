import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

import img1 from "../assets/images/logo3.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/CEO.jpeg";

function EventsSection() {
  const events = [
    {
      image: img1,
      date: "15",
      month: "AUG",
      title: "PGD Annual Conference",
      location: "Oyo, Osun, Ogun State..... Nigeria",
      description:
        "Join hundreds of young believers for an unforgettable atmosphere of worship, prayer, revival, and purpose discovery.",
    },

    {
      image: img2,
      date: "28",
      month: "SEP",
      title: "School Outreach Program",
      location: "Ijebu Ode, Ogun State",
      description:
        "Taking the Gospel into schools through mentorship, inspiration, leadership training, and Christ-centered impact.",
    },

    {
      image: img3,
      date: "10",
      month: "OCT",
      title: "Orphanage Home Visit",
      location: "Every part of the Country",
      description:
        "Sharing God's love through care, support, encouragement, and practical gifts to children in orphanage homes.",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-16
        dark:bg-black
        sm:py-20
        lg:py-24
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          h-72
          w-72
          rounded-full
          bg-yellow-400/20
          blur-3xl
        "
      />

      {/* Main Container */}

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
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
          "
        >
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-yellow-500
            "
          >
            Upcoming Events
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
            Join Our Programs
          </h2>

          <p
            className="
              mt-6
              leading-8
              text-gray-600
              dark:text-gray-300
            "
          >
            Experience life-changing moments through our conferences,
            outreaches, missions, worship gatherings, and community impact
            programs.
          </p>
        </motion.div>

        {/* Event Cards */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{
                opacity: 0,
                y: 60,
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
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-xl
                dark:bg-slate-900
              "
            >
              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={event.image}
                  loading="lazy"
                  alt={event.title}
                  className="
                    h-64
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Date */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    rounded-2xl
                    bg-yellow-500
                    px-5
                    py-3
                    text-center
                    shadow-lg
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {event.date}
                  </h3>

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-slate-900
                    "
                  >
                    {event.month}
                  </p>
                </div>
              </div>

              {/* Content */}

              <div className="p-7">

                <h3
                  className="
                    text-xl
                    font-bold
                    text-slate-900
                    dark:text-white
                    sm:text-2xl
                  "
                >
                  {event.title}
                </h3>

                {/* Location */}

                <div
                  className="
                    mt-4
                    flex
                    items-start
                    gap-2
                    text-sm
                    text-yellow-600
                    dark:text-yellow-400
                  "
                >
                  <FaMapMarkerAlt className="mt-1 shrink-0" />

                  <span>
                    {event.location}
                  </span>
                </div>

                {/* Description */}

                <p
                  className="
                    mt-4
                    leading-7
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  {event.description}
                </p>

              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}

        <motion.div
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
            delay: 0.3,
          }}
          className="
            mt-16
            text-center
          "
        >
          <Link
            to="/events"
            className="
              inline-flex
              rounded-full
              bg-yellow-500
              px-8
              py-4
              font-semibold
              text-white
              shadow-lg
              transition
              hover:-translate-y-1
              hover:bg-yellow-600
            "
          >
            View All Events
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default EventsSection;