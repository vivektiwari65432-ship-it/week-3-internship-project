Week 3 Internship Project — JavaScript Interactive Web Page

📌 Project Overview

This project was developed as part of the Week 3 Frontend Web Developer Internship Task at YuvaIntern.

The main objective of this task was to enhance a static webpage by integrating JavaScript-based interactive features. The project demonstrates how HTML, CSS, and JavaScript can work together to create a more dynamic and user-friendly web experience.

The webpage includes interactive navigation, dynamic content updates, theme switching, animated statistics, and client-side form validation.

---

🎯 Week 3 Objective

The objective of this project was to:

- Understand JavaScript DOM manipulation
- Implement event handling
- Add interactive features to a webpage
- Dynamically update webpage content
- Implement form validation
- Create simple animations
- Integrate HTML, CSS, and JavaScript
- Improve the overall user experience

---

🛠️ Technologies Used

- HTML5 — Website structure
- CSS3 — Styling and responsive layout
- JavaScript — Interactivity and dynamic behavior
- Git & GitHub — Version control and project hosting
- Visual Studio Code — Development environment
- Web Browser Developer Tools — Testing and debugging

---

📂 Project Structure

week-3-internship-project/
│
├── index.html
├── style.css
├── script.js
└── README.md

"index.html"

Contains the structure and content of the webpage, including:

- Header
- Navigation
- Hero section
- Feature section
- Statistics section
- About section
- Contact form
- Footer

"style.css"

Contains the visual design of the webpage, including:

- Colors
- Typography
- Layout
- Buttons
- Cards
- Responsive styling
- Hover effects
- Animations

"script.js"

Contains the JavaScript functionality responsible for:

- Navigation menu interaction
- Dark/light theme switching
- Dynamic messages
- Animated counters
- Learn More functionality
- Contact form validation
- DOM manipulation
- Event handling

---

✨ Interactive Features

1. Mobile Navigation Menu

The navigation menu can be opened and closed using JavaScript.

When the menu button is clicked, JavaScript dynamically adds or removes the required CSS class.

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

This allows the navigation interface to work smoothly on smaller screens.

---

2. Dark Mode

The project includes a theme-switching feature.

When the theme button is clicked, JavaScript adds or removes the "dark" class from the body.

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

This provides users with an alternative viewing experience.

---

3. Dynamic Message

The webpage can dynamically display a message when the user interacts with the button.

messageBtn.addEventListener("click", () => {
    heroMessage.textContent =
        "Welcome! JavaScript is making this webpage interactive 🚀";
});

This demonstrates DOM manipulation because JavaScript changes the webpage content without reloading the page.

---

4. Smooth Navigation

The Explore Features button uses JavaScript to move the user directly to the features section.

exploreBtn.addEventListener("click", () => {
    document.querySelector("#features").scrollIntoView({
        behavior: "smooth"
    });
});

This improves navigation and provides a smoother user experience.

---

5. Animated Statistics

The statistics section contains animated numerical values.

JavaScript calculates the counter progress and updates the displayed number using "requestAnimationFrame()".

This creates a simple visual animation while demonstrating JavaScript timing and DOM updates.

---

6. Learn More Interaction

The About section contains a Learn More button.

Clicking the button dynamically displays additional information without requiring a page refresh.

This demonstrates how JavaScript can control the visibility of webpage elements.

---

7. Contact Form Validation

The project includes client-side form validation.

The form checks:

- Name field
- Email format
- Message length
- Empty fields

Example:

if (!name.value.trim()) {
    nameError.textContent = "Please enter your name.";
}

Invalid inputs receive appropriate error messages, helping users understand what needs to be corrected.

---

🧠 JavaScript Concepts Practiced

This project helped me practice the following JavaScript concepts:

- Variables
- Functions
- Arrow functions
- DOM selection
- DOM manipulation
- Event listeners
- Conditional statements
- Regular expressions
- Arrays
- Template strings
- Browser APIs
- Form validation
- "requestAnimationFrame()"

---

🐛 Challenges Faced

Challenge 1 — Managing Multiple Interactive Elements

The webpage contained multiple buttons and interactive components. Managing different event listeners required keeping the JavaScript code organized.

Solution:
I separated the functionality logically and used individual event listeners for different interactions.

Challenge 2 — Form Validation

The form needed to identify empty fields and invalid email addresses.

Solution:
I implemented JavaScript validation and used a regular expression to check the email format.

Challenge 3 — Dynamic Counter Animation

Creating an animated counter required updating the displayed value multiple times.

Solution:
I used "requestAnimationFrame()" to update the counter smoothly according to the browser's rendering cycle.

Challenge 4 — Mobile Navigation

The navigation needed to behave differently on smaller screens.

Solution:
JavaScript was used to toggle the navigation menu by adding and removing the "active" CSS class.

---

🧪 Testing

The webpage was tested using browser Developer Tools and different screen sizes.

Device Type| Approx. Viewport| Testing
Desktop| 1440 × 900| Navigation, buttons, cards
Laptop| 1024 × 768| Layout and responsiveness
Tablet| 768 × 1024| Grid and navigation
Mobile| 390 × 844| Mobile menu and form

The following functionality was tested:

- Navigation menu
- Theme button
- Interactive buttons
- Learn More button
- Counter animation
- Contact form
- Invalid form input
- Valid form submission
- Responsive layout

---

📈 Learning Outcomes

After completing this project, I gained practical experience in integrating JavaScript with HTML and CSS.

I learned how to:

1. Select and manipulate DOM elements.
2. Handle user interactions using event listeners.
3. Dynamically update webpage content.
4. Create interactive UI components.
5. Validate user input using JavaScript.
6. Create simple JavaScript animations.
7. Debug JavaScript functionality using browser Developer Tools.
8. Combine HTML, CSS, and JavaScript into a functional frontend project.

---

🚀 Future Improvements

The project can be further improved by adding:

- Local storage for theme preferences
- More advanced animations
- Backend integration for the contact form
- API-based dynamic content
- Better form validation
- Loading states
- Improved accessibility
- Performance optimization

---

📌 Internship Task

Program: Frontend Web Developer Internship
Platform: YuvaIntern / NSDC
Task: Week 3 — Integrating JavaScript for Interactive User Experience

---

👨‍💻 Author

Vivek Tiwari

Frontend Web Development Intern

---

🔗 GitHub Repository

"Week 3 Internship Project" (https://github.com/vivektiwari65432-ship-it/week-3-internship-project)

---

📄 License

This project was created for educational and internship purposes.