import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const galleryImages = import.meta.glob(
  "../assets/gallery/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

function GallerySection() {
  const images = Object.values(galleryImages);

  const [selectedImage, setSelectedImage] = useState(null);

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
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-20
          -top-20
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
          h-96
          w-96
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
        {/* Header */}

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
            Our Gallery
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
            Moments of Impact
          </h2>

          <p
            className="
              mt-6
              leading-8
              text-gray-600
              dark:text-gray-300
            "
          >
            Every picture tells a story of lives transformed through worship,
            evangelism, outreach, discipleship and God's amazing grace.
          </p>
        </motion.div>

        {/* Gallery Grid */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
              }}
              onClick={() => setSelectedImage(image)}
              className="
                group
                relative
                cursor-pointer
                overflow-hidden
                rounded-3xl
                shadow-xl
              "
            >
              <img
                src={image}
                loading="lazy"
                alt={`Gallery ${index + 1}`}
                className="
                  h-72
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Hover Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-black/40
                  opacity-0
                  transition
                  duration-300
                  group-hover:opacity-100
                "
              >
                <span
                  className="
                    rounded-full
                    bg-yellow-500
                    px-5
                    py-2
                    text-sm
                    font-semibold
                    text-black
                  "
                >
                  View Image
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            mt-16
            text-center
          "
        >
          <Link
            to="/gallery"
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
            View Full Gallery
          </Link>
        </motion.div>
      </div>

      {/* LIGHTBOX */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelectedImage(null)}
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/90
              p-5
            "
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute
                right-6
                top-6
                rounded-full
                bg-white
                p-3
                text-black
              "
            >
              <X size={26} />
            </button>

            <motion.img
              src={selectedImage}
              initial={{
                scale: 0.7,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.7,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                max-h-[90vh]
                max-w-[95vw]
                rounded-2xl
                shadow-2xl
              "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default GallerySection;
