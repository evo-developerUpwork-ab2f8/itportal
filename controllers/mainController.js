exports.dashPage = (req, res) => {
  res.render('index');
};

exports.requestPage = (req, res) => {
  res.render('request');
};

exports.adminPage = (req, res) => {
  res.render('admin/index');
};