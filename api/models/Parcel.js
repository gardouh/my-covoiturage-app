module.exports = {
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      unique: true,
      columnName: 'id',
    },
    description: {
      type: 'string',
      required: true
    },
    pickupAddress: {
      type: 'string',
      required: true
    },
    deliveryAddress: {
      type: 'string',
      required: true
    },
    status: {
      type: 'string',
      isIn: ['pending', 'in_progress', 'delivered'],
      defaultsTo: 'pending'
    },
    sender: {
      model: 'User'
    },
    deliveryPerson: {
      model: 'User'
    }
  }
};
