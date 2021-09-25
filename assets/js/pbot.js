fetch("https://api.anaxes.xyz/api/pbot.php").then(function (response) {
  if (response.ok) {
    // Check if response went through
    response.json().then(function (data) {
      var pbotStatsHTML = document.getElementById("pbot_stats");
      var servers_users = `${`${data.servers + " Servers" + " & " + data.users + " Users"}` || "💻 404"}`;
      pbotStatsHTML.innerHTML += servers_users;
    });
  } else {
    console.log("Response failed?");
  }
});
