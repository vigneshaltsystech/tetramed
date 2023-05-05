const use = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

const handle = (err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
};

module.exports = { use, handle };
