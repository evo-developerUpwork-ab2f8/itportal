const SoftwareLicence = require('../models/SoftwareLicence');


exports.inventoryhomePage = (req, res) => {
  res.render('inventory');
};

exports.addSoftwareLicence = (req, res, next) => {
  const { name, manufacturer, version } = req.body;
  SoftwareLicence.create({name, manufacturer, version})
    .then((licence) => res.redirect(`/inventory/softwarelicence/${licence._id}`))
    .catch(err => next(err));
};

exports.softwareLicencePage = (req, res, next) => {
  SoftwareLicence.findById(req.params.id)
    .then(licence => {
      res.render('softwareLicence', {licence});
    })
    .catch(err => next(err));
};
