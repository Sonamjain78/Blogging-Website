const blogs = [
    {
        title: "Balancing Life & Tech",
        body: "Discover how to balance college, coding, and creativity effectively. Tips include setting priorities, managing time, and staying inspired!"
    },
    {
        title: "Motivation Tips for Students",
        body: "Motivation is key in college life. Learn practical tips like goal setting, celebrating small wins, and staying focused on your path."
    },
    {
        title: "Creative Productivity Hacks",
        body: "Unlock your creativity with these productivity hacks: take breaks, set realistic goals, and maintain a positive mindset."
    }
];

function openModal(index) {
    const modal = document.getElementById("blogModal");
    modal.style.display = "flex";
    document.getElementById("modalTitle").textContent = blogs[index - 1].title;
    document.getElementById("modalBody").textContent = blogs[index - 1].body;
}

function closeModal() {
    document.getElementById("blogModal").style.display = "none";
}
