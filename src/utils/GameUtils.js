function setUpGame() {
  let setUp = [];

  for (var i = 0; i <= 20; i++) {
    setUp[i] = null
  }
  setUp[6]  = "14";
  setUp[13]  = "7";
  setUp[20] = "Cheers, Governor!";

  return setUp
}

export default {setUpGame}
