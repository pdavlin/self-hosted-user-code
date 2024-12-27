const socialLinks = document
  .getElementById("social-links")
  .getElementsByTagName("a");

for (let i = 0; i < socialLinks.length; i++) {
  if (socialLinks[i].href.includes("strava")) {
    const imgElement = socialLinks[i].getElementsByTagName("img")[0];
    imgElement.src =
      "https://www.bri-tri.com/wp-content/uploads/2016/11/Strava-Icon.png";
    imgElement.style["border-radius"] = "50%";
  }
  if (socialLinks[i].href.includes("zwiftpower")) {
    const imgElement = socialLinks[i].getElementsByTagName("img")[0];
    imgElement.src = "https://zwiftpower.com/zp_logo.png";
    imgElement.style["border-radius"] = "50%";
  }
  if (socialLinks[i].href.includes("bsky")) {
    const imgElement = socialLinks[i].getElementsByTagName("img")[0];
    imgElement.src =
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg";
  }
  if (socialLinks[i].href.includes("github")) {
    const imgElement = socialLinks[i].getElementsByTagName("img")[0];
    imgElement.style.backgroundColor = "#f4ecec";
    imgElement.style.borderRadius = "50%";
  }
}

const getDay = () => {
  const days = ["8", "9", "a", "b", "c", "d", "e", "f"];
  const date = new Date().getDate() % 8;
  return days[date];
};

const getRandomHex = () => {
  return getDay();
};

function groupContentByH5(containerSelector) {
  const container = document.querySelector(containerSelector);

  if (!container) {
    console.error(`Container with selector "${containerSelector}" not found.`);
    return;
  }

  let currentElement = container.firstElementChild;

  while (currentElement) {
    if (currentElement.tagName === "H5") {
      // Create a new wrapper div
      const wrapperDiv = document.createElement("div");
      wrapperDiv.classList.add("pd-style-content-box");

      // Append the current H5 to the wrapper
      container.insertBefore(wrapperDiv, currentElement);
      wrapperDiv.appendChild(currentElement);

      // Move all siblings until the next H5 into the wrapper
      let sibling = wrapperDiv.nextElementSibling;
      while (sibling && sibling.tagName !== "H5") {
        const nextSibling = sibling.nextElementSibling; // Cache next sibling
        wrapperDiv.appendChild(sibling); // Move sibling into wrapper
        sibling = nextSibling; // Update the pointer
      }

      // After processing this group, set currentElement to the next sibling
      currentElement = wrapperDiv.nextElementSibling;
    } else {
      // Move to the next element if it's not an H5
      currentElement = currentElement.nextElementSibling;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.style.setProperty(
    "--preferred-accent-color",
    `var(--base0${getRandomHex()})`,
  );
});
groupContentByH5('[class*="CustomPageContent"]');
