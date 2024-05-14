import { FC } from "react";

type iProps = {
  text: string;
};

const TextTitle: FC<iProps> = (props) => {
  return (
    <h2 className="text-2xl font-bold md:text-1xl md:leading-tight dark:text-gray-900">
      {props.text}
    </h2>
  );
};

const Subtitle: FC<iProps> = (props) => {
  return (
    <p className="mt-1 text-xs text-gray-600 dark:text-gray-600">
      {props.text}
    </p>
  );
};

const LinkText: FC<iProps> = (props) => {
  return (
    <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
      <a
        className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
        href="../examples.html"
      >
        {props.text}
      </a>
    </div>
  );
};

export { TextTitle, Subtitle, LinkText };
