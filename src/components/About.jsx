function About() {
  return (
    <section
      style={{
        padding: "40px 20px",
        backgroundImage: 'url("https://media.istockphoto.com/id/2187991365/photo/financial-investment-and-success-market-stock-technology-currency-report-money-business.jpg?s=2048x2048&w=is&k=20&c=Y2ULtfZgsLAp_6SQw7k2uvzuF6M3k6nJvMKh0vautII=")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(138, 139, 143, 0.9)",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "700px",
          boxShadow: "0 4px 10px rgba(168, 231, 240, 0.2)"
        }}
      >
        <h2>Sobre Nosotros</h2>
        <p>
          Bienvenido a nuestra plataforma financiera. Nos especializamos en brindar
          información clara y herramientas útiles sobre finanzas e inversiones en
          criptomonedas. Nuestro objetivo es ofrecerte una experiencia ágil, educativa y
          segura para ayudarte a tomar mejores decisiones financieras. 
        </p>
        <p>
          Ya sea que estés dando tus primeros pasos en el mundo financiero o buscando
          profundizar tu estrategia de inversión, en nuestra plataforma vas a encontrar  
          desde información actualizada, herramientas prácticas, hasta análisis del 
          mercado de criptomonedas y finanzas personales.
        </p>
      </div>
    </section>
  );
}

export default About;