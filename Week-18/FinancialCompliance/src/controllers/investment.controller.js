const { User } = require('../models/Auth.model');
const { FixedDeposit, CorporateBond } = require('../models/Investment.model');


const getInvestmentDetails = async (req, res) => {
  try {
    const results = await User.aggregate([
      {
        $lookup: {
          from: 'auths',
          localField: 'user_detail',
          foreignField: '_id',
          as: 'user_detail',
        },
      },
      {
        $unwind: '$user_detail',
      },
      {
        $lookup: {
          from: 'fixeddeposits',
          localField: 'user_detail._id',
          foreignField: 'user',
          as: 'fixed_deposits',
        },
      },
      {
        $lookup: {
          from: 'corporatebonds',
          localField: 'user_detail._id',
          foreignField: 'user',
          as: 'corporate_bonds',
        },
      },
    ]).exec();

    res.status(200).json(results);
  } catch (error) {
    console.error('Error retrieving user and investment data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
};

module.exports = {
    getInvestmentDetails,
};
