const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength*34} 65% 50%`
};

//local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: Number(amount),
    color: generateRandomColor(),
  };
  const existBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existBudgets, newItem])
  );
};

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
