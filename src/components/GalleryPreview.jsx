import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import image1 from "../assets/gallery/gallery1.jpeg";
import image2 from "../assets/gallery/gallery2.jpeg";
import image3 from "../assets/gallery/gallery3.jpeg";
import image4 from "../assets/gallery/gallery4.jpeg";
import image5 from "../assets/gallery/gallery5.jpeg";
import image6 from "../assets/gallery/gallery6.jpeg";

const galleryImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

function GalleryPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 dark:bg-slate-950 sm:py-20 lg:py-24">

      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* ================= HEADER ================= */}

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
            duration: 0.7,
          }}
          className="mb-10 text-center sm:mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500">
            Our Memories
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Moments That Matter
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Take a glimpse into our memorable moments, impactful programs,
            worship, outreach, and community activities.
          </p>
        </motion.div>


        {/* ================= SCROLLING GALLERY ================= */}

        <div className="relative overflow-hidden">

          <motion.div
            className="flex w-max gap-4 sm:gap-5 lg:gap-6"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {/* FIRST SET */}

            {galleryImages.map((img, index) => (
              <motion.div
                key={`first-${index}`}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  h-56
                  w-72
                  shrink-0
                  overflow-hidden
                  rounded-2xl
                  bg-slate-200
                  shadow-lg
                  sm:h-64
                  sm:w-80
                  lg:h-72
                  lg:w-96
                "
              >
                <img
                  src={img}
                  alt={`Purpose Driven Generation gallery ${index + 1}`}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-110
                  "
                />
              </motion.div>
            ))}


            {/* SECOND SET
                Duplicate images for continuous scrolling
            */}

            {galleryImages.map((img, index) => (
              <motion.div
                key={`second-${index}`}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  h-56
                  w-72
                  shrink-0
                  overflow-hidden
                  rounded-2xl
                  bg-slate-200
                  shadow-lg
                  sm:h-64
                  sm:w-80
                  lg:h-72
                  lg:w-96
                "
              >
                <img
                  src={img}
                  alt={`Purpose Driven Generation gallery ${index + 1}`}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-110
                  "
                />
              </motion.div>
            ))}

          </motion.div>

        </div>


        {/* ================= SMALL TEXT ================= */}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Explore some of our memorable moments
          </p>
        </div>


        {/* ================= VIEW ALL BUTTON ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/gallery"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-yellow-500
              px-7
              py-3.5
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-yellow-600
              hover:shadow-xl
            "
          >
            View All Gallery

            <FaArrowRight
              className="
                text-sm
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>

      </div>

    </section>
  );
}

export default GalleryPreview;