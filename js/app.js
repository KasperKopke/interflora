const faqs = document.querySelectorAll(".faq-box");

console.log(faqs);

for (let index = 0; index < faqs.length; index++) {
  console.log(faqs[index]);
  faqs[index].addEventListener("click", (data) => {
    console.log(data.target);

    let parentSection;

    if (
      data.target.classList.contains("a") ||
      data.target.classList.contains("heading") ||
      data.target.classList.contains("p")
    ) {
      console.log("jeg trykkede på en af dem");

      parentSection = data.target.parentNode.parentNode;
    } else {
      parentSection = data.target.parentNode;
    }

    parentSection.classList.toggle("active");
  });
}

const tess = document.querySelectorAll("#testt");

for (let index2 = 0; index2 < tess.length; index2++) {
  tess[index2].addEventListener("click", (data) => {
    let parentSection2;

    if (data.target.tagName === "BUTTON") {
      parentSection2 = data.target.closest("section");
    }

    if (parentSection2) {
      parentSection2.classList.toggle("active");
      fun(parentSection2);
    }
  });
}

function fun(parentSection2) {
  if (parentSection2.classList.contains("active")) {
    document.getElementById("testbtn").innerHTML = "Vis Mindre";
  } else {
    document.getElementById("testbtn").innerHTML = "Vis Mere";
  }
}
