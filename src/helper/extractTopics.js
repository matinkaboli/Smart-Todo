const extracter = (a) => {
  let newarry = []
  for (let i = 0; i < a.length; i++) {
    if (a[i].topic !== undefined && !newarry.includes(a[i].topic)) {
      newarry.push(a[i].topic)
    }
  }
  return newarry
}
export default extracter
