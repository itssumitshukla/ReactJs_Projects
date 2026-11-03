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
        return <HabitItem key={habit.id} habit={habit} />;
      })}
    </div>
  );
}

function HabitItem({ habit }) {
  return <h1>Hi</h1>;
}
