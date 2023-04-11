exports.catchError =async (error,res) => {
  const { name, message, stack } = error;
//   console.log(res);
  return res.status(400).send({ status: "error", name, message, stack })
};
