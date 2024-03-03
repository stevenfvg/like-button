export function setupCounter(element1, element2, element3) {
    let counter = 0;

    const setCounter = count => {
        counter = count;
        if (counter >= 1) {
            element1.innerHTML = `Me gusta <i class="bi bi-hand-thumbs-up-fill"></i> ${counter}`;
            console.log('Total likes: '.concat(counter));
            element2.style.display = 'inline';
            element3.textContent = `Vite App | ${counter} likes`;
        } else {
            element1.innerHTML = `Me gusta <i class="bi bi-hand-thumbs-up-fill"></i>`;
            element2.style.display = 'none';
            element3.textContent = 'Vite App';
            console.clear();
        }
    };
    element1.addEventListener('click', () => setCounter(counter + 1));
    element2.addEventListener('click', () => setCounter(counter - 1));
    setCounter(0);
}
