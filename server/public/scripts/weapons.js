const renderWeapons = async () => {
  const response = await fetch("/weapons");
  const data = await response.json();
  const mainContent = document.getElementById("main-content");

  if (data) {
    data.map((weapon) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      topContainer.style.backgroundImage = `url(${weapon.image})`;

      const name = document.createElement("h3");
      name.textContent = weapon.name;
      bottomContainer.appendChild(name);

      const weaponClass = document.createElement("p");
      weaponClass.textContent = "Weapon Class: " + weapon.weaponClass;
      bottomContainer.appendChild(weaponClass);

      const damageType = document.createElement("p");
      damageType.textContent = "Damage Type: " + weapon.damageType;
      bottomContainer.appendChild(damageType);

      const link = document.createElement("a");
      link.textContent = "Read More >";
      link.setAttribute("role", "button");
      link.href = `/weapons/${weapon.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Weapons Listed";
    mainContent.appendChild(message);
  }
};

renderWeapons();