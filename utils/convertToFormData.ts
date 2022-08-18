export default function covertToFormData(data: {[key: string]: any}) {
  const formData = new FormData();
  Object.keys(data).forEach((item: string) => {
    if (data[item])
      formData.append(item, data[item]);
  });
  return formData;
}
