Ficha = require('../models/').Ficha;
// CRUD Operations for Ficha Model
module.exports= {
  index(req, res) {
    Ficha.findAll({
        where: {
        	autor: req.params.id
        }
    })
      .then(function (Fichas) {
        res.status(200).json(Fichas);
      })
      .catch(function (error) {
        console.log(error)
        res.status(500).json(error);
      });
  },

  show(req, res) {
    Ficha.findAll({
        where: {
          id: req.params.id
        }
    })
    .then(function (Ficha) {
      res.status(200).json(Ficha);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  create(req, res) {
    // res.status(200).json(req.body);
    Ficha.create(req.body)
      .then(function (newFicha) {
        res.status(200).json(newFicha);
      })
      .catch(function (error){
        res.status(500).json(error);
      });
  },

  update(req, res) {
    Ficha.update(req.body, {
      where: {
        id: req.body.id
      }
    })
    .then(function (updatedRecords) {
      res.status(200).json(updatedRecords);
    })
    .catch(function (error){
      console.log(error)
      res.status(500).json(error);
    });
  },

  delete(req, res) {
    console.log(req.params)
    Ficha.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedRecords) {
      res.status(200).json(deletedRecords);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }
};