const router = require('express').Router();
const { Member } = require('../../models');

router.post('/signup', async (req, res) => {
  try {
    const memberData = await Member.create(req.body);

    req.session.save(() => {
      req.session.member_id = memberData.id;
      req.session.logged_in = true;

      res.status(200).json(memberData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const memberData = await Member.findOne({ where: { email: req.body.email } });

    if (!memberData) {
      res
        .status(400)
        .json({ message: 'Incorrect email, please try again' });
        
      return;
    }

    const validPassword = await memberData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });

      return;
    }

    req.session.save(() => {
      req.session.member_id = memberData.id;
      req.session.logged_in = true;
      
      res.json({ member: memberData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    console.log("Logout Clicked");
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;