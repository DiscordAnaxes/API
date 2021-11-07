fetch("/api/premid.php").then(function (response) {
  if (response.ok) {
    // Check if response went through
    response.json().then(function (data) {
      var twitterFollowersHTML = document.getElementById("dsc_users");
      var followers = `${`${data.DscJobs +  " Users"}` || "💻 404"}`;
      twitterFollowersHTML.innerHTML += followers;
    });
  } else {
    console.log("Response failed?");
  }
});
