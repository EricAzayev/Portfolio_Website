let devNotes = [];

devNotes.push("Note 1: Plan for next update is to improve Project Containers, including obfuscating some information into a dynamically created HTML file so that its presented neatly with pictures. This would allow the user to choose to see the project in detail. \n \nAdditionally, resize left and right content to fit the entire screen, rather than squeezing into the middle. \nCarousel:Add a cover image and border for the carousel so its cleaner. Round the edges of the border");

devNotes.forEach((Note) => {
    console.log(Note);
    console.log("/n");
});





const navPasses = ["TKH_KKCF", "NASA_OSTEM"];



document.addEventListener('DOMContentLoaded', function(){
    const userSearch = document.getElementById('accessCode');
    const dropdownMenu = document.getElementById('dropdown-menu');

    const OSTEM = [["Resume", "tkh_thank-you.html"]];
    const KKCF = [
        ["Thank you, TKH", "tkh_thank-you.html"],
        ["Business Idea", "business_idea.html"],
        ["Business Wireframe", "Wireframe Image.PNG"],
        ["KenKen Project", "KenKen/Opening_Page.html"]
    ]//Double array
    const LFAM = []; 

    // Map search values to the respective lists
    const data = {
        "NASA_OSTEM": OSTEM,
        "TKH_KKCF": KKCF,
        "L'FAM": LFAM
    }; //hashmap

    userSearch.addEventListener('input', function(){
        const searchValue = userSearch.value.trim().toUpperCase();
        const items = data[searchValue] || [];

        dropdownMenu.innerHTML = '';

        // Clear only dynamically added dropdown items, not the existing ones
        const dynamicItems = dropdownMenu.querySelectorAll('.dropdown-item.dynamic');
        dynamicItems.forEach(item => item.remove());

        // Populate dropdown with matching items
        items.forEach(item =>{
            const a = document.createElement('a');
            a.className = 'dropdown-item dynamic'; // Add 'dynamic' class to easily identify and remove later
            a.href = item[1]; // Use the link from the list
            a.textContent = item[0];
            a.target="_blank";
            dropdownMenu.appendChild(a); // Append the new item to the dropdown menu
        });

        if(items.length === 0 && searchValue.length > 0){ //Where html updates are made
            //show a 'No results found' item
            const a = document.createElement('a');
            a.className = 'dropdown-item dynamic disabled';
            a.href = '#';
            a.textContent = 'No results found';
            dropdownMenu.appendChild(a);
        }
    });
});


function tkhFunction(){
    alert("redirecting you to BallSort-KenKen-Sudoku");
    window.open('https://ericazayev.github.io/BallSort-KenKen-and-Sudoku/', '_blank', 'noopener,noreferrer');
}





document.querySelectorAll('.filter-btn').forEach(button =>{
    button.addEventListener('click', () =>{
        //toggle active class
        button.classList.toggle('active');

         document.querySelectorAll('.filter-btn').forEach(btn =>{
            if(btn !== button) btn.classList.remove('active');
        });
    });
});

document.querySelectorAll('.filter-btn2').forEach(button =>{
    button.addEventListener('click', () =>{
        //toggle active class
        button.classList.toggle('active');

         document.querySelectorAll('.filter-btn2').forEach(btn =>{
            if(btn !== button) btn.classList.remove('active');
        });
    });
});

//linkedEntries recentEntries professionalEntries
document.getElementById('all').addEventListener('click', function(){
    document.querySelectorAll('.experience').forEach(function(div){
        div.style.display = 'block';
    });
});

document.getElementById('linked').addEventListener('click', function(){
    document.querySelectorAll('.experience').forEach(el =>{
        if(el.classList.contains('linkedEntries')){
            el.style.display = 'block';
        }else{
            el.style.display = 'none'; 
        }
    });
    console.log("Filtered: Linked Experiences");
});

document.getElementById('recent').addEventListener('click', function(){
    document.querySelectorAll('.experience').forEach(el =>{
        if(el.classList.contains('recentEntries')){
            el.style.display = 'block';  
        }else{
            el.style.display = 'none';  
        }
    });
    console.log("Filtered: Recent Experiences");
});

document.getElementById('allProjects').addEventListener('click', function(){
    document.querySelectorAll('.project').forEach(function(div){
        div.style.display = 'block'; // Show all
    });
});

document.getElementById('solo').addEventListener('click', function(){
    document.querySelectorAll('.project').forEach(el =>{
        if(el.classList.contains('soloProject')){
            el.style.display = 'block';
        }else{
            el.style.display = 'none'; 
        }
    });
    console.log("Filtered: Linked Experiences");
});

document.getElementById('team').addEventListener('click', function(){
    document.querySelectorAll('.project').forEach(el =>{
        if(el.classList.contains('teamProject')){
            el.style.display = 'block';  
        } else{
            el.style.display = 'none';  
        }
    });
    console.log("Filtered: Recent Experiences");
});

