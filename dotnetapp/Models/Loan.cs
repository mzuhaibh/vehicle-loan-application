using System;
using System.ComponentModel.DataAnnotations;

// Model - Represents the data and the business logic

public class Loan
{
	// Property - To access private variables

	[Key]
	public int LoanId { get; set; }
	public string LoanType { get; set; }
	public string Description { get; set; }
	public decimal InterestRate { get; set; }
	public decimal MaximumAmount { get; set; }
}
