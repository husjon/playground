"use server";
function generateSession() {
  // Create session in DB
  const sessionId = crypto.randomUUID();
}

export async function rollDice() {
  return (crypto.getRandomValues(new Uint32Array(1))[0] % 6) + 1;
}
