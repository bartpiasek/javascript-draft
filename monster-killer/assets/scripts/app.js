const ATTACK_VALUE = 8; // global value

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHeat

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;

}

attackBtn.addEventListener('click', attackHandler);

