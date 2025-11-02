import data from "../../data/index.json";
import ScrollAnimation from "../../components/ScrollAnimation";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <ScrollAnimation animation="fade-up" delay={0.1}>
        <div className="portfolio--container">
          <p className="sub--title">Client & Peer Reviews</p>
          <h2 className="section--heading">Testimonials</h2>
        </div>
      </ScrollAnimation>
      <div className="portfolio--section--container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {data?.testimonial?.map((item, index) => (
          <ScrollAnimation 
            key={index} 
            animation="fade-up" 
            delay={index * 0.15}
          >
            <div
            key={index}
            className="testimonial--section--card"
            style={{
              backgroundColor: '#fff',
              padding: '32px',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border-color)',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            <div className="testimonial--section--card--reviews" style={{ display: 'flex', gap: '4px' }}>
              {[...Array(parseInt(item.count))].map((_, i) => (
                <span key={i} style={{ fontSize: '20px', color: '#fbbf24' }}>⭐</span>
              ))}
            </div>
            <p className="text-md" style={{ color: 'var(--text-dark)', lineHeight: '1.8', flex: 1 }}>
              "{item.description}"
            </p>
            <div className="testimonial--section--card--author--detail" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src={item.src}
                alt={item.author_name}
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid var(--primary-light)'
                }}
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="testimonial--author--name" style={{ fontWeight: '600', color: 'var(--heading-color)', marginBottom: '4px' }}>
                  {item.author_name}
                </p>
                <p className="testimonial--author--designation" style={{ color: 'var(--text-light)', fontSize: '14px' }}>
                  {item.author_designation}
                  {item.author_company && ` • ${item.author_company}`}
                </p>
              </div>
            </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}
