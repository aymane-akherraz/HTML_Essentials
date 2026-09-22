function copyText(e) {

    const textToCopy = e.target.textContent;
    navigator.clipboard.writeText(textToCopy)
        .then(() => alert("Copied!"))
        .catch(err => console.error("Error copying: ", err));

}