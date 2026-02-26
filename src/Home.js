import logoImage from "../assets/o.jpg";
import menuPage from "./Menu";

const homePage = () => {
  const content = document.getElementById("content");

  // Main

  // Create a container for the image and overlay
  const imageContainer = document.createElement("div");
  imageContainer.style.position = "relative";
  imageContainer.style.width = "100%";
  imageContainer.style.height = "900px";
  imageContainer.style.overflow = "hidden";
  imageContainer.style.marginBottom = "40px";

  // Create the image element
  const heroImage = document.createElement("img");
  heroImage.src = logoImage; // or insert another image src if desired
  heroImage.alt = "Restaurant Hero";
  heroImage.style.width = "100%";
  heroImage.style.height = "100%";
  heroImage.style.objectFit = "cover";
  heroImage.style.display = "block";

  // Create black overlay
  const overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.pointerEvents = "none"; // Allows clicks to go through to buttons if needed

  // Create text elements on overlay
  const overlayTitle = document.createElement("h2");
  overlayTitle.textContent = "Welcome to Pie-Zano's!";
  overlayTitle.style.color = "white";
  overlayTitle.style.fontSize = "2.5em";
  overlayTitle.style.fontWeight = "bold";
  overlayTitle.style.margin = "0 0 20px 0";
  overlayTitle.style.textShadow = "0 2px 10px #000";
  overlayTitle.style.pointerEvents = "auto";

  const overlayDesc = document.createElement("p");
  overlayDesc.textContent = "Pizza, Pasta, and more!";
  overlayDesc.style.color = "white";
  overlayDesc.style.fontSize = "1.5em";
  overlayDesc.style.margin = "0 0 30px 0";
  overlayDesc.style.textShadow = "0 2px 10px #000";
  overlayDesc.style.pointerEvents = "auto";

  // Create button in overlay
  const overlayBtn = document.createElement("button");
  overlayBtn.textContent = "View Menu";
  overlayBtn.style.margin = "0 20px";
  overlayBtn.style.height = "40px";
  overlayBtn.style.width = "120px";
  overlayBtn.style.backgroundColor = "#E04B34";
  overlayBtn.style.color = "white";
  overlayBtn.style.border = "none";
  overlayBtn.style.borderRadius = "8px";
  overlayBtn.style.fontSize = "1rem";
  overlayBtn.style.fontWeight = "bold";
  overlayBtn.style.cursor = "pointer";
  overlayBtn.style.transition = "background 0.3s";
  overlayBtn.style.zIndex = "2";
  overlayBtn.style.pointerEvents = "auto";

  overlayBtn.addEventListener("mouseover", () => {
    overlayBtn.style.backgroundColor = "#ff7043";
    overlayBtn.style.textDecoration = "none";
  });
  overlayBtn.addEventListener("mouseout", () => {
    overlayBtn.style.backgroundColor = "#ff5722";
    overlayBtn.style.textDecoration = "none";
  });

  overlayBtn.addEventListener("click", () => {
    content.innerHTML = "";
    menuPage();
  });

  // Append text and button to overlay
  overlay.appendChild(overlayTitle);
  overlay.appendChild(overlayDesc);
  overlay.appendChild(overlayBtn);

  // Add image and overlay to container
  imageContainer.appendChild(heroImage);
  imageContainer.appendChild(overlay);

  // Insert at the top of content (or as needed)
  content.insertBefore(imageContainer, content.firstChild);

  // Create About Us section
  const aboutSection = document.createElement("section");
  aboutSection.style.padding = "40px 20px";
  aboutSection.style.maxWidth = "800px";
  aboutSection.style.margin = "100px auto 100px auto";
  aboutSection.style.background = "rgba(255, 255, 255, 0.88)";
  aboutSection.style.borderRadius = "12px";
  aboutSection.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";

  const aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "About Us";
  aboutTitle.style.fontSize = "2em";
  aboutTitle.style.margin = "0 0 18px 0";
  aboutTitle.style.textAlign = "center";
  aboutTitle.style.color = "#dd2911";

  const aboutText = document.createElement("p");
  aboutText.textContent =
    "At Pie-Zano's, we believe great food brings people together. Founded by the Zano family in 1992, our menu blends classic Italian favorites with creative twists. Whether you're here for our wood-fired pizzas, house-made pastas, or irresistible desserts, every dish is crafted with the freshest ingredients and a lot of love. Enjoy a casual, welcoming atmosphere—your table is always ready!";
  aboutText.style.fontSize = "1.1em";
  aboutText.style.color = "#333";
  aboutText.style.lineHeight = "1.7";
  aboutText.style.textAlign = "center";

  aboutSection.appendChild(aboutTitle);
  aboutSection.appendChild(aboutText);

  // Append About Us section after hero image
  content.insertBefore(aboutSection, imageContainer.nextSibling);

  // Create "See Our Menu" section
  const menuSection = document.createElement("section");
  menuSection.style.padding = "38px 16px 44px 16px";
  menuSection.style.maxWidth = "750px";
  menuSection.style.margin = "38px auto 100px auto";
  menuSection.style.background = "#E04B34"; // Bright red background
  menuSection.style.borderRadius = "12px";
  menuSection.style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)";
  menuSection.style.display = "flex";
  menuSection.style.flexDirection = "column";
  menuSection.style.alignItems = "center";

  const menuHeader = document.createElement("h2");
  menuHeader.textContent = "See Our Menu";
  menuHeader.style.fontSize = "1.9em";
  menuHeader.style.color = "#fff"; // White text
  menuHeader.style.marginBottom = "12px";
  menuHeader.style.textAlign = "center";
  menuSection.appendChild(menuHeader);

  // Catchphrase texts
  const catchPhrases = [
    "🍕 Big Taste, Bold Flavors, Family Tradition!",
    "Serving Slices of Happiness, One Pie at a Time.",
    "Wood-Fired, Heart-Warmed Pizzas.",
    "Craving More? We’ve Got Something for Everyone!",
    "Fresh. Fun. Flavors—Just For You!",
  ];

  catchPhrases.forEach((phrase) => {
    const phraseElem = document.createElement("p");
    phraseElem.textContent = phrase;
    phraseElem.style.fontSize = "1.12em";
    phraseElem.style.color = "#fff"; // White text
    phraseElem.style.textAlign = "center";
    phraseElem.style.margin = "0 0 8px 0";
    menuSection.appendChild(phraseElem);
  });

  // Menu button (clone hero image's button style)
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Check Out Our Menu";
  menuBtn.style.marginTop = "24px";
  menuBtn.style.backgroundColor = "#fff";
  menuBtn.style.color = "#ff5722";
  menuBtn.style.padding = "13px 35px";
  menuBtn.style.fontSize = "1.1em";
  menuBtn.style.border = "none";
  menuBtn.style.borderRadius = "24px";
  menuBtn.style.cursor = "pointer";
  menuBtn.style.boxShadow = "0 2px 8px rgba(0,0,0,0.13)";
  menuBtn.style.fontWeight = "bold";
  menuBtn.style.transition =
    "background 0.2s, color 0.2s, text-decoration 0.2s";

  menuBtn.addEventListener("mouseover", () => {
    menuBtn.style.backgroundColor = "#ff7043";
    menuBtn.style.color = "#fff";
    menuBtn.style.textDecoration = "none";
  });
  menuBtn.addEventListener("mouseout", () => {
    menuBtn.style.backgroundColor = "#fff";
    menuBtn.style.color = "#ff5722";
    menuBtn.style.textDecoration = "none";
  });

  menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    menuPage();
  });

  menuSection.appendChild(menuBtn);

  // Append menu section after "About Us" section
  content.insertBefore(menuSection, aboutSection.nextSibling);

  // Create and append footer section
};

export default homePage;
