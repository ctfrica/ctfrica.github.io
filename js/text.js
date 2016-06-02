var alerts = ["Red alert!", "BEEP BOOP!", "AAAA!"]

function get_alert(err)
{
  return (alerts[Math.floor(Math.random() * alerts.length)] + " " + err);
}
