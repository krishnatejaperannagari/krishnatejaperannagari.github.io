function showGreeting() {
  const name = document.getElementById("nameInput").value.trim();
  const greetingElement = document.getElementById("greetingMessage");
  const infoElement = document.getElementById("extraInfo");

  if (!name) {
    greetingElement.textContent = "Please enter your name!";
    infoElement.textContent = "";
    return;
  }

  // Browser & device info
  const userAgent = navigator.userAgent;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const screen = `${screenWidth}x${screenHeight}`;
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const region = timezone.split("/")[0];

  // Show greeting on page
  greetingElement.textContent = `Hello, ${name}! 👋`;
  infoElement.innerHTML = `
    <strong>Your Info:</strong><br>
    🌐 Browser/OS: ${userAgent}<br>
    📱 Screen: ${screen}<br>
    🕒 Timezone: ${timezone}<br>
    🌍 Region: ${region}
  `;

  // Send event to RudderStack
  rudderanalytics.track("Greeting Submitted", {
    properties: {
      name: name,
      userAgent: userAgent,
      screen: screen,
      timezone: timezone,
      region: region
    }
  });
}
