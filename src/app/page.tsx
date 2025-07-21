import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="*:font-sans p-4 w-screen h-screen overflow-hidden bg-stone-100 dark:bg-stone-900">
      <main className="w-full h-full bg-white dark:bg-black border border-stone-200 dark:border-stone-800 shadow-md rounded-xl p-4">
        <h1 className="font-semibold tracking-tighter text-gray-900 dark:text-gray-100 text-5xl mb-2">
          Cool looking UI components
        </h1>
        <p className=" text-gray-600 dark:text-gray-400 tracking-tight text-lg font-medium text-pretty">
          If you like something, simply copy the code and paste it into your
          project. Customize it to fit your needs.
        </p>

        <div className="mt-10">
          <h2 className="font-semibold tracking-tight text-2xl dark:text-gray-100 mb-5">
            Button
          </h2>
          <div className="flex items-center gap-20">
            <div className="flex flex-col items-center gap-6">
              <Button>Click me</Button>
              <p className="text-xs text-gray-500 tracking-tight font-medium">
                Default button - Double walled
              </p>
            </div>
            <div className="flex flex-col items-center gap-6">
              <Button color="accent">Click me</Button>
              <p className="text-xs text-gray-500 tracking-tight font-medium">
                Accent button - Double walled
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-semibold tracking-tight text-2xl dark:text-gray-100 mb-5">
            Input
          </h2>
          <div>
            <p className="text-gray-500 font-medium tracking-tight">
              Coming soon...
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-semibold tracking-tight text-2xl dark:text-gray-100 mb-5">
            Dialog
          </h2>
          <div>
            <p className="text-gray-500 font-medium tracking-tight">
              Coming soon...
            </p>
          </div>
        </div>

        <footer className="text-center text-sm text-gray-500 flex flex-col gap-2 mt-20">
          <div>
            Built by{" "}
            <a
              href="https://x.com/aditya_vinodh"
              target="_blank"
              className="font-semibold text-gray-600 dark:text-gray-400"
            >
              Aditya Vinodh
            </a>
          </div>
          <div>
            Inspired by{" "}
            <a
              className="font-semibold text-gray-600 dark:text-gray-400"
              href="https://shadcn.com"
              target="_blank"
            >
              shadcn
            </a>{" "}
            and{" "}
            <a
              href="https://emilkowal.ski"
              className="font-semibold text-gray-600 dark:text-gray-400"
              target="_blank"
            >
              Emil Kowalski
            </a>
          </div>
        </footer>
      </main>
      <div className="absolute top-0 right-0 -translate-x-8 translate-y-8">
        <ModeToggle />
      </div>
    </div>
  );
}
