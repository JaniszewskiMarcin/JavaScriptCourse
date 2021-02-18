const attackValue = 10;
const strongAttackValue = 17;
const monsterAttackValue = 14;
const playerHealValue = 20;

const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

let battleLog = [];
let lastLoggedEntry;

function getMaxLifeValue() {
  const enteredValue = parseInt(
    prompt("Maximum life for you and the monster.", "100")
  );

  let parsedValue = enteredValue;

  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw {message: 'Invalid user input, not a number!'};
  }
  return parsedValue;
}

let chosenMaxLife;

try {
  chosenMaxLife = getMaxLifeValue();
} catch (error) {
  console.log(error);
  chosenMaxLife = 100;
  alert('You entered something wrong, default value was set to 100');
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
  let logEntry;

  logEntry = {
    event: event,
    value: value,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };

  switch (event) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = "PLAYER";
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry.target = "PLAYER";
      break;
  }

  battleLog.push(logEntry);
}

function reset() {
  currentPlayerHealth = chosenMaxLife;
  currentMonsterHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(monsterAttackValue);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(currentPlayerHealth);
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "PLAYER WINS!",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lose!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "MONSTER WON!",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("DRAW!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "A DRAW!",
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackLogic(attack) {
  const damage = dealMonsterDamage(attack);
  let LOG_EVENT;
  currentMonsterHealth -= damage;
  if (attack === attackValue) {
    LOG_EVENT = LOG_EVENT_PLAYER_ATTACK;
  } else if (attack === strongAttackValue) {
    LOG_EVENT = LOG_EVENT_PLAYER_STRONG_ATTACK;
  }
  writeToLog(LOG_EVENT, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function onAttack() {
  attackLogic(attackValue);
}

function onsStrongAttack() {
  attackLogic(strongAttackValue);
}

function onHealPlayer() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - playerHealValue) {
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = playerHealValue;
  }
  increasePlayerHealth(healValue);
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
  currentPlayerHealth += healValue;
  endRound();
}

function onLogButtonClick() {
  let i = 0;
  for (const logEntry of battleLog) {
    if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
      console.log(`#${i}`);
      for (const key in logEntry) {
        console.log(`${key} => ${logEntry[key]}`);
      }
      lastLoggedEntry = i;
      break;
    }
    i++;
  }
}

attackBtn.addEventListener("click", onAttack);
strongAttackBtn.addEventListener("click", onsStrongAttack);
healBtn.addEventListener("click", onHealPlayer);
logBtn.addEventListener("click", onLogButtonClick);
