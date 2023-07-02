let sph = new SpeechSynthesisUtterance();
let v = [];
let vs = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = ()=>{
    v = window.speechSynthesis.getVoices();
    sph.voice = v[0];
    v.forEach((voice,i)=>(vs.options[i] = new Option(voice.name, i)));
}

vs.addEventListener('change', ()=>{
    sph.voice = v[vs.value];
})

document.querySelector('button').addEventListener('click',()=>{
    sph.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(sph);
})