// Main Headings
async function createButton(more, name, image) {
  const response = await fetch("template/button.html");
  const html = await response.text();
  let button = html
    .replace("##image##", image)
    .replace("##more##", more)
    .replace("##name##", name);
  document.getElementById("skill").innerHTML += button;
}

// Sub Headings
async function moreInfo(n) {
  document.getElementById("moreInfo").innerHTML = "";
  const info = n.split(",");
  for (let i = 0; i < info.length; i++) {
    const element = info[i];
    const response = await fetch("template/subButton.html");
    const html = await response.text();
    let subButton = html.replace("##element##", element);
    document.getElementById("moreInfo").innerHTML += subButton;
  }
}

//More About Projects
async function morePro(n) {
  document.getElementById("moreInfo").innerHTML = "";
  const response = await fetch("template/subButton.html");
  const html = await response.text();
  let subButton = html.replace("##element##", n);
  document.getElementById("moreInfo").innerHTML += subButton;
}

//Main Projects
async function project(name, more) {
  const response = await fetch("template/project.html");
  const html = await response.text();
  let details = html.replace("${name}", name).replace("${more}", more);
  document.getElementById("projects").innerHTML += details;
}
