function showLargeImage(img) {
    var imgUrl = img.attr("src");
    var modal = document.createElement('div');
    modal.style.display = 'block';
    modal.style.position = 'fixed';
    modal.style.zIndex = '9999';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.backgroundColor = 'rgba(0,0,0,0.7)';
    modal.style.cursor = 'zoom-out';

    modal.onclick = function() {
        modal.parentNode.removeChild(modal);
    };

    var largeImg = document.createElement('img');
    largeImg.src = imgUrl;
    largeImg.style.display = 'block';
    largeImg.style.maxWidth = '90%';
    largeImg.style.maxHeight = '80%';
    largeImg.style.margin = 'auto';
    largeImg.style.position = 'relative';
    largeImg.style.top = '50%';
    largeImg.style.transform = 'translateY(-50%)';
    modal.appendChild(largeImg);
    document.body.appendChild(modal);
}

$(function(){
    $(".image").click(function(){
        var imgSrc = $(this).children("img");
        showLargeImage(imgSrc);
    })
})