/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // 1. Validation: Age must be a non-negative number
  if (typeof age !== 'number' || isNaN(age) || age < 0) {
    return -1;
  }

  let basePrice = 0;

  // 2. Determine base price based on age group
  if (age <= 12) {
    basePrice = 8;     // Children
  } else if (age <= 17) {
    basePrice = 12;    // Teens
  } else if (age <= 59) {
    basePrice = 15;    // Adults
  } else {
    basePrice = 10;    // Seniors
  }

  // 3. Apply weekend surcharge
  if (isWeekend) {
    basePrice += 3;
  }

  return basePrice;
}
