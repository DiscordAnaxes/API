fetch("https://api.anaxes.xyz/api/lanyard.php").then(function (response) {
    if (response.ok) {
      // Check if response went through
      response.json().then(function (data) {
        var discordStatusHTML = document.getElementById("lanyard_status");
        var status = `${
          data.data.discord_status === "online"
            ? "<i class='fad fa-circle text-green-500 animate-pulse' title='Online'></i>"
            : data.data.discord_status === "dnd"
            ? "<i class='fad fa-circle text-red-500 animate-pulse' title='Do Not Disturb'></i>"
            : data.data.discord_status === "idle"
            ? "<i class='fad fa-circle text-yellow-500 animate-pulse' title='Idle'></i>"
            : "<i class='fad fa-circle text-gray-500 animate-pulse' title='Offline'></i>"
        }`;
        discordStatusHTML.innerHTML += status;
      });
    } else {
      console.log("Response failed?");
    }
  });