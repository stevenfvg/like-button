export function setupCounter(element) {
    let counter = 0;
    const setCounter = count => {
        counter = count;
        //element.innerHTML = `Me gusta <i class="bi bi-hand-thumbs-up-fill"></i> ${counter}`;
        if (counter >= 1) {
            element.innerHTML = `Me gusta <i class="bi bi-hand-thumbs-up-fill"></i> ${counter}`;
            console.log('Total likes: '.concat(counter));
        } else {
            element.innerHTML = `Me gusta <i class="bi bi-hand-thumbs-up-fill"></i>`;
        }
    };
    element.addEventListener('click', () => setCounter(counter + 1));
    setCounter(0);
}
