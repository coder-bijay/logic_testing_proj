"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export const FetchData = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return await response.json();
    },
  });

  if (isPending)
    return (
      <div className="h-[400px] w-full flex items-center justify-center">
        Loading ....
      </div>
    );

  if (error) return "An error has occurred: " + error.message;

  console.log("data :::", data);
  return (
    <div>
      <div className="m-6">
        {isFetching ? (
          "Updating..."
        ) : (
          <>
            {data?.map((item) => (
              <div
                className="shadow-md rounded-md border mb-4 px-6 py-4"
                key={item.id}
              >
                <p>Id: {item?.id}</p>
                <h1 className="font-semibold">title: {item?.title}</h1>
                <p>body: {item?.body}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
