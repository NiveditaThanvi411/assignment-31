function changeImage(num) {
    const mainImage = document.getElementById('Images');

    if (num == 0) {
        mainImage.src = "image 1.jpg";
    }
    else if (num == 1) {
        mainImage.src = "image 2.jpg";
    }
    else if (num == 2) {
        mainImage.src = "image 3.jpg";
    }
    else if (num == 3) {
        mainImage.src = "image 4.jpg";
    }
    else if (num == 4) {
        mainImage.src = "image 5.jpg";
    }
}