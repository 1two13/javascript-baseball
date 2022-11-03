const MissionUtils = require("@woowacourse/mission-utils");
const pickedNumberByComputer = require("./pickedNumberByComputer");
const enterNumber = require("./enterNumber");

async function game() {
  const COMPUTER = pickedNumberByComputer();
  let threeStrike = false;
  while (!threeStrike) {
    let pickedNumberByUser = await enterNumber("숫자를 입력해주세요 : ");
  }
  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
}

module.exports = game;
