// Function to toggle the scale effect on the image when the button is clicked
function toggleImageScale(event) {
    const button = event.currentTarget;
    const image = button.querySelector(".imageToScale"); // Select the image inside the clicked button
    image.classList.toggle("scale-125");
    image.classList.toggle("z-10"); // Toggle the scale and z-index classes
}

// Attach the click event to each button
document.querySelectorAll(".scaleButton").forEach(button => {
    button.addEventListener("click", toggleImageScale);
});
