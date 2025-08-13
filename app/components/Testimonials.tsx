'use client';

export default function DentalReviews() {
  const reviews = [
    {
      name: 'Ahmed hossam',
      role: 'Patient',
      rating: 5,
      text: 'The staff was so caring and professional. I felt comfortable from the moment I arrived until my treatment was done.',
    },
    {
      name: 'mohamed sabry',
      role: 'Patient',
      rating: 4,
      text: 'Great experience! The doctors explained everything clearly and the service was fast and efficient.',
    },
    {
      name: 'Emman ',
      role: 'Patient',
      rating: 5,
      text: 'Amazing care and friendly staff. Highly recommended for anyone looking for quality healthcare.',
    },
  ];

  return (
    <section id="reviews" className="py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">What Our Patients Say</h2>
        </div>

        {/* Reviews Grid */}
        <div className="row g-4">
          {reviews.map((review, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100 p-4 text-center">
                <h5 className="fw-bold mb-1">{review.name}</h5>
                <p className="text-primary small mb-2">{review.role}</p>
                <div className="mb-3">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i} style={{ color: '#fbbf24', fontSize: '1.2rem' }}>★</span>
                  ))}
                </div>
                <p className="text-muted">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
