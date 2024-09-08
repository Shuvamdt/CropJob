const triviaForm = document.getElementById("triviaForm");
const triviaSection = document.getElementById("trivia-section");
const profileSection = document.getElementById("profile-section");

triviaForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect data from form inputs
  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;
  const experience = document.getElementById("experience").value;
  const crops = document.getElementById("crops").value;
  const land = document.getElementById("land-size").value;
  const equipment = document.getElementById("equipment").value;
  const irrigation = document.getElementById("irrigation").value;
  const fertilization = document.getElementById("fertilization").value;
  const soil = document.getElementById("soil-conservation").value;
  const market = document.getElementById("market").value;
  const cooperative = document.getElementById("cooperative").value;
  const financing = document.getElementById("financing").value;
  const improvement = document.getElementById("improvement").value;
  const newTech = document.getElementById("new-tech").value;

  // Log the data to the console
  console.log({
    name,
    location,
    experience,
    crops,
    land,
    equipment,
    irrigation,
    fertilization,
    soil,
    market,
    cooperative,
    financing,
    improvement,
    newTech,
  });

  // Populate the profile with the data
  document.getElementById("profile-name").textContent = name;
  document.getElementById("profile-location").textContent = location;
  document.getElementById("profile-experience").textContent = `${experience} years`;
  document.getElementById("profile-crops").textContent = crops;
  document.getElementById("profile-land").textContent = `${land} acres`;
  document.getElementById("profile-equipment").textContent = equipment;
  document.getElementById("profile-irrigation").textContent = irrigation;
  document.getElementById("profile-fertilization").textContent = fertilization;
  document.getElementById("profile-soil").textContent = soil;
  document.getElementById("profile-market").textContent = market;
  document.getElementById("profile-cooperative").textContent = cooperative;
  document.getElementById("profile-financing").textContent = financing;
  document.getElementById("profile-improvement").textContent = improvement;
  document.getElementById("profile-new-tech").textContent = newTech;

  // Show the profile section and hide the trivia form
  triviaSection.style.display = "none";
  profileSection.style.display = "block";
});

// Handle edit profile button click
document.getElementById("edit-profile").addEventListener("click", function () {
  profileSection.style.display = "none";
  triviaSection.style.display = "block";
});
