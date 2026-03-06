let count = 0;

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
  alert('hello save');
}
