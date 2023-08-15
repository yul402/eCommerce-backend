const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tagAllData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: 'joined_tag_product' }],
    });
    res.status(200).json(tagAllData);
  } catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagIdData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'joined_tag_product'}],
    });

    if (!tagIdData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(tagIdData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async(req, res) => {
  // create a new tag
  try {
    const tagNew = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tagNew);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagUpdate = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where:{
          id:req.params.id,
        }
      }
    )
    res.status(200).json({ tagUpdated : req.params.id});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try {
    const tagDelete = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagDelete) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json({ message: 'Successfully delete tag with that id!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
