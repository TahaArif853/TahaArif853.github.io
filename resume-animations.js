document.addEventListener("DOMContentLoaded", function() {
    
    function addHoverAnimation(element, hoverColor, hoverScale = 1.1) {
        element.addEventListener("mouseover", function() {
            element.style.transition = "all 0.3s ease-in-out";
            element.style.transform = `scale(${hoverScale})`;
            element.style.color = hoverColor; // Change text color on hover
        });

        element.addEventListener("mouseout", function() {
            element.style.transform = "scale(1)";
            element.style.color = ""; 
        });
    }

   
    const headers = document.querySelectorAll("h1, h2, h3");
    headers.forEach(function(header) {
        addHoverAnimation(header, "#000000"); 
    });

    
    const listItems = document.querySelectorAll("li");
    listItems.forEach(function(item) {
        addHoverAnimation(item, "#3498db"); 
    });
});
