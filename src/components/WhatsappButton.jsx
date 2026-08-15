import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/2348161501420"
      target="https://wa.me/2348161501420"
      className="fixed bottom-20 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}

export default WhatsappButton;