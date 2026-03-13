/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // 1. Validation: Handle non-strings or empty input
  if (typeof password !== 'string' || password.length === 0) {
    return "weak";
  }

  let score = 0;

  // 2. Criterion 1: Length
  if (password.length >= 8) score++;

  // 3. Criterion 2: Uppercase (A-Z)
  if (/[A-Z]/.test(password)) score++;

  // 4. Criterion 3: Lowercase (a-z)
  if (/[a-z]/.test(password)) score++;

  // 5. Criterion 4: Numbers (0-9)
  if (/[0-9]/.test(password)) score++;

  // 6. Criterion 5: Special Characters
  // This regex looks for any character in the provided set
  if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) score++;

  // 7. Determine Strength Level
  if (score <= 1) {
    return "weak";
  } else if (score <= 3) {
    return "medium";
  } else if (score === 4) {
    return "strong";
  } else {
    return "very strong";
  }
}