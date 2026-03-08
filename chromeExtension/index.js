let myLeads = ['greatLeads', 'awesomeLeads', 'goodLeads'];
let listItem = [];

const input = document.getElementById('input');
const leadsUl = document.getElementById('leads-ul');

const inputBtn = document.getElementById('input-btn');
inputBtn.addEventListener('click', function() {
  //myLeads.push();
  for(let i = 0; i < myLeads.length; i++){
    leadsUl.innerHTML += `<li> ${myLeads[i]} </li>`
  }
});


