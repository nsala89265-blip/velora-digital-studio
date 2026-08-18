// =========================
// INTRO
// =========================

const intro = document.querySelector(".intro");

setTimeout(() => {
    intro.classList.add("hide");
}, 1500);


// =========================

// JĘZYK STRONY
// =========================

const translations = {

    pl: {

        "hero-label": "VELORA DIGITAL STUDIO",

        "hero-title": [
            "Twoja marka,",
            "w najlepszym wydaniu."
        ],

        "hero-description":
            "Tworzymy strony internetowe, które przyciągają uwagę, budują zaufanie i pomagają Twojej marce się wyróżnić.",

        "hero-button": "ODKRYJ VELORA",

        "about-label": "POZNAJ VELORA",

        "about-title": [
            "Twoja marka ma tylko jedną",
            "szansę na pierwsze wrażenie."
        ],

        "about-short":
            "My sprawimy, żeby zostało zapamiętane.",

        "about-text":
            "Wierzymy, że dobra strona internetowa to coś więcej niż piękny wygląd. To pierwsze wrażenie, historia Twojej marki i miejsce, które może zamienić zwykłego odwiedzającego w klienta.",

        "offer-label": "OFERTA",

        "offer-title": [
            "Rozwiązania stworzone",
            "dla Twojej marki."
        ],

        "offer-description":
            "Tworzymy cyfrowe doświadczenia dopasowane do charakteru, potrzeb i celów Twojej marki.",

        "projects-label": "REALIZACJE",

        "projects-title": [
            "Projekty, które",
            "mówią same za siebie."
        ],

        "projects-description":
            "Każdy projekt tworzymy z myślą o charakterze marki, jej odbiorcach i celu, który ma osiągnąć.",

        "why-label": "DLACZEGO VELORA",

        "why-title": [
            "Nie tworzymy",
            "kolejnych takich samych stron."
        ],

        "why-description":
            "Każdy projekt traktujemy indywidualnie — od pierwszego pomysłu aż po finalny efekt.",

        "contact-label": "KONTAKT",

        "contact-title": [
            "Masz pomysł?",
            "Stwórzmy go razem."
        ],

        "contact-description":
            "Chętnie poznamy Twój pomysł i pomożemy zamienić go w coś wyjątkowego. Niezależnie od tego, czy masz już konkretną wizję, czy dopiero szukasz odpowiedniego kierunku — jesteśmy tutaj, aby Ci pomóc.\n\nOpowiedz nam o swoim projekcie poprzez formularz poniżej lub napisz bezpośrednio na nasz adres e-mail. Wkrótce się odezwiemy i wspólnie ustalimy najlepsze rozwiązanie.",

        "contact-button":
            "NAPISZ DO NAS",

        "form-label":
            "WYCENA PROJEKTU",

        "form-title": [
            "Stwórzmy coś",
            "wyjątkowego."
        ],

        "name-label": "Imię i nazwisko",

        "name-placeholder":
            "Twoje imię i nazwisko",

        "email-label": "E-mail",

        "email-placeholder":
            "twoj@email.pl",

        "phone-label":
            "Telefon",

        "phone-placeholder":
            "+48 000 000 000",

        "service-label":
    "Czego potrzebujesz?",

"service-website":
    "Strona internetowa",

"service-shop":
    "Sklep internetowy",

"service-landing":
    "Strona promocyjna",

"service-redesign":
    "Pomoc i aktualizacje strony",

"service-logo":
    "Logo & identyfikacja",

"service-other":
    "Inne",

        "budget-label":
            "Jaki masz budżet?",

        "budget-1":
            "Do 1 000 zł",

        "budget-2":
            "1 000–2 000 zł",

        "budget-3":
            "2 000–5 000 zł",

        "budget-4":
            "Powyżej 5 000 zł",

        "budget-5":
            "Nie wiem",

        "message-label":
            "Opowiedz o swoim projekcie",

        "message-placeholder":
            "Napisz kilka słów o swojej firmie, pomyśle lub stronie, której potrzebujesz...",

        "consent":
            "Wyrażam zgodę na kontakt w sprawie mojego zgłoszenia.",

        "submit":
            "WYŚLIJ ZAPYTANIE"

    },


    en: {

        "hero-label": "VELORA DIGITAL STUDIO",

        "hero-title": [
            "Your brand,",
            "at its very best."
        ],

        "hero-description":
            "We create websites that capture attention, build trust and help your brand stand out.",

        "hero-button":
            "DISCOVER VELORA",

        "about-label":
            "MEET VELORA",

        "about-title": [
            "Your brand gets only one",
            "chance to make a first impression."
        ],

        "about-short":
            "We'll make sure it is remembered.",

        "about-text":
            "We believe a great website is more than beautiful design. It is your first impression, your brand's story and a place that can turn an ordinary visitor into a client.",

        "offer-label":
            "SERVICES",

        "offer-title": [
            "Solutions created",
            "for your brand."
        ],

        "offer-description":
            "We create digital experiences tailored to your brand's character, needs and goals.",

        "projects-label":
            "PROJECTS",

        "projects-title": [
            "Projects that",
            "speak for themselves."
        ],

        "projects-description":
            "Every project is created with your brand, audience and goals in mind.",

        "why-label":
            "WHY VELORA",

        "why-title": [
            "We don't create",
            "just another ordinary website."
        ],

        "why-description":
            "We treat every project individually — from the first idea to the final result.",

        "contact-label":
            "CONTACT",

        "contact-title": [
            "Have an idea?",
            "Let's create it together."
        ],

        "contact-description":
            "We would love to hear your idea and help turn it into something exceptional. Whether you already have a clear vision or are still looking for the right direction — we're here to help.\n\nTell us about your project through the form below or contact us directly by e-mail. We'll get back to you shortly and together we'll find the best solution.",

        "contact-button":
            "CONTACT US",

        "form-label":
            "PROJECT QUOTE",

        "form-title": [
            "Let's create something",
            "exceptional."
        ],

        "name-label":
            "Full name",

        "name-placeholder":
            "Your full name",

        "email-label":
            "E-mail",

        "email-placeholder":
            "your@email.com",

        "phone-label":
            "Phone",

        "phone-placeholder":
            "+48 000 000 000",

        "service-label":
    "What do you need?",

"service-website":
    "Website",

"service-shop":
    "Online store",

"service-landing":
    "Landing page",

"service-redesign":
    "Website support & updates",

"service-logo":
    "Logo & brand identity",

"service-other":
    "Other",

        "budget-label":
            "What's your budget?",

        "budget-1":
            "Up to PLN 1,000",

        "budget-2":
            "PLN 1,000–2,000",

        "budget-3":
            "PLN 2,000–5,000",

        "budget-4":
            "Over PLN 5,000",

        "budget-5":
            "I don't know",

        "message-label":
            "Tell us about your project",

        "message-placeholder":
            "Tell us a few words about your business, idea or website you need...",

        "consent":
            "I agree to be contacted regarding my enquiry.",

        "submit":
            "SEND ENQUIRY"

    }

};


