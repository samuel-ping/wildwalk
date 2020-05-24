const router = require("express").Router();
var SpeciesEntry = require("../models/speciesEntry.model");

router.route("/").get((req, res) => {
  SpeciesEntry.find()
    .then((speciesEntry) => res.json(speciesEntry))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const speciesName = req.body.speciesName;
  const photo = req.body.photo;
  const newSpeciesEntry = new SpeciesEntry({ speciesName, photo });

  newSpeciesEntry
    .save()
    .then(() => res.json("Species added to collection!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  SpeciesEntry.findById(req.params.id)
    .then((speciesEntry) => res.json(speciesEntry))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  SpeciesEntry.findByIdAndDelete(req.params.id)
    .then(() => res.json("Entry deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  SpeciesEntry.findById(req.params.id)
    .then((speciesEntry) => {
      speciesEntry.speciesName = req.body.speciesName;
      speciesEntry.photo = req.body.photo;

      speciesEntry
        .save()
        .then(() => res.json("Entry updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
