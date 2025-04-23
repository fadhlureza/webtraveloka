import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        padding: '20px',
        textAlign: 'center',
        color: 'white',
        }}>
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '30px',
            borderRadius: '15px',
            maxWidth: '700px',
            }}
        >
            <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            }}>
            Jelajahi Dunia Bersama Kami
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '25px' }}>
            Temukan penawaran terbaik untuk perjalanan dan petualanganmu di Asia dan sekitarnya.
            </p>
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: '#007BFF',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
            }}
            >
            Mulai Sekarang
            </motion.button>
        </motion.div>
        </div>
    );
}