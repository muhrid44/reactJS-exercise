import React from "react";

const HomeFooter = (props) => {
  return (
    <div className="mt-[190px]">
    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900 fixed bottom-0 inset-x-0 1xl:">
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="text-center block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="/" class="hover:underline">
          Work For Live™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
    </div>
  );
};

export default HomeFooter;
