import Link from "next/link";

export default function Home() {
  const links = [
    {
      title: "Youtube",
      url: "www.youtube.com",
      description: "this is the testing description of youtube",
    },
    {
      title: "google",
      url: "www.google.com",
      description: "this is the testing description of google",
    },
    {
      title: "facebook",
      url: "www.facebook.com",
      description: "this is the testing description of facebook",
    },
  ];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1> Hello from home</h1>
      <ol>
        {links.map((item) => {
          return (
            <li key={item.title} className="mb-4 list-decimal">
              <h1>{item.title}</h1>
              <h4>{item.description}</h4>
              <Link
                href={item.url}
                className="text-blue-700 font-bold underline"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
