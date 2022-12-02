const router = require('express').Router();
const { Drink, Member } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const drinkData = await Drink.findAll({
      include: [
        {
          model: Member,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const drinks = drinkData.map((drink) => drink.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.status(200).render('homepage', { 
      drinks
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/drink/:id', async (req, res) => {
  try {
    const drinkData = await Drink.findByPk(req.params.id);

    const drink = drinkData.get({ plain: true });

    res.render('drink', {
      ...drink,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/memberProfile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const memberData = await Member.findByPk(user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Drink}],
    });

    const member = memberData.get({ plain: true });

    res.render('memberProfile', {
      ...member,
      // logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/memberProfile");
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect("/member");
  //   return;
  // }

  res.render('signup');
});

module.exports = router;
