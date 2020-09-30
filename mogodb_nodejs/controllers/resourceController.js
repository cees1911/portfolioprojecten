const Resource = require('./../models/resourceModel');

// const resources = JSON.parse(
//   fs.readFileSync(`${__dirname}/../data/resources.json`)
// );
// code als je gebruik wil maken van een file inplaats van de DB
// moet je wel fs require doen

exports.getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find();

    res.status(200).json({
      status: 'sucsess',
      results: resources.length,
      data: {
        resource: resources,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getOneResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    res.status(200).json({
      status: 'sucsess',
      data: {
        resource: resource,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createResource = async (req, res) => {
  try {
    const newResource = await Resource.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        knowledge: newResource,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'invalid data sent!',
    });
  }
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
