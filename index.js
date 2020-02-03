const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(recordsArr) {
  let result = recordsArr.find(rec => rec.result === "W")
  return !!result ? result.year : undefined
}
