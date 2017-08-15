let data = require('./data');

module.exports = {
  get: (req, res) => {
    res.status(200).send(data)
  },
  post: (req, res) => {
    data.push(req.body)
    res.status(200).send(data)
  },
  put: (req, res) => {
    data[req.params.index].name = req.params.name;
    res.status(200).send(data);
  },
  delete: (req, res) => {
    data.splice(req.params.index, 1)
    res.status(200).send(data);
  }
}