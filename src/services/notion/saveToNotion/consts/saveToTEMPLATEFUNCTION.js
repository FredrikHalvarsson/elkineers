import saveToNotion from "../saveToNotion";
const notionForm = document.getElementById('notionForm');

// Add event listener for form submission
notionForm.addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get values from form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Log values (optional)
    console.log(name, email);

    // Log that it's submitting to Notion (optional)
    console.log('reached function call to save to notion');

    // Call the saveToNotion function with name and email
    await saveToNotion(name, email);
});
