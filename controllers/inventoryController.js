const Software = require('../models/Software');
const Hardware = require('../models/Hardware');

exports.inventoryhomePage = (req, res) => {
  res.render('inventory/inventory');
};


/* Start Software Licences Controllers */

// get all software licences list
exports.softwareList = async (req, res, next) => {
  const software = await Software.find();
  res.render('software', {software});
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
/* End Software Licence Controllers */

/* Start Hardware Controllers */

// get All Hardware Items
exports.hardwareItemsList = (req, res, next) => {

  Hardware.find({})
    .then(hardwareItems => {
      res.render('hardware', {hardwareItems})
    })
    .catch(err => next(err));

};

exports.addHardware = (req, res, next) => {
  const {
    company, asset_tag,
    model, status,
    checkout_to_user,
    checkout_to_asset,
    checkout_to_location,
    serial, asset_name,
    purchase_date, supplier,
    order_number, purchase_cost,
    warranty, notes, img,
    default_location, requestable
  } = req.body;

  Hardware.create({
    company, asset_tag,
    model, status,
    checkout_to_user,
    checkout_to_asset,
    checkout_to_location,
    serial, asset_name,
    purchase_date, supplier,
    order_number, purchase_cost,
    warranty, notes, img,
    default_location, requestable
  })
    .then(hardware => res.redirect(`/inventory/hardware/${hardware._id}`))
    .catch(err => next(err));
};

exports.hardwareItemPage = (req, res, next) => {
  Hardware.findById(req.params.id)
    .then(hardwareItem => {
      res.render('hardwareItem', {hardwareItem})
    })
    .catch(err => next(err));
};

/* End Hardware Controllers */
