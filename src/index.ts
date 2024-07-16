import db from "./db";
import { users, User } from "./models/User";
import { recipes, Recipe } from "./models/Recipe";

const fetchUsers = async () => {
  const allUsers: User[] = await db.select().from(users).execute();
  console.log(allUsers);
};

const fetchRecipes = async () => {
  const allRecipes: Recipe[] = await db.select().from(recipes).execute();
  console.log(allRecipes);
};

const main = async () => {
  await fetchUsers();
  await fetchRecipes();
};

main()
  .catch(console.error)
  .finally(() => process.exit());
