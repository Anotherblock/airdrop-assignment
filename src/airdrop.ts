import { Address } from 'viem';

const RUNS_BEFORE_FAILURE = Math.floor(Math.random() * 8) + 3;

let succesfulRuns = 0;
export async function airdrop(
  receivers: {
    address: Address;
    amount: BigInt;
  }[]
): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (succesfulRuns > RUNS_BEFORE_FAILURE) {
    console.error(
      `Airdrop failed after ${succesfulRuns} runs. Exiting with code 1`
    );
    process.exit(1);
  }

  succesfulRuns++;
}
