import bcrypt from 'bcryptjs';

async function generateHash(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

async function main() {
  const passwords = {
    admin: 'admin123',
    organizer: 'organizer123',
    judge: 'judge123',
    presenter: 'presenter123',
    attendee: 'attendee123'
  };

  for (const [role, password] of Object.entries(passwords)) {
    const hash = await generateHash(password);
    console.log(`${role}: ${hash}`);
  }
}

main().catch(console.error); 