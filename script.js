const navPasses = ["TKH_KKCF", "NASA_OSTEM"];



document.addEventListener('DOMContentLoaded', function() {
    const userSearch = document.getElementById('accessCode');
    const dropdownMenu = document.getElementById('dropdown-menu');

    const OSTEM = [["Resume", "tkh_thank-you.html"]];
    const KKCF = [
        ["Thank you, TKH", "tkh_thank-you.html"],
        ["Business Idea", "business_idea.html"],
        ["Business Wireframe", "Wireframe Image.PNG"],
        ["KenKen Project", "KenKen/Opening_Page.html"]
    ];
    const LFAM = []; 

    // Map search values to the respective lists
    const data = {
        "NASA_OSTEM": OSTEM,
        "TKH_KKCF": KKCF,
        "L'FAM": LFAM
    };

    userSearch.addEventListener('input', function() {
        const searchValue = userSearch.value.trim().toUpperCase();
        const items = data[searchValue] || [];

        dropdownMenu.innerHTML = '';

        // Clear only dynamically added dropdown items, not the existing ones
        const dynamicItems = dropdownMenu.querySelectorAll('.dropdown-item.dynamic');
        dynamicItems.forEach(item => item.remove());

        // Populate dropdown with matching items
        items.forEach(item => {
            const a = document.createElement('a');
            a.className = 'dropdown-item dynamic'; // Add 'dynamic' class to easily identify and remove later
            a.href = item[1]; // Use the link from the list
            a.textContent = item[0];
            a.target="_blank";
            dropdownMenu.appendChild(a); // Append the new item to the dropdown menu
        });

        // If no items match, you may choose to do something (optional)
        if (items.length === 0 && searchValue.length > 0) {
            // Optionally, show a 'No results found' item
            const a = document.createElement('a');
            a.className = 'dropdown-item dynamic disabled';
            a.href = '#';
            a.textContent = 'No results found';
            dropdownMenu.appendChild(a);
        }
    });
});




function tkhFunction(){
    alert("redirecting you to KenKen");
    window.open('KenKen/Opening_Page.html', '_blank', 'noopener,noreferrer');
}



document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        //toggle active class
        button.classList.toggle('active');

         document.querySelectorAll('.filter-btn').forEach(btn => {
            if (btn !== button) btn.classList.remove('active');
        });
    });
});


document.getElementById('all').addEventListener('click', function() {
    document.querySelectorAll('.professionalEntries, .linkedResumeEntries, .resumeEntries').forEach(function(div) {
        div.style.display = 'block'; // Show all
    });
});

document.getElementById('linked').addEventListener('click', function() {
    document.querySelector('.professionalEntries').style.display = 'none'; 
    document.querySelector('.resumeEntries').style.display = 'none'; 
    document.querySelector('.linkedResumeEntries').style.display = 'block'; 
});

document.getElementById('featured').addEventListener('click', function() {
    document.querySelector('.professionalEntries').style.display = 'none'; 
    document.querySelector('.linkedResumeEntries').style.display = 'none'; 
    document.querySelector('.resumeEntries').style.display = 'block'; 
});