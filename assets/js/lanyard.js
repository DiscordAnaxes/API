fetch("https://api.anaxes.xyz/api/lanyard.php").then(function (response) {
    if (response.ok) {
      // Check if response went through
      response.json().then(function (data) {
        var discordStatusHTML = document.getElementById("lanyard_status");
        var status = `${
          data.data.discord_status === "online"
            ? "<span class='text-green-500'><i class='fad fa-circle animate-pulse' title='Online'></i>&nbsp;Online</span>"
            : data.data.discord_status === "dnd"
            ? "<span class='text-red-500'><i class='fad fa-circle animate-pulse' title='Do Not Disturb'></i>&nbsp;Offline</span>"
            : data.data.discord_status === "idle"
            ? "<span class='text-yellow-500'><i class='fad fa-circle animate-pulse' title='Idle'></i>&nbsp;Idle</span>"
            : "<span class='text-gray-500'><i class='fad fa-circle animate-pulse' title='Offline'></i>&nbsp;Offline</span>"
        }`;
        discordStatusHTML.innerHTML += status;
      });
    } else {
      console.log("Response failed?");
    }
  });