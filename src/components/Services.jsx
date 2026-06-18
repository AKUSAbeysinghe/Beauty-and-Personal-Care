import React, { useState } from 'react';
import ServiceDetailPopup from "../components/ServicePopup";
import Skincare from "../assets/ServicePop/Skincare.jpg";
import Skincarepop from "../assets/ServicePop/Skincarepop.jpg";
import Bodytreat from "../assets/ServicePop/BodyRetual.jpg";
import HairTreat from "../assets/ServicePop/HairTreat.jpg";

// --- Icon Components ---
const IconStar = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
  </svg>
);

const IconX = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconClock = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// --- Data for Services and Treatments ---
const serviceCategories = [
  { name: 'ALL', count: '17 services', imageUrl: '', type: 'all' },
  { name: 'SKIN CARE', count: '7 services', imageUrl: Skincare, type: 'skin-care' },
  { name: 'BODY RITUALS', count: '5 services', imageUrl: Bodytreat, type: 'body-rituals' },
  { name: 'HAIR TREATMENTS', count: '5 services', imageUrl: HairTreat, type: 'hair-treatments' },
];

const allTreatments = [
  // Skin Care Treatments
  {
    id: 'good-facial',
    category: 'skin-care',
    rating: 4.9,
    title: 'THE REALLY GOOD FACIAL',
    price: '$140',
    duration: '60min',
    description: 'The 60-minute personalized facial that transforms your skin and renews your confidence.',
    popupImageUrl: Skincare,
    idealFor: ['Monthly maintenance', 'Promoting overall skin health'],
    whatsInvolved: [
      { step: 'Double Cleanse', detail: 'Removes makeup, sweat, and dirt, leaving skin fresh.' },
      { step: 'Skin Analysis', detail: 'Assesses skin type and condition to tailor the treatment.' },
      { step: 'Exfoliation', detail: 'Gently removes dead skin cells for a smoother complexion.' },
      { step: 'Extractions', detail: 'Clears clogged pores for a cleaner, healthier look.' },
      { step: 'Mask + Massage', detail: 'Nourishes with a custom mask and relaxing massage.' },
      { step: 'Serum + Moisturizer', detail: 'Hydrates and protects with targeted serums.' },
    ],
  },
  {
    id: 'dermaplaning',
    category: 'skin-care',
    rating: 4.7,
    title: 'DERMAPLANING',
    price: '$120',
    duration: '30min',
    description: 'Removes dead skin and peach fuzz for a soft, smooth, radiant finish.',
    popupImageUrl: '/image_dermaplaning.jpg',
    idealFor: ['Smoother makeup application', 'Enhanced skin texture'],
    whatsInvolved: [
      { step: 'Cleansing', detail: 'Prepares skin by removing surface impurities.' },
      { step: 'Dermaplaning', detail: 'Gently scrapes away dead skin and fine hair.' },
      { step: 'Hydration', detail: 'Applies soothing moisturizer to calm the skin.' },
    ],
  },
  {
    id: 'enzyme-exfoliation',
    category: 'skin-care',
    rating: 4.8,
    title: 'ENZYME EXFOLIATION',
    price: '$110',
    duration: '45min',
    description: 'Minimizes pore congestion to remove blackheads and renew confidence.',
    popupImageUrl: '/image_enzyme.jpg',
    idealFor: ['Clearing congested pores', 'Improving skin clarity'],
    whatsInvolved: [
      { step: 'Cleansing', detail: 'Removes impurities to prepare skin.' },
      { step: 'Enzyme Application', detail: 'Applies enzyme mask to exfoliate and unclog pores.' },
      { step: 'Moisturizing', detail: 'Hydrates skin for a refreshed look.' },
    ],
  },
  {
    id: 'high-frequency',
    category: 'skin-care',
    rating: 4.6,
    title: 'HIGH FREQUENCY',
    price: '$80',
    duration: '15min',
    description: 'Calms acne, boosts healing, and improves circulation with gentle electrical currents.',
    popupImageUrl: '/image_highfreq.jpg',
    idealFor: ['Acne-prone skin', 'Promoting faster healing'],
    whatsInvolved: [
      { step: 'Cleansing', detail: 'Prepares skin for treatment.' },
      { step: 'High-Frequency Application', detail: 'Uses electrical currents to target acne.' },
    ],
  },
  {
    id: 'purelift-technology',
    category: 'skin-care',
    rating: 4.8,
    title: 'PURELIFT TECHNOLOGY',
    price: '$160',
    duration: '30min',
    description: 'Microcurrent lifts and tones facial muscles for firmer, younger-looking skin.',
    popupImageUrl: '/image_purelift.jpg',
    idealFor: ['Anti-aging', 'Facial contouring'],
    whatsInvolved: [
      { step: 'Cleansing', detail: 'Cleans skin for optimal microcurrent contact.' },
      { step: 'Microcurrent Application', detail: 'Stimulates facial muscles for lifting.' },
      { step: 'Moisturizing', detail: 'Hydrates skin post-treatment.' },
    ],
  },
  {
    id: 'cryobo-massage',
    category: 'skin-care',
    rating: 4.5,
    title: 'CRYOBE GLOBE MASSAGE',
    price: '$65',
    duration: '30min',
    description: 'Cooling globes reduce puffiness, soothe inflammation, and boost circulation.',
    popupImageUrl: '/image_cryobe.jpg',
    idealFor: ['Reducing puffiness', 'Soothing sensitive skin'],
    whatsInvolved: [
      { step: 'Cleansing', detail: 'Prepares skin for massage.' },
      { step: 'Cryobe Globe Massage', detail: 'Uses cooling globes to reduce inflammation.' },
    ],
  },
  {
    id: 'muscle-tension-relief',
    category: 'skin-care',
    rating: 4.7,
    title: 'MUSCLE TENSION RELIEF',
    price: '$65',
    duration: '30min',
    description: 'Deep facial massages release muscle tension and support skin elasticity.',
    popupImageUrl: '/image_muscle.jpg',
    idealFor: ['Relieving facial tension', 'Enhancing skin elasticity'],
    whatsInvolved: [
      { step: 'Cleansing', detail: 'Prepares skin for massage.' },
      { step: 'Deep Massage', detail: 'Targets facial muscles to release tension.' },
      { step: 'Hydration', detail: 'Applies moisturizer to support skin health.' },
    ],
  },
  // Body Rituals Treatments
  {
    id: 'aromatherapy-massage',
    category: 'body-rituals',
    rating: 4.9,
    title: 'AROMATHERAPY MASSAGE',
    price: '$150',
    duration: '60min',
    description: 'A soothing full-body massage with essential oils to relax and rejuvenate.',
    popupImageUrl: '/image_aromatherapy.jpg',
    idealFor: ['Stress relief', 'Muscle relaxation'],
    whatsInvolved: [
      { step: 'Oil Selection', detail: 'Choose essential oils tailored to your needs.' },
      { step: 'Full-Body Massage', detail: 'Relieves tension with gentle techniques.' },
      { step: 'Warm Towel Finish', detail: 'Soothes skin and enhances relaxation.' },
    ],
  },
  {
    id: 'hot-stone-therapy',
    category: 'body-rituals',
    rating: 4.8,
    title: 'HOT STONE THERAPY',
    price: '$170',
    duration: '75min',
    description: 'Warm stones and gentle massage melt away stress and tension.',
    popupImageUrl: '/image_hotstone.jpg',
    idealFor: ['Deep relaxation', 'Muscle soreness relief'],
    whatsInvolved: [
      { step: 'Warm Stone Placement', detail: 'Places heated stones to relax muscles.' },
      { step: 'Massage', detail: 'Combines stone warmth with massage.' },
      { step: 'Hydration', detail: 'Applies lotion to nourish skin.' },
    ],
  },
  {
    id: 'body-scrub',
    category: 'body-rituals',
    rating: 4.7,
    title: 'EXFOLIATING BODY SCRUB',
    price: '$130',
    duration: '45min',
    description: 'A luxurious scrub to exfoliate and hydrate, leaving skin soft and glowing.',
    popupImageUrl: '/image_bodyscrub.jpg',
    idealFor: ['Dry skin', 'Pre-event glow'],
    whatsInvolved: [
      { step: 'Exfoliation', detail: 'Uses natural scrub to remove dead skin.' },
      { step: 'Rinse', detail: 'Removes scrub residue for a clean feel.' },
      { step: 'Moisturizing', detail: 'Applies rich lotion to hydrate skin.' },
    ],
  },
  {
    id: 'detox-wrap',
    category: 'body-rituals',
    rating: 4.6,
    title: 'DETOX BODY WRAP',
    price: '$140',
    duration: '60min',
    description: 'A detoxifying wrap to purify and hydrate, promoting wellness and relaxation.',
    popupImageUrl: '/image_detoxwrap.jpg',
    idealFor: ['Detoxification', 'Skin hydration'],
    whatsInvolved: [
      { step: 'Cleansing', detail: 'Prepares skin for wrap application.' },
      { step: 'Wrap Application', detail: 'Applies detoxifying wrap to purify skin.' },
      { step: 'Hydration', detail: 'Moisturizes skin post-wrap.' },
    ],
  },
  {
    id: 'reflexology',
    category: 'body-rituals',
    rating: 4.7,
    title: 'REFLEXOLOGY',
    price: '$100',
    duration: '45min',
    description: 'Targeted foot massage to relieve stress and promote overall balance.',
    popupImageUrl: '/image_reflexology.jpg',
    idealFor: ['Stress relief', 'Improving circulation'],
    whatsInvolved: [
      { step: 'Foot Soak', detail: 'Soothes feet in warm water.' },
      { step: 'Reflexology Massage', detail: 'Applies pressure to specific foot points.' },
      { step: 'Moisturizing', detail: 'Hydrates feet for a refreshed feel.' },
    ],
  },
  // Hair Treatments
  {
    id: 'keratin-treatment',
    category: 'hair-treatments',
    rating: 4.9,
    title: 'KERATIN TREATMENT',
    price: '$200',
    duration: '120min',
    description: 'Smooths and strengthens hair for a sleek, frizz-free finish.',
    popupImageUrl: '/image_keratin.jpg',
    idealFor: ['Reducing frizz', 'Enhancing hair strength'],
    whatsInvolved: [
      { step: 'Cleansing', detail: 'Deep cleanse to prepare hair.' },
      { step: 'Keratin Application', detail: 'Applies keratin to smooth hair.' },
      { step: 'Heat Seal', detail: 'Locks in treatment with heat styling.' },
    ],
  },
  {
    id: 'deep-conditioning',
    category: 'hair-treatments',
    rating: 4.8,
    title: 'DEEP CONDITIONING',
    price: '$80',
    duration: '45min',
    description: 'Nourishes and repairs damaged hair for a healthy, vibrant look.',
    popupImageUrl: '/image_conditioning.jpg',
    idealFor: ['Dry or damaged hair', 'Restoring shine'],
    whatsInvolved: [
      { step: 'Cleansing', detail: 'Washes hair to remove impurities.' },
      { step: 'Conditioning Mask', detail: 'Applies rich mask to hydrate.' },
      { step: 'Rinse and Style', detail: 'Rinses mask and styles hair.' },
    ],
  },
  {
    id: 'scalp-therapy',
    category: 'hair-treatments',
    rating: 4.7,
    title: 'SCALP THERAPY',
    price: '$90',
    duration: '30min',
    description: 'A soothing treatment to nourish the scalp and promote healthy hair growth.',
    popupImageUrl: '/image_scalp.jpg',
    idealFor: ['Dry or itchy scalp', 'Promoting hair health'],
    whatsInvolved: [
      { step: 'Scalp Cleansing', detail: 'Cleanses scalp to remove buildup.' },
      { step: 'Therapeutic Massage', detail: 'Massages scalp with nourishing oils.' },
      { step: 'Rinse', detail: 'Rinses products for a refreshed scalp.' },
    ],
  },
  {
    id: 'hair-repair',
    category: 'hair-treatments',
    rating: 4.8,
    title: 'HAIR REPAIR TREATMENT',
    price: '$110',
    duration: '60min',
    description: 'Restores damaged hair with intensive repair for strength and shine.',
    popupImageUrl: '/image_hairrepair.jpg',
    idealFor: ['Chemically treated hair', 'Restoring vitality'],
    whatsInvolved: [
      { step: 'Cleansing', detail: 'Cleans hair to prepare for treatment.' },
      { step: 'Repair Mask', detail: 'Applies intensive repair formula.' },
      { step: 'Rinse and Seal', detail: 'Rinses and seals in nutrients.' },
    ],
  },
  {
    id: 'color-refresh',
    category: 'hair-treatments',
    rating: 4.7,
    title: 'COLOR REFRESH',
    price: '$85',
    duration: '45min',
    description: 'Revives hair color vibrancy and adds glossy shine.',
    popupImageUrl: '/image_colorrefresh.jpg',
    idealFor: ['Faded hair color', 'Enhancing shine'],
    whatsInvolved: [
      { step: 'Cleansing', detail: 'Prepares hair for color treatment.' },
      { step: 'Color Application', detail: 'Applies gloss to refresh color.' },
      { step: 'Rinse and Style', detail: 'Rinses and styles for a vibrant finish.' },
    ],
  },
];

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'); // Default to all categories
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const openPopup = (treatment) => {
    setSelectedTreatment(treatment);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedTreatment(null);
  };

  // Filter categories to display (exclude 'all' when rendering sections)
  const displayCategories = serviceCategories
    .filter((category) => category.type !== 'all')
    .filter((category) => selectedCategory === 'all' || category.type === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-black uppercase tracking-tighter text-black md:text-7xl">
            Our
            <span className="relative -top-3 mx-1 inline-flex h-0 flex-col text-left align-middle text-[10px] font-semibold uppercase leading-none tracking-wider text-black sm:-top-4">
              <span>’</span>
              <span className="my-px whitespace-nowrap">Services</span>
            </span>
            Services
          </h1>
        </div>

        {/* Service Categories Filter */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 md:justify-start lg:gap-8">
          {serviceCategories.map((category) => (
            <button
              key={category.type}
              onClick={() => setSelectedCategory(category.type)}
              className={`relative flex min-w-[150px] flex-col items-center justify-center overflow-hidden rounded-lg border p-4 text-center transition-all duration-200
                ${
                  selectedCategory === category.type
                    ? 'border-black bg-black text-white shadow-lg'
                    : 'border-gray-200 bg-white text-gray-800 hover:border-gray-400 hover:shadow-md'
                }`}
            >
              {category.imageUrl && (
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-10 group-hover:opacity-20"
                />
              )}
              <div className="relative z-10">
                <span className="block text-sm font-semibold uppercase tracking-wide">{category.name}</span>
                <span className="block text-xs text-gray-400">{category.count}</span>
              </div>
              {selectedCategory === category.type && category.type !== 'all' && (
                <IconX className="absolute top-2 right-2 h-4 w-4 text-white" />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Category Sections */}
        {displayCategories.map((category) => (
          <div key={category.type} className="mt-16">
            <h2 className="text-4xl font-black uppercase text-gray-900">{category.name}</h2>
            <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col">
                <p className="max-w-md text-gray-700">
                  {category.type === 'skin-care' &&
                    'Inspired by nature, light, and the soft rhythm of self-care, our skin treatments are designed to restore balance, nourish deeply, and reveal your natural radiance.'}
                  {category.type === 'body-rituals' &&
                    'Indulge in our body rituals, crafted to relax, rejuvenate, and restore your body’s natural harmony with luxurious, soothing techniques.'}
                  {category.type === 'hair-treatments' &&
                    'Elevate your hair’s health and beauty with treatments designed to nourish, strengthen, and enhance shine for all hair types.'}
                </p>
                <p className="mt-4 max-w-md text-gray-700">
                  {category.type === 'skin-care' &&
                    'Whether you seek a glow for a special event or long-term skin health, each treatment is performed with precision and care.'}
                  {category.type === 'body-rituals' &&
                    'Perfect for unwinding or preparing for a big day, our rituals offer a serene escape tailored to your wellness needs.'}
                  {category.type === 'hair-treatments' &&
                    'From repair to revitalization, our treatments deliver vibrant, healthy results customized to your hair goals.'}
                </p>
                <div className="mt-8 h-[250px] w-full overflow-hidden rounded-lg bg-gray-200 shadow-md">
                  <img
                    src={category.imageUrl || '/image_placeholder.jpg'}
                    alt={`${category.name} treatment`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-8 text-xl font-bold uppercase text-gray-900">OUR SERVICES</h3>
              </div>

              {/* Treatments Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {allTreatments
                  .filter((treatment) => treatment.category === category.type)
                  .map((treatment) => (
                    <button
                      key={treatment.id}
                      onClick={() => openPopup(treatment)}
                      className="flex flex-col items-start rounded-lg border border-gray-200 bg-white p-4 text-left transition-all duration-200 hover:border-gray-400 hover:shadow-md"
                    >
                      <h4 className="text-lg font-bold text-gray-900">{treatment.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">{treatment.description}</p>
                      <div className="mt-3 flex items-center gap-4 text-sm font-semibold text-gray-800">
                        <span>{treatment.price}</span>
                        <div className="flex items-center gap-1 text-gray-500">
                          <IconClock className="h-4 w-4" />
                          <span>{treatment.duration}</span>
                        </div>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Service Detail Popup */}
      {isPopupOpen && selectedTreatment && (
        <ServiceDetailPopup
          isOpen={isPopupOpen}
          onClose={closePopup}
          treatment={selectedTreatment}
        />
      )}
    </div>
  );
};

export default ServicesPage;