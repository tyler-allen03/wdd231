const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]


const allBTN = document.querySelector("#all-btn");
const cseBTN = document.querySelector("#cse-btn");
const wddBTN = document.querySelector("#wdd-btn");
let creditNumber = document.querySelector("#creditCount");


function createCourseList(filteredCourse) {
    document.querySelector(".courseContainer").innerHTML = "";
    filteredCourse.forEach(course => {
        let card = document.createElement("section");
        let done = document.createElement("p");
        let sub = document.createElement("p");

        if (course.completed == true) {
            done = "\u2713";
            card.style.backgroundColor = "blueviolet";
        }
        else {
            done = "";
        }
        sub = `${done} ${course.subject} ${course.number}`
        card.append(sub);

        document.querySelector(".courseContainer").appendChild(card);
    });
}

createCourseList(courses);
creditNumber.textContent = courses.reduce((acc, course) => acc + course.credits, 0);

allBTN.addEventListener("click", () => {
    createCourseList(courses)
    creditNumber.textContent = courses.reduce((acc, course) => acc + course.credits, 0);
});

cseBTN.addEventListener("click", () => {
    createCourseList(courses.filter(course => course.subject == "CSE"))
    creditNumber.textContent = courses.filter(course => course.subject == "CSE").reduce((acc, course) => acc + course.credits, 0);
});

wddBTN.addEventListener("click", () => {
    createCourseList(courses.filter(course => course.subject == "WDD"))
    creditNumber.textContent = courses.filter(course => course.subject == "WDD").reduce((acc, course) => acc + course.credits, 0);
});