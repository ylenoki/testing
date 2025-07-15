function getRandomTrait(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTraits() {
  const traits = {
    friendliness: getRandomTrait(30, 85),
    playfulness: getRandomTrait(45, 90),
    energy: getRandomTrait(35, 85),
    loyalty: getRandomTrait(25, 80),
    curiosity: getRandomTrait(40, 90)
  };

  // Show them on the page
  document.getElementById("friendliness").textContent = traits.friendliness;
  document.getElementById("playfulness").textContent = traits.playfulness;
  document.getElementById("energy").textContent = traits.energy;
  document.getElementById("loyalty").textContent = traits.loyalty;
  document.getElementById("curiosity").textContent = traits.curiosity;
}

// Roll once when the page loads
generateTraits();

function adoptPet() {
  alert("You adopted the Orange Cat! 🐱");
}
