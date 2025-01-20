import Image from "next/image";
import Link from "next/link";
import { CopyContent } from "../components/CopyContent";

const content = `const metadata: Metadata = {
  title: "Your Project Title",
  description: "Project Description",
  openGraph: {
    title: "Title to show in shared link",
    description: "Description to show in shared link",
    images: [
      {
        url: "/assets/testing_image.jpg", // image to show in thumbnail of shared link
        width: 600,
        height: 600,
        alt: "Description of the image",
      },
    ],
  },
};`;
export const SharedLinkPreview = () => {
  const links = [
    {
      title: "youtube",
      url: "https://www.youtube.com",
      description: "this is the testing description of youtube",
    },
    {
      title: "google",
      url: "https://www.google.com",
      description: "this is the testing description of google",
    },
    {
      title: "facebook",
      url: "https://www.facebook.com",
      description: "this is the testing description of facebook",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-items-center gap-16">
      <h1 className="font-bold">
        Note: Add the thumbnail, title, description in shared link of any
        projects.
      </h1>

      <Image
        src="/assets/testing_image.jpg"
        alt="abcd"
        width={200}
        height={200}
      />
      <ol>
        {links.map((item) => {
          return (
            <li key={item.title} className="mb-4 list-decimal">
              <h1>{item.title}</h1>
              <h4>{item.description}</h4>
              <Link
                target="_blank"
                href={item.url}
                className="text-blue-700 font-bold underline"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ol>

      <div className="bg-gray-700 rounded-md text-white p-3">
        <div className="flex justify-end">
          <CopyContent content={content} />
        </div>
        <pre>
          <code>{content}</code>
        </pre>
      </div>
    </div>
  );
};
