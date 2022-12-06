async function userdata() {
  const data = await fetch("data.json");
  const mydata = await data.json();
  //Declaring Variables
  let reqdata = mydata["Info"];
  let object = reqdata;
  let name = "name";
  let videoSrc = "video";
  let about = "about";
  let education = "education";
  let degree = "degree";
  let organization = "organization";
  let year = "year";
  let skillName = "name";
  let skillmore = "more";
  let skillImage = "image";
  let projects = "projects";
  let projectName = "name";
  let projectMore = "more";
  let skills = "skills";
  //Rendering Values in HTML files
  document.querySelector('[data-name="info-name"]').innerHTML = object[name];
  document.querySelector('[data-about="info-about"]').innerHTML = object[about];
  document.querySelector(
    "#video"
  ).innerHTML = `<video class="w-64 rounded" src="${object[videoSrc]}" controls muted autoplay></video>`;
  document.querySelector('[data-degree="degree"]').innerHTML =
    object[education][degree];
  document.querySelector('[data-organization="organization"]').innerHTML =
    object[education][organization];
  document.querySelector('[data-year="year"]').innerHTML =
    object[education][year];
  //Rendering Skills and subskills by using Component
  for (let i = 0; i < object[skills].length; i++) {
    const data = object[skills][i];
    let name = data[skillName];
    let more = data[skillmore];
    let image = data[skillImage];
    createButton(more, name, image);
  }
  //Rendering Projects and it details by using Component
  for (let i = 0; i < object[projects].length; i++) {
    const data = object[projects][i];
    let name = data[projectName];
    let more = data[projectMore];
    project(name, more);
  }
}
