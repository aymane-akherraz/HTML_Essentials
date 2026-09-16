function toggleDescription(e) {

	const button = e.target;
	const nextElement = button.nextElementSibling;

    // Automatically adds/removes the 'hidden' class on every click
    nextElement.classList.toggle("hidden");
	if (nextElement.classList.contains("hidden")) {
        button.textContent = "Show Description";
	}
	else {
        button.textContent = "Hide Description";
	}
}