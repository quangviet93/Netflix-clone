import axios from 'axios';

const uploadToCloudinary = (file, type = 'image') => {
  const formData = new FormData();
  formData.append('folder', `Netflix/${type}s`);
  formData.append('upload_preset', 'px6doewe');
  formData.append('file', file);
  return axios.post(
    'https://api.cloudinary.com/v1_1/quangviet93/upload',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

export default { uploadToCloudinary };
