const suits = ["♦", "♥", "♠", "♣"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function generateCard() {
  const suitIndex = Math.floor(Math.random() * suits.length);
  const valueIndex = Math.floor(Math.random() * values.length);
  const suit = suits[suitIndex];
  const value = values[valueIndex];

  const card = document.getElementById("card");
  const topSuit = document.getElementById("topSuit");
  const bottomSuit = document.getElementById("bottomSuit");
  const cardValue = document.getElementById("cardValue");

  // Remplazar clases anteriores con cada actualización de página.
  card.classList.remove("heart", "diamond", "spade", "club");

  // Asignar clase según el palo
  switch (suit) {
    case "♥":
      card.classList.add("heart");
      break;
    case "♦":
      card.classList.add("diamond");
      break;
    case "♠":
      card.classList.add("spade");
      break;
    case "♣":
      card.classList.add("club");
      break;
  }

  // Establecer contenido
  topSuit.textContent = suit;
  bottomSuit.textContent = suit;
  cardValue.textContent = value;
}

// Generar carta al cargar
window.onload = () => {
  generateCard();
  setInterval(generateCard, 10000); // Cada 10 segundos
};
