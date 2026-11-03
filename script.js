const faqs = {
    "admission": "Admissions are open for eligible students. Please visit the college admission office for application details.",

    "courses": "Our college offers undergraduate and postgraduate programs in various disciplines.",

    "fees": "Fee details vary according to the course. Please contact the college office for the latest fee structure.",

    "library": "The college library is open from 9:00 AM to 5:00 PM on working days.",

    "hostel": "Hostel facilities are available for eligible students. Please contact the hostel office for availability.",

    "exam": "Examination schedules are announced through the college notice board and official website.",

    "contact": "You can contact the college office during working hours for further assistance.",

    "principal": "The Principal's office is located in the main administrative block.",

    "placement": "The college provides placement assistance through its Training and Placement Cell."
};

function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");

    const response = getBotResponse(message);

    setTimeout(() => {
        addMessage(response, "bot");
    }, 500);

    input.value = "";
}

function addMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");

    const messageDiv = document.createElement("div");

    messageDiv.classList.add(
        sender === "user" ? "user-message" : "bot-message"
    );

    messageDiv.textContent = message;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    message = message.toLowerCase();

    for (let keyword in faqs) {
        if (message.includes(keyword)) {
            return faqs[keyword];
        }
    }

    return "Sorry, I don't have an answer for that. Please contact the college office for more information.";
}

document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});