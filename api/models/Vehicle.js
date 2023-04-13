module.exports = {
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      unique: true,
      columnName: 'id',
    },
    make: {
      type: 'string',
      required: true
    },
    model: {
      type: 'string',
      required: true
    },
    year: {
      type: 'number',
      required: true
    },
    user: {
      model: 'User'
    }
  }
};
