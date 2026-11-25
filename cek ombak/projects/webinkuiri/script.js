
// Mengambil semua link navbar
const links = document.querySelectorAll(
    '.navbar a[href^="#"]'
);

// Melakukan perulangan pada setiap link
links.forEach((link) => {

    link.addEventListener("click", (event) => {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});
