import { motion } from "framer-motion";

import {
  FaCross,
  FaHeart,
  FaUsers,
  FaSeedling,
  FaHeartbeat,
  FaRing,
  FaBible,
} from "react-icons/fa";

function MissionSection() {
  const mandates = [
    {
      icon: <FaBible />,
      title: "Communicating God's Mind",
      description:
        "Revealing the mind and will of God through the teaching of His Word, guiding people into truth, faith, and spiritual understanding.",
    },

    {
      icon: <FaCross />,
      title: "Winning Souls",
      description:
        "Spreading the message of salvation, making disciples, and leading people into a transforming relationship with Jesus Christ.",
    },

    {
      icon: <FaHeart />,
      title: "Living a Life of Purity",
      description:
        "Encouraging believers to live holy and purposeful lives, knowing that every person has a past but God gives everyone a new future.",
    },

    {
      icon: <FaUsers />,
      title: "Raising Godly Leaders",
      description:
        "Building a generation of strong believers equipped through prayer, the Word of God, and spiritual growth to impact their world.",
    },

    {
      icon: <FaSeedling />,
      title: "Discovering Purpose",
      description:
        "Helping individuals discover their God-given gifts, talents, and purpose while providing the support needed to fulfill their calling.",
    },

    {
      icon: <FaHeartbeat />,
      title: "Promoting Sound Health",
      description:
        "Encouraging a balanced life of spiritual, physical, emotional, and mental wellbeing for individuals and families.",
    },

    {
      icon: <FaRing />,
      title: "Building Godly Families",
      description:
        "Preparing individuals for Christ-centered marriages and strengthening families through biblical principles and love.",
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
          -top-32
          -right-32
          h-72
          w-72
          rounded-full
          bg-yellow-400/20
          blur-3xl
        "
      />

      <div
        className="
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
            Our Mission
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
            The Mandates of Purpose Driven Generation
          </h2>

          <p
            className="
              mt-6
              leading-8
              text-gray-600
              dark:text-gray-300
            "
          >
            Purpose Driven Generation exists to raise a people who know God,
            discover their purpose, and positively influence their generation
            through faith, love, and the power of God's Word.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
            grid
            gap-7
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {mandates.map((item, index) => (
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
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-7
                shadow-lg
                transition
                hover:border-yellow-400
                hover:shadow-2xl
                dark:border-gray-800
                dark:bg-slate-900
              "
            >
              {/* Icon */}

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
                  text-white
                  transition
                  group-hover:scale-110
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                  mt-6
                  text-xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4
                  leading-7
                  text-gray-600
                  dark:text-gray-300
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
