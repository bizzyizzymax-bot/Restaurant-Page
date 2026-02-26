const contactPage = () => {
  // Clear main content area
  const content = document.getElementById("content");
  content.innerHTML = "";

  // ===== CONTACT MAIN SECTION =====
  const main = document.createElement("main");
  main.style.minHeight = "600px";
  main.style.display = "flex";
  main.style.flexDirection = "column";
  main.style.alignItems = "center";
  main.style.justifyContent = "center";
  main.style.margin = "40px 0 0 0";
  main.style.backgroundColor = "white";
  main.style.padding = "40px 20px 80px 20px";

  const contactSection = document.createElement("section");
  contactSection.style.backgroundColor = "rgba(255,255,255,0.93)";
  contactSection.style.borderRadius = "16px";
  contactSection.style.boxShadow = "0 6px 32px rgba(0,0,0,0.11)";
  contactSection.style.maxWidth = "430px";
  contactSection.style.width = "100%";
  contactSection.style.padding = "42px 38px 30px 38px";
  contactSection.style.display = "flex";
  contactSection.style.flexDirection = "column";
  contactSection.style.alignItems = "center";
  contactSection.style.margin = "0 auto";

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Contact Us";
  contactTitle.style.fontSize = "2em";
  contactTitle.style.textAlign = "center";
  contactTitle.style.color = "#dd2911";
  contactTitle.style.margin = "0 0 8px 0";
  contactSection.appendChild(contactTitle);

  // Contact Info
  const contactInfo = document.createElement("div");
  contactInfo.style.marginBottom = "28px";
  contactInfo.style.width = "100%";

  const phoneRow = document.createElement("div");
  phoneRow.style.marginBottom = "9px";
  phoneRow.innerHTML = `<strong>Phone:</strong> <span style="color:#444">555-PIE-ZANO (555-743-9266)</span>`;

  const addressRow = document.createElement("div");
  addressRow.style.marginBottom = "9px";
  addressRow.innerHTML = `<strong>Address:</strong> <span style="color:#444">1020 Mozzarella St, Romeville, NY 10110</span>`;

  const emailRow = document.createElement("div");
  emailRow.innerHTML = `<strong>Email:</strong> <span style="color:#444">contact@piezanos.com</span>`;

  contactInfo.appendChild(phoneRow);
  contactInfo.appendChild(addressRow);
  contactInfo.appendChild(emailRow);

  contactSection.appendChild(contactInfo);

  // Hours
  const hoursTitle = document.createElement("h3");
  hoursTitle.textContent = "Hours";
  hoursTitle.style.color = "#E04B34";
  hoursTitle.style.margin = "18px 0 3px 0";
  hoursTitle.style.fontSize = "1.09em";
  hoursTitle.style.textAlign = "left";
  hoursTitle.style.width = "100%";
  contactSection.appendChild(hoursTitle);

  const hoursList = document.createElement("ul");
  hoursList.style.listStyle = "none";
  hoursList.style.padding = "0";
  hoursList.style.margin = "0 0 18px 0";
  hoursList.style.width = "100%";
  ["Mon-Thu: 11am - 9pm", "Fri-Sat: 11am - 10pm", "Sun: 12pm - 8pm"].forEach(
    (hr) => {
      const li = document.createElement("li");
      li.textContent = hr;
      li.style.color = "#222";
      li.style.marginBottom = "5px";
      hoursList.appendChild(li);
    },
  );
  contactSection.appendChild(hoursList);

  // Simple Contact Form (structure only, no real submission)
  const formTitle = document.createElement("h3");
  formTitle.textContent = "Send Us a Message";
  formTitle.style.color = "#E04B34";
  formTitle.style.margin = "12px 0 7px 0";
  formTitle.style.fontSize = "1.05em";
  formTitle.style.textAlign = "left";
  formTitle.style.width = "100%";
  contactSection.appendChild(formTitle);

  const form = document.createElement("form");
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.width = "100%";

  // Name input
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Your Name";
  nameInput.required = true;
  nameInput.style.marginBottom = "11px";
  nameInput.style.padding = "10px 12px";
  nameInput.style.border = "1px solid #E04B34";
  nameInput.style.borderRadius = "6px";
  nameInput.style.fontSize = "1em";
  nameInput.style.outline = "none";

  // Email input
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Your Email";
  emailInput.required = true;
  emailInput.style.marginBottom = "11px";
  emailInput.style.padding = "10px 12px";
  emailInput.style.border = "1px solid #E04B34";
  emailInput.style.borderRadius = "6px";
  emailInput.style.fontSize = "1em";
  emailInput.style.outline = "none";

  // Message textarea
  const msgInput = document.createElement("textarea");
  msgInput.placeholder = "Your Message";
  msgInput.required = true;
  msgInput.rows = 4;
  msgInput.style.marginBottom = "15px";
  msgInput.style.padding = "10px 12px";
  msgInput.style.border = "1px solid #E04B34";
  msgInput.style.borderRadius = "6px";
  msgInput.style.fontSize = "1em";
  msgInput.style.outline = "none";

  // Submit Button
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Send";
  submitBtn.type = "submit";
  submitBtn.style.backgroundColor = "#E04B34";
  submitBtn.style.color = "#fff";
  submitBtn.style.border = "none";
  submitBtn.style.fontWeight = "bold";
  submitBtn.style.fontSize = "1.07em";
  submitBtn.style.borderRadius = "7px";
  submitBtn.style.padding = "10px 0";
  submitBtn.style.cursor = "pointer";
  submitBtn.style.transition = "background 0.2s";
  submitBtn.style.marginBottom = "0";

  submitBtn.addEventListener("mouseover", () => {
    submitBtn.style.backgroundColor = "#bd220d";
  });
  submitBtn.addEventListener("mouseout", () => {
    submitBtn.style.backgroundColor = "#E04B34";
  });

  form.appendChild(nameInput);
  form.appendChild(emailInput);
  form.appendChild(msgInput);
  form.appendChild(submitBtn);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    submitBtn.textContent = "Sent!";
    submitBtn.style.backgroundColor = "#14833b";
    setTimeout(() => {
      submitBtn.textContent = "Send";
      submitBtn.style.backgroundColor = "#E04B34";
      form.reset();
    }, 1100);
  });

  contactSection.appendChild(form);

  main.appendChild(contactSection);
  content.appendChild(main);
};

export default contactPage;
