const name = "Sadikshya Neupane";

const about = "Motivated and resourceful IT Student with a passion for coding, programming, and creating powerful software solutions. Possessing an in-depth understanding of HTML, CSS, JavaScript, and Python, as well as knowledge of emerging technologies, best practices and user experience standards.";

const education = [
    "Kasthamandap College",
    "Texas International College",
];

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
];

const experience = [
    {
        "title": "UI/UX Bootcamp",
        "description": "Participated in a 6-week intensive UI/UX bootcamp where I learned fundamentals of user interface and user experience design. Developed wireframes, prototypes, and conducted user testing."
    },
    {
        "title": "College Program Organizer",
        "description": "Organized various college programs and events related to IT field. Managed logistics, coordinated with speakers and sponsors, and ensured smooth execution of events."
    }
]

// Function to display name in the HTML
function displayName() {
    const nameElement = document.getElementById("name");
    nameElement.textContent = name;
}

// Function to display about in the HTML
function displayAbout() {
    const aboutElement = document.getElementById("about");
    aboutElement.textContent = about;
}

// Function to display education in the HTML
function displayEducation() {
    const educationList = document.getElementById("education-list");
    education.forEach(edu => {
        const li = document.createElement("li");
        li.textContent = edu;
        educationList.appendChild(li);
    });
}

// Function to display skills in the HTML
function displaySkills() {
    const skillsList = document.getElementById("skills-list");
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}

function displayExperience() {
    const experienceList = document.getElementById("experience-list");
    experience.forEach(exp => {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        h4.textContent = exp.title;
        p.textContent = exp.description;
        li.appendChild(h4);
        li.appendChild(p);
        experienceList.appendChild(li);
    });
}


// Call the function to display skills when the page is loaded
window.onload = function () {
    displayName();
    displayAbout();
    displaySkills();
    displayExperience();
    displayEducation();
};


