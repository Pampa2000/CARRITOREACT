function Contacto() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
            <div style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                maxWidth: '600px',
                width: '100%'
            }}>
                <iframe
                    id="formmy-iframe"
                    title="formmy"
                    width="100%"
                    height="544"
                    src="https://www.formmy.app/embed/68323951b7f10b11805030af"
                    style={{ border: 'none' }}
                ></iframe>
            </div>
        </div>
    );
}

export default Contacto;
