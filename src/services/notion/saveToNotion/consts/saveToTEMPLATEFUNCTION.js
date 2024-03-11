import saveToNotion from "../saveToNotion";
export const notionForm = document.getElementById('notionForm');

    notionForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        //fyll med element som ska skickas till databasen
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        await saveToNotion(name, email);
    });

    //importera till formulär