// =========================
// ELEMENTY STRONY
// =========================

function getElements() {

    return {

        heroLabel:
            document.querySelector(".hero-label"),

        heroTitle:
            document.querySelector(".hero h1"),

        heroDescription:
            document.querySelector(".hero-description"),

        heroButton:
            document.querySelector(".hero-button"),

        aboutLabel:
            document.querySelector(".about .section-label"),

        aboutTitle:
            document.querySelector(".about-frame h2"),

        aboutShort:
            document.querySelector(".about-frame > p:not(.about-text)"),

        aboutText:
            document.querySelector(".about-text"),

        offerLabel:
            document.querySelector(".offer .section-label"),

        offerTitle:
            document.querySelector(".offer-header h2"),

        offerDescription:
            document.querySelector(".offer-header > p"),

        projectsLabel:
            document.querySelector(".projects .section-label"),

        projectsTitle:
            document.querySelector(".projects-header h2"),

        projectsDescription:
            document.querySelector(".projects-header > p"),

        whyLabel:
            document.querySelector(".why-us .section-label"),

        whyTitle:
            document.querySelector(".why-header h2"),

        whyDescription:
            document.querySelector(".why-header > p"),

        contactLabel:
            document.querySelector(".contact .section-label"),

        contactTitle:
            document.querySelector(".contact h2"),

        contactDescription:
            document.querySelector(".contact-description"),

        contactButton:
            document.querySelector(".contact-button"),

        formLabel:
            document.querySelector(".contact-form-header .section-label"),

        formTitle:
            document.querySelector(".contact-form-header h2"),

        nameLabel:
            document.querySelector('label[for="name"]'),

        emailLabel:
            document.querySelector('label[for="email"]'),

        phoneLabel:
            document.querySelector('label[for="phone"]'),

        serviceLabel:
            document.querySelector('label[for="service"]'),

     

        budgetLabel:
            document.querySelector(".budget-options")
                ?.closest(".form-group")
                ?.querySelector("label"),

        messageLabel:
            document.querySelector('label[for="message"]'),

        message:
            document.querySelector("#message"),

        consent:
            document.querySelector(".form-consent span"),

        submit:
            document.querySelector(".form-submit")

    };

}


