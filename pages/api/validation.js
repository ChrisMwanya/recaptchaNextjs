export default validateCaptcha = (responseKey) => {
  return new Promise((resolve, reject) => {
    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${responseKey}`;

    fetch(url, {
      method: "post",
    })
      .then((response) => response.json())
      .then((googleResponse) => {
        if (googleResponse.success == true) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((err) => {
        console.log(err);
        resolve(false);
      });
  });
};
