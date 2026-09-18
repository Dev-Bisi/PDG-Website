import { motion } from "framer-motion";
import {
  FaSchool,
  FaHandsHelping,
  FaHeart,
  FaGlobeAfrica,
} from "react-icons/fa";

function VisionSection() {
  const activities = [
    {
      icon: <FaGlobeAfrica />,
      title: "Social Media Evangelism",
      description:
        "Using WhatsApp and all our social media platforms to communicate the mysteries and truth of God's kingdom to the world.",
    },

    {
      icon: <FaSchool />,
      title: "School Outreach",
      description:
        "Visiting schools to inspire, guide, and help young people discover and fulfill their God-given purpose.",
    },

    {
      icon: <FaHandsHelping />,
      title: "Orphanage & Widows Support",
      description:
        "Extending love, hope, and practical support to orphanage homes and widows in our communities.",
    },

    {
      icon: <FaHeart />,
      title: "Hope To The Hopeless",
      description:
        "Communicating the mind and will of God to everyone that still has life in them and bringing hope through Christ.",
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
          top-20
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
          -bottom-32
          right-0
          h-80
          w-80
          rounded-full
          bg-green-500/10
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
        {/* Header */}

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
            max-w-4xl
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
            How We Achieve Our Mission
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
            Raising The Banner Of Truth
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-4xl
              leading-8
              text-gray-300
            "
          >
            We are called to make the mysteries of God known to men through
            evangelism, social media, schools, orphanages, widows, and every
            opportunity God gives us to impact lives.
          </p>
        </motion.div>

        {/* Activity Cards */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
          "
        >
          {activities.map((item, index) => (
            <motion.div
              key={item.title}
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
                y: -8,
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
                hover:bg-white/10
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-yellow-500
                  text-2xl
                  text-slate-900
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                  mt-6
                  text-2xl
                  font-bold
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4
                  leading-7
                  text-gray-300
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bible Verse */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-20
            rounded-3xl
            bg-yellow-500
            p-8
            text-center
            text-slate-900
            sm:p-10
          "
        >
          <h3
            className="
              text-2xl
              font-bold
              sm:text-3xl
            "
          >
            1 Thessalonians 5:9–11
          </h3>

          <p
            className="
              mx-auto
              mt-5
              max-w-4xl
              text-base
              leading-8
              sm:text-lg
            "
          >
            "For God did not appoint us to suffer wrath but to receive salvation
            through our Lord Jesus Christ. Therefore encourage one another and
            build each other up."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default VisionSection;
