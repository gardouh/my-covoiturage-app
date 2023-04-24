module.exports = {
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      unique: true,
      columnName: 'id',
    },
    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      isEmail: true,
      required: true,
      unique: true
    },
    hashedPassword: {
      type: 'string',
      required: true
    },
    role: {
      type: 'string',
      isIn: ['carrier', 'client'],
      required: true
    },
    sentParcels: {
      collection: 'Parcel',
      via: 'senders'
    },
    deliveredParcels: {
      collection: 'Parcel',
      via: 'deliveryPerson'
    },
    vehicle: {
      model: 'Vehicle'
    }
  }
};
