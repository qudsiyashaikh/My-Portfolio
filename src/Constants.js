//project
import Movie from '../src/Components/Images/project/Movie.png'
import Todo from '../src/Components/Images/project/Todo.png'
import AgeCalculator from '../src/Components/Images/project/Age-Calculator.png'


export const projects = [
    {
        id: 0,
        title: "To-Do-List",
        description:
        "A simple and user-friendly To-Do List web app where users can quickly add tasks by typing in the input box and clicking the ADD button. It helps organize daily activities efficiently with a clean and minimal interface.",
        image: Todo,
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/qudsiyashaikh/To-Do-List.git",
        webapp: " https://qudsiyashaikh.github.io/To-Do-List/",
    },
    {
        id: 1,
        title: "Movie Ticket",
        description:
        "A simple movie ticket booking app where users can select a movie, pick available seats, and see the ticket price instantly. Easy-to-use, clean design with real-time seat selection updates.",
        image: Movie,
        tags: ["HTML", "CSS", "JavaScript"],
        github: " https://github.com/qudsiyashaikh/Movie-Ticket-.git",
        webapp: " https://qudsiyashaikh.github.io/Movie-Ticket-/",
    },
    {
        id: 2,
        title: "Age calculator",
        description:
        "This Age Calculator application allows users to input their birthdate and instantly calculates their current age. Built with React for dynamic UI updates and Tailwind CSS for a clean, responsive design, the app features a date picker input, a simple “Calculate Age” button, and a sleek, colorful card-style layout. It provides users with a quick and user-friendly way to determine their age with minimal interaction.",
        image:  AgeCalculator,
        tags: [  "HTML", "Tailwind", "JavaScript" ,"React JS"],
        github: "https://github.com/qudsiyashaikh/Age-Calculator-.git",
        webapp: "https://age-calculator-khaki-eight.vercel.app/",
    },

]; 