
export class RewardsProgramService {
  static calculateMonthlyRewardPoints(transactionCost: number): number {
    var regularPoints = 0;
    var doublePoints = 0;

    if (transactionCost > 100) {
      doublePoints = (Math.floor(transactionCost) - 100) * 2;
      regularPoints = 50;
    }

    return regularPoints + doublePoints;
  }
}
