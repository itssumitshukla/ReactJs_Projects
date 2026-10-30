import { Button } from "./components/Button";

export default function App() {
  return (
    <div className="max-w-2x1 mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HabitForm />
    </div>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Habit Tracker</h1>
        <span className="text-zinc-400 text-sm">1 / 1 done Today</span>
      </div>
      <div></div>
      <div className="flex flex-col gap-1">
        <span className="text-zinc-400 text-sm">April 6 - April 12 </span>
        <div className="flex items-center gap-3">
          <Button />
          <Button />
        </div>
      </div>
    </header>
  );
}

function HabitForm() {
  return true;
}
