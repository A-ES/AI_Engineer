import { autoResizeTextarea, setLoading } from "./utils.js";

// Get UI elements
const giftForm = document.getElementById("gift-form");
const userInput = document.getElementById("user-input");
const outputContent = document.getElementById("output-content");

function start() {
  userInput.addEventListener("input", () => autoResizeTextarea(userInput));
  giftForm.addEventListener("submit", handleGiftRequest);
}

async function handleGiftRequest(e) {
  e.preventDefault();

  const userPrompt = userInput.value.trim();
  if (!userPrompt) return;

  setLoading(true);

  try {

    const response = await fetch('/api/gift',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({userPrompt})
    })
    const data = await response.json();
    console.log(data);

    outputContent.textContent = "Replace me with the server response!";
  } catch (error) {
    console.error(error);
    outputContent.textContent = "Something went wrong. Check the console.";
  } finally {
    setLoading(false);
  }
}

start();
