function superbowlWin(array) {
  const x = array.find(season => season.result === "W");
  // console.log(x);
  return x ? x.year : undefined;
}
