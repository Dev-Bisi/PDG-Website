import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import heroImage from "../assets/hero2.jpg";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black">

      {/* Main Container */}
      <div
        className="
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          items-center
          justify-center
          gap-12
          px-5
          py-20
          sm:px-8
          md:py-10
          lg:flex-row
          lg:gap-16
          lg:px-10
        "
      >

        {/* ================= TEXT SECTION ================= */}

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
            duration: 0.8,
          }}
          className="
            w-full
            text-center
            lg:w-1/2
            lg:text-left
          "
        >

          {/* Small Title */}

          <p
            className="
              mb-5
              text-sm
              font-bold
              uppercase
              tracking-widest
              text-yellow-500
            "
          >
            Purpose Driven Generation
          </p>


          {/* Heading */}

          <h1
            className="
              text-4xl
              font-extrabold
              leading-tight
              text-gray-900
              dark:text-white
              sm:text-5xl
              md:text-6xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            Raising{" "}

            <span className="text-yellow-500">
              Godly
            </span>

            <br />

            <span>
              & Purposeful
            </span>

            <br />

            <span>
              Generation
            </span>
          </h1>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-base
              leading-7
              text-gray-600
              dark:text-gray-300
              sm:text-lg
              lg:mx-0
            "
          >
            Communicating God's mind, raising godly leaders, winning souls,
            and empowering people to discover and fulfill their divine purpose.
          </p>


          {/* Buttons */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:justify-center
              lg:justify-start
            "
          >

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-yellow-500
                px-7
                py-3.5
                font-semibold
                text-white
                transition
                duration-300
                hover:bg-yellow-600
                hover:shadow-lg
              "
            >
              Join Our Community

              <FaArrowRight className="text-sm" />
            </Link>


            <Link
              to="/mission"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border-2
                border-yellow-500
                px-7
                py-3.5
                font-semibold
                text-yellow-600
                transition
                duration-300
                hover:bg-yellow-500
                hover:text-white
                dark:text-yellow-400
              "
            >
              Explore Mission
            </Link>

          </div>

        </motion.div>


        {/* ================= IMAGE SECTION ================= */}

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
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            w-full
            lg:w-1/2
          "
        >

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-md
            "
          >

            {/* Image */}

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                shadow-2xl
              "
            >

              <img
                src={heroImage}
                alt="Purpose Driven Generation"
                loading="lazy"
                className="
                  h-95
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                  sm:h-112.5
                  md:h-125
                  lg:h-137.5
                "
              />

            </div>


            {/* Small Floating Text */}

            <div
              className="
                absolute
                -bottom-5
                left-4
                rounded-xl
                bg-white
                px-5
                py-4
                shadow-xl
                dark:bg-gray-900
                sm:left-6
              "
            >

              <p
                className="
                  text-xs
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Our Focus
              </p>

              <p
                className="
                  font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                Faith & Purpose
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;