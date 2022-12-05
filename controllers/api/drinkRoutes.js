const router = require('express').Router();
const { Drink } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/add', withAuth, async (req, res) => {
  try {
    const addedDrink = await Drink.update(
    {
      member_id: req.session.member_id,
    },
    {
      where: {
        id: req.body.drinkID
      }
    });

    res.status(200).json(addedDrink);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const drinkData = await Drink.destroy({
      where: {
        // id: req.params.id,
        member_id: req.session.member_id,
      },
    });

    if (!drinkData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(drinkData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
