    const quotes = [
      "Believe you can and you're halfway there.",
      "Your time is limited, so don't waste it living someone else's life.",
      "Stay hungry, stay foolish.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "Don’t watch the clock; do what it does. Keep going.",
      "The best way to predict the future is to create it.",
      "You miss 100% of the shots you don’t take.",
      "Dream big. Start small. Act now.",
      "It always seems impossible until it’s done.",
      "Act as if what you do makes a difference. It does.",
      "A focused mind is louder than a crowded room.",
      "Confidence isn’t thinking you’re better—just knowing you belong.",
      "Your energy introduces you before you speak.",
      "The strongest flex is emotional control.",
      "Clarity doesn’t come from thinking harder—it comes from thinking less.",
      "Dreams work best when you do.",
      "Failure is a bruise, not a tattoo.",
      "Discipline is doing what must be done even when no one's watching.",
      "The grind won’t betray you—if you stay loyal to it.",
      "You don’t need motivation every day. You need commitment.",
    ]

    function generateQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length)
      document.getElementById("quote").textContent = quotes[randomIndex]
    }

    // Show first quote on load
    generateQuote()