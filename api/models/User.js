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
    sentParcels: {
      collection: 'Parcel',
      via: 'sender'
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
