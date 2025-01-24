import { FaWhatsapp } from "react-icons/fa6"
import { Link } from "react-router-dom"
import './whatsappButton.css'

const WhatsappButton = () => {
  return (
    <Link
      //style={{ backgroundColor: '#6cad63' }}
      className="btn_whats"
      to="https://web.whatsapp.com/send?phone=5551 9694-4233"
      target="_blank"
    >
      <FaWhatsapp />
    </Link>
  )
}

export default WhatsappButton