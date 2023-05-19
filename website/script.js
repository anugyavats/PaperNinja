document.addEventListener("DOMContentLoaded", function () {
  var sentenceElement = document.getElementById("sentence");
  var sentenceText = "Slice through academic challenges";
  var index = 0;

  function type() {
    if (index < sentenceText.length) {
      sentenceElement.textContent += sentenceText.charAt(index);
      index++;
      setTimeout(type, 100); // Adjust the typing speed by changing the timeout value (in milliseconds)
    } else {
      // Typing effect complete, remove the sentence after a delay
      setTimeout(removeSentence, 2000); // Adjust the delay before removing the sentence (in milliseconds)
    }
  }

  function removeSentence() {
    sentenceElement.textContent = "";
    index = 0;
    setTimeout(type, 2000); // Adjust the delay before restarting the typing effect (in milliseconds)
  }

  type();

  var getStartedButton = document.getElementById("get-started-button");
  getStartedButton.addEventListener("click", function () {
    window.location.href = "website3.html"; // Open the second page when the button is clicked
  });

  var firstYearFolder = document.querySelector(".folder-name:nth-child(1)");
  firstYearFolder.addEventListener("click", function () {
    window.location.href = "1st-year.html"; // Open the "2nd-year.html" page when the "2nd Year" folder is clicked
  });

  var secondYearFolder = document.querySelector(".folder-name:nth-child(2)");
  secondYearFolder.addEventListener("click", function () {
    window.location.href = "2nd-year.html"; // Open the "2nd-year.html" page when the "2nd Year" folder is clicked
  });

  var thirdYearFolder = document.querySelector(".folder-name:nth-child(3)");
  thirdYearFolder.addEventListener("click", function () {
    window.location.href = "3rd-year.html"; // Open the "2nd-year.html" page when the "2nd Year" folder is clicked
  });

  var fourthYearFolder = document.querySelector(".folder-name:nth-child(4)");
  fourthYearFolder.addEventListener("click", function () {
    window.location.href = "4th-year.html"; // Open the "2nd-year.html" page when the "2nd Year" folder is clicked
  });
});
