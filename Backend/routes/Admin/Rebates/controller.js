const Express = require('../../../serviceHost').Express
const router = Express.Router();
const getrebate = require('./getRebate');
const getRebates = require('./getRebates');
const updateRebate = require('./updateRebates');
const deleteRebate = require('./deleteRebates');
const addRebate = require('./addRebates');


router.get('/', async (req, res) => {
  try {
    if (req.decoded.role != '1' || req.decoded.role != '2') {
      res.send({ message: 'Unauthorized user' })
    } else {
      await getrebate.get(req).then((data) => {
        res.send(data);
      }).catch((err) => {
        res.send(err);
      })
    }
  } catch (error) {
    res.status(400).send(err);
  }
})

router.get('/:rebate_id', async (req, res) => {
  try {
    if (req.decoded.role != '1' || req.decoded.role != '2') {
      res.send({ message: 'Unauthorized user' })
    } else {
      await getRebates.get(req).then((data) => {
        res.send(data);
      }).catch((err) => {
        res.send(err);
      })
    }
  } catch (error) {
    res.status(400).send(err);
  }
})

router.post('/:rebate_id', async (req, res) => {
  try {
    if (req.decoded.role != '1') {
      res.send({ message: 'Unauthorized user' })
    } else {
      await addRebate.add(req).then((data) => {
        res.send(data);
      }).catch((err) => {
        res.send(err);
      })
    }
  } catch (error) {
    res.status(400).send(err);
  }
})

router.patch('/:rebate_id', async (req, res) => {
  try {
    if (req.decoded.role != '1') {
      res.send({ message: 'Unauthorized user' })
    } else {
      await updateRebate.update(req).then((data) => {
        res.send(data);
      }).catch((err) => {
        res.send(err);
      })
    }
  } catch (error) {
    res.status(400).send(err);
  }
})

router.delete('/:rebate_id', async (req, res) => {
  try {
    if (req.decoded.role != '1') {
      res.send({ message: 'Unauthorized user' })
    } else {
      await deleteRebate.delete(req).then((data) => {
        res.send(data);
      }).catch((err) => {
        res.send(err);
      })
    }
  } catch (error) {
    res.status(400).send(err);
  }
})

module.exports = router;