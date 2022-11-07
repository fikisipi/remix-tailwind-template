export default function Index() {
  return (
      <div className={"text-white bg-[#121212] h-[100vh]"}>
          <div className={"container mx-auto font-sans font-bold text-3xl py-10"}>
              Welcome to the <span className={"text-[#FECC29]"}>modern framework </span>
              Remix.

              <a href={"https://remix.run/docs/en/v1"} className={"block mt-10 bg-blue-500 text-lg font-semibold px-4 py-2"}>Get started</a>
          </div>
      </div>
  );
}
