async function GetIpI() {
  let res = await fetch(`https://api.ipify.org?format=json`);
  let data = await res.json();
  console.log(data.ip);
  document.getElementById("TheIp").innerText = data.ip;
}

async function GetIpInfo() {
  await GetIpI();
  const accesskey = "8a2a1391ca614a8d5dfb90056a9ac8e4";
  let IP = document.getElementById("TheIp").innerText;
  const targetUrl = `https://api.ipstack.com/${IP}?access_key=${accesskey}`;
  let res = await fetch(targetUrl);
  let data = await res.json();
  console.log(data);

  document.getElementById(
    "TheCoutryFlag"
  ).style.background = `url(${data.location.country_flag}) no-repeat center center/contain`;

  document.getElementById("TheCallCode").innerText = data.location.calling_code;
  document.getElementById("TheLang").innerText =
    data.location.languages[0].name;
  document.getElementById(
    "TheLatNLoa"
  ).innerText = `${data.latitude}, ${data.longitude}`;
  document.getElementById(
    "locationgChain"
  ).innerText = `${data.continent_name}  >  ${data.country_name}  >  ${data.city}`;
}

GetIpInfo();
