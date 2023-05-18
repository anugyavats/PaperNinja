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
});
