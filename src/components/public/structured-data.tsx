export function GymStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: "LifeTime Fitness Gym",
    description:
      "LifeTime Fitness Gym is a dedicated fitness destination in Guruwar Peth, Pune. Quality equipment, weight training, cardio, personal guidance, and flexible membership plans.",
    telephone: "+918446648527",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "732, Chhatrapati Shivaji Maharaj Rd, near Rashtrabhushan Chowk",
      addressLocality: "Guruwar Peth, Pune",
      addressRegion: "Maharashtra",
      postalCode: "411042",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5085",
      longitude: "73.8567",
    },
    hasMap: "https://maps.app.goo.gl/LJAx4xiLBMJK3TFS8",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "06:00",
        closes: "10:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "16:00",
        closes: "22:00",
      },
    ],
    priceRange: "₹₹",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
