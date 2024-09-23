import React from 'react'
import SimliarPageHeaderRavindra from './SimliarPageHeaderRavindra'
import VashikaranSection from './VashikaranSectionRavindra'
import ContactBanner from '../core/ContactBannerRavindra';
import VashikaranSectionRavindraPartRavindra from './VashikaranSectionRavindraPartRavindra';
import FAQSection from './FAQItemRavindra';
import ContactSection from './ContactSection';

const SimliarPageRavindra = () => {
  const faqs = [
    {
      question: "What is Positive Vashikaran?",
      answer: "Positivity, keenness & precision, and benevolence are essential elements of the positive vashikaran."
    },
    {
      question: "Who is the Best Vashikaran Specialist Near Me?",
      answer: "The grand and globally-admired Indian vashikaran specialist astrologer Ankit Sharma Ji."
    },
    {
      question: "How to Contact Vashikaran Specialist Astrologer Ankit Sharma Ji?",
      answer: "Through any of the following modes: + 9812345678"
    }
  ];


  const heading = "Best Vashikaran Specialist Near Me";
  const title1 = "Vashikaran Specialist Astrologer";
  
  // Description array with highlighted text
  const description1 = [
    { text: 'In the last two decades, our abundantly-experienced ', highlight: false },
    { text: 'guru ji', highlight: true },
    { text: ', who is regarded as being a globally-renowned and a ', highlight: false },
    { text: 'best vashikaran specialist astrologer', highlight: true },
    { text: ' in India and the whole world, healed and refurbished the painful and gloomy lives of myriads...', highlight: false }
  ];
  
  // ListItems array with portions of text highlighted
  const listItems1 = [
    [
      { text: 'Apathy towards or dullness in education, and ignorance or confusions regarding the most suitable ', highlight: false },
      { text: 'career options', highlight: true }
    ],
    [
      { text: 'All various problems associated with ', highlight: false },
      { text: 'love affairs', highlight: true },
      { text: ' and love relationships, such as mutual disputes & disloyalty, familial & social constraints...', highlight: false }
    ],
    [
      { text: 'Diverse personal, familial, astrological, and social disputes and obstructions to all popular types of marriages (', highlight: false },
      { text: 'arranged marriages', highlight: true },
      { text: ', love marriages, inter-caste marriages, etc.)', highlight: false }
    ],
    [
      { text: 'Various problematic issues in the personal and private life, such as unreasonable excessive anxieties & unrest...', highlight: false }
    ],
    [
      { text: 'Various problems in the married life and domesticity, such as ', highlight: false },
      { text: 'husband-wife disputes', highlight: true },
      { text: ', domestic unrest and mutiny...', highlight: false }
    ],
    [
      { text: 'Abrasive or withering relationships with spouse, children, in-laws, relatives, friends, business partners, colleagues or co-workers...', highlight: false }
    ],
    [
      { text: 'Various business and commerce related problems such as ', highlight: false },
      { text: 'slackness & recessions', highlight: true },
      { text: ', commercial disputes & hindrances, financial blockages...', highlight: false }
    ]
  ];

  // Image URL from the example
  const image = "https://www.astrologerankitsharma.com/images/new/vashikaran-specialist.jpg";  
  
  const highlights = [
    { text: "positive vashikaran services", isImportant: true },
    { text: "the world over, owing to certain outstanding and exclusive qualities" }
  ];

  const intro = [
    { text: "Vashikaran services are today, a hugely popular means for dealing effectively with various life's disputes, adversities, and obstacles, in countries worldwide, inseparably including India. Inherently spiritual in nature, these vashikaran services affect the target people readily through influencing their mind waves in the desired way, to meet the cherished objectives. However, among all diverse categories of such services, the", isHighlighted: false },
    { text: " positive vashikaran services ", isHighlighted: true },
    { text: "are most appreciated and highly sought-after the world over, owing to certain outstanding and exclusive qualities of these services of positivity, which are stipulated below separately. The efficacy and results obtainable through such positive services are much enhanced, if the service-provider is a well-learned-and-experienced one.", isHighlighted: false }
  ];

  const description = [
    { text: " the", isHighlighted: false },
    { text: " positive vashikaran services ", isHighlighted: true },
    { text: "about which I am dealing with in this sumptuous article, are the positive vashikaran services of global admiration and popularity, performed expertly and responsibly by our veteran and virtuous vashikaran specialist guru ji Ankit Sharma of India.", isHighlighted: false }
  ];

  const listItems = [
    "Perfect & potent mantras.",
    "Emollient and harmless to people.",
    "High dutifulness and benevolence.",
    "Fast action and lasting effects.",
    "Care & honor for the privacy, dignity, and confidentiality of individuals."
  ];
  const footer = [
    { text: "Our grand and righteous Guru ji practices only such positive and ", isHighlighted: false },
    { text: "fast vashikaran services", isHighlighted: true },
    { text: " services for the good causes. Other highly desirable and impressive qualities associated with our guru ji are that, he performs services with utmost empathy and responsibility and takes only reasonable service-charges. Our prestigious guru ji has been serving the ailed and dismal lives across the world for over two decades through his rather efficacious and cost-effective astrology as well as vashikaran services. Here, information only about his vashikaran services are being generously presented in the section just below, to help the troubled, hindered, or frustrated people of the world over.", isHighlighted: false }
  ];

  const formData = {
    title: "GET IMMEDIATE SOLUTION",
    subtitle: "Quit Sadness, Catch Happiness!"
  };

  const videoUrl = "https://youtu.be/qa_Zb0SKiV8"; // Example YouTube URL


  return (
    <div>
      <SimliarPageHeaderRavindra 
        linkText="Pt. Ankit Sharma World Famous Astrologer"
        linkHref="https://example.com/ankit-sharma"
        description="Blogs"
        descriptionPart="Vashikaran Services Near Me"
      />
      <VashikaranSection
        title="Vashikaran Services Near Me"
        intro={intro}
        description={description}
        highlights={highlights}
        listItems={listItems}
        footer={footer}
        videoUrl={videoUrl}
        formData={formData}
      />
      <ContactBanner/>
      <VashikaranSectionRavindraPartRavindra
       heading={heading}
       title={title1}
       description={description1}
       listItems={listItems1}
       image={image}
      />

<FAQSection faqs={faqs} />

{/* <AllServices/> */}
<ContactSection/>

    </div>
  )
}

export default SimliarPageRavindra

