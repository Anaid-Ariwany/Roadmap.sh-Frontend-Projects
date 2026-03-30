//create dummy conetent for each tab
const content = [
    'First Tab Content: Displayed when the first tab is active.',
    'Second Tab Content: Displayed when the second tab is active.',
    'Third Tab Content: Displayed when the third tab is active.',
    'Fourth Tab Content: Displayed when the fourth tab is active.'
];

//select all tab buttons and the content container
const tabs = document.querySelectorAll('.nav-link');
const contentContainer = document.querySelector('.tabContent');

//iterate through each tab and add click event listener
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to the clicked tab
        tab.classList.add('active');
        // Update content container with the corresponding content
        contentContainer.textContent = content[index];
    });
});

// Initialize the first tab as active and display its content
tabs[0].classList.add('active');
contentContainer.textContent = content[0];

