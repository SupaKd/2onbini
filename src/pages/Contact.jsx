 function Contact() {
  return (
    <section className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Contacte-nous</h2>
        <p className="contact__description">
          Une question, une collaboration, une envie de Konbini ? Écris-nous via ce formulaire, on te répondra rapidement !
        </p>

        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <div className="contact__form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="contact__form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="contact__form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          <button type="submit" className="contact__button">Envoyer</button>
        </form>
      </div>
    </section>
  );
}
export default Contact;