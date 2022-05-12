export default function nextScreen(curr, next) {
    document.querySelector(`.${curr}`).classList.add('hidden'); 
    document.querySelector(`.${next}`).classList.remove('hidden'); 
}