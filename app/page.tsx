import Keypad from './components/Keypad';
import Menu from './components/Menu';

export default function Home() {
  return (
    <div className="max-w-xs mx-auto p-2 min-h-screen flex flex-col justify-center items-center text-center">
      <main className="flex-1 flex flex-col justify-center items-center space-y-4">
        <h1 className="text-lg font-bold text-gray-600">
          Welcome!
        </h1>
        <p className="text-sm text-gray-500 leading-tight">
          It&apos;s a demo page.
        </p>
        <Menu />
        <Keypad />
      </main>
    </div>
  );
}
