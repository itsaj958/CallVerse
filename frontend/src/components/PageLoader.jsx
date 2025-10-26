import React from "react";
import { LoaderIcon } from "lucide-react";
// A simple page loader component to show a loading spinner while data is being fetched

const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" >
      <LoaderIcon className="animate-spin size-10 text-primary" />
    </div>
  );
};
export default PageLoader;