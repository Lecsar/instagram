module.exports = {
  createID: () => Math.round(Math.random() * 10000),
  sendError: (res, error) => res.status(500).send(error),
  sendSuccessResult: (res, data) => res.status(200).send(data),
  sendNotFound: (res, sendedData = {}) => res.status(404).send(sendedData)
};
