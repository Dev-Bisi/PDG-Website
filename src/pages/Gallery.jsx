import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

// Automatically import every image inside src/assets/gallery
const galleryImages = import.meta.glob(
  "../assets/Gallery/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
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
    <section className="relative overflow-hidden bg-slate-50 py-20 dark:bg-[#0E1518] sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Our Gallery
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Moments of Impact
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
            Every picture tells a story of lives transformed through worship,
            evangelism, outreach, discipleship and God's amazing grace.
          </p>
        </motion.div>

        {/* Gallery */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer overflow-hidden rounded-3xl shadow-xl"
              onClick={() => setSelectedImage(image)}
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/gallery"
            className="inline-flex rounded-full bg-yellow-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-600"
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>

      {/* LIGHTBOX */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 rounded-full bg-white p-2"
            >
              <X size={28} />
            </button>

            <motion.img
              src={selectedImage}
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ duration: 0.3 }}
              className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default GallerySection;
