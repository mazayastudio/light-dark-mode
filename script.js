const toggleSwitch = document.querySelector('input[type="checkbox"]');
const getElement = (id) => document.getElementById(id);

const nav = getElement("nav");
const toggleIcon = getElement("toggle-icon");
const image1 = getElement("image1");
const image2 = getElement("image2");
const image3 = getElement("image3");
const textBox = getElement("text-box");

// Dark or Light Images
function imageMode(color) {
	const images = [image1, image2, image3];
	const imageNames = ["undraw_proud_coder", "undraw_feeling_proud", "undraw_conceptual_idea"];

	images.forEach((image, index) => {
		image.src = `./img/${imageNames[index]}_${color}.svg`;
	});
}
function toggleDarkLightMode(isDark) {
	nav.style.backgroundColor = isDark ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
	textBox.style.backgroundColor = isDark ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
	toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
	isDark
		? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
		: toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
	isDark ? imageMode("dark") : imageMode("light");
}

// Switch Theme Dynamically
function switchTheme(event) {
	if (event.target.checked) {
		document.documentElement.setAttribute("data-theme", "dark");
		localStorage.setItem("theme", "dark");
		toggleDarkLightMode(true);
	} else {
		document.documentElement.setAttribute("data-theme", "light");
		localStorage.setItem("theme", "light");
		toggleDarkLightMode(false);
	}
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme, false);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
	document.documentElement.setAttribute("data-theme", currentTheme);

	if (currentTheme === "dark") {
		toggleSwitch.checked = true;
		toggleDarkLightMode(true);
	}
}
