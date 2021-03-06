const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	// Creates a "founder" model that matches up with DB
	const Products = sequelize.define("products", {
	    // username of investor (a string)
	    userName: Sequelize.STRING,
	    // the founder's company name (a string)
	    companyName: Sequelize.STRING,
	    // founder's amount of money needed (int)
	    investmentNeeded: Sequelize.INTEGER,
	    // the percentage founder is willing to give up (a int)
	    percentGiving: Sequelize.INTEGER,
	    // the founder's product name (a string)
	    productTitle: Sequelize.STRING,
	    // the product summary (a string)
	    productSummary: Sequelize.STRING,
	    // the product solution to problem (a string)
	    problemSolution: Sequelize.STRING,
	    // the product's industry (a string)
	    industry: Sequelize.STRING,
	    // the product's competition (a string)
	    competition: Sequelize.STRING,
	    // the product's market size (a string)
	    marketSize: Sequelize.STRING,
	    // the product's market trends (a string)
	    marketTrends: Sequelize.STRING,
	    // the product's differentiators (a string)
	    differentiators: Sequelize.STRING,
	    // the product's gross sales (an int)
	    grossSales: Sequelize.INTEGER,
	    // the product's gross costs (an int)
	    grossCosts: Sequelize.INTEGER,
	    // the product's net profits (an int)
	    netProfits: Sequelize.INTEGER,
	    // the product's other investors (a boolean)
	    otherInvestors: Sequelize.BOOLEAN,
	    // the number of employees (an int)
	    employeeCount: Sequelize.STRING,
	    // the product's target market (a string)
	    targetMarket: Sequelize.STRING,
	    // the product sale price (an int)
	    salePrice: Sequelize.INTEGER,
	    // the product cost price (an int)
	    costPrice: Sequelize.INTEGER,
	    // the product's features  (a string)
	    features: Sequelize.STRING,
	    // the product's patent (a boolean)
		productPatent: Sequelize.BOOLEAN,
		// the investor's other information (a string)
		other: Sequelize.STRING
	  });
	return Products;
};





/*-------------------------------------------The below code is for guidance--------------------------------------------------*/
/*// Customer model

// The Customer has a "customer" attribute of type DataTypes.String

module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    customer: {
      type: DataTypes.STRING,
      // If a customer is to be created, they must have a name
      allowNull: false
    }
  });
  return Customer;
};*/
