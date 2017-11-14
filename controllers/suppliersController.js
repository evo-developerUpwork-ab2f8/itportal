const Supplier = require('../models/Supplier');

exports.suppliersList = (req, res, next) => {
  Supplier.find({})
    .then(suppliers => {
      res.render('suppliers', {suppliers})
    })
    .catch(err => next(err));
};

exports.addSupplier = (req, res, next) => {
  const {
    name, address,
    city, state,
    country, zip,
    contact_name,
    phone, fax,
    email, url,
    notes, img
  } = req.body;

  Supplier.create({
    name, address,
    city, state,
    country, zip,
    contact_name,
    phone, fax,
    email, url,
    notes, img
  }).then(supplier => {
    res.redirect(`/supplier/${supplier._id}`);
  })
    .catch(err => next(err));
}


exports.getSupplierPage = (req, res, next) => {
  Supplier.findById(req.params.id)
    .then(supplier => {
      res.render('supplierPage', {supplier});
    })
    .catch(err => next(err));
};
