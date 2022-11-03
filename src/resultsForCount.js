const MissionUtils = require("@woowacourse/mission-utils");

function resultsForCount(strike, ball, nothing) {
  if (nothing === 3) MissionUtils.Console.print(`낫싱`);
  else if (strike > 0 && ball === 0)
    MissionUtils.Console.print(`${strike}스트라이크`);
  else if (ball > 0 && strike === 0) MissionUtils.Console.print(`${ball}볼`);
  else MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크 `);
}

module.exports = resultsForCount;