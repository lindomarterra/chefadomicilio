import { FaWhatsapp } from "react-icons/fa6"
import { Link } from "react-router-dom"

const WhatsappButton = () => {
  return (
    <Link
      style={{ backgroundColor: '#6cad63', zIndex: '100' }}
      className="text-white-50 p-2 rounded-5 "
      to="https://web.whatsapp.com/send?phone=5551 9694-4233"
      target="_blank"
    >
      <FaWhatsapp className="fs-3" />
    </Link>
  )
}

export default WhatsappButton