// =========================
// ZMIANA JĘZYKA
// =========================

function changeLanguage(lang) {

    const t = translations[lang];

    if (!t) return;

    const elements = getElements();




 // =========================
// PL / EN — DESKTOP + MOBILE
// =========================

document
    .querySelectorAll(".language-btn, .mobile-language-btn")
    .forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.lang === lang
        );

    });

    // HERO

    if (elements.heroLabel)
        elements.heroLabel.textContent = t["hero-label"];

    if (elements.heroTitle)
        elements.heroTitle.innerHTML =
            `${t["hero-title"][0]}<br><em>${t["hero-title"][1]}</em>`;

    if (elements.heroDescription)
        elements.heroDescription.textContent =
            t["hero-description"];

    if (elements.heroButton) {

        const arrow =
            elements.heroButton.querySelector("span");

        elements.heroButton.childNodes[0].textContent =
            t["hero-button"] + " ";

        if (arrow)
            arrow.textContent = "→";
    }


    // O NAS

    if (elements.aboutLabel)
        elements.aboutLabel.textContent =
            t["about-label"];

    if (elements.aboutTitle)
        elements.aboutTitle.innerHTML =
            `${t["about-title"][0]}<em>${t["about-title"][1]}</em>`;

    if (elements.aboutShort)
        elements.aboutShort.textContent =
            t["about-short"];

    if (elements.aboutText)
        elements.aboutText.textContent =
            t["about-text"];


    // OFERTA

    if (elements.offerLabel)
        elements.offerLabel.textContent =
            t["offer-label"];

    if (elements.offerTitle)
        elements.offerTitle.innerHTML =
            `${t["offer-title"][0]}<em>${t["offer-title"][1]}</em>`;

    if (elements.offerDescription)
        elements.offerDescription.textContent =
            t["offer-description"];


    // REALIZACJE

    if (elements.projectsLabel)
        elements.projectsLabel.textContent =
            t["projects-label"];

    if (elements.projectsTitle)
        elements.projectsTitle.innerHTML =
            `${t["projects-title"][0]}<em>${t["projects-title"][1]}</em>`;

    if (elements.projectsDescription)
        elements.projectsDescription.textContent =
            t["projects-description"];


    // DLACZEGO VELORA

    if (elements.whyLabel)
        elements.whyLabel.textContent =
            t["why-label"];

    if (elements.whyTitle)
        elements.whyTitle.innerHTML =
            `${t["why-title"][0]}<em>${t["why-title"][1]}</em>`;

    if (elements.whyDescription)
        elements.whyDescription.textContent =
            t["why-description"];


    // KONTAKT

    if (elements.contactLabel)
        elements.contactLabel.textContent =
            t["contact-label"];

    if (elements.contactTitle)
        elements.contactTitle.innerHTML =
            `${t["contact-title"][0]}<em>${t["contact-title"][1]}</em>`;

    if (elements.contactDescription)
        elements.contactDescription.textContent =
            t["contact-description"];

    if (elements.contactButton) {

        const arrow =
            elements.contactButton.querySelector("span");

        elements.contactButton.childNodes[0].textContent =
            t["contact-button"] + " ";

        if (arrow)
            arrow.textContent = "→";
    }


    // FORMULARZ

    if (elements.formLabel)
        elements.formLabel.textContent =
            t["form-label"];

    if (elements.formTitle)
        elements.formTitle.innerHTML =
            `${t["form-title"][0]}<em>${t["form-title"][1]}</em>`;


    if (elements.nameLabel)
        elements.nameLabel.innerHTML =
            t["name-label"];

    if (elements.emailLabel)
        elements.emailLabel.innerHTML =
            t["email-label"];

    if (elements.phoneLabel)
        elements.phoneLabel.textContent =
            t["phone-label"];

    if (elements.serviceLabel)
        elements.serviceLabel.innerHTML =
            t["service-label"];

            // USŁUGI — KAFELKI

const serviceSpans =
    document.querySelectorAll(".service-option span");

