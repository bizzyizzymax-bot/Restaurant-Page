// Export menuPage at the end of this file
// Import it in index.js (not here, due to the file structure)

const menuPage = () => {
  // Get main content area
  const content = document.getElementById("content");
  content.innerHTML = "";

  // ===== HEADER (copied & styled from index.js) =====
  const header = document.createElement("header");

  // NavBar
  const navBar = document.createElement("nav");
  navBar.style.width = "100%";
  navBar.style.backgroundColor = "white";
  navBar.style.padding = "30px";
  navBar.style.display = "flex";
  navBar.style.alignItems = "center";
  navBar.style.justifyContent = "space-between";
  navBar.style.padding = "30px 90px";

  // ===== MAIN MENU CONTENT =====
  const main = document.createElement("main");
  main.style.minHeight = "700px";
  main.style.display = "flex";
  main.style.flexDirection = "column";
  main.style.alignItems = "center";
  main.style.justifyContent = "flex-start";
  main.style.backgroundColor = "white";
  main.style.padding = "0 0 100px 0";

  // Menu Title
  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "Menu";
  menuTitle.style.fontSize = "2.5em";
  menuTitle.style.margin = "0 0 90px 0";
  menuTitle.style.color = "#E04B34";
  main.appendChild(menuTitle);

  // Menu grid container
  const menuGrid = document.createElement("div");
  menuGrid.style.display = "grid";
  menuGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(320px, 1fr))";
  menuGrid.style.gap = "36px";
  menuGrid.style.width = "100%";
  menuGrid.style.maxWidth = "1100px";

  // Menu items
  const items = [
    {
      name: "Margherita Pizza",
      desc: "Classic pizza with tomato, mozzarella, and fresh basil.",
      price: "$14",
    },
    {
      name: "Spaghetti Carbonara",
      desc: "Pasta with pancetta, parmesan, and creamy egg sauce.",
      price: "$16",
    },
    {
      name: "Caesar Salad",
      desc: "Romaine, homemade croutons, parmesan, and Caesar dressing.",
      price: "$12",
    },
    {
      name: "Grilled Salmon",
      desc: "Salmon fillet served with lemon butter sauce and vegetables.",
      price: "$22",
    },
    {
      name: "Truffle Fries",
      desc: "Hand-cut fries tossed with truffle oil and parmesan.",
      price: "$8",
    },
    {
      name: "Eggplant Parmesan",
      desc: "Breaded eggplant baked with marinara and mozzarella.",
      price: "$15",
    },
    {
      name: "Roasted Chicken",
      desc: "Half chicken roasted with herbs and garlic, served with potatoes.",
      price: "$19",
    },
    {
      name: "Burger Deluxe",
      desc: "Grilled beef patty with cheese, lettuce, tomato, and aioli.",
      price: "$14",
    },
    {
      name: "Lobster Bisque",
      desc: "Creamy and rich lobster soup with a touch of cognac.",
      price: "$11",
    },
    {
      name: "Tiramisu",
      desc: "Classic Italian dessert with espresso-soaked ladyfingers.",
      price: "$7",
    },
  ];

  items.forEach((item) => {
    const card = document.createElement("div");
    card.style.backgroundColor = "white";
    card.style.boxShadow = "0 6px 24px rgba(0,0,0,0.1)";
    card.style.borderRadius = "18px";
    card.style.padding = "24px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.justifyContent = "space-between";

    const name = document.createElement("h3");
    name.textContent = item.name;
    name.style.color = "#E04B34";
    name.style.marginBottom = "10px";
    name.style.fontSize = "1.5em";

    const desc = document.createElement("p");
    desc.textContent = item.desc;
    desc.style.marginBottom = "14px";
    desc.style.fontSize = "1.08em";
    desc.style.color = "#444";

    const price = document.createElement("span");
    price.textContent = item.price;
    price.style.alignSelf = "flex-end";
    price.style.fontWeight = "bold";
    price.style.fontSize = "1.15em";
    price.style.color = "#146356";

    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(price);
    menuGrid.appendChild(card);
  });

  main.appendChild(menuGrid);
  content.appendChild(main);
};

export default menuPage;
