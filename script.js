const slider = document.querySelector('.slider');
const totalImages = document.querySelectorAll('.slider img').length;
let index = 0;

function updateSlider(){
    slider.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.control-next').addEventListener('click', () => {
    index = (index + 1) % totalImages;
    updateSlider();
});

document.querySelector('.control-prev').addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages;
    updateSlider();
});

// ✅ Auto slide
setInterval(() => {
    index = (index + 1) % totalImages;
    updateSlider();
}, 5000);

// 

// Product slider buttons
const productContainers = document.querySelectorAll('.Products-sliders');

productContainers.forEach((slider) => {
    const container = slider.querySelector('.Products');
    const nextBtn = slider.querySelector('.product-best-control-next');
    const prevBtn = slider.querySelector('.product-best-control-prev');

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault(); // ✅ Prevent default anchor behavior
        container.scrollLeft += 1000;
    });

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault(); // ✅ Prevent default anchor behavior
        container.scrollLeft -= 1000;
    });
});




