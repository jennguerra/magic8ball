//this is the array
const answers = [
    "magic8ball_1.png",
    "magic8ball_2.png",
    "magic8ball_3.png",
    "magic8ball_4.png",
    "magic8ball_5.png",
    "magic8ball_6.png",
    "magic8ball_7.png",
    "magic8ball_8.png",
    "magic8ball_9.png",
    "magic8ball_10.png",
    "magic8ball_11.png",
    "magic8ball_12.png",
    "magic8ball_13.png",
    "magic8ball_14.png",
    "magic8ball_15.png",
    "magic8ball_16.png",
    "magic8ball_17.png",
    "magic8ball_18.png",
    "magic8ball_19.png",
    "magic8ball_20.png"
  ];
  //this is the link to the html id referencing by id answers
  const answer = document.getElementById("answers");
  //this queryselector find the first tag in the html of the img
  const answerImg = answer.querySelector("img");

  //this grabs the div called userinput
  const div = document.getElementById("userInput");
  //this grabs the first input
  const input = div.querySelector("input");
  //this grabs the first button
  const button = div.querySelector("button");
  //this grabs the first ptag
  const paragraph = div.querySelector("p");
  
  //this is the link to the resetbutton
  const resetButton = div.getElementsByTagName("button")[1];
  //the addeventlistener adds the function to the button
  button.addEventListener("click", function () {
    //this creates the text from input field
    const text = input.value;
  
    //makes input field disappear
    input.style.display = "none";
    //makes ask button disappear
    button.style.display = "none";
    //this makes the innerhtml appear after clicking on button
    paragraph.innerText = `You asked: ${text}`;
    paragraph.style.fontSize="50px";
    paragraph.style.color="white";
    //block places button onto new line
    paragraph.style.display = "block";
    //inline block keeps it on same line
    resetButton.style.display = "inline-block";
  });
  //gives button functionality
  button.addEventListener("click", function () {
    //randomizer returns any number from 0-19
    let index = Math.floor(Math.random() * answers.length);
    //this connects file path from array
    const answerSrc = `./img/${answers[index]}`;
    answerImg.src = answerSrc;
  });
  //this adds function to the reset button
  resetButton.addEventListener("click", function () {
    // this makes input field empty 
    input.value = "";
    // this makes the display on oneline
    input.style.display = "inline-block";
    // this puts the button display on one line
    button.style.display = "inline-block";
    // makes the ptag disappear
    paragraph.style.display = "none";
    // this makes the button disappear
    resetButton.style.display = "none";
  });

  //didn't use bootstrap so image does not reset until hitting ask button
  