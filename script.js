const projects = [
    {
        name: "Single Page CV",
        description: "A single page HTML CV to showcase my career history.",
        image: "assets/projects/singlePageCv.webp",
        live: "https://anaid-ariwany.github.io/Roadmap.sh-Frontend-Projects/Single%20Page%20CV/",
        github: "https://github.com/Anaid-Ariwany/Roadmap.sh-Frontend-Projects/tree/main/Single%20Page%20CV",
        source: "https://roadmap.sh/projects/single-page-cv"
    },
    {
        name: "Basic HTML Website",
        description: "A simple HTML-only website with multiple pages.",
        image: "assets/projects/basicHtmlSite.webp",
        live: "https://anaid-ariwany.github.io/Roadmap.sh-Frontend-Projects/Basic%20HTML%20Website/",
        github: "https://github.com/Anaid-Ariwany/Roadmap.sh-Frontend-Projects/tree/main/Basic%20HTML%20Website",
        source: "https://roadmap.sh/projects/basic-html-website"
    },
    {
        name: "Personal Portfolio",
        description: "Previous basic HTML website converted into a personal portfolio.",
        image: "assets/projects/personalPortfolio.webp",
        live: "https://anaid-ariwany.github.io/Roadmap.sh-Frontend-Projects/Personal%20Portfolio/",
        github: "https://github.com/Anaid-Ariwany/Roadmap.sh-Frontend-Projects/tree/main/Personal%20Portfolio",
        source: "https://roadmap.sh/projects/portfolio-website"
    },
    {
        name: "Changelog Component",
        description: "A reusable changelog component for displaying update history.",
        image: "assets/projects/changelog.webp",
        live: "https://anaid-ariwany.github.io/Roadmap.sh-Frontend-Projects/Changelog%20Component/",
        github: "https://github.com/Anaid-Ariwany/Roadmap.sh-Frontend-Projects/tree/main/Changelog%20Component",
        source: "https://roadmap.sh/projects/changelog-component"
    },
    {
        name: "Testimonial Cards",
        description: "A set of reusable testimonial cards for displaying customer reviews.",
        image: "assets/projects/testimonialCards.webp",
        live: "https://anaid-ariwany.github.io/Roadmap.sh-Frontend-Projects/Testimonial%20Cards/",
        github: "https://github.com/Anaid-Ariwany/Roadmap.sh-Frontend-Projects/tree/main/Testimonial%20Cards",
        source: "https://roadmap.sh/projects/testimonial-cards"
    },
    {
        name: "Datepicker UI",
        description: "A reusable datepicker component for selecting dates.",
        image: "assets/projects/datePicker.webp",
        live: "https://anaid-ariwany.github.io/Roadmap.sh-Frontend-Projects/Datepicker%20UI/",
        github: "https://github.com/Anaid-Ariwany/Roadmap.sh-Frontend-Projects/tree/main/Datepicker%20UI",
        source: "https://roadmap.sh/projects/datepicker-ui"
    },
    {
        name: "Accessible Form UI",
        description: "A reusable form component with accessibility features.",
        image: "assets/projects/accessibleFormUI.webp",
        live: "https://anaid-ariwany.github.io/Roadmap.sh-Frontend-Projects/Accessible%20Form%20UI/",
        github: "https://github.com/Anaid-Ariwany/Roadmap.sh-Frontend-Projects/tree/main/Accessible%20Form%20UI",
        source: "https://roadmap.sh/projects/accessible-form-ui"
    },
    {
        name: "Image Grid Layout",
        description: "A responsive image grid layout component.",
        image: "assets/projects/imageGrid.webp",
        live: "https://anaid-ariwany.github.io/Roadmap.sh-Frontend-Projects/Image%20Grid%20Layout/",
        github: "https://github.com/Anaid-Ariwany/Roadmap.sh-Frontend-Projects/tree/main/Image%20Grid%20Layout",
        source: "https://roadmap.sh/projects/image-grid"
    },
    {
        name: "Tooltip UI",
        description: "A reusable tooltip component for displaying additional information.",
        image: "assets/projects/tooltipUI.webp",
        live: "https://anaid-ariwany.github.io/Roadmap.sh-Frontend-Projects/Tooltip%20UI/",
        github: "https://github.com/Anaid-Ariwany/Roadmap.sh-Frontend-Projects/tree/main/Tooltip%20UI",
        source: "https://roadmap.sh/projects/tooltip-ui"
    },
    {
        name: "Tabs",
        description: "A reusable tabs component for creating tabbed interfaces.",
        image: "assets/projects/tabs.webp",
        live: "https://anaid-ariwany.github.io/Roadmap.sh-Frontend-Projects/Tabs/",
        github: "https://github.com/Anaid-Ariwany/Roadmap.sh-Frontend-Projects/tree/main/Tabs",
        source: "https://roadmap.sh/projects/simple-tabs"
    },
    {
        name: "Cookie Consent",
        description: "A simple cookie consent popup to inform users about cookie usage. User can accept the consent, which will hide the popup and store the consent in local storage for future visits.",
        image: "assets/projects/cookieConsent.webp",
        live: "https://anaid-ariwany.github.io/Roadmap.sh-Frontend-Projects/Cookie%20Consent/",
        github: "https://github.com/Anaid-Ariwany/Roadmap.sh-Frontend-Projects/tree/main/Cookie%20Consent",
        source: "https://roadmap.sh/projects/cookie-consent"
    },
    {
        name: "Restricted Textarea",
        description: "A textarea component that restricts input to a specified character limit. It provides real-time feedback on the remaining characters and prevents users from exceeding the limit.",
        image: "assets/projects/restrictedTextarea.webp",
        live: "https://anaid-ariwany.github.io/Roadmap.sh-Frontend-Projects/Restricted%20Textarea/",
        github: "https://github.com/Anaid-Ariwany/Roadmap.sh-Frontend-Projects/tree/main/Restricted%20Textarea",
        source: "https://roadmap.sh/projects/restricted-textarea"
    }
];


const projectContainer = document.querySelector(".projectContainer");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("card");
    projectCard.innerHTML = `
        <div class="row g-1">
            <div class="col-xxl-12 imagediv">
                <img src="${project.image}" class="card-img-top" alt="${project.name}">
            </div>
            <div class="col-xxl-12">
                <div class="card-body">
                    <h5 class="card-title poppins-semibold">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                    <div class="projectButtons">
                        <button onclick="window.open('${project.live}', '_blank', 'noopener,noreferrer')"
                            class="lightButton">Live Demo</button>
                        <button onclick="window.open('${project.github}', '_blank', 'noopener,noreferrer')"
                            class="darkButton">GitHub Repo</button>
                        <button onclick="window.open('${project.source}', '_blank', 'noopener,noreferrer')"
                            class="lightButton">Source</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    projectContainer.appendChild(projectCard);
});

