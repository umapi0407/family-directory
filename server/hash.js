import bcrypt from "bcryptjs";

const password = "Suhmialnpga@281004"; // yaha admin ka password likho

const saltRounds = 10;

bcrypt.hash(password, saltRounds).then(hash => {
  console.log("Hashed Password:", hash);
});
