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
    }
  });
}

function validate() {
  let form = document.forms["formm"];
  let errorbox = document.querySelector(".error-message");
  let textField = document.querySelector("textarea");

  const errorMessages = [];

  if (form["name"].value == "") {
    errorMessages.push("Name is Required |");
  }

  if (form["emne"].value == "") {
    errorMessages.push("Emne is Required |");
  }

  if (form["mail"].value == "") {
    errorMessages.push("Mail is Required |");
  } else {
    var emaildotdkvalidering = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[dk]{2,}$/;
    if (!emaildotdkvalidering.test(form["mail"].value)) {
      errorMessages.push(
        "Please enter a valid email address that ends with .dk |"
      );
    }
  }

  if (textField.value.length > 250) {
    console.log("hej");
    errorMessages.push("Max words is reached!! max words is (250) |");
  }

  if (errorMessages.length != 0) {
    errorbox.classList.add("show");
    errorbox.innerText = errorMessages.toString();
    return false;
  }

  return false;
}

console.log("hej");

let selectedImage = "";

const bill = document.querySelectorAll(".thumbnail");

for (let index4 = 0; index4 < bill.length; index4++) {
  bill[index4].addEventListener("click", (data) => {
    console.log(data.target.src);
    changeImg(data.target.src.replace());
    billCheck(data.target);
  });
}

function changeImg(url) {
  document.getElementById("largeImg").setAttribute("src", url);
}

function billCheck(clickedElement) {
  if (selectedImage) {
    selectedImage.style.border = "none";
  }
  selectedImage = clickedElement;
  selectedImage.style.border = "4px #d1ad53 solid";
}

function burgerMenu() {
  document.querySelector("nav").classList.toggle("active");
}
