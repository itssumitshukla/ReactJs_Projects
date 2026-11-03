export function HabitList() {
  const habits = [
    {
      id: 1,
      name: "hi",
    },
    {
      id: 2,
      name: "Bye",
    },
  ];

  if (habits.length === 0) {
    return (
      <p className="text-center text-zinc-500 py-12">
        No habits yet. Add one above
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {habits.map((habit) => {
        return <h1 key={habit.id}>{habit.name}</h1>;
      })}
    </div>
  );
}
