import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Esther A.",
      role: "Youth Member",
      message:
        "Purpose Driven Generation helped me discover my purpose in Christ and strengthened my prayer life.",
    },

    {
      name: "Samuel O.",
      role: "Evangelism Team",
      message:
        "Through PDG, I learned that no matter our past, God still has a glorious future for everyone.",
    },

    {
      name: "Grace T.",
      role: "Community Volunteer",
      message:
        "The outreach programs and support for widows and orphans have transformed many lives in our community.",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-900
        py-16
        text-white
        sm:py-20
        lg:py-24
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-72
          w-72
          rounded-full
          bg-yellow-400/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-80
          w-80
          rounded-full
          bg-green-400/10
          blur-3xl
        "
      />

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
              tracking-[0.25em]
              text-yellow-400
            "
          >
            Testimonials
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              sm:text-4xl
              lg:text-5xl
            "
          >
            Lives Transformed By God's Grace
          </h2>

          <p
            className="
              mt-6
              leading-8
              text-gray-300
            "
          >
            Hear from people whose lives have been impacted through the ministry
            and outreach programs of Purpose Driven Generation.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-3
          "
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
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
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition
                hover:border-yellow-400/50
              "
            >
              <div
                className="
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-yellow-500
                  text-slate-900
                "
              >
                <FaQuoteLeft
                  className="
                    text-xl
                  "
                />
              </div>

              <p
                className="
                  leading-8
                  text-gray-300
                "
              >
                "{item.message}"
              </p>

              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-4
                "
              >
                {/* Avatar Placeholder */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-yellow-500
                    font-bold
                    text-slate-900
                  "
                >
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      font-bold
                    "
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
                      text-yellow-400
                    "
                  >
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
