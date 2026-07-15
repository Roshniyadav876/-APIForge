const tabs = document.querySelectorAll(".tab-btn");

const querySection = document.getElementById("querySection");
const headersSection = document.getElementById("headersSection");
const bodySection = document.getElementById("bodySection");
const authSection = document.getElementById("authSection");

const sections = {
    queryTab: querySection,
    headersTab: headersSection,
    bodyTab: bodySection,
    authTab: authSection
};

tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        Object.values(sections).forEach((section) => {
            section.style.display = "none";
        });

        tabs.forEach((button) => {
            button.classList.remove("active");
        });

        sections[tab.id].style.display = "block";

        tab.classList.add("active");

    });

});

document.getElementById("queryTab").click();