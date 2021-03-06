const PurchaseOrder = require('../models/PurchaseOrder');
const Capex = require('../models/CapitalReq');


exports.getDocuments = async (req, res) => {
  const poPromise = await PurchaseOrder.find();
  const capexPromise = await Capex.find();
  console.log(Capex);
  const [po, capex] = await Promise.all([poPromise, capexPromise]);
  res.render('documents/index', {po, capex});
};

/* =============================== Start Purchase Order ============================== */
// --> get All Purchase Orders
exports.allPurchaseOrders = (req, res, next) => {
  PurchaseOrder.find({})
      .then(po => {
        res.render('allPurchaseOrdersPage', {po});
      })
      .catch(err => next(err));
};

// --> get add po form page
exports.createPurchaseOrder = (req, res, next) => {
  res.render('createPurchaseOrder');
};

// --> Add a PO
exports.addPurchaseOrder = (req, res, next) => {
  const {
    company, department,
    purchase_order_number,
    supplier, order_items,
    supplier_address,
    supplier_reference,
    supplier_contact,
    postage_packaging,
    sub_total, vat, total,
    additional_notes,
    employee_signature_date,
    line_manage_signature_date,
    managing_director_signature_date,
    nominal_code
  } = req.body;

  PurchaseOrder.create({
    company, department,
    purchase_order_number,
    supplier, order_items,
    supplier_address,
    supplier_reference,
    supplier_contact,
    postage_packaging,
    sub_total, vat, total,
    additional_notes,
    employee_signature_date,
    line_manage_signature_date,
    managing_director_signature_date,
    nominal_code
  }).then(po => {
    res.redirect(po.url);
  })
    .catch(err => next(err));
}


// --> Get PO page
exports.getPurchaseOrder = (req, res, next) => {
  PurchaseOrder.findById(req.params.id)
    .then(po => {
      res.render('purchaseOrder', {po});
    })
    .catch(err => next(err));
};

/* =============================== End Purchase Order ============================== */

/* =============================== Start Capital Form ============================== */
// --> get All Purchase Orders
exports.allPurchaseRequests = (req, res, next) => {
  Capex.find({})
    .then(capex => {
      res.render('allPurchaseRequestsPage', {capex});
    })
    .catch(err => next(err));
};

// --> get the add purchase request form page
exports.createCapex = (req, res, next) => {
  res.render('createCapex');
};

exports.addCapex = (req, res, next) => {
  const {
    company, department,
    description_of_goods,
    price_excl_vat, supplier,
    project, reason_for_purchase,
    div_manager_sign,
    div_manager_sign_date,
    finance_dir_sign,
    finance_dir_sign_date,
    managing_dir_sign,
    managing_dir_sign_date,
    order_number,
    sage_n_code
  } = req.body;

  Capex.create({
    company, department,
    description_of_goods,
    price_excl_vat, supplier,
    project, reason_for_purchase,
    div_manager_sign,
    div_manager_sign_date,
    finance_dir_sign,
    finance_dir_sign_date,
    managing_dir_sign,
    managing_dir_sign_date,
    order_number,
    sage_n_code
  }).then(result => {
    res.redirect(result.url);
  })
    .catch(err => next(err));
}


exports.getCapexPage = (req, res, next) => {
  Capex.findById(req.params.id)
    .then(val => {
      res.render('capexPage', {val});
    })
    .catch(err => next(err));
};

/* =============================== End Capital Form ============================== */
