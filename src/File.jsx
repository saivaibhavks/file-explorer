import { useState } from "react";

const File = ({ data }) => {
  console.log("data", data);

  const [expand, setExpand] = useState(false);

  return (
    <div className="file-content">
      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <div style={{ display: "flex" }}>
                <div>{item.fileName}</div>
                <div>{item.size}</div>
                <div>
                    {item.files ? ">":"\"}
                </div>
              </div>

              {expand && item.files && item.files.length > 0 && (
                <div style={{ marginLeft: "10px" }}>
                  <File data={item.files} />
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default File;
