/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  let totalPrice = 0;

  // 1. Determine Base Price by Size
  if (size === "small") {
    totalPrice = 3.00;
  } else if (size === "medium") {
    totalPrice = 4.00;
  } else if (size === "large") {
    totalPrice = 5.00;
  } else {
    return -1; // Invalid size
  }

  // 2. Add-on for Coffee Type
  switch (type) {
    case "regular":
      totalPrice += 0.00;
      break;
    case "latte":
      totalPrice += 1.00;
      break;
    case "cappuccino":
      totalPrice += 1.50;
      break;
    case "mocha":
      totalPrice += 2.00;
      break;
    default:
      return -1; // Invalid type
  }

  // 3. Add Optional Extras
  if (extras.whippedCream) {
    totalPrice += 0.50;
  }
  if (extras.extraShot) {
    totalPrice += 0.75;
  }

  // 4. Return total rounded to 2 decimal places
  return Number(totalPrice.toFixed(2));
}
