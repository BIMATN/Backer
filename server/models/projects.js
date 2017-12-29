const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	// Creates a "founder" model that matches up with DB
	const Projects = sequelize.define("projects", {
	    // username of investor (a string)
	    username: Sequelize.STRING,
	    // founder's country location (a string)
	    country: Sequelize.STRING,
	    // the founder's company name (a string)
	    company_name: Sequelize.STRING,
	    // founder's amount of money needed (int)
	    investment_needed: Sequelize.INTEGER,
	    // the percentage founder is willing to give up (a int)
	    percent_giving: Sequelize.INTEGER,
	    // the founder's product (a string)
	    product: Sequelize.STRING,
	    // the product summary (a string)
	    product_summary: Sequelize.STRING,
	    // the product solution to problem (a string)
	    problem_solution: Sequelize.STRING,
	    // the product's industry (a string)
	    industry: Sequelize.STRING,
	    // the product's competition (a string)
	    competition: Sequelize.STRING,
	    // the product's market size (a string)
	    market_size: Sequelize.STRING,
	    // the product's market trends (a string)
	    market_trends: Sequelize.STRING,
	    // the product's differentiators (a string)
	    differentiators: Sequelize.STRING,
	    // the product's gross sales (an int)
	    gross_sales: Sequelize.INTEGER,
	    // the product's gross costs (an int)
	    gross_costs: Sequelize.INTEGER,
	    // the product's net profits (an int)
	    net_profits: Sequelize.INTEGER,
	    // the product's other investors (a string)
	    other_investors: Sequelize.STRING,
	    // the number of employees (an int)
	    number_of_employees: Sequelize.INTEGER,
	    // the product's target market (a string)
	    target_market: Sequelize.STRING,
	    // the product sale price (an int)
	    sale_price: Sequelize.INTEGER,
	    // the product cost price (an int)
	    cost_price: Sequelize.INTEGER,
	    // the product's features  (a string)
	    features: Sequelize.STRING,
	    // the product's patent (a boolean)
	    product_patent: Sequelize.BOOLEAN,
	  });
	return Projects;
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
