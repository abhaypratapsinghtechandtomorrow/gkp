import React, { useState, useEffect, useRef } from 'react';
import { IconMotorbike, IconFileDescription, IconUserHeart, IconChevronLeft, IconChevronRight, IconShoppingCartPlus } from '@tabler/icons-react';
import { tests } from '../data/mockData';
import { useCart } from '../context/CartContext';
import './Hero.css';

const slides = [
  {
    id: 1,
    title: "CXO SUPER SPECIALITY HEALTH\nSCREENING PACKAGE",
    testsCount: 317,
    price: "7999",
    bgImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    label: "PREMIUM HEALTHCARE"
  },
  {
    id: 2,
    title: "COMPREHENSIVE FULL BODY\nCHECKUP WITH VITAMINS",
    testsCount: 85,
    price: "1999",
    bgImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    label: "FLAT 60% OFF"
  },
  {
    id: 3,
    title: "SENIOR CITIZEN WELLNESS\nADVANCED PACKAGE",
    testsCount: 110,
    price: "2499",
    bgImage: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    label: "SPECIAL OFFER"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const { addToCart, setIsCartOpen } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchTerm.trim().length > 1) {
      const query = searchTerm.toLowerCase();
      const results = tests.filter(test => {
        const matchName = test.name.toLowerCase().includes(query);
        const matchDesc = test.description.toLowerCase().includes(query);
        const matchTags = test.tags && test.tags.some(tag => tag.toLowerCase().includes(query));
        return matchName || matchDesc || matchTags;
      });
      setSearchResults(results.slice(0, 5)); // Limit to top 5 results
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleBookSearchItem = (test) => {
    addToCart({ ...test, type: 'test' });
    setIsCartOpen(true);
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <section className="hero">
      <div className="hero-slider-wrapper">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div 
              className="hero-background" 
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            ></div>
            <div className="container hero-container">
              <div className="hero-content">
                <div className="hero-text-block">
                  <span className="hero-label">{slide.label}</span>
                  <h1 className="hero-title">
                    {slide.title.split('\n').map((line, i) => (
                      <React.Fragment key={i}>{line}<br/></React.Fragment>
                    ))}
                  </h1>
                  <div className="hero-price-block">
                    <div className="tests-count">
                      <span className="count-label">TOTAL TESTS</span>
                      <span className="count-value">{slide.testsCount}</span>
                    </div>
                    <div className="price-divider"></div>
                    <div className="price-info">
                      <span className="price-label">AT JUST</span>
                      <span className="price-value">₹{slide.price}</span>
                    </div>
                    <button className="book-now-hero-btn">Book Now &raquo;</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-control prev" onClick={prevSlide} aria-label="Previous slide">
        <IconChevronLeft size={28} />
      </button>
      <button className="slider-control next" onClick={nextSlide} aria-label="Next slide">
        <IconChevronRight size={28} />
      </button>

      <div className="slider-pagination">
        {slides.map((_, index) => (
          <button 
            key={index} 
            className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      
      <div className="hero-search-area animate-fade-in-up delay-300" ref={searchRef}>
        <div className="search-pill-wrapper">
          <div className="search-pill">
            <input 
              type="text" 
              placeholder="Find your Package/Test/Scans or Body Part (e.g., Heart)" 
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn search-btn-orange">Search</button>
          </div>
          
          {searchResults.length > 0 && (
            <div className="search-dropdown">
              <div className="search-dropdown-header">Matching Tests</div>
              {searchResults.map(test => (
                <div key={test.id} className="search-dropdown-item">
                  <div className="search-item-info">
                    <strong>{test.name}</strong>
                    <span className="search-item-price">₹{test.price}</span>
                  </div>
                  <button 
                    className="btn btn-primary search-add-btn"
                    onClick={() => handleBookSearchItem(test)}
                  >
                    <IconShoppingCartPlus size={16} /> Book
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="trust-markers">
          <div className="trust-marker">
            <div className="trust-icon"><IconMotorbike size={24} color="#F16948" /></div>
            <div className="trust-text">
              <strong>Free Sample Collection</strong>
              <span>within <em>60 Mins</em> of Booking*</span>
            </div>
          </div>
          <div className="trust-marker">
            <div className="trust-icon"><IconFileDescription size={24} color="#F16948" /></div>
            <div className="trust-text">
              <strong>Smart Reports</strong>
              <span>with Real-Time Updates</span>
            </div>
          </div>
          <div className="trust-marker">
            <div className="trust-icon"><IconUserHeart size={24} color="#F16948" /></div>
            <div className="trust-text">
              <strong>Free Report</strong>
              <span>Counselling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
