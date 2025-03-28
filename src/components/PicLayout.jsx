import React from "react";

function PicLayout({ src }) {
  return (
    <div className="w-fit">
      <div className="overflow-y-hidden overflow-x-scroll aspect-square">
        <img src={src} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default PicLayout;