const serviceKeys = [
    "service-website",
    "service-shop",
    "service-landing",
    "service-redesign",
    "service-logo",
    "service-other"
];

serviceSpans.forEach((span, index) => {

    if (t[serviceKeys[index]]) {

        span.textContent =
            t[serviceKeys[index]];

    }

});


    const nameInput =
        document.querySelector("#name");

    const emailInput =
        document.querySelector("#email");

    const phoneInput =
        document.querySelector("#phone");


    if (nameInput)
        nameInput.placeholder =
            t["name-placeholder"];

    if (emailInput)
        emailInput.placeholder =
            t["email-placeholder"];

    if (phoneInput)
        phoneInput.placeholder =
            t["phone-placeholder"];


  


    // BUDŻET

    if (elements.budgetLabel)
        elements.budgetLabel.innerHTML =
            t["budget-label"];

    const budgetSpans =
        document.querySelectorAll(".budget-option span");

    const budgetKeys = [
        "budget-1",
        "budget-2",
        "budget-3",
        "budget-4",
        "budget-5"
    ];

    budgetSpans.forEach((span, index) => {

        if (t[budgetKeys[index]]) {
            span.textContent =
                t[budgetKeys[index]];
        }

    });


    // OPIS

    if (elements.messageLabel)
        elements.messageLabel.innerHTML =
            t["message-label"];

    if (elements.message)
        elements.message.placeholder =
            t["message-placeholder"];


    // ZGODA

    if (elements.consent)
        elements.consent.innerHTML =
            t["consent"];


    // PRZYCISK FORMULARZA

    if (elements.submit) {

        const arrow =
            elements.submit.querySelector("span");

        elements.submit.childNodes[0].textContent =
            t["submit"] + " ";

        if (arrow)
            arrow.textContent = "→";
    }


    // =========================
    // OFERTA — ELEMENTY
    // =========================

    const offerItems =
        document.querySelectorAll(".offer-item");

    if (offerItems.length >= 5) {

        const offerData = {

            pl: [
                [
                    "STRONY INTERNETOWE",
                    "Nowoczesne i dopracowane strony dla firm, marek osobistych i usług."
                ],
                [
                    "SKLEPY INTERNETOWE",
                    "Estetyczne i funkcjonalne sklepy online, stworzone z myślą o wygodzie klientów."
                ],
                [
                    "  STRONA PROMOCYJNA",
                    "Strony stworzone pod konkretny produkt, usługę lub kampanię."
                ],
                [
                    "POMOC I AKTUALIZACJE STRONY",
                    "Odświeżenie istniejącej strony i nadanie jej nowoczesnego, spójnego wyglądu."
                ],

                [
    "LOGO & IDENTYFIKACJA",
    "Tworzymy charakterystyczne logo i spójną identyfikację wizualną dopasowaną do Twojej marki."
]
            ],

            en: [
                [
                    "WEBSITES",
                    "Modern and refined websites for businesses, personal brands and services."
                ],
                [
                    "ONLINE STORES",
                    "Elegant and functional online stores designed with your customers in mind."
                ],
                [
                    "LANDING PAGES",
                    "Focused pages created for a specific product, service or campaign."
                ],
                [
                    "REDESIGN",
                    "Refreshing an existing website and giving it a modern, cohesive look."
                ],

                [
    "LOGO & BRAND IDENTITY",
    "We create distinctive logos and cohesive visual identities tailored to your brand."
]
            ]

        };

        offerItems.forEach((item, index) => {

            if (!offerData[lang][index]) return;

            const title =
                item.querySelector(".offer-info h3");

            const description =
                item.querySelector(".offer-info p");

            const link =
                item.querySelector(".offer-link");

            if (title)
                title.textContent =
                    offerData[lang][index][0];

            if (description)
                description.textContent =
                    offerData[lang][index][1];

            if (link) {

                const arrow =
                    link.querySelector("span");

                link.childNodes[0].textContent =
                    (lang === "pl" ? "ODKRYJ" : "DISCOVER") + " ";

                if (arrow)
                    arrow.textContent = "→";
            }

        });

    }


    // =========================
    // DLACZEGO VELORA
    // =========================

    const whyItems =
        document.querySelectorAll(".why-item");

    const whyData = {

        pl: [
            [
                "INDYWIDUALNY DESIGN",
                "Nie korzystamy z jednego schematu dla każdej marki. Tworzymy wygląd dopasowany do Ciebie."
            ],
            [
                "DOPRACOWANE SZCZEGÓŁY",
                "Zwracamy uwagę na typografię, układ, animacje i każdy element, który tworzy pierwsze wrażenie."
            ],
            [
                "NOWOCZESNE ROZWIĄZANIA",
                "Łączymy estetykę z funkcjonalnością, aby strona wyglądała dobrze i była wygodna w użyciu."
            ],
            [
                "PODEJŚCIE DO MARKI",
                "Zanim zaczniemy projekt, poznajemy Twoją markę, jej charakter i potrzeby."
            ],

            [
    "RESPONSYWNOŚĆ",
    "Każdą stronę dostosowujemy do telefonów, tabletów i komputerów, aby wyglądała dobrze i działała wygodnie na każdym urządzeniu."
]
        ],

        en: [
            [
                "CUSTOM DESIGN",
                "We don't use one template for every brand. We create a visual identity tailored specifically to you."
            ],
            [
                "ATTENTION TO DETAIL",
                "We focus on typography, layout, animations and every element that creates a strong first impression."
            ],
            [
                "MODERN SOLUTIONS",
                "We combine aesthetics with functionality so your website looks great and feels effortless to use."
            ],
            [
                "BRAND-FIRST APPROACH",
                "Before we start, we get to know your brand, its character and its needs."
            ],
            [
    "RESPONSIVE DESIGN",
    "Every website is optimized for phones, tablets and computers, ensuring a seamless experience on every device."
]
        ]

    };


    whyItems.forEach((item, index) => {

        if (!whyData[lang][index]) return;

        const title =
            item.querySelector("h3");

        const description =
            item.querySelector("p");

        if (title)
            title.textContent =
                whyData[lang][index][0];

        if (description)
            description.textContent =
                whyData[lang][index][1];

    });


    // =========================
    // REALIZACJE
    // =========================

    const projectNames =
        document.querySelectorAll(".project-info h3");

    const projectLinks =
        document.querySelectorAll(".project-link");

    const projectData = {

        pl: [
            "Projekt VELORA",
            "Projekt Studio",
            "Projekt Brand",
            "Projekt Beauty"
        ],

        en: [
            "VELORA Project",
            "Studio Project",
            "Brand Project",
            "Beauty Project"
        ]

    };


    projectNames.forEach((title, index) => {

        if (projectData[lang][index]) {
            title.textContent =
                projectData[lang][index];
        }

    });


    projectLinks.forEach(link => {

        link.textContent =
            lang === "pl"
                ? "ZOBACZ PROJEKT →"
                : "VIEW PROJECT →";

    });


 

  


    // =========================
    // MOBILE MENU — TŁUMACZENIE
    // =========================

    document.querySelectorAll(".mobile-menu-link").forEach(link => {

        const text = link.querySelector("strong");

        if (!text) return;

        text.textContent =
            lang === "pl"
                ? link.dataset.pl
                : link.dataset.en;

    });

    // =========================
    // ZAPIS JĘZYKA
    // =========================

    localStorage.setItem(
        "veloraLanguage",
        lang
    );

}


