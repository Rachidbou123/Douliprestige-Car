export type Language = 'fr' | 'en' | 'ar';

export const translations = {
  fr: {
    nav: {
      fleet: 'Flotte',
      airport: 'Aéroport',
      process: 'Comment ça marche',
      faq: 'FAQ',
      contact: 'Contact'
    },
    hero: {
      location: 'Location de voiture à Agadir',
      title: 'Votre voiture vous attend<br/> à Agadir.',
      subtitle: 'Arrivez. Récupérez les clés. Profitez de votre séjour. Service de livraison à l\'aéroport Al Massira et véhicules récents.'
    },
    request: {
      title: 'Demande de disponibilité rapide',
      pickup: 'Prise en charge',
      pickupAirport: 'Agadir Aéroport (Al Massira)',
      pickupAgency: 'Agence El Houda',
      pickupHotel: 'Hôtel à Agadir',
      dates: 'Dates prévues (ex: 12 Oct - 18 Oct)',
      vehicle: 'Véhicule',
      noVehicle: 'Je ne sais pas encore',
      phone: 'Téléphone',
      submit: 'Continuer sur WhatsApp',
      submitting: 'Vérification...',
      messageTemplate: 'Bonjour Douliprestige Cars, je souhaite demander la disponibilité pour une location :\n\nLieu: {pickup}\nDates: {dates}\nVéhicule: {vehicle}\nTéléphone: {phone}'
    },
    fleet: {
      title: 'Notre Flotte',
      subtitle: 'Choisissez votre véhicule',
      from: 'À partir de',
      perDay: '/ Jour',
      consult: 'Nous consulter',
      seats: 'Places',
      request: 'Demander ce véhicule',
      messageTemplate: 'Bonjour, je suis intéressé(e) par la location de la {vehicle}.',
      otherModels: 'Vous cherchez un autre modèle ? Notre parc automobile évolue régulièrement. Contactez-nous pour d\'autres options.',
      checkAvailability: 'Consulter les disponibilités'
    },
    airport: {
      title: 'Livraison à l\'Aéroport d\'Agadir',
      subtitle: 'Service direct',
      desc: 'Ne perdez pas de temps à votre arrivée. Nous proposons un service de livraison directe à l\'Aéroport International d\'Agadir Al Massira.',
      point1: 'Accueil personnalisé : Nous vous attendons à la sortie de l\'aéroport.',
      point2: 'Pas de file d\'attente : Évitez l\'attente aux comptoirs de location traditionnels.',
      point3: 'Retour facile : Restituez le véhicule au même endroit avant votre vol.',
      cta: 'Organiser une livraison aéroport',
      mapAirport: 'Aéroport Al Massira',
      mapCity: 'Agadir, Maroc'
    },
    process: {
      title: 'Une location sans complication',
      subtitle: 'Comment ça marche',
      step1Title: 'Contactez-nous',
      step1Desc: 'Envoyez-nous un message WhatsApp avec vos dates et préférences.',
      step2Title: 'Confirmation',
      step2Desc: 'Nous confirmons la disponibilité et le tarif de votre véhicule.',
      step3Title: 'Réception',
      step3Desc: 'Nous livrons la voiture à l\'aéroport ou à votre hôtel à Agadir.',
      step4Title: 'Profitez',
      step4Desc: 'Conduisez en toute liberté et restituez le véhicule simplement.'
    },
    faq: {
      title: 'Questions fréquentes',
      moreTitle: 'Vous avez une autre question ?',
      moreDesc: 'Notre équipe est disponible sur WhatsApp pour vous répondre rapidement.',
      chatNow: 'Discuter maintenant',
      questions: [
        {
          q: "Où puis-je récupérer la voiture ?",
          a: "Nous proposons la livraison de votre véhicule à l'Aéroport d'Agadir Al Massira, à notre agence (El Houda), ou à votre hôtel dans Agadir. Sélectionnez votre préférence lors de votre demande."
        },
        {
          q: "Quels documents sont nécessaires pour louer ?",
          a: "Vous devez présenter un permis de conduire valide, un passeport ou une carte d'identité, et avoir l'âge minimum requis (généralement 21 ans)."
        },
        {
          q: "Faut-il payer une caution ?",
          a: "Douliprestige Cars propose des options de location simplifiées. Veuillez nous contacter directement pour confirmer les conditions de caution applicables à votre période de location."
        },
        {
          q: "Comment fonctionne la livraison à l'aéroport ?",
          a: "Lors de votre réservation, indiquez vos détails de vol. Un membre de notre équipe vous attendra à la sortie de l'Aéroport d'Agadir Al Massira avec votre véhicule, prêt à partir."
        }
      ]
    },
    footer: {
      desc: 'Votre agence de location de voiture de confiance à Agadir. Service simple, rapide et orienté client.',
      contactDirect: 'Contact direct',
      agency: 'Agence',
      map: 'Voir sur Google Maps',
      rights: 'Tous droits réservés.',
      legal: 'Mentions légales',
      conditions: 'Conditions de location'
    },
    actions: {
      call: 'Appeler l\'agence',
      callShort: 'Appeler',
      whatsapp: 'Contact WhatsApp',
      book: 'Réserver'
    }
  },
  en: {
    nav: {
      fleet: 'Fleet',
      airport: 'Airport',
      process: 'How it Works',
      faq: 'FAQ',
      contact: 'Contact'
    },
    hero: {
      location: 'Car Rental in Agadir',
      title: 'Your car is waiting<br/> in Agadir.',
      subtitle: 'Arrive. Get the keys. Enjoy your stay. Delivery service to Al Massira Airport and modern vehicles.'
    },
    request: {
      title: 'Quick Availability Request',
      pickup: 'Pick-up Location',
      pickupAirport: 'Agadir Airport (Al Massira)',
      pickupAgency: 'El Houda Agency',
      pickupHotel: 'Hotel in Agadir',
      dates: 'Planned Dates (e.g., Oct 12 - Oct 18)',
      vehicle: 'Vehicle',
      noVehicle: 'I don\'t know yet',
      phone: 'Phone Number',
      submit: 'Continue on WhatsApp',
      submitting: 'Checking...',
      messageTemplate: 'Hello Douliprestige Cars, I would like to check availability for a rental:\n\nLocation: {pickup}\nDates: {dates}\nVehicle: {vehicle}\nPhone: {phone}'
    },
    fleet: {
      title: 'Our Fleet',
      subtitle: 'Choose your vehicle',
      from: 'From',
      perDay: '/ Day',
      consult: 'Contact us',
      seats: 'Seats',
      request: 'Request this vehicle',
      messageTemplate: 'Hello, I am interested in renting the {vehicle}.',
      otherModels: 'Looking for another model? Our fleet is regularly updated. Contact us for more options.',
      checkAvailability: 'Check availability'
    },
    airport: {
      title: 'Agadir Airport Delivery',
      subtitle: 'Direct Service',
      desc: 'Don\'t waste time upon arrival. We offer a direct delivery service to Agadir Al Massira International Airport.',
      point1: 'Personalized Welcome: We meet you at the airport exit.',
      point2: 'No Queue: Skip the wait at traditional rental counters.',
      point3: 'Easy Return: Drop off the vehicle at the same place before your flight.',
      cta: 'Organize airport delivery',
      mapAirport: 'Al Massira Airport',
      mapCity: 'Agadir, Morocco'
    },
    process: {
      title: 'Hassle-Free Rental',
      subtitle: 'How it works',
      step1Title: 'Contact Us',
      step1Desc: 'Send us a WhatsApp message with your dates and preferences.',
      step2Title: 'Confirmation',
      step2Desc: 'We confirm the availability and rate for your vehicle.',
      step3Title: 'Reception',
      step3Desc: 'We deliver the car to the airport or your hotel in Agadir.',
      step4Title: 'Enjoy',
      step4Desc: 'Drive with total freedom and return the vehicle simply.'
    },
    faq: {
      title: 'Frequently Asked Questions',
      moreTitle: 'Have another question?',
      moreDesc: 'Our team is available on WhatsApp to answer you quickly.',
      chatNow: 'Chat now',
      questions: [
        {
          q: "Where can I pick up the car?",
          a: "We offer vehicle delivery to Agadir Al Massira Airport, our agency (El Houda), or your hotel in Agadir. Select your preference during your request."
        },
        {
          q: "What documents are required to rent?",
          a: "You must present a valid driver's license, a passport or ID card, and meet the minimum age requirement (usually 21 years old)."
        },
        {
          q: "Is a deposit required?",
          a: "Douliprestige Cars offers simplified rental options. Please contact us directly to confirm the deposit conditions applicable to your rental period."
        },
        {
          q: "How does airport delivery work?",
          a: "When booking, provide your flight details. A member of our team will wait for you at the Agadir Al Massira Airport exit with your vehicle, ready to go."
        }
      ]
    },
    footer: {
      desc: 'Your trusted car rental agency in Agadir. Simple, fast, and customer-oriented service.',
      contactDirect: 'Direct Contact',
      agency: 'Agency',
      map: 'View on Google Maps',
      rights: 'All rights reserved.',
      legal: 'Legal Notice',
      conditions: 'Rental Terms'
    },
    actions: {
      call: 'Call Agency',
      callShort: 'Call',
      whatsapp: 'WhatsApp Contact',
      book: 'Book'
    }
  },
  ar: {
    nav: {
      fleet: 'أسطولنا',
      airport: 'المطار',
      process: 'كيف تعمل',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا'
    },
    hero: {
      location: 'تأجير السيارات في أكادير',
      title: 'سيارتك بانتظارك<br/> في أكادير.',
      subtitle: 'وصل. استلم المفاتيح. استمتع بإقامتك. خدمة التوصيل إلى مطار المسيرة وسيارات حديثة.'
    },
    request: {
      title: 'طلب توفر سريع',
      pickup: 'مكان الاستلام',
      pickupAirport: 'مطار أكادير (المسيرة)',
      pickupAgency: 'وكالة الهدى',
      pickupHotel: 'فندق في أكادير',
      dates: 'التواريخ المخططة (مثال: 12 أكتوبر - 18 أكتوبر)',
      vehicle: 'السيارة',
      noVehicle: 'لا أعرف بعد',
      phone: 'رقم الهاتف',
      submit: 'المتابعة على واتساب',
      submitting: 'جاري التحقق...',
      messageTemplate: 'مرحباً Douliprestige Cars، أود طلب توفر سيارة للإيجار:\n\nالمكان: {pickup}\nالتواريخ: {dates}\nالسيارة: {vehicle}\nالهاتف: {phone}'
    },
    fleet: {
      title: 'أسطولنا',
      subtitle: 'اختر سيارتك',
      from: 'ابتداءً من',
      perDay: '/ يوم',
      consult: 'اتصل بنا',
      seats: 'مقاعد',
      request: 'اطلب هذه السيارة',
      messageTemplate: 'مرحباً، أنا مهتم باستئجار سيارة {vehicle}.',
      otherModels: 'تبحث عن طراز آخر؟ أسطولنا يتجدد بانتظام. اتصل بنا للحصول على خيارات أخرى.',
      checkAvailability: 'التحقق من التوفر'
    },
    airport: {
      title: 'التوصيل لمطار أكادير',
      subtitle: 'خدمة مباشرة',
      desc: 'لا تضيع الوقت عند وصولك. نقدم خدمة التوصيل المباشر إلى مطار أكادير المسيرة الدولي.',
      point1: 'استقبال شخصي: ننتظرك عند مخرج المطار.',
      point2: 'لا طوابير: تجنب الانتظار في مكاتب التأجير التقليدية.',
      point3: 'إرجاع سهل: أعد السيارة إلى نفس المكان قبل رحلتك.',
      cta: 'تنظيم التوصيل للمطار',
      mapAirport: 'مطار المسيرة',
      mapCity: 'أكادير، المغرب'
    },
    process: {
      title: 'تأجير بدون تعقيدات',
      subtitle: 'كيف تعمل',
      step1Title: 'اتصل بنا',
      step1Desc: 'أرسل لنا رسالة واتساب مع تواريخك وتفضيلاتك.',
      step2Title: 'تأكيد',
      step2Desc: 'نؤكد توفر السيارة والسعر المناسب لك.',
      step3Title: 'استلام',
      step3Desc: 'نقوم بتوصيل السيارة إلى المطار أو فندقك في أكادير.',
      step4Title: 'استمتع',
      step4Desc: 'قد بحرية تامة وأعد السيارة بسهولة.'
    },
    faq: {
      title: 'الأسئلة الشائعة',
      moreTitle: 'هل لديك سؤال آخر؟',
      moreDesc: 'فريقنا متاح على واتساب للإجابة عليك بسرعة.',
      chatNow: 'تحدث الآن',
      questions: [
        {
          q: "أين يمكنني استلام السيارة؟",
          a: "نقدم خدمة توصيل السيارة إلى مطار أكادير المسيرة، وكالتنا (الهدى)، أو فندقك في أكادير. حدد تفضيلك عند طلبك."
        },
        {
          q: "ما هي المستندات المطلوبة للاستئجار؟",
          a: "يجب عليك تقديم رخصة قيادة سارية، جواز سفر أو بطاقة هوية، وأن تستوفي الحد الأدنى للعمر (عادة 21 عاماً)."
        },
        {
          q: "هل يجب دفع وديعة (مبلغ تأمين)؟",
          a: "توفر Douliprestige Cars خيارات تأجير مبسطة. يرجى الاتصال بنا مباشرة لتأكيد شروط الوديعة المطبقة على فترة التأجير الخاصة بك."
        },
        {
          q: "كيف تعمل خدمة التوصيل للمطار؟",
          a: "عند الحجز، قدم تفاصيل رحلتك. سينتظرك أحد أعضاء فريقنا عند مخرج مطار أكادير المسيرة مع سيارتك، جاهزة للانطلاق."
        }
      ]
    },
    footer: {
      desc: 'وكالة تأجير السيارات الموثوقة بك في أكادير. خدمة بسيطة وسريعة وموجهة للعملاء.',
      contactDirect: 'اتصال مباشر',
      agency: 'الوكالة',
      map: 'عرض على خرائط جوجل',
      rights: 'جميع الحقوق محفوظة.',
      legal: 'إشعار قانوني',
      conditions: 'شروط الإيجار'
    },
    actions: {
      call: 'اتصل بالوكالة',
      callShort: 'اتصال',
      whatsapp: 'تواصل عبر واتساب',
      book: 'احجز الآن'
    }
  }
};
