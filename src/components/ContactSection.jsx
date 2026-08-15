// import { motion } from "framer-motion";
// import {
//   FaWhatsapp,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
// } from "react-icons/fa";


// function ContactSection() {


// const contactInfo = [

// {
// icon:<FaWhatsapp />,
// title:"WhatsApp",
// text:"Chat with us instantly",
// link:"https://wa.me/2348161501420",
// },


// {
// icon:<FaPhoneAlt />,
// title:"Phone",
// text:"+234 816 150 1420",
// link:"tel:+2348161501420",
// },


// {
// icon:<FaEnvelope />,
// title:"Email",
// text:"info@pdgministry.com",
// link:"mailto:info@pdgministry.com",
// },


// {
// icon:<FaMapMarkerAlt />,
// title:"Location",
// text:"Ibadan, Oyo State, Nigeria",
// link:"#",
// },

// ];



// return (


// <section
// className="
// relative
// overflow-hidden
// py-16
// sm:py-20
// lg:py-24
// "
// >



// {/* Background Glow */}

// <div
// className="
// absolute
// -left-32
// top-10
// h-72
// w-72
// rounded-full
// bg-yellow-400/20
// blur-3xl
// "
// />


// <div
// className="
// absolute
// right-0
// bottom-0
// h-80
// w-80
// rounded-full
// bg-green-400/10
// blur-3xl
// "
// />





// <div
// className="
// relative
// mx-auto
// max-w-7xl
// px-5
// sm:px-8
// lg:px-12
// "
// >





// {/* Header */}

// <motion.div

// initial={{
// opacity:0,
// y:50
// }}

// whileInView={{
// opacity:1,
// y:0
// }}

// viewport={{
// once:true
// }}

// transition={{
// duration:.8
// }}

// className="
// mx-auto
// mb-16
// max-w-3xl
// text-center
// "

// >


// <p
// className="
// text-sm
// font-semibold
// uppercase
// tracking-[0.25em]
// text-yellow-500
// "
// >
// Contact Us
// </p>



// <h2
// className="
// mt-5
// text-3xl
// font-bold
// text-slate-900
// dark:text-white
// sm:text-4xl
// lg:text-5xl
// "
// >
// We Would Love To Hear From You
// </h2>



// <p
// className="
// mt-6
// leading-8
// text-gray-600
// dark:text-gray-300
// "
// >
// Have questions, need prayers, or want to connect with Purpose Driven Generation?
// Reach out to us today.
// </p>



// </motion.div>







// <div
// className="
// grid
// gap-10
// lg:grid-cols-2
// "
// >






// {/* Contact Cards */}


// <motion.div

// initial={{
// opacity:0,
// x:-50
// }}

// whileInView={{
// opacity:1,
// x:0
// }}

// viewport={{
// once:true
// }}

// transition={{
// duration:.8
// }}

// className="
// grid
// gap-5
// sm:grid-cols-2
// "

// >


// {
// contactInfo.map((item,index)=>(


// <a

// key={index}

// href={item.link}

// target="_blank"

// rel="noreferrer"

// className="
// rounded-3xl
// border
// border-gray-200
// bg-white
// p-6
// shadow-lg
// transition
// hover:-translate-y-2
// hover:border-yellow-500
// dark:border-gray-700
// dark:bg-slate-900
// "

// >


// <div
// className="
// mb-5
// flex
// h-14
// w-14
// items-center
// justify-center
// rounded-2xl
// bg-yellow-500
// text-xl
// text-slate-900
// "
// >

// {item.icon}

// </div>



// <h3
// className="
// text-xl
// font-bold
// text-slate-900
// dark:text-white
// "
// >
// {item.title}
// </h3>



// <p
// className="
// mt-2
// text-gray-600
// dark:text-gray-300
// "
// >
// {item.text}
// </p>



// </a>


// ))

// }


// </motion.div>









// {/* Contact Form */}


// <motion.form

// initial={{
// opacity:0,
// x:50
// }}

// whileInView={{
// opacity:1,
// x:0
// }}

// viewport={{
// once:true
// }}

// transition={{
// duration:.8
// }}

// className="
// rounded-3xl
// bg-slate-900
// p-6
// shadow-2xl
// sm:p-10
// "

// >


// <h3
// className="
// mb-6
// text-2xl
// font-bold
// text-white
// "
// >
// Send Us A Message
// </h3>



// <input

// type="text"

// placeholder="Your Name"

// className="
// mb-5
// w-full
// rounded-xl
// bg-white/10
// px-5
// py-4
// text-white
// outline-none
// placeholder:text-gray-400
// focus:ring-2
// focus:ring-yellow-500
// "

// />



// <input

// type="email"

// placeholder="Your Email"

// className="
// mb-5
// w-full
// rounded-xl
// bg-white/10
// px-5
// py-4
// text-white
// outline-none
// placeholder:text-gray-400
// focus:ring-2
// focus:ring-yellow-500
// "

// />




// <textarea

// rows="5"

// placeholder="Your Message"

// className="
// mb-6
// w-full
// rounded-xl
// bg-white/10
// px-5
// py-4
// text-white
// outline-none
// placeholder:text-gray-400
// focus:ring-2
// focus:ring-yellow-500
// "

// />





// <button

// className="
// w-full
// rounded-xl
// bg-yellow-500
// py-4
// font-semibold
// text-slate-900
// transition
// hover:bg-yellow-400
// "

// >

// Send Message

// </button>



// </motion.form>





// </div>



// </div>


// </section>


// );

// }


// export default ContactSection;