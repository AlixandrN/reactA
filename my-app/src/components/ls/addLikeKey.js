function addLikeKey(currentPerson, currentMovie) {
  if (localStorage.getItem(currentPerson) === null) {
    let arr = [];
    arr.push(currentMovie);
    localStorage.setItem(currentPerson, JSON.stringify(arr));
  } else {
    let arr = JSON.parse(localStorage.getItem(currentPerson));
    arr.push(currentMovie);
    localStorage.setItem(currentPerson, JSON.stringify(arr));
  }
}

export default addLikeKey;
