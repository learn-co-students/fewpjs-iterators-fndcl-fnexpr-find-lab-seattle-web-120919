const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let result = record.find(e => {return e.result == "W"})
  if (result) {
    return result.year
  } else {
    return undefined
  }
}