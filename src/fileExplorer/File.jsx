import React, { useState } from 'react';

const File = () => {
    const [fileContent, setFileContent] = useState("");
    const [fileType, setFileType] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const content = e.target.result;
            setFileContent(content);
            setFileType(file.type);
        };
        reader.readAsDataURL(file);
    };

    const handleDelete = () => {
        setFileContent(null);
        setFileType(null);
    };

    return (
        <div>
            <h1>File Upload and Display</h1>
            <input type="file" name="" id="" onChange={handleFileChange} />
            <div>
                {fileContent && <iframe src={fileContent} frameBorder="0"></iframe>}
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default File;
