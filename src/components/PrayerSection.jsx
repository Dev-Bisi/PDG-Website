import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPrayingHands,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function PrayerSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    prayer: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.prayer) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setLoading(true);

    const message = `
*Prayer Request*

Name: ${formData.name}

Email:
${formData.email}

Prayer Request:
${formData.prayer}
`;

    const phoneNumber = "2348161501420";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappURL, "_blank");

      setLoading(false);
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        prayer: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }, 800);
  };

  return (
    <section
      className="
relative
overflow-hidden
py-16
sm:py-20
lg:py-24
"
    >
      {/* Glow */}

      <div
        className="
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
absolute
right-0
bottom-0
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
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
mb-16
max-w-3xl
text-center
"
        >
          <p
            className="
flex
items-center
justify-center
gap-2
text-sm
font-semibold
uppercase
tracking-[0.25em]
text-yellow-500
"
          >
            <FaPrayingHands />
            Prayer & Contact
          </p>

          <h2
            className="
mt-5
text-3xl
font-bold
text-slate-900
dark:text-white
sm:text-4xl
lg:text-5xl
"
          >
            We Are Here To Pray With You
          </h2>

          <p
            className="
mt-6
leading-8
text-gray-600
dark:text-gray-300
"
          >
            Share your prayer requests with us. God still answers prayers.
          </p>

          {success && (
            <p
              className="
mt-6
font-semibold
text-green-600
"
            >
              ✔ Your prayer request has been sent successfully
            </p>
          )}
        </motion.div>

        <div
          className="
grid
gap-10
lg:grid-cols-2
lg:gap-16
"
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
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
            <h3
              className="
text-3xl
font-bold
text-slate-900
dark:text-white
"
            >
              Connect With Us
            </h3>

            <p
              className="
mt-5
leading-8
text-gray-600
dark:text-gray-300
"
            >
              We are sent as hope to the hopeless, encouraging lives through
              God's word, love, and prayers.
            </p>

            <a
              href="https://wa.me/2348161501420"
              target="_blank"
              rel="noreferrer"
              className="
mt-8
inline-flex
items-center
gap-3
rounded-full
bg-green-600
px-7
py-4
font-semibold
text-white
transition
hover:bg-green-700
"
            >
              <FaWhatsapp className="text-2xl" />
              Join WhatsApp Community
            </a>

            {/* Phone & Location */}

            <div className="mt-8 space-y-4">
              {/* Phone */}

              <a
                href="tel:+2348161501420"
                className="
flex
items-center
gap-4
rounded-2xl
border
border-gray-200
bg-white
p-4
transition
hover:border-yellow-500
dark:border-gray-700
dark:bg-slate-900
"
              >
                <div
                  className="
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-yellow-500
text-slate-900
"
                >
                  <FaPhoneAlt />
                </div>

                <div>
                  <p
                    className="
text-sm
text-gray-500
dark:text-gray-400
"
                  >
                    Call Us
                  </p>

                  <p
                    className="
font-semibold
text-slate-900
dark:text-white
"
                  >
                    +234 816 150 1420
                  </p>
                </div>
              </a>

              {/* Location */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=Ibadan+Oyo+State+Nigeria"
                target="_blank"
                rel="noreferrer"
                className="
flex
items-center
gap-4
rounded-2xl
border
border-gray-200
bg-white
p-4
transition
hover:border-yellow-500
dark:border-gray-700
dark:bg-slate-900
"
              >
                <div
                  className="
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-yellow-500
text-slate-900
"
                >
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p
                    className="
text-sm
text-gray-500
dark:text-gray-400
"
                  >
                    Location
                  </p>

                  <p
                    className="
font-semibold
text-slate-900
dark:text-white
"
                  >
                    Ibadan, Oyo State, Nigeria
                  </p>
                </div>
              </a>
            </div>

            <div
              className="
mt-10
flex
gap-5
"
            >
              {[FaFacebook, FaInstagram, FaYoutube].map((Icon, index) => (
                <div
                  key={index}
                  className="
flex
h-14
w-14
items-center
justify-center
rounded-full
bg-slate-900
text-white
transition
hover:bg-yellow-500
hover:text-slate-900
"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </motion.div>

          {/* FORM */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              x: 60,
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
            className="
rounded-3xl
border
border-gray-200
bg-white
p-6
shadow-2xl
dark:border-gray-700
dark:bg-slate-900
sm:p-10
"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="
mb-5
w-full
rounded-xl
border
px-5
py-4
outline-none
transition
focus:border-yellow-500
dark:bg-slate-800
dark:text-white
"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="
mb-5
w-full
rounded-xl
border
px-5
py-4
outline-none
transition
focus:border-yellow-500
dark:bg-slate-800
dark:text-white
"
            />

            <textarea
              rows="6"
              name="prayer"
              value={formData.prayer}
              onChange={handleChange}
              placeholder="Write your prayer request..."
              className="
mb-6
w-full
rounded-xl
border
px-5
py-4
outline-none
transition
focus:border-yellow-500
dark:bg-slate-800
dark:text-white
"
            />

            <button
              disabled={loading}
              className="
w-full
rounded-xl
bg-slate-900
py-4
font-semibold
text-white
transition
hover:bg-yellow-500
hover:text-slate-900
disabled:bg-gray-400
"
            >
              {loading ? "Sending..." : "Send Prayer Request"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default PrayerSection;
