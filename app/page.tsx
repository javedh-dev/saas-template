import ColorModeToggle from "@/components/theme_toggle";
import { Ysabeau } from "next/font/google";

const ysabeau = Ysabeau({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-4xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          A boilerplate template for your SaaS idea
        </p>
        {/* <ColorModeToggle/> */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/javedh-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <span className="text-emerald-700">Javed Hussain</span>
          </a>
        </div>
        
      </div>

      <div
        className={
          ysabeau.className + " relative flex place-items-baseline gap-4"
        }
      >
        <span className="text-fuchsia-800 text-6xl font-bold">SaaS</span>
        <span className="text-yellow-300 text-2xl font-bold">Template</span>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <a href="#" className="chip">
          Next.js
        </a>
        <a href="#" className="chip">
          Apollo Server
        </a>
        <a href="#" className="chip">
          Apollo Client
        </a>
        <a href="#" className="chip">
          GraphQl
        </a>
        <a href="#" className="chip">
          Postgres
        </a>
        <a href="#" className="chip">
          Prisma
        </a>
        <a href="#" className="chip">
          Typescript
        </a>
        <a href="#" className="chip">
          Chakra UI
        </a>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="/graphql"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            GraphQL{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore graphql using apollo studio locally
          </p>
        </a>
        <a
          href="/demo"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Demo{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            End-to-End demo of the application using Chakra UI an tailwind css
          </p>
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Authentication{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Check authentication for app using Firebase Authentication
          </p>
        </a>
      </div>
    </main>
  );
}
