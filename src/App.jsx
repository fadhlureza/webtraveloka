import { useState, useEffect } from 'react';
import Logo from './assets/Logo.webp';
import Background from './assets/bg-bali.jpg';
import Singapura from './assets/singapura.jpg';
import Malaysia from './assets/malaysia.jpg';
import Thailand from './assets/thailand.jpg';
import Korea from './assets/korea.jpg';
import Jepang from './assets/jepang.jpg';
import Vietnam from './assets/vietnam.jpg';
import HeroSection from './HeroSection';

export default function App() {
  const [selectedMenu, setSelectedMenu] = useState('');
  const [isPageVisible, setIsPageVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const destinations = [
    { name: 'Singapura', image: Singapura, accommodations: 644 },
    { name: 'Malaysia', image: Malaysia, accommodations: 8371 },
    { name: 'Thailand', image: Thailand, accommodations: 27449 },
    { name: 'Korea Selatan', image: Korea, accommodations: 15929 },
    { name: 'Jepang', image: Jepang, accommodations: 28141 },
    { name: 'Vietnam', image: Vietnam, accommodations: 960 },
  ];

  const renderDestinations = () => (
    <div
      style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: 'rgba(0, 123, 255, 0.1)',
        borderRadius: '10px',
        color: 'black',
      }}
    >
      <h2 style={{ textAlign: 'left', marginBottom: '25px', fontWeight: 'bold' }}>
        Temukan yang kamu suka di Asia hingga dunia
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
      }}>
        {destinations.map((dest, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
              height: '180px',
              backgroundImage: `url(${dest.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              textShadow: '1px 1px 3px rgba(0,0,0,0.7)'
            }}>
              <h3 style={{ margin: 0 }}>{dest.name}</h3>
              <p style={{ margin: 0 }}>{dest.accommodations.toLocaleString()} accommodations</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMenuContent = () => {
    const inputStyle = {
      marginLeft: '10px',
      padding: '5px',
      color: 'black',
      opacity: 0.5,
      borderRadius: '5px',
    };

    const containerStyle = {
      marginTop: '20px',
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    };

    const buttonStyle = {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '1rem',
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      alignSelf: 'center',
    };

    switch (selectedMenu) {
      case 'Tiket Pesawat':
        return (
          <div style={containerStyle}>
            <label>
              Dari:
              <input type="text" placeholder="Kota Asal" style={inputStyle} />
            </label>
            <label>
              Ke:
              <input type="text" placeholder="Kota Tujuan" style={inputStyle} />
            </label>
            <label>
              Tanggal Pergi:
              <input type="date" style={inputStyle} />
            </label>
            <label>
              Tanggal Pulang:
              <input type="date" style={inputStyle} />
            </label>
            <button style={buttonStyle}>Cari Tiket Pesawat</button>
          </div>
        );
      case 'Hotel':
        return (
          <div style={containerStyle}>
            <label>
              Lokasi:
              <input type="text" placeholder="Kota atau Nama Hotel" style={inputStyle} />
            </label>
            <label>
              Check-in:
              <input type="date" style={inputStyle} />
            </label>
            <label>
              Check-out:
              <input type="date" style={inputStyle} />
            </label>
            <button style={buttonStyle}>Cari Hotel</button>
          </div>
        );
      case 'Tiket Kereta Api':
        return (
          <div style={containerStyle}>
            <label>
              Dari:
              <input type="text" placeholder="Stasiun Asal" style={inputStyle} />
            </label>
            <label>
              Ke:
              <input type="text" placeholder="Stasiun Tujuan" style={inputStyle} />
            </label>
            <label>
              Tanggal Pergi:
              <input type="date" style={inputStyle} />
            </label>
            <button style={buttonStyle}>Cari Tiket Kereta Api</button>
          </div>
        );
      case 'Tiket Bus':
        return (
          <div style={containerStyle}>
            <label>
              Dari:
              <input type="text" placeholder="Terminal Asal" style={inputStyle} />
            </label>
            <label>
              Ke:
              <input type="text" placeholder="Terminal Tujuan" style={inputStyle} />
            </label>
            <label>
              Tanggal Pergi:
              <input type="date" style={inputStyle} />
            </label>
            <button style={buttonStyle}>Cari Tiket Bus</button>
          </div>
        );
      case 'Atraksi & Aktivitas':
        return (
          <div style={containerStyle}>
            <label>
              Lokasi:
              <input type="text" placeholder="Kota atau Tempat" style={inputStyle} />
            </label>
            <label>
              Tanggal:
              <input type="date" style={inputStyle} />
            </label>
            <button style={buttonStyle}>Cari Atraksi & Aktivitas</button>
          </div>
        );
      default:
        return (
          <div>
            <p style={{ color: 'white' }}>Pilih salah satu menu di atas untuk memulai.</p>
          </div>
        );
    }
  };

  const renderDiscounts = () => {
    const discounts = [
      { code: 'DISC10', description: 'Diskon 10% untuk semua tiket' },
      { code: 'HOTEL20', description: 'Diskon 20% untuk pemesanan hotel' },
      { code: 'TRAIN15', description: 'Diskon 15% untuk tiket kereta api' },
      { code: 'BUS5', description: 'Diskon 5% untuk tiket bus' },
      { code: 'ACTIVITY25', description: 'Diskon 25% untuk atraksi & aktivitas' },
    ];
  
    const handleCopy = (code) => {
      navigator.clipboard.writeText(code);
      alert(`Kode ${code} berhasil disalin!`);
    };
  
    return (
      <div
        style={{
          display: 'flex',
          gap: '15px',
          overflowX: 'auto',
          paddingBottom: '10px',
          scrollbarWidth: 'thin',
        }}
      >
        {discounts.map((discount, index) => (
          <div
            key={index}
            style={{
              minWidth: '250px',
              flexShrink: 0,
              padding: '15px',
              backgroundColor: 'rgba(0, 123, 255, 0.1)',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginLeft: '30px'
            }}
          >
            <span style={{ marginBottom: '10px' }}>{discount.description}</span>
            <button
              style={{
                padding: '5px 10px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: '#007BFF',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                alignSelf: 'flex-end',
              }}
              onClick={() => handleCopy(discount.code)}
            >
              Salin Kode
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`Background ${isPageVisible ? 'fade-in' : ''}`}
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        minHeight: '100vh',
        width: '100%',
        overflow: 'auto',
        opacity: isPageVisible ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
      }}
    >
      <div
        className="Header"
        style={{
          font: 'Sans',
          fontWeight: 'bold',
          color: isScrolled ? 'black' : 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: isScrolled ? 'white' : 'rgba(255, 255, 255, 0)',
          borderBottom: isScrolled ? '1px solid black' : 'none',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        <h1>
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: '170px',
              height: '70.5px',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </h1>
        <div
          className="HeaderMenu"
          style={{
            display: 'flex',
            gap: '20px',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: isScrolled ? 'black' : 'rgba(255, 255, 255, 0.5)',
          }}
        >
          {['Bahasa', 'Bantuan', 'Pesanan', 'Log In', 'Daftar'].map((menu, index) => (
            <span
              key={index}
              style={{
                cursor: 'pointer',
                padding: '5px 10px',
                borderRadius: '5px',
                color: isScrolled ? 'black' : 'white',
                transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {menu}
            </span>
          ))}
        </div>
      </div>
      <div
        className="MenuPilihan"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '100px',
        }}
      >
        {['Hotel', 'Tiket Pesawat', 'Tiket Kereta Api', 'Tiket Bus', 'Atraksi & Aktivitas'].map((menu, index) => (
          <button
            key={index}
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: selectedMenu === menu ? 'white' : '#007BFF',
              backgroundColor: selectedMenu === menu ? '#007BFF' : 'white',
              opacity: selectedMenu === menu ? 1 : 0.5,
              border: '1px solid #007BFF',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            onClick={() => setSelectedMenu(menu)}
          >
            {menu}
          </button>
        ))}
      </div>
      <div
        className="MenuContent"
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: 'rgba(0, 123, 255, 0.1)',
          borderRadius: '5px',
          width: '80%',
          margin: '20px auto',
        }}
      >
        {renderMenuContent()}
      </div>
      <div
        className="Discounts"
        style={{
          font: 'Sans',
          marginTop: '20px',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '5px',
          width: '100%',
          color: 'black',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '25px', marginTop: '10px', font: 'Sans', fontWeight: 'bold', fontSize: '1.5rem' }}>
          Diskon Tersedia
        </h2>
        {renderDiscounts()}
      </div>
      <div
        className="Destinations"
        style={{
          font: 'Sans',
          marginTop: '20px',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '5px',
          width: '100%',
          color: 'black',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '25px', marginTop: '10px', font: 'Sans', fontWeight: 'bold', fontSize: '1.5rem' }}>
          Destinasi Populer
        </h2>
        {renderDestinations()}
        <HeroSection />
      </div>
    </div>
  );
}
