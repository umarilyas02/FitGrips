import FaqsDisplay from "./FaqsDisplay";

const Faqs = () => {
  const faqs = [
    {
      id: 1,
      question: "How can I place an order?",
      answer:
        "Ordering from FitGrips is simple! Browse our products, select the item, size, and quantity you need, and click 'Add to Cart.' When you're ready, proceed to checkout and follow the on-screen instructions to enter your shipping and payment information.",
    },
    {
      id: 2,
      question: "Who do I contact for support or questions?",
      answer:
        "Our customer support team is here to help! For any questions about our products, your order, or custom branding, please email us at info@fitgrips.com or call/WhatsApp us at +92 328 8528563. We aim to respond within 24 business hours.",
    },
    {
      id: 3,
      question: "What are your weightlifting products made from?",
      answer:
        "We use only premium, heavy-duty materials designed for strength and longevity. This includes reinforced stitching, high-grade cotton elastics for wraps, genuine leather for our belts, and industrial-strength velcro and metal buckles to ensure our gear can handle your toughest workouts.",
    },
    {
      id: 4,
      question: "Do you offer custom branding for gyms?",
      answer:
        "Yes, we offer custom branding options for gyms and fitness centers. Please contact our support team to discuss your requirements and get a quote.",
    },
  ];
  return (
    <>
      <FaqsDisplay
        title="Frequently Asked Questions"
        desc="Have questions? We've got answers! Check out our FAQs below for quick information about ordering, shipping, products, and more."
        button="Contact Support"
        faqsData={faqs}
      />
    </>
  );
};

export default Faqs;
