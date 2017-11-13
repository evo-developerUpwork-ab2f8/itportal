const SoftwareLicence = require('../models/SoftwareLicence');


exports.inventoryhomePage = (req, res) => {
  res.render('inventory');
};

exports.addSoftwareLicence = (req, res, next) => {
  const {
    software_name, manufacturer,
    product_key, seats,
    company, licenced_to_name,
    licenced_to_email, reassignable,
    supplier, order_number, purchase_cost,
    purchase_date, expiration_date,
    termination_date, purchase_order_number,
    depreciation, maintained, notes
  } = req.body;

  SoftwareLicence.create({
    software_name, manufacturer,
    product_key, seats,
    company, licenced_to_name,
    licenced_to_email, reassignable,
    supplier, order_number,
    purchase_cost, purchase_date,
    expiration_date, termination_date,
    purchase_order_number,
    depreciation, maintained, notes
  })
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
