document.getElementById("addBtn").addEventListener("click", function() {
    const formContainer = document.getElementById("formContainer");
    formContainer.classList.toggle("hidden");
});

document.getElementById("createBtn").addEventListener("click", function() {
    // 0.33 sekund kutib funksiyani ishga tushirish
    setTimeout(function() {
        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const budget = document.getElementById("budget").value;

        if (name && date && budget) {
            const cardsContainer = document.getElementById("cardsContainer");

            const card = document.createElement("div");
            card.classList.add("card");

            const id = Math.floor(Math.random() * 1000); // Har bir cardga ID beriladi
            const currentDate = new Date();
            const inputDate = new Date(date);

            // Hozirgi sanani faqat yil, oy, kun bo'yicha solishtirish uchun vaqtni nolga o'rnatamiz
            currentDate.setHours(0, 0, 0, 0);
            inputDate.setHours(0, 0, 0, 0);

            // Sana asosida rangni aniqlash
            if (inputDate < currentDate) {
                card.classList.add("red"); // Sana joriy sanadan oldin bo'lsa qizil rang
            } else if (inputDate.getTime() === currentDate.getTime()) {
                card.classList.add("green"); // Sana joriy sana bilan bir xil bo'lsa yashil rang
            } else {
                card.classList.add("yellow"); // Sana joriy sanadan keyin bo'lsa sariq rang
            }

            // Card ichiga ma'lumot qo'shish
            card.innerHTML = `
                <strong>ID:</strong> ${id} <br>
                <strong>Name:</strong> ${name} <br>
                <strong>Budget:</strong> ${budget}
            `;

            cardsContainer.appendChild(card);

            // Formani tozalash
            document.getElementById("name").value = '';
            document.getElementById("date").value = '';
            document.getElementById("budget").value = '';

            // Formani yashirish
            document.getElementById("formContainer").classList.add("hidden");
        } else {
            alert("Iltimos, barcha maydonlarni to'ldiring!");
        }
    }, 330); // 0.33 sekund kutish
});
