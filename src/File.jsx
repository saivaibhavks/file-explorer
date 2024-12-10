import "./File.css";

const File = ({ data }) => {
  console.log("data", data);
  return (
    <div className="file-container">
      <div className="files-data">
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <div className="files" key={index}>
                <div className="file-name">File Name- {item.fileName}</div>
                <div className="file-size">File Size- {item.size}</div>
                <div className="folder-files">
                  {item.files &&
                    item.files.map((val, id) => {
                      return <File data={val} />;
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default File;
