import { Alert, Button, FileInput, Select, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import uploadFile from "../utils/uploadFile";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({});
  const [imageUploading, setImageUploading] = useState(false);
  const [imageUploadingError, setImageUploadingError] = useState(null);
  const [publishError, setPublishError] = useState(null)
  const [publishLoading, setPublishLoading] = useState(false)

  const handleUploadImage = async () => {
    if (file) {
      try {
        setImageUploading(true);
        const uploadPhoto = await uploadFile(file);
        console.log("🚀 ~ handleUploadImage ~ uploḁdPhoto:", uploadPhoto)
        setFormData({ ...formData, image: uploadPhoto?.url });
      } catch (error) {
        console.log("uploadImage error : ", error);
        imageUploadingError(error.message);
      } finally {
        setImageUploading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    console.log("form data :- ", formData);
    e.preventDefault();

    setPublishError(null)
    setPublishLoading(true);

    try {
      const res = await fetch(`http://localhost:3000/api/post/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await res.json();

      console.log("data", data);

      if (data.status === "success") {
        setFormData({});
        navigate(`/post/${data.post.slug}`);
      }

      if (data.status === "error") {
        setPublishError(data.message)
      }

    } catch (error) {
      console.log("create post error : ",error)
      setPublishError('Something went wrong');
    } finally {
      setPublishLoading(false)
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            className="flex-1"
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
          />
          <Select
            onChange={(e) => {
              setFormData({ ...formData, category: e.target.value });
            }}
          >
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
            <option value="node">Node</option>
            <option value="mongodb">MongoDB</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 p-3 border-dotted">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={handleUploadImage}
          >
            {imageUploading ? (
              <>
                <Spinner size="sm" /> Uploading...
              </>
            ) : (
              "Upload image"
            )}
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="write something..."
          className="h-72 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button type="submit" gradientDuoTone="purpleToPink" disabled={publishLoading}>
        {publishLoading ? (
              <>
                <Spinner size="sm" className="mr-1" /> Publishing...
              </>
            ) : (
              "Publish"
            )}
          
        </Button>
        {publishError && <Alert color="failure" className="mt-s" >{publishError}</Alert>}
      </form>
    </div>
  );
};

export default CreatePost;
