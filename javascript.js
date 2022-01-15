// function changeBrightMode() {
//     var element = document.body;
//     element.classList.toggle("dark-mode")
// }

// var toggleColorMode = function toggleColore = {
//     if (e.currentTarget.classList.contains("light--hidden")) {
//         document.documentElement.setAttribute("color-mode", "light");
//         localStorage.setItem("color-mode", "light")
//         return;
//     }

//     document.documentElement.setAttribute("color-mode", "dark");
//     localStorage.setItem("color-mode", "dark");
// };

// const toggleColorButtons = document.querySelectorAll(".brightness");
// toggleColorButtons.forEach(btn => {
//     btn.addEventListener("click", toggleColorMode);
// });




var toggleColorMode = function toggleColorMode(e) {
    // Switch to Light Mode
    if (e.currentTarget.classList.contains("light--hidden")) {
        // Sets the custom html attribute
        document.documentElement.setAttribute("color-mode", "light"); // Sets the user's preference in local storage

        localStorage.setItem("color-mode", "light");
        return;
    }
    /* Switch to Dark Mode
    Sets the custom html attribute */
    document.documentElement.setAttribute("color-mode", "dark"); // Sets the user's preference in local storage

    localStorage.setItem("color-mode", "dark");
}; // Get the buttons in the DOM

var toggleColorButtons = document.querySelectorAll(".brightness"); // Set up event listeners

toggleColorButtons.forEach(function(btn) {
    btn.addEventListener("click", toggleColorMode);
});