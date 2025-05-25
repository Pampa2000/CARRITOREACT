function Main() {
    return (
        <main
            style={{
                padding: "60px 20px",
                backgroundImage: 'url("https://media.istockphoto.com/id/2187991365/photo/financial-investment-and-success-market-stock-technology-currency-report-money-business.jpg?s=2048x2048&w=is&k=20&c=Y2ULtfZgsLAp_6SQw7k2uvzuF6M3k6nJvMKh0vautII=")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: 'white',
                textAlign: 'center',
                minHeight: '300px', // asegurás altura suficiente
                backgroundColor: "#333" // fallback
            }}
        >
            <h2 style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
                El mejor sitio web para ingresar al mundo de las finanzas
            </h2>
            <p style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                "Educación financiera para que te cierren los números"
            </p>
        </main>
    );
}

export default Main;