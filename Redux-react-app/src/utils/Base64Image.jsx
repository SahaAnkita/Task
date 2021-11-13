const Base64Image = (props) => {
  const onImageChange = async (e) => {
    props.onChange(await convertBase64(e.target.files[0]));
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div>
      <input
        type="file"
        multiple
        name="image"
        id="file"
        onChange={(e) => onImageChange(e)}
      />
    </div>
  );
};
export default Base64Image;
