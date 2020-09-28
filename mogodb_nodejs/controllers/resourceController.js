const fs = require('fs');

const resources = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/resources.json`)
);

exports.checkID = (req, res, next, val) => {
  console.log(`resource id is : ${val}`)
  if (req.params.id * 1 > resources.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.getAllResources = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'sucsess',
    requestedAt: req.requestTime,
    results: resources.length,
    data: {
      knowledge: resources,
    },
  });
};

exports.getOneResource = (req, res) => {
  const id = req.params.id * 1;

  const resource = resources.find((el) => el.id === id);

  res.status(200).json({
    status: 'sucsess',
    data: {
      knowledge: resource,
    },
  });
};

exports.createResource = (req, res) => {
  const newId = resources[resources.length - 1].id + 1;
  const newResource = Object.assign({ id: newId }, req.body);

  resources.push(newResource);
  fs.writeFile(
    `${__dirname}/data/resources.json`,
    JSON.stringify(resources),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          knowledge: newResource,
        },
      });
    }
  );
};

exports.updateResource = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      resource: '<Updated resource here>',
    },
  });
};

exports.deleteResource = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
