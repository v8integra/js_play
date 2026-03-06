let count = 0;
let counts = [];

function increment() {
  count++
  document.getElementById("counter").innerText = count;
}

function decrement() {
  if (count === 0) {
    count = 0;
  } else {
    count--
  }
  document.getElementById("counter").innerText = count;
}

function save() {
  counts.push(count);
  let entriesString = 'Previous entires: ';

  for (let i = 0; i < counts.length; i++) {
    if(i === counts.length - 1) {
      entriesString += counts[i];
    } else {
      entriesString += counts[i] + ' - ';
    }
  }

  document.getElementById('save').innerText = entriesString;
}

function clearAll() {
  count = 0;
  counts = [];
  document.getElementById('save').innerText = '';
}
