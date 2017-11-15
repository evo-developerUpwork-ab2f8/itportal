const Software = require('../models/Software');
const Hardware = require('../models/Hardware');

exports.inventoryhomePage = (req, res, next) => {
  Promise.all([Hardware.find({}), Software.find({})])
    .then(result => {
      res.render('inventory/inventory', {hardware: result[0], software: result[1]});
    })
    .catch(err => next(err))
};


/* Start Software Licences Controllers */

// get all software licences list
exports.softwareList = async (req, res, next) => {
  const software = await Software.find();
  res.render('software', {software});
};

// get the add licence form page
exports.getAddSoftwareLicence = (req, res, next) => {
  res.render('addLicence');
};

// add the software licence to the db
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

  Software.create({
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
    .then((licence) => res.redirect(licence.url))
    .catch(err => next(err));
};

exports.softwareLicencePage = (req, res, next) => {
  Software.findById(req.params.id)
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

// get the add hardware form Page
exports.getAddHardware = (req, res, next) => {
  res.render('addHardware');
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
    .then(hardware => res.redirect(hardware.url))
    .catch(err => next(err));
};

exports.hardwareItemPage = (req, res, next) => {
  Hardware.findById(req.params.id)
    .then(hardwareItem => {
      res.render('hardwareItem', {hardwareItem})
    })
    .catch(err => next(err));
};
