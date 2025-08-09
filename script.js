function validEmail(str) {
  //your JS code here.
	// Return false for empty strings
  if (!str) return false;

  // Regex to ensure:
  //  - One or more word chars (letters, digits, underscore), dots, or hyphens (no consecutive dots/hyphens)
  //  - '@' symbol
  //  - One or more word chars, dots, or hyphens in domain
  //  - '.' followed by 2-3 letters for extension, possibly more for multi-part domains (.co.in, etc.)
  const regex = /^[\w]+(?:[.-][\w]+)*@[\w]+(?:[.-][\w]+)*\.[a-zA-Z]{2,3}(?:\.[a-zA-Z]{2,3})*$/;

  return regex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
