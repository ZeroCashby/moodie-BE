const mongoose = require("mongoose");

const Project = require("../models/project");

exports.projects_get_all = (req, res, next) => {
  Project.find()
    .select("_id name user")
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        projects: docs.map(doc => {
          return {
            _id: doc._id,
            name: doc.name,
            user: doc.user
          };
        })
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.projects_create_project = (req, res, next) => {
  const project = new Project({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    user: req.body.user
  });

  project.save().then((result) => {
    return res.status(200).json({
      message: `project ${result._id} created`
    })
  }, () => {
    return res.status(200).json({
      message: 'error creating project'
    })
  });

};

exports.projects_get_project = (req, res, next) => {
  Order.findById(req.params.orderId)
    .populate("product")
    .exec()
    .then(order => {
      if (!order) {
        return res.status(404).json({
          message: "Order not found"
        });
      }
      res.status(200).json({
        order: order,
        request: {
          type: "GET",
          url: "http://localhost:3000/orders"
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.projects_delete_project = (req, res, next) => {
  Order.remove({ _id: req.params.orderId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Order deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/orders",
          body: { productId: "ID", quantity: "Number" }
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};
