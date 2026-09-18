import PrayerSection from "../components/PrayerSection";

function Contact() {
  return (
    <div className="min-h-screen">
      <section className="bg-slate-900 text-white py-5 text-center">
        <h1 className="text-5xl font-bold">
          Contact Us
        </h1>

        <p className="mt-4 text-gray-300">
          We would love to hear from you.
        </p>
      </section>

      <PrayerSection />
    </div>
  );
}

export default Contact;