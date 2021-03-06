function changeActive(id, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      array[i].active = true;
    } else {
      array[i].active = false;
    }
  }
  return array;
}

export default changeActive;
