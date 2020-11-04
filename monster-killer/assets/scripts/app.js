const ATTACK_VALUE = 17; // global value
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK'; //MODE_ATTACK = 0
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; //MODE_ATTACK = 1 

const enteredValue = prompt('Maximum life: ', '100');

let chosenMaxLife = parseInt(enteredValue);

if (isNan(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would be dead but the bonus life saved U');
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0 ) {
        alert('Draw!');
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === MODE_ATTACK) {
        maxDamage = ATTACK_VALUE;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
}

function attackHandler() {
    attackMonster(MODE_ATTACK);

    // const damage = dealMonsterDamage(ATTACK_VALUE);
    // currentMonsterHealth -= damage;
    // const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    // currentPlayerHealth -= playerDamage;
    // if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    //     alert('You won!');
    // } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    //     alert('You lost!');
    // } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0 ) {
    //     alert('Draw!');
    // }
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
    // const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
    // currentMonsterHealth -= damage;
    // const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    // currentPlayerHealth -= playerDamage;
    // if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    //     alert('You won!');
    // } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    //     alert('You lost!');
    // } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0 ) {
    //     alert('Draw!');
}

// HEAL TO CHOSENMAXLIFE BUT NOT MORE THAN 20
function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max health");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }

    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);