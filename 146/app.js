const days = 9;
const period = 3;
const weekDayAmount = 200;
const weekendAmount = 100;

const calculateProteinAmount = (days, period, weekDayAmount, weekendAmount) => {
  let total = 0;
  let currentDayOfWeek = 1;

  for (let i = 1; i <= days; i++) {
    if ((i - 1) % period === 0) {
      if (currentDayOfWeek === 6 || currentDayOfWeek === 7) {
        total += weekendAmount;
      } else {
        total += weekDayAmount;
      }
    }

    currentDayOfWeek++;
    if (currentDayOfWeek > 7) {
      currentDayOfWeek = 1; // Переход на следующую неделю
    }
  }

  return total;
}

console.log(calculateProteinAmount(days, period, weekDayAmount, weekendAmount));