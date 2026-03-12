let myLeads = []
let myLeadsStore = ''
const input = document.getElementById("input")
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("clear-btn")
const leadsUl = document.getElementById("leads-ul")

if(localStorage.getItem('myLeads')) {
  myLeads = JSON.parse(localStorage.getItem('myLeads'));
  renderLeads();
}

inputBtn.addEventListener('click', function() {
    myLeads.push(input.value)
    myLeadsStore = JSON.stringify(myLeads);
    localStorage.setItem('myLeads', myLeadsStore);
    input.value = '';
    renderLeads()
});

clearBtn.addEventListener('click', function() {
  localStorage.removeItem('myLeads');
  myLeads = [];
  renderLeads();
})

function renderLeads() {
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li> <a href='${myLeads[i]}' target='_blank'> ${myLeads[i]} </a> </li>`
    }
    leadsUl.innerHTML = listItems  
}
