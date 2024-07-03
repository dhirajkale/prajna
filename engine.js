const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning ");
    }

    else if(hr == 12) {
        speak("Good noon ");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon ");
    }

    else {
        speak("Good Evening ");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating PRAJNA");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('why were you created')) {
        const finalText = "to destroy this earth";
        speech.text = finalText;
    }

    else if(message.includes('who created you')) {
        const finalText = " Dhiraj ";
        speech.text = finalText;
    }

    else if(message.includes('what does your name mean')) {
        const finalText = " it is a sanskrit word which means highest level of intelligence ";
        speech.text = finalText;
    }


    else if(message.includes('name')) {
        const finalText = "My name is PRAJNA";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('open whatsapp')) {
        window.open("https://web.whatsapp.com/", "_blank");
        const finalText = "Opening whatsapp";
        speech.text = finalText;
    }

    else if(message.includes('open linkedin')) {
        window.open("https://in.linkedin.com/", "_blank");
        const finalText = "Opening linkedin";
        speech.text = finalText;
    }

    else if(message.includes('open github')) {
        window.open("https://github.com/", "_blank");
        const finalText = "Opening github";
        speech.text = finalText;
    }
    
    else if(message.includes('open youtube')) {
        window.open("https://www.youtube.com/", "_blank");
        const finalText = "Opening youtube";
        speech.text = finalText;
    }

    else if(message.includes('open twitter')) {
        window.open("https://x.com/?lang=en", "_blank");
        const finalText = "Opening twitter";
        speech.text = finalText;
    }

    else if (message.includes('open mail')) {
        window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
        const finalText = "Opening mail";
        speech.text = finalText;
    }
    
    else if (message.includes('news')) {
        window.open("https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en", "_blank");
        const finalText = "Opening news";
        speech.text = finalText;
    }

    else if (message.includes('open maps')||message.includes('maps')){
        window.open("https://www.google.com/maps", "_blank");
        const finalText = "Opening maps";
        speech.text = finalText;
    }

    else if(message.includes('drive')|| message.includes('open drive')){
        window.open("https://drive.google.com/drive/u/0/my-drive", "_blank");
        const finalText = "Opening drive";
        speech.text = finalText;
    
    }
    else if (message.includes('open documents')||message.includes('docs')){
        window.open("  https://docs.google.com/document/?usp=docs_alc&authuser=0 ", "_blank");
        const finalText = "Opening documents";
        speech.text = finalText;
    }
    else if (message.includes('open sheets')||message.includes('sheets')){
        window.open("https://docs.google.com/spreadsheets/?usp=docs_alc&authuser=0", "_blank");
        const finalText = "Opening sheets";
        speech.text = finalText;
    }

    else if (message.includes('open chat')||message.includes('chat')||message.includes('open workspace')){
        window.open("https://chat.google.com/?authuser=0", "_blank");
        const finalText = "Opening chat";
        speech.text = finalText;
    }

    else if (message.includes('open password')||message.includes('password')||message.includes('i forgot my password')){
        window.open("https://passwords.google.com/?utm_source=OGB&utm_medium=AL&authuser=0", "_blank");
        const finalText = "Opening passwords";
        speech.text = finalText;
    }
    

    


    
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

 

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}