// =========================
// KLIKNIĘCIE PL / EN
// =========================

document
    .querySelectorAll(".language-btn, .mobile-language-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            const lang =
                button.dataset.lang;

            changeLanguage(lang);

        });

    });


// =========================
// JĘZYK PRZY STARCIE
// =========================

const savedLanguage =
    localStorage.getItem("veloraLanguage") || "pl";

changeLanguage(savedLanguage);

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuClose = document.getElementById("mobileMenuClose");

if (mobileMenuButton && mobileMenu && mobileMenuClose) {

    mobileMenuButton.addEventListener("click", () => {

        mobileMenu.classList.add("active");

        document.body.classList.add("menu-open");

    });


    mobileMenuClose.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

    });


    document.querySelectorAll(".mobile-menu-link").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            document.body.classList.remove("menu-open");

        });

    });

    

}



// =========================================
// SCROLL REVEAL — VELORA
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const scrollElements = document.querySelectorAll(
        ".section-label, .section-title, .section-description, .offer-item, .project-card, .why-item, .service-option, .budget-option, .form-group"
    );

    // Od razu przygotowujemy elementy do animacji
    scrollElements.forEach(element => {
        element.classList.add("scroll-reveal");
    });

    const scrollObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    scrollElements.forEach(element => {
        scrollObserver.observe(element);
    });

});