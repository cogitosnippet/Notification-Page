let mark = document.getElementById('mark-id');
let number = document.getElementById('number_of_unread_msg');
let unread = document.getElementsByClassName('unread-msg');
let alert = document.getElementsByClassName('unread-alert');


function checking() {
  let unread_array = Array.from(unread);
  for (let index = 0; index < unread_array.length; index++) {
    unread_array[index].classList.replace('unread-msg', 'read-msg');
  }

  for (let index = 0; index < alert.length; index++) {
    alert[index].style.display = "none";
  }
}

const check_unread_msg = () => {
  let unread_msg = document.getElementsByClassName('unread-msg');
  let count = 0;
  for (let index = 0; index < unread_msg.length; index++) {
    count++;
  }
  return count;
}


mark.addEventListener('click', (e) => {
  checking();
  number.innerHTML = check_unread_msg();
})
