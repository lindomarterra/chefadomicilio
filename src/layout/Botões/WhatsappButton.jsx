import { FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import './whatsappButton.css'

const WhatsappButton = () => {
  return (
    <Link
      className="btn_whats"
      to="https://wa.me//555196944233?text=Olá! Tudo bem? Obrigada por entrar em contato."
      alt='Entrar em contato pelo whatsapp'
      target="_blank"
      title="Falar com Rose Klamt"
    >
      <FaWhatsapp />
    </Link>
  )
}

export default WhatsappButton
