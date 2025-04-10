function SendDataAndReleaseConnection(res, data, pool) {
  res.send(data)
}

module.exports = {
  SendDataAndReleaseConnection
};