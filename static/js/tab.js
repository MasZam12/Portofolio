const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

function openAbout() {
  content1.style.transform = "translateX(0)";
  content2.style.transform = "translateX(200%)";
  content3.style.transform = "translateX(200%)";
  button1.style.color = "#0ff590";
  button2.style.color = "#ffff";
  button3.style.color = "#ffff";
}

function openEdu() {
  content1.style.transform = "translateX(200%)";
  content2.style.transform = "translateX(0)";
  content3.style.transform = "translateX(200%)";
  button1.style.color = "#ffff";
  button2.style.color = "#0ff590";
  button3.style.color = "#ffff";
}

function openCertif() {
  content1.style.transform = "translateX(200%)";
  content2.style.transform = "translateX(200%)";
  content3.style.transform = "translateX(0)";
  button1.style.color = "#ffff";
  button2.style.color = "#ffff";
  button3.style.color = "#0ff590";
}
