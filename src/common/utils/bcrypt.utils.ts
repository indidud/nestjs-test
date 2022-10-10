import * as bcrypt from 'bcrypt';

export async function hash(string: string): Promise<string> {
  const salt = await bcrypt.genSalt();

  return bcrypt.hash(string, salt);
}

export async function compare(string: string, hash: string): Promise<boolean> {
  return bcrypt.compare(string, hash);
